import styles from "./styles.module.css"

export function TotalMoney({ transactionList }) {
  function identifyValue() {
    const mapList = transactionList.map((element) => {
      if (element.type == "Entrada") {
        return element.money * 1;
      } else {
        return element.money * -1;
      }
    });

    const totalValue = mapList.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    return totalValue;
  }

  return (
    <section className={styles.currentTotal}>
      <div>
        <h2>Valor total:</h2>
      <p>O valor se refere ao saldo</p>
      </div>
        <span>R${identifyValue()}</span>
    </section>
  );
}
