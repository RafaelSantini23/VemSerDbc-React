import styles from './Items.module.css'
function Item({name, url}) {
  return (
    <li><a href={url}> {name} </a></li>
  )
}

export default Item;