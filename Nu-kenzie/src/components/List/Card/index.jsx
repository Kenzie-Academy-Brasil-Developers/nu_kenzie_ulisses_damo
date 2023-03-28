import styles from "./styles.module.css"

export function CreateCard({ transaction, removeFromTransactionList }) {

  return (
    <li className={styles.transactionCard}>
      <div>
      <h3>{transaction.description}</h3>
      <p>{transaction.type}</p>
      </div>
      <div>

      <p>R$ {transaction.money}</p>
      <button onClick={() => removeFromTransactionList(transaction.id)}>
        Excluir
      </button>
      </div>
    </li>
  );
}
