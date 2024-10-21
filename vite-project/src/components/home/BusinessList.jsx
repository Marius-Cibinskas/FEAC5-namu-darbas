import classNames from "classnames";
import { businesses } from "@/consts/business";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.scss";

const BusinessList = ({ category, className }) => {
  const filteredBusiness = category
    ? businesses.filter((business) => business.category === category)
    : businesses;
  return (
    <>
      <div><h2>Business card list</h2></div>
      <div className={classNames(styles.container, className)}>
        {filteredBusiness.map((business) => (
          <BusinessCard key={business._id} business={business} />
        ))}
      </div>
    </>  
  );
};

export default BusinessList;