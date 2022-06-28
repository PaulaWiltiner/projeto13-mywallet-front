import styled from "styled-components";
import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";

export default function FormRecords() {
  const { form, setForm, swap } = useContext(RecordsContext);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <DivForm>
      <DivInput>
        <Input
          type="number"
          placeholder="Valor"
          name="value"
          onChange={handleForm}
          value={form.value}
          disabled={swap}
          autoComplete="off"
        />
      </DivInput>
      <DivInput>
        <Input
          placeholder="Descrição"
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
