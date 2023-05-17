import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import './Accord.css';
import Button from "react-bootstrap/Button";

const Accord = () => {
  return (
    <div className="bodyaccord mt-3">
      <Accordion className="mx-2" flush>
        <h5 className="myhead">
          <strong>Trending songs</strong>
        </h5>

        <Accordion.Item eventKey="0" className="my-3 border rounded-3 mitten">
          <Accordion.Header>
            Unavailable by <em className="mx-1">Davido</em>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="my-3  border rounded-3 mitten">
          <Accordion.Header>
            Unavailable by <em className="mx-1">Davido</em>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="my-3  border rounded-3 mitten">
          <Accordion.Header>
            Unavailable by <em className="mx-1">Davido</em>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="my-3 border rounded-3 mitten">
          <Accordion.Header>
            Unavailable by <em className="mx-1">Davido</em>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="my-3 border rounded-3 mitten">
          <Accordion.Header>
            Unavailable by <em className="mx-1">Davido</em>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>

        <Button variant="warning" className="mybutton">
          View more
        </Button>
      </Accordion>
    </div>
  );
}

export default Accord