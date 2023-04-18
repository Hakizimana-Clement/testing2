import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Fade from "react-reveal/Fade";

export default function Feature() {
  return (
    <>
      <section className="feature-box  row">
        <Fade left duration={1000}>
          <div className="col-lg-4 col-md-4 feature-box1">
            <SearchIcon
              style={{ fontSize: 66, color: "#631f1f" }}
              aria-label="serachIcon"
            />
            <h3>Smart size customize</h3>
            <p>Customize the size for the clothes you choose before sale it.</p>
          </div>
        </Fade>
        <Fade left duration={1500}>
          <div className="col-lg-4 col-md-4 feature-box2">
            <GroupsIcon
              style={{ fontSize: 70, color: "#631f1f" }}
              aria-label="EliteClienteleiIcon"
            />
            <h3>Elite Clientelei</h3>
            <p>
              We have all the Ibitenge(igitenge in plural) style, the fanasty
              Ibitenge Sytles.
            </p>
          </div>
        </Fade>
        <Fade left duration={1800}>
          <div className="col-lg-4 col-md-4 feature-box3">
            <CurrencyExchangeIcon
              style={{ fontSize: 44, marginBottom: 11, color: "#631f1f" }}
              aria-label="returnAndFunds"
            />
            <h3>Easy Returns & Exchanges</h3>
            <p>
              If you are not happy with our products for whatever reason, we
              accept returns.
            </p>
          </div>
        </Fade>
      </section>
    </>
  );
}
