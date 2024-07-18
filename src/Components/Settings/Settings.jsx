import "./Settings.css";
import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Settings() {
  const [footerIsFixed, setFooterIsFixed] = useState("true");
  const [typeOfHeader, setTypeOfHeader] = useState("profile");

  return (
    <>
      <Header typeOfHeader={typeOfHeader} />
      <div className="settings__page">
        <div className="settings__title-and-subscription">
          <h3 className=" settings__title">
            My Profile Details & Subscription
          </h3>
          <div className="settings__element">
            <div className="settings__detail-container settings__payment-details">
              <p className="settings__payment-title title">
                Your Billing Details:
              </p>
              <p className="settings__payment-time">
                monthly payments on the: 14th
              </p>
              <p className="settings__payment-card">
                with card ending in: 0000
              </p>
            </div>
            <button className="settings__button payment__button">update</button>
          </div>
        </div>
        <div className="settings__details-and-payment">
          <div className="settings__element">
            <div className="settings__detail-container settings__name-email">
              <p className="settings__name title">Name: Jessica Day</p>
              <p className="settings__email title">
                Email: jessicasunshine@email.com
              </p>
            </div>
            <button className="settings__button details__button">edit</button>
          </div>
          <div className="settings__element">
            <div className="settings__detail-container settings__subscription-details">
              <p className="settings__subscription-title title">
                Your Current Subscription:
              </p>
              <p className="settings__subscription">
                $10
                <span> per month</span>
              </p>
            </div>
            <button className="settings__button subscription__button">
              change
            </button>
          </div>
        </div>
      </div>
      <Footer footerIsFixed={footerIsFixed} />
    </>
  );
}

export default Settings;
