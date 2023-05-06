import Nav from '../Nav/Nav.jsx';
import View from '../View/View.jsx';
import Detail from '../Detail/Detail.jsx'
import Footer from '../Footer/Footer.jsx';
import style from './Home.module.css'
import { useSelector } from 'react-redux';
const Home = ()=>{
    const {selected} = useSelector(state=>state.dataBase)
    return(<div className={style.home}>
        <Nav/>
        {selected?<Detail/>:<View/>}
        <Footer/>
    </div>)
}
export default Home;