import styled from "styled-components";
import { useState } from "react";
import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";
import signUp from "../../data/signUp.js";
import RegisterContext from "../../contexts/RegisterContext";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [swap, setSwap] = useState(false);
  const [alert, setAlert] = useState(true);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    samePassword: "",
  });

  async function userRegister() {
    setSwap(true);
    const resp = await signUp(form);
    if (resp) {
      setForm({
        name: "",
        email: "",
        password: "",
        samePassword: "",
      });
      setAlert(true);
      setTimeout(() => {
        setSwap(false);
        navigate("/");
      }, 500);
    } else {
      setTimeout(() => {
        setSwap(false);
        setAlert(false);
      }, 500);
    }
  }

  return (
    <RegisterContext.Provider
      value={{ form, setForm, swap, setSwap, loading, setLoading }}
    >
      <DivRegister>
        <Title>My Wallet</Title>

        <FormRegister />

        <Button onClick={userRegister} disabled={swap}>
          {swap ? (
            <ThreeDots color="#ffffff" height={40} width={80} />
          ) : (
            "Cadastrar"
          )}
        </Button>
        {alert ? null : (
          <TextAlert>
            Por favor, verifique as suas informações e tente novamente.
          </TextAlert>
        )}

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
  margin-top: 50px;
`;

const DivRegister = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextAlert = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const TextLogin = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
  color: #ffffff;
`;
const Button = styled.button`
  width: 350px;
  height: 46px;

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
