import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import "./styles/global.css";
import "./styles/Header.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";

function App() {
  const [transactionList, setTrasactionList] = useState([]);

  function addTransactionToTransactionList(formData) {
    const newTrasaction = {
      ...formData,
      id: uuidv4(),
    };

    setTrasactionList([...transactionList, newTrasaction]);
  }

  function removeFromTransactionList(CardId) {
    const newTrasactionList = transactionList.filter(
      (card) => card.id !== CardId
    );

    setTrasactionList(newTrasactionList);
  }

  return (
    <main>
      <Header />
      <div className="App">
        <Form
          addTransactionToTransactionList={addTransactionToTransactionList}
        ></Form>
        <div className="cardsList">
          <p>Resumo financeiro</p>

          <List 
            transactionList={transactionList}
            removeFromTransactionList={removeFromTransactionList}
          ></List>
        </div>
      </div>
      <TotalMoney transactionList={transactionList} />
    </main>
  );
}

export default App;
