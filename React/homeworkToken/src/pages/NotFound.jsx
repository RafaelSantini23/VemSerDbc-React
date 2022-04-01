import React from 'react'
import notFoundError from '../imgs/errorPage.gif';
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <img src={notFoundError} alt="Imagem de error 404" />
    </div>
  )
}
