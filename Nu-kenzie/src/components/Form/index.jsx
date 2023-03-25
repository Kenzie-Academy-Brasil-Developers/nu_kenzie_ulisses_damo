import { useState } from "react";
import styles from "./style.module.css"

export function Form({ addTransactionToTransactionList }) {
  const [formData, setFormData] = useState({
    description: "",
    money: "",
    type: "",
  });

  const submit = (event) => {
    event.preventDefault();

    addTransactionToTransactionList(formData);

    /* reset */
    setFormData({
      description: "",
      money: "",
      type: "",
    });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <h3>Descrição</h3>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <p>Ex:Compra de roupas</p>
      <h3>Valor (R$)</h3>
      <input
        type="number"
        placeholder="1"
        value={formData.money}
        onChange={(e) => setFormData({ ...formData, money: e.target.value })}
      />
      <h3>tipo de valor</h3>
      <select
        name=""
        id=""
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="">Selecione o tipo de valor</option>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
      <button type="submit" className={styles.SendCard}>Inserir valor</button>
    </form>
  );
}
