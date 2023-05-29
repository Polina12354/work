import { Accordion } from "react-bootstrap"

export const About =()=>{
    return(
        <section class="home">
            <h1>О нашей компании</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Мы сообщество профессиональных фотографов Ульяновска</Accordion.Header>
                    <Accordion.Body>
                    В нашем штате более 10 профессиональных фотографов. Каждый является мастером в своей области.
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Контакты</Accordion.Header>
                    <Accordion.Body>
                    Звоните круглосуточно +7 (937) 937-37-37
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
       
    )
}