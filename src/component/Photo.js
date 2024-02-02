import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Container, Card, Button,Spinner } from "react-bootstrap";

function Photo() {
    let [data, setdata] = useState([]);
    let [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
                setloading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setloading(false);
            })
    }, [])
    return (
        <>
            {loading ? (
                <>
                    <div className='d-flex justify-content-center mt-100'>
                        <Spinner animation="border" variant="dark" />
                    </div>
                </>
            ) : (
                <div>
                    <Header></Header>
                    <Container>
                        <div className="main_card">
                            {data.map((ele, ind) => {
                                return (
                                    <Card className="card">
                                        <Card.Img variant="top" src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary"><a href={ele.thumbnailUrl} target="_blank"> Go somewhere</a></Button>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </div>
                    </Container>
                </div>
            )}

        </>
    )
}
export default Photo;
