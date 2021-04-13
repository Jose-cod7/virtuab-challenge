import React, { useState } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import Logo from "../components/vb_logo.png";

import CryptoData from "./CryptoData";
import CurrencyBox from "./CurrencyBox";
import { format } from "date-fns";

const Cryptocurrencies = () => {
  const [currentPriceBitcoin, setNewPriceBitcoin] = useState(
    CryptoData[0].price
  );
  const [currentPriceEthereum, setNewPriceEthereum] = useState(
    CryptoData[1].price
  );

  const [dateDisplayString, setDateDisplayString] = useState("");

  const handleChange = (e) => {
    //GEt the date from the datepicker
    const selectedDate = e.target.value;
    //console.log("selected day:", selectedDate);

    // Convert date to string in format
    const selectDateString = new Date(selectedDate);

    const selectedDateFormatString = format(
      selectDateString,
      "cccc dd, MMMM, yyyy"
    );

    console.log("formated date", selectedDateFormatString);

    setDateDisplayString(selectedDateFormatString);

    const newBtcvalue = CryptoData.find((current) => {
      const isBitcoin = current.cryptoName === "Bitcoin";
      const isSameDate = current.date === selectedDate;

      return isBitcoin && isSameDate;
    });

    const newEthvalue = CryptoData.find((current) => {
      const isEthereum = current.cryptoName === "Ethereum";
      const isSameDate = current.date === selectedDate;

      return isEthereum && isSameDate;
    });

    console.log(newBtcvalue);
    console.log(newEthvalue);

    // TODO better handling of missing data
    setNewPriceBitcoin(newBtcvalue && newBtcvalue.price);
    setNewPriceEthereum(newEthvalue && newEthvalue.price);
    console.log(e.target.value);
  };

  return (
    <div className="parent">
      <div className="header">
        <Row className="row-header">
          <Col className="column-1">
            <Image className="logo" src={Logo} />
          </Col>
          <Col className="column-2">
            <Form className="form-date">
              <input className="calendar" type="date" onChange={handleChange} />
              <input
                className="date-display"
                type="text"
                name="verify-date"
                value={dateDisplayString}
                disabled
              />
            </Form>
          </Col>
          <Col className="column-3">
            <h2>CHALLENGE </h2>
          </Col>
        </Row>
      </div>

      <div className="values">
        <Row className="box">
          <CurrencyBox
            logo={"/images/btc.png"}
            name={"Bitcoin"}
            price={currentPriceBitcoin}
          />
          <CurrencyBox
            logo={"/images/eth.png"}
            name={"Ethereum"}
            price={currentPriceEthereum}
          />
        </Row>
      </div>
    </div>
  );
};

export default Cryptocurrencies;
