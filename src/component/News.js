import React from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import "./News.css"
import Card from 'react-bootstrap/Card';
const newsurl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=efc08fd6836d48829c673d6f95c91171"

function News() {
    const [data, setdata] = React.useState();
    React.useEffect(() => {
        axios.get(newsurl).then((response) => {
            setdata(response.data.articles);
            console.log(response.data)
        });
    }, []);
    if (!data) return null;

    return (
        <>
            <div className='info'>
                {
                    data.map((val) => {
                        return (
                            <Card id="card_news">
                                <Card.Img variant="top" src={val.urlToImage} />
                                <Card.Body className='cards'>
                                    <h6 id='card_title'>{val.title}</h6>
                                    <Card.Text id='card_des'>
                                        {val.description}
                                    </Card.Text>
                                    <Button className='btn' variant="btn btn-warning" href={val.url}>View more</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }


            </div>

        </>
    )
}

export default News