import styled from "styled-components";
import { useState } from "react";
import FormRecords from "../../components/FormRecords";
import CreateRecord from "../../data/CreateRecord";
import RecordsContext from "../../contexts/RecordsContext";
import { ThreeDots } from "react-loader-spinner";

export default function NewExit() {
  const [swap, setSwap] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    value: "",
    description: "",
  });

  return (
    <RecordsContext.Provider
      value={{ form, setForm, swap, setSwap, loading, setLoading }}
    >
      <DivNewExit>
        {swap ? <CreateRecord /> : null}

        <Title>Nova saída</Title>

        <FormRecords />

        <Button onClick={() => setSwap(true)} disabled={swap}>
          {swap ? (
            <ThreeDots color="#ffffff" height={40} width={80} />
          ) : (
            "Salvar saída"
          )}
        </Button>
      </DivNewExit>
    </RecordsContext.Provider>
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

const DivNewExit = styled.div`
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
