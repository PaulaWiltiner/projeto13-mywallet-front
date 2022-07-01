import styled from "styled-components";
import DashboardRecords from "../../components/DashboardRecords";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import logout from "../../data/logout";

export default function Records() {
  const { userName, token } = useContext(TokenContext);
  const navigate = useNavigate();

  return (
    <>
      <DivRecords>
        <Title>
          <h1>Olá, {userName}</h1>{" "}
          <ion-icon
            onClick={() => {
              navigate("/");
              localStorage.clear();
              logout(token);
            }}
            name="log-out-outline"
          ></ion-icon>{" "}
        </Title>

        <DashboardRecords />
        <DivButtons>
          <Button onClick={() => navigate("/newentry")}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h2>Nova entrada</h2>
          </Button>
          <Button onClick={() => navigate("/newexit")}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h2>Nova saída</h2>
          </Button>
        </DivButtons>
      </DivRecords>
    </>
  );
}

const Title = styled.div`
  font-size: 28px;
  color: #ffffff;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 34px;
    color: #ffffff;
  }
`;

const DivRecords = styled.div`
  width: 350px;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 164px;
  height: 114px;
  padding: 12px;

  background: #a328d6;
  display: flex;
  font-weight: 700;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  border: 1px solid #a328d6;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  ion-icon {
    font-size: 28px;
    color: #ffffff;
  }

  h2 {
    width: 20px;
    color: #ffffff;
    font-size: 18px;
  }

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  }
`;
