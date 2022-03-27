import React from 'react'
import styles from './Input.module.css'

function Input({ text, typeinpt, value, placeholder, onChange }) {
    return (
        <div>
            {
                typeinpt === 'submit' ? <input type="submit" value={'Cadastrar'} /> :
                    <label className={styles.labelForm}>
                        {text}
                        <input typeinpt={typeinpt} value={value} placeholder={placeholder} onChange={onChange} />
                    </label>
            }
        </div>
    )
}

export default Input;
