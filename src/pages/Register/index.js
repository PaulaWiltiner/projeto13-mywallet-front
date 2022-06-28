import styled from "styled-components";
import { useState } from "react";
import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";
import SignUp from "../../data/SignUp";
import RegisterContext from "../../contexts/RegisterContext";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  const [swap, setSwap] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    samepassword: "",
  });

  return (
    <RegisterContext.Provider
      value={{ form, setForm, swap, setSwap, loading, setLoading }}
    >
      <DivRegister>
        {swap ? <SignUp /> : null}

        <Title>My Wallet</Title>

        <FormRegister />

        <Button onClick={() => setSwap(true)} disabled={swap}>
          {swap ? <Loader /> : "Cadastrar"}
        </Button>

        <MyLink to="/">
          <TextLogin>Já tem uma conta? Entre agora!</TextLogin>
        </MyLink>
      </DivRegister>
    </RegisterContext.Provider>
  );
}

const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
`;

const MyLink = styled(Link)`
  text-decoration: none;
`;

const Loader = styled(ThreeDots)`
  text-decoration: none;
  color: #ffffff;
  height: 40px;
  width: 80px;
`;

const DivRegister = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextLogin = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: #ffffff;
`;
const Button = styled.button`
  width: 350px;
  height: 46px;
  margin-bottom: 60px;

  color: #ffffff;
  font-size: 21px;
  font-weight: 400;
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
