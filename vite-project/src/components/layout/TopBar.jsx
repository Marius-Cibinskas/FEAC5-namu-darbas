import styles  from "./TopBar.module.scss"; // Import the SCSS file for styling
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { routes } from "../../router/router";
import NavigationButton from "../common/NavigationButton";


export const TopBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logoNav}>
          <img src={logo} alt="logo" />
            <ul className={styles.navLinks}>
                <li>
                  <NavLink to={routes.home}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={routes.services}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={routes.aboutUs}>About</NavLink>
                </li>
            </ul>
          </div>
          <div className={styles.button}>
            
          <NavigationButton/>

          </div>
        </div>
    </nav>
  );
};