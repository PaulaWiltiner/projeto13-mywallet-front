import styled from "styled-components";
import { useState } from "react";
import FormRecords from "../../components/FormRecords";
import createRecord from "../../data/createRecord.js";
import TypeRecordContext from "../../contexts/TypeRecordContext";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function NewEntry() {
  const [swap, setSwap] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(true);
  const [form, setForm] = useState({
    value: "",
    description: "",
  });
  const idRecord = "";

  async function createNewEntry() {
    setSwap(true);
    const resp = await createRecord(token, "entry", form);
    if (resp.status) {
      setForm({
        value: "",
        description: "",
      });
      setAlert(true);
      setTimeout(() => {
        setSwap(false);
        navigate("/records");
      }, 500);
    } else {
      setTimeout(() => {
        setSwap(false);
        setAlert(false);
      }, 500);
    }
  }

  const typeRecordCreated = "new";

  return (
    <TypeRecordContext.Provider
      value={{
        form,
        setForm,
        swap,
        setSwap,
        loading,
        setLoading,
        typeRecordCreated,
        idRecord,
      }}
    >
      <DivNewEntry>
        <Title>Nova entrada</Title>

        <FormRecords />

        <Button onClick={createNewEntry} disabled={swap}>
          {swap ? (
            <ThreeDots color="#ffffff" height={40} width={80} />
          ) : (
            "Salvar entrada"
          )}
        </Button>
        {alert ? null : (
          <TextAlert>
            Por favor, verifique as informações e tente novamente.
          </TextAlert>
        )}
      </DivNewEntry>
    </TypeRecordContext.Provider>
  );
}

const Title = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: left;
`;
const TextAlert = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const DivNewEntry = styled.div`
  width: 350px;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  margin-bottom: 60px;

  color: #ffffff;
  font-size: 21px;
  background: #a328d6;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border: 1px solid #a328d6;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  }
`;
