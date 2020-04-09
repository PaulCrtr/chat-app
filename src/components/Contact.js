import React from "react";
import "./style.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: this.props.online };
  }
  render() {
    return (
      <section className="Contact">
        <img className="avatar" src={this.props.avatar} alt="test"></img>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div
            onClick={(event) => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
            className="status"
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <p className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
