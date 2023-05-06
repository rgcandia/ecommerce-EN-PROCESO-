import style from './Nav.module.css'
import Buttons from '../Buttons/Buttons';
import {useDispatch} from 'react-redux'
import {setSelected} from '../../redux/slice.js'
const Nav = ()=>{
  const dispatch=useDispatch()
    return(<div className={style.nav}>
      <div 
    onClick={()=>{dispatch(setSelected(null))}}  
    className={style.title}> 
    <h1>
      Salud y Bienestar &reg; 
   </h1>
      </div>
      <Buttons/>
    </div>)
}
export default Nav;