import styled from "styled-components";
import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";

function Item(props) {
  return (
    <ItemText key={props.key}>
      <DivItem>
        <h2>{props.date}</h2>
        <p>{props.discription}</p>
      </DivItem>
      <ItemValue color={props.color}>{props.value}</ItemValue>
    </ItemText>
  );
}

const listItems = [
  {
    date: "30/11",
    discription: "Almoço mãe",
    value: "500,00",
    type: "exit",
  },
  {
    date: "30/11",
    discription: "Almoço mãe",
    value: "500,00",
    type: "entry",
  },
];

export default function DashboardRecords() {
  return (
    <DivDashboard>
      <ItemList>
        {listItems.map((item, index) => {
          let color = "#03ac00";
          if (item.type === "exit") {
            color = "#c70000";
          }
          return (
            <Item
              key={index}
              color={color}
              date={item.date}
              discription={item.discription}
              value={item.value}
            ></Item>
          );
        })}
      </ItemList>
      <Balance>
        <h2>SALDO</h2>
        <p>2849,96</p>
      </Balance>
    </DivDashboard>
  );
}

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
  background-color: #ffffff;
  height: 400px;
  width: 100%;
  overflow-y: scroll;
  text-align: justify;
  padding: 14px;
  border-radius: 5px;
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 14px;
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
    color: #03ac00;
    margin-left: 10px;
    word-break: break-word;
  }
`;

const ItemText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 10px;
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
  position: relative;
`;
