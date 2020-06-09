import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Footer = (props) => {
  return <p>Você tem {props.count} favoritos</p>;
};

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({ count: state.favorites.length });

export default connect(mapStateToProps)(Footer);
