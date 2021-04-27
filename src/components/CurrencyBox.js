import React from "react";
import { Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const CurrencyBox = (props) => {
  return (
    <Col md="2" className="column-crypto">
      <div className="head-crypto">
        <Image className="logo-crypto" src={props.logo} />
        <h3 className="coin-name">{props.name}</h3>
      </div>
      <div className="coin-data">
        <p className="coin-price">
          {props.price}
          <span className="euro">€</span>
        </p>
        <div className="percentage">
          <div className="icon">
            <FontAwesomeIcon
              className="fa-lg "
              icon={faSortUp}
              style={{ color: "#6fbf7b" }}
            />
          </div>
          <div>
            <span
              className="number-percent"
              style={{ color: "#6fbf7b", fontSize: "20px" }}
            >
              + 16%
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CurrencyBox;
