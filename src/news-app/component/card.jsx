import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default class Card1 extends React.Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.news.map((item, index) => {
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
      </div>
    );
  }
}
