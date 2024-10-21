import styles from './Button.module.scss'; // Import the SCSS file for styling
import PropTypes from "prop-types";
import { CiSearch } from 'react-icons/ci';

const ButtonSearch = ({ onClick }) => {
  return (
    <button className={styles.buttonSearch} onClick={onClick}>
      <CiSearch/>
    </button>
  );
};

ButtonSearch.propTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool,
  };

export default  ButtonSearch;