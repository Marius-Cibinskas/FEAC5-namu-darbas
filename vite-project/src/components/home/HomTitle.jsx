import InputSearch from "../common/InputSearch";
import styles from "./HomTitle.module.scss";
import ButtonSearch from "../common/ButtonSearch";

const HomTitle = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
            Find Home <span className={styles.primary}>Service/Repair</span>
            <br />
            Near You
            </h1>
            <p className={styles.subtitle}>
            Explore Best Home Service & Repair near you
            </p>
            <div className={styles.searchContainer}>
                <InputSearch />
                <ButtonSearch></ButtonSearch>
            </div>
        </div>
    )
} 

export default  HomTitle;