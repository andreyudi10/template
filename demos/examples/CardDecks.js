import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

import React from "react";

const Example = props => {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src={`${process.env.baseUrl}images/256x186.svg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src={`${process.env.baseUrl}images/256x186.svg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src={`${process.env.baseUrl}images/256x186.svg`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;
