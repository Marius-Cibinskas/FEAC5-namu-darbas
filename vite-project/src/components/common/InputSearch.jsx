import styles from "./InputSearch.module.scss";

const InputSearch = ({...props}) => {
    return (
        <input className={styles.search} placeholder="Search" {...props}/>
    );
};

export default InputSearch;