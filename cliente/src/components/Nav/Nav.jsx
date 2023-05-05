import style from './Nav.module.css'
import Buttons from '../Buttons/Buttons';
const Nav = ()=>{
    return(<div className={style.nav}>
      <h1>Salud y Bienestar &reg; </h1>
      <Buttons/>
    </div>)
}
export default Nav;