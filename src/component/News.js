import React from 'react'
import axios from "axios"
import "./News.css"
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
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="cards"  style={{width:"20rem",height:"20rem"}} id='card_news'>
                                            <img style={{width:"20rem"}} src={val.urlToImage} alt={"image"}/>
                                            <div className="card-body">
                                                <h5 className='card-title'>{val.title}</h5>
                                                {/* <p className='card-text'> {val.description}</p> */}
                                                <a href={val.url} className='btn btn-primary'>View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </>
    )
}

export default News