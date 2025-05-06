import React from 'react'
import styles from './Modal.module.css'

const Modal = () => {
  return (
    <div className={styles.container}>
      <form action="" method="post">
        <p>Formulário Transações</p>

        <label>Nome da Transação</label>
        <input type="text" placeholder="Nome" />

        <label>Data</label>
        <input type="date" placeholder="dd/mm/yy" />

        <label>Categoria</label>
        <select>
          <option value="housing">Casa</option>
          <option value="food">Alimentação</option>
          <option value="transportation">Transporte</option>
          <option value="debt">Divídas e Financiamentos</option>
          <option value="personal">Pessoais</option>
          <option value="family">Família</option>
          <option value="health">Saúde</option>
          <option value="education">Educação</option>
          <option value="work">Trabalho/Negócio</option>
          <option value="others">Outros</option>
        </select>

        <label>Valor</label>
        <input type="number" />

        <button type="button">Fechar</button>
        <button type="submit">Concluir</button>
      </form>
    </div>
  )
}

export default Modal
