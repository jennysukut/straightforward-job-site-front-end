import "./Mail.css";
import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Mail() {
  const [typeOfHeader, setTypeOfHeader] = useState("mail");
  const [footerIsFixed, setFooterIsFixed] = useState("false");
  const [text, setTest] = useState("");

  const messageList = [
    { _id: 1, from: "Company Name", status: "unread" },
    { _id: 2, from: "This.LLC", status: "read" },
    { _id: 3, from: "Good Company", status: "closed" },
    { _id: 4, from: "Company Name", status: "unread" },
    { _id: 5, from: "This.LLC", status: "read" },
    { _id: 6, from: "Bad Company", status: "closed" },
    { _id: 7, from: "Company Name", status: "unread" },
    { _id: 8, from: "This.LLC", status: "read" },
    { _id: 9, from: "Lorem Ipsum Place", status: "closed" },
  ];

  const [messages, setMessages] = useState([
    {
      from: "Business",
      time: "August 5",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate nunc non diam luctus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec iaculis nunc, et rutrum nulla. Sed a ipsum scelerisque, ultricies ante in, pulvinar mauris. Donec quis lorem dapibus, pulvinar magna sed, fringilla justo. ",
    },
    {
      from: "Person",
      time: "August 5",
      message:
        "Proin malesuada sapien vestibulum pulvinar condimentum. Suspendisse potenti. Morbi sem elit, pulvinar sit amet quam et, interdum rhoncus urna. Maecenas vitae dolor libero. Mauris dignissim nec mauris eget accumsan. Morbi maximus suscipit arcu, cursus aliquet urna tempus tincidunt.",
    },
    {
      from: "Business",
      time: "August 6",
      message:
        "Quisque ut vulputate nibh, vitae cursus diam. Integer et eros rhoncus, volutpat ipsum et, interdum justo. Suspendisse imperdiet pharetra porta. ",
    },
    {
      from: "Person",
      time: "August 7",
      message:
        " In blandit odio nisi, eget tempor odio posuere sed. Quisque lorem orci, dictum ac porttitor vel, dignissim sit amet enim. Suspendisse elementum nulla nisi, sit amet interdum tellus consequat eget. Morbi interdum turpis est, ut molestie tellus auctor et. Ut auctor eu ligula id vestibulum. In felis magna, blandit eu convallis id, imperdiet sit amet sapien. Proin ut feugiat nisi. Duis nec porta libero. ",
    },
  ]);

  const handleTestInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const message = { from: "Person", time: "1:00pm", message: { text } };
    console.log(message);
    // handleAddMessage({ message });
  };

  const handleAddMessage = ({ message }) => {
    setMessages([message, ...messages]);
  };

  return (
    <>
      <Header typeOfHeader={typeOfHeader} />
      <div className="mail__page">
        <div className="mail__left-column">
          <h3 className="mail__title title">My Messages</h3>
          <div className="mail__messageList container">
            {messageList.map((mail) => {
              return (
                <div className="messageList__item" key={mail._id}>
                  <p className="messageList__company">{mail.from}</p>
                  <p className="messageList__status">| {mail.status}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mail__right-column">
          {/* <h3 className="message__title title">
            Conversation with Company Name
          </h3> */}
          <div className="message__frame container">
            {messages.map((message) => {
              if (message.from === "Business") {
                return (
                  <div
                    className="message__fromComp-container message__container"
                    key={message.time}
                  >
                    <p className="message__fromComp">{message.message}</p>
                    <span className="message__fromComp_details">
                      {message.from}, {message.time}
                    </span>
                  </div>
                );
              }

              if (message.from === "Person") {
                return (
                  <div
                    className="message__fromPerson-container message__container"
                    key={message.time}
                  >
                    <p className="message__fromPerson">{message.message}</p>
                    <span className="message__fromPerson_details">
                      {message.from}, {message.time}
                    </span>
                  </div>
                );
              }
            })}
          </div>
          <div className="message__composer-and-buttons">
            <div className="message__composer">
              <input
                type="text"
                className="message__input"
                placeholder="Your message here..."
                onChange={handleTestInput}
              />
              <button className="message__send-button">send</button>
            </div>
            <div className="message__buttons">
              <button className="message__button company-page-button">
                company page
              </button>
              <button className="message__button job-listing-button">
                go to job listing
              </button>
              <button className="message__button report-button">report</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mail;
