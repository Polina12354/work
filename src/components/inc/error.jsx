import { Alert } from "react-bootstrap"

export const Error = () => {
    return (
        <Alert variant="danger">
            <h1>Ошибка 404</h1>
            <div>Извините, страница не найдена</div>
            <Alert.Link href="/">Перейти на главную!</Alert.Link>
        </Alert>
    )
}