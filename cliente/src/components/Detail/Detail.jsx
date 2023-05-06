import style  from './Detail.module.css'
import {useSelector} from 'react-redux'

const Detail = ()=>{
    const {selected} = useSelector(state=>state.dataBase)
    return(<div className={style.detail}>
        <img src={selected.image}/>
        <h1>{selected.name}</h1>
        <h3>${selected.precio}</h3>
        <p>{selected.description}</p>
    </div>)
}
export default Detail;