import styled from "styled-components";
import { useState } from "react";
import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import SignIn from "../../data/SignIn";
import LoginContext from "../../contexts/LoginContext";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const [swap, setSwap] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <LoginContext.Provider
      value={{ form, setForm, swap, setSwap, loading, setLoading }}
    >
      <DivLogin>
        {swap ? <SignIn /> : null}

        <Title>My Wallet</Title>

        <FormLogin />

        <Button onClick={() => setSwap(true)} disabled={swap}>
          {swap ? (
            <ThreeDots color="#ffffff" height={40} width={80} />
          ) : (
            "Entrar"
          )}
        </Button>

        <MyLink to="/register">
          <TextRegister>Primeira vez? Cadastre-se!</TextRegister>
        </MyLink>
      </DivLogin>
    </LoginContext.Provider>
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

const DivLogin = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextRegister = styled.h2`
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
