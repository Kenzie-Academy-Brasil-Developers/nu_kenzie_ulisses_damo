import { List } from "./components/List";
import {Header} from "./components/Header"
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import "./styles/global.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import styles from "./styles/pages/home.module.css";

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
        <div className={styles.container}>
          <div className={styles.flexBox}>
            <div className={styles.left}>
              <Form
                addTransactionToTransactionList={
                  addTransactionToTransactionList
                }
              ></Form>
              <TotalMoney transactionList={transactionList} />
            </div>
            <div className={styles.right}>
              <p>Resumo financeiro</p>

              <List
                transactionList={transactionList}
                removeFromTransactionList={removeFromTransactionList}
              ></List>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
