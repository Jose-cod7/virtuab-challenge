import React from "react";
import { Col, Image } from "react-bootstrap";

const CurrencyBox = (props) => {
  return (
    <Col xs lg="3" className="column-crypto">
      <div className="head-crypto">
        <Image className="logo-crypto" src={props.logo} />
        <h3 className="coin-name">{props.name}</h3>
      </div>
      <div className="coin-data">
        <p className="coin-price">
          {props.price}
          <span className="euro">€ </span>
        </p>
      </div>
    </Col>
  );
};

export default CurrencyBox;
