import style from './Buttons.module.css'
import carrito from '../../img/carro-compra.png'
const Buttons = ()=>{
    return(<div className={style.buttons}>
        <img src={carrito}></img>
    </div>)
}
export default Buttons;