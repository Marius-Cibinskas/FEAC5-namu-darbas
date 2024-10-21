import styles from './Button.module.scss'; // Import the CSS file for styling
import PropTypes from "prop-types";

const Button = ({ onClick, label }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Login / Sign Up
    </button>
  );
};

Button.propTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool,
  };

export default  Button;