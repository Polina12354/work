
import './Card.css'
import { useLocation } from 'react-router-dom'
import { CatPhoto } from './inc/catPhoto'

  export const Card = ()=> {
    const { hash } = useLocation()

    return (
      <section class="home">
        <h1>Фотогалерея</h1>
        {hash !== '' ? (
          <>
            {hash === '#svadba' && <CatPhoto razdel={hash} />}
            {hash === '#semya' && <CatPhoto razdel={hash} />}
          </>
        ) : (
          <>
            <CatPhoto razdel={'#svadba'} />
            <CatPhoto razdel={'#semya'} />
          </>
        )

        }
        
      </section>
    )
        
}
