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

  const date = new Date();
  console.log("this is the date", date);

  const dateFormated = format(date, "iiii");
  console.log("this is the date", dateFormated);

  /*useEffect(() => {
    return () => {
      cleanup;
    };
  }, [input]);*/

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    console.log(selectedDate);

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
              <Form.Control
                type="date"
                name="verify-date"
                placeholder="dd-mm-yyyy"
                onChange={handleChange}
                required
              />
            </Form>
          </Col>
          <Col className="column-3">
            <h2>CHALLENGE</h2>
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
