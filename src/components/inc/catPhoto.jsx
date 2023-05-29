import { Row } from "react-bootstrap";
import { Photo } from "./photo";


export const CatPhoto = ({ razdel }) => {
    return (
        <>
        {
            razdel == '#svadba' ? (
                <>
                    <h2>Свадебная фотосъемка</h2>
                    <Row style={{ marginTop: '1.2rem' }}>
                    {[
                        {
                        img: 'podgotovka-k-fotosessii3.jpg',
                        title: '4 000 RUB за час',
                        text: 'фотограф Евгений Бабич'
                        }
                        ,
                        {
                        img: 'c71de6d.jpg',
                        title: '3 000 RUB за час',
                        text: 'Андрей Виденеев'
                        },
                        {
                        img: '1581708168_16-p-svadebnie-fotosemki-29.jpg',
                        title: '2 500 RUB за час',
                        text: 'Евгения Бурдина (Ульяновск)'
                        },
                        {
                        img: '12273142_5ir47ws6wps0swkw0s.jpg',
                        title: '3 500 RUB за час',
                        text: 'Иван Михельсон'
                        }
                    ].map((image) => (
                    <Photo item={image} />
                    ))}
                    </Row>
                </>
            ) 
            : 
            (
                <>
                <h2>Семейная фотосъемка</h2>
                    <Row style={{ marginTop: '1.2rem' }}>
                        {[
                        {
                        img: 'f1.jpg',
                        title: 'Съемка в студии',
                        text: 'от 1000р за час, аренда студии оплачивается отдельно'
                        }
                        ,
                        {
                        img: 'f2.jpg',
                        title: 'Съемка на природе',
                        text: 'от 1200р за час, выезд фотографа до места съемок входит в стоимость'
                        }
                        ].map((image) => (
                        <Photo item={image} />
                        ))}
                    </Row>
                </>
            )
        }
        </>
    )
};