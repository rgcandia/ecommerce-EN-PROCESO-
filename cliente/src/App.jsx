import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { setItems } from './redux/slice';
import {iniciarEstado} from './service/index.js'
import Home from './components/Home/Home.jsx'
import style from './App.module.css'

 const App = ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
  iniciarEstado(dispatch,setItems)
  },[])
  return (
    <div className={style.app}>
     
    
      
      <Home/>
     
    </div>
  )
 }


export default App
