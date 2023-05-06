import {useSelector}  from 'react-redux'
import Card from '../Card/Card'
import style from './View.module.css'
const View = ()=>{
    const {dataBase} = useSelector(state=>state)
    return(<div className={style.view}>
       
        {dataBase.items&&dataBase.items.map(e=>{
            return <Card key={e.id} elemento={e}/>
        })}
    </div>)
}
export default View;