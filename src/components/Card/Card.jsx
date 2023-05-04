import style from './Card.module.css'
const Card = ({elemento}) =>{

    return(<div className={style.Card}>
        <img alt={elemento.name} src={elemento.image}/>
        <p>{elemento.name}</p>
    </div>)
}
export default Card;