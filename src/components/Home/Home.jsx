import Nav from '../Nav/Nav.jsx';
import View from '../View/View.jsx';
import Footer from '../Footer/Footer.jsx';
import style from './Home.module.css'
const Home = ()=>{
    return(<div className={style.home}>
        <Nav/>
        <View/>
        <Footer/>
    </div>)
}
export default Home;