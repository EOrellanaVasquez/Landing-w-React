import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className='container-fluid bg-dark text-white p-4 text-center'>{props.footerInfo}</div>
  )
}

Footer.propTypes = {
    footerInfo: PropTypes.string.isRequired
}
export default Footer;