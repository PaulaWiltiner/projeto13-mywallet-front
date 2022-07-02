import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import getRecords from "../../data/getRecords.js";
import deleteRecord from "../../data/deleteRecord.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Item(props) {
  const navigate = useNavigate();
  return (
    <ItemText>
      <DivItem>
        <h2>{props.date}</h2>
        <p onClick={() => navigate(`/edit${props.type}/${props.id}`)}>
          {props.description}
        </p>
      </DivItem>
      <ItemValue color={props.color}>{props.value}</ItemValue>
      <ion-icon
        onClick={() => props.dell(props.id)}
        name="close-outline"
      ></ion-icon>
    </ItemText>
  );
}

export default function DashboardRecords() {
  const { token } = useContext(TokenContext);
  const [listRecords, setListRecords] = useState([]);
  const [balance, setBalance] = useState(0);
  const [pass, setPass] = useState(false);
  const [colorBalance, setColorBalance] = useState("#03ac00");

  async function getItems() {
    const { response } = await getRecords(token);
    setListRecords(response.data);
    setPass(false);
    if (response.data === 0) {
      setPass(true);
    }
  }

  async function dellItems(id) {
    const { response } = await deleteRecord(token, id);
    setListRecords(response.data);
    setPass(false);
    if (response.data === 0) {
      setPass(true);
    }
  }

  useEffect(() => {
    const listSum = listRecords.map((item) => {
      if (item.type === "exit") {
        return Number(item.value.replace(",", ".")) * -1;
      }
      return Number(item.value.replace(",", "."));
    });
    const calculation = listSum.reduce((t, n) => n + t, 0);
    if (calculation < 0) {
      setColorBalance("#c70000");
    }
    setBalance(calculation);
  }, [listRecords]);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <DivDashboard>
      {pass ? (
        <TextNoRecords>Não há registros de entrada ou saída</TextNoRecords>
      ) : (
        <div>
          <ItemList>
            {listRecords.map((item, index) => {
              let color = "#03ac00";
              if (item.type === "exit") {
                color = "#c70000";
              }
              return (
                <Item
                  key={index}
                  id={item._id}
                  type={item.type}
                  color={color}
                  date={item.date}
                  description={item.description}
                  value={item.value}
                  dell={dellItems}
                ></Item>
              );
            })}
          </ItemList>
          <Balance color={colorBalance}>
            <h2>SALDO</h2>
            <p>{balance}</p>
          </Balance>
        </div>
      )}
    </DivDashboard>
  );
}

const TextNoRecords = styled.h2`
  width: 180px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #868686;
`;

const DivItem = styled.div`
  display: flex;
  align-items: start;
  width: 240px;

  h2 {
    font-size: 16px;
    color: #c6c6c6;
  }

  p {
    font-size: 16px;
    color: #000000;
    margin-left: 10px;
    word-break: break-all;
  }
`;

const ItemList = styled.div`
  margin-bottom: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  height: 400px;
  width: 345px;
  overflow-y: scroll;
  text-align: justify;
  padding: 16px;
  border-radius: 5px;
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 18px;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  background-color: #ffffff;
  border-radius: 5px;

  h2 {
    font-size: 16px;
    color: #000000;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.color};
    margin-left: 10px;
    word-break: break-word;
  }
`;

const ItemText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  ion-icon {
    font-size: 18px;
    margin-left: 10px;
    color: #c6c6c6;
  }
`;

const ItemValue = styled.h2`
  font-size: 18px;
  color: ${(props) => props.color};
`;

const DivDashboard = styled.div`
  width: 100%;
  height: 450px;
  margin: 30px 0px 15px 0px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
