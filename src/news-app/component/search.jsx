import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const Section = styled.div`
  padding-top: 5rem;
  width: 80rem;
  margin: auto;
`;

export default class Search1 extends React.Component {
  render() {
    return (
      <Section>
        <Form onSubmit={this.props.handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl placeholder="News Search" type="text" onChange={this.props.handleChange} />
          </InputGroup>
        </Form>
      </Section>
    );
  }
}
