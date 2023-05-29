import './Card.css'
import App from '../App'
import { Link } from 'react-router-dom'



  export const Projects = ()=> {
    return (
      <section class="home">
        <h1>Рейтинг игроков Ульяновской области по настольному теннису</h1>
        <p>Актуальный рейтинг предоставлен через API сайта <Link to="https://pingpong73.ru">pingpong73.ru</Link></p>
        <App />
      </section>
    )
        
}
