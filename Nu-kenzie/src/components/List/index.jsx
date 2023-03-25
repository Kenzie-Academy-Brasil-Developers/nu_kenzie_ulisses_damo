import { CreateCard } from "./Card";

export function List({transactionList, removeFromTransactionList}) {
  return (
    <>
      {transactionList.length > 0 ? (
        <ul >
          {transactionList.map((objectList) => {
            return (
              <CreateCard
                key= {objectList.id}
                transaction={objectList}
                removeFromTransactionList={removeFromTransactionList}
              />
            );
          })}
        </ul>
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </>
  );
}
