import React from 'react'
import styles from './InputForm.module.css'

function InputForm({ text, typeInpt, placeholder, onChange }) {

  return (
    <>
      {typeInpt === 'submit' ? <div className={styles.containerForm}>
        <label>
          {text}
          <input type="submit" value="Enviar" />
        </label> </div>
        
         : 

         <div className={styles.containerForm}> <label>
          {text}
          <input type={typeInpt} placeholder={placeholder} onChange={onChange} />
        </label> </div>}
    </>

  )
}

export default InputForm;
