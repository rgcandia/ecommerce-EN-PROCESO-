import style from './Redes.module.css'
import facefook from  '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import whatsapp from '../../img/whatsapp.png'

const Redes = ()=>{
    return <div className={style.redes}>
   <img src={facefook}/>
   <img src={instagram}/>
   <img src={whatsapp}/>
    </div>
}
export default Redes;