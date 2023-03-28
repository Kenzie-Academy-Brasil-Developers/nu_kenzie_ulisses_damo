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
      <label>Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <p className="paragraph">Ex:Compra de roupas</p>
      <label>Valor (R$)</label>
      <input
        type="number"
        placeholder="1"
        value={formData.money}
        onChange={(e) => setFormData({ ...formData, money: e.target.value })}
      />
      <label>Tipo de valor</label>
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
