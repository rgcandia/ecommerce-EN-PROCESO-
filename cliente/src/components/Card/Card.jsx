import style from './Card.module.css'
import {useDispatch} from 'react-redux'
import {setSelected} from '../../redux/slice.js'
const Card = ({elemento}) =>{
const dispatch = useDispatch();
    return(<div className={style.Card} onClick={()=>{dispatch(setSelected(elemento))}}>
        <img alt={elemento.name} src={elemento.image}/>
        <p>{elemento.name}</p>
        
    </div>)
}
export default Card;