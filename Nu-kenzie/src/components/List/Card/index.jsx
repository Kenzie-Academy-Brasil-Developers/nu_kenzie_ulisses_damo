
export function CreateCard({ transaction, removeFromTransactionList }) {

  return (
    <li >
      <h3>{transaction.description}</h3>
      <p>{transaction.type}</p>
      <p>{transaction.money}</p>
      <button onClick={() => removeFromTransactionList(transaction.id)}>
        Excluir
      </button>
    </li>
  );
}
