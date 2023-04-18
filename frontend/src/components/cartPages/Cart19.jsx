import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function Cart1() {
  let startingNumber = 1;

  const [count, setCount] = useState(startingNumber);
  const [countNow, setCountNow] = useState(310);

  function handleAddClick(e) {
    e.preventDefault();
    const addOne = count + 1;
    setCount(addOne);
    const addPriceOne = addOne * 310;
    setCountNow(addPriceOne);
    console.log(addPriceOne);
    console.log(addOne);
  }

  function handleSubstractClick(e) {
    e.preventDefault();
    if (count <= 1) {
      return;
    } else {
      const minusOne = count - 1;
      setCount(minusOne);
      const minusPriceOne = minusOne * 310;
      setCountNow(minusPriceOne);
      console.log(minusPriceOne);
    }
    console.log(count - 1);
  }
  ////////////////////////////////////////////////////////
  ///////////// alert /////////////////////
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      timer: "2000",
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      timer: "2000",
    });
  };
  ////////////////////////////////////////////
  const priceForStripe = count * 31000;
  const payNow = async (token) => {
    try {
      const response = await fetch("/api/payment/cart1", {
        method: "POST",
        body: {
          amount: count * 10000,
          token,
        },
        headers: {
          "Content-Type": "application",
        },
      });

      if (response.ok) {
        handleSuccess();
        console.log("successfully");
      }
    } catch (error) {
      console.log(error);
      handleFailure();
    }
  };
  return (
    <>
      <div className="row cart">
        <div className="col-lg-7">
          <div className="cart-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0684/2619/products/badu-front-mens_700x.jpg?v=1675983610"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 cart-text ">
          <div>
            <h1>Igitenge Hood</h1>

            <p className="cart-price">
              <strong>Price: </strong> 310$
            </p>
            <h3>Description:</h3>
            <ul>
              <li>Unisex style for men and women</li>
              <li>For lounge or active</li>
              <li>Contrast black rib at the sleeve and waist</li>
              <li>Contrast black trim at kangaroo pouch</li>
              <li>60% Polyester/40% Cotton</li>
            </ul>
            <h3>Care:</h3>
            <ul>
              <li>
                Hand wash separately. Use mild detergent. Do not bleach. Hang to
                dry. Iron inside out.
              </li>
            </ul>
            {/* <p>
              The main color of this igitenge is yellow. <br /> The yellow color
              in color theory says it's bring happiness.
            </p>
            <h3>Styles:</h3>
            <ul>
              <li>This style is best to wear in summer season.</li> */}
            {/* </ul> */}
          </div>
          <div className="cart-quality">
            <h3>Select size:</h3>
            <FormControl>
              <RadioGroup
                row
                defaultValue="XS"
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="XS" control={<Radio />} label="XS" />
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel
                  value="XL"
                  control={<Radio />}
                  label="XL"
                  color="danger"
                />
              </RadioGroup>
            </FormControl>

            <div>
              <h3>Quantity:</h3>
              <div className="cart-quality-button">
                <button onClick={handleSubstractClick}>-</button>
                <h2>{count}</h2>
                <button onClick={handleAddClick}>+</button>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 mt-4">
            <StripeCheckout
              label="pay now"
              name="Pay with credit card "
              stripeKey={`${process.env.REACT_APP_KEY}`}
              billingAddress
              shippingAddress
              amount={priceForStripe}
              description={`Your Total is $ ${countNow}`}
              token={payNow}
            >
              <button className="btn btn-dark btn-lg buy-button">
                Buy Now
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      {/* <Comment /> */}
      <Footer />
    </>
  );
}
