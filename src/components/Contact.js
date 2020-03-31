import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <section className="Contact">
      <img className="avatar" src={props.avatar} alt="test"></img>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;
