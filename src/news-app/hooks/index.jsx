import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../component/navbar';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SearchForm from '../component/search';

const Index = () => {
  const [news, setNews] = useState([]);
  const [term, setTerm] = useState('Apple&from=2022-02-09&sortBy=popularity');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=${process.env.REACT_APP_API}`);
        const news = await res.json();
        console.log(news.articles);
        setNews(news.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [term]);

  return (
    <>
      <div>
        <Navbar1 />
        <SearchForm searchText={(text) => setTerm(text)} />
        {isLoading ? (
          <h1 className="text-center mt-5 font-bold text-4xl">Loading...</h1>
        ) : (
          <Row className="mt-3 ms-3">
            {news.map((item, index) => {
              return (
                <Col className="col-md-4 my-3">
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item.publishedAt}</Card.Subtitle>
                      <Card.Text>{item.description}</Card.Text>
                      <Button href={item.url} target="_blank" variant="danger">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
};

export default Index;
