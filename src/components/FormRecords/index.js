import styled from "styled-components";
import { useContext } from "react";
import TypeRecordContext from "../../contexts/TypeRecordContext";
import oneRecord from "../../data/oneRecord.js";
import TokenContext from "../../contexts/TokenContext";
import { useState, useEffect } from "react";

export default function FormRecords() {
  const { form, setForm, swap, typeRecordCreated, idRecord } =
    useContext(TypeRecordContext);
  const { token } = useContext(TokenContext);
  const [placeholder, setPlaceholder] = useState({
    value: "Valor",
    description: "Descrição",
  });
  const [pass, setPass] = useState(true);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (typeRecordCreated === "edit" && pass) {
      setForm({
        value: placeholder.value,
        description: placeholder.description,
      });
      setPass(false);
    }
  }

  async function getEdit() {
    const { response: resp } = await oneRecord(token, idRecord);

    if (resp.status) {
      setPlaceholder({
        value: resp.data.value,
        description: resp.data.description,
      });
    }
  }
  useEffect(() => {
    if (typeRecordCreated === "edit") {
      getEdit();
    }
  }, []);

  return (
    <DivForm>
      <DivInput>
        <Input
          type="text"
          placeholder={placeholder.value}
          name="value"
          onChange={handleForm}
          value={form.value}
          disabled={swap}
          autoComplete="off"
        />
      </DivInput>
      <DivInput>
        <Input
          placeholder={placeholder.description}
          type="text"
          name="description"
          onChange={handleForm}
          value={form.description}
          disabled={swap}
          autoComplete="off"
        />
      </DivInput>
    </DivForm>
  );
}

const DivForm = styled.div`
  margin: 36px 0px 16px 0px;
  width: 100%;
`;

const DivInput = styled.div`
  margin-top: 10px;
  font-weight: 400;
  width: 100%;
`;

const Input = styled.input`
  color: #666666;
  font-size: 18px;
  width: 100%;
  height: 58px;
  padding-left: 15px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::-webkit-input-placeholder {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
  }

  :disabled {
    color: #afafaf;
    background-color: #f2f2f2;
    font-size: 20px;
    font-weight: 400;
  }
`;
