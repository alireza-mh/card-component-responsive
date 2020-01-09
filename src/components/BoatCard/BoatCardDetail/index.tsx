import React, { useState } from "react";
import { IBoatDetail } from "src/components/BoatCard/BoatCardDetail/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faCheck, faQuestionCircle, faBolt } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-stars";
import "./style.less";

/**
 * @interface BoatCardDetail Component IProps
 */
interface IBoatCardDetailProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  boatDetail: IBoatDetail;
}

const NumTitleColumn = (props: { title: string; value: React.ReactNode; className?: string }) => {
  const { title, value, className } = props;
  return (
    <div className={`num-title-column ${className}`}>
      <span className="ntc__value">{value}</span>
      <span className="ntc__title">{title.toUpperCase()}</span>
    </div>
  );
};
const OptionsRender = (props: { options: string[] }) => {
  const { options } = props;
  return (
    <div className={`boat-options`}>
      {options.map(item => (
        <span key={item} className="options-item">
          <FontAwesomeIcon icon={faCheck} />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
};
/**
 * @function ArrayListToString
 * @description convert array list to string list
 * @param array
 * @param splitor{string}
 * @constructor
 */
const ArrayListToString = (array: string[], splitor: string = ",") => {
  if (array.length > 1) {
    const lastElement = array.pop();
    return `${array.join(splitor)} ${lastElement}`;
  }
  return array.toString();
};
/**
 * @param props: IBoatCardDetailProps
 */
const BoatCardDetail: React.FC<IBoatCardDetailProps> = (props: IBoatCardDetailProps) => {
  const { className, boatDetail } = props;
  const [whishList, setWishList] = useState(false);
  return (
    <div className={`bcd ${className}`}>
      <div className="bcd__1R-container">
        <div className="bcd__1R__1C">
          <div className="bcd-name-built__container">
            <span className="bcd-name">{boatDetail.name}</span>
            <span className="bcd-built">{boatDetail.builtAt}</span>
          </div>
          <span className="bcd-boat-type">{boatDetail.boatType}</span>
        </div>
        <div className="bcd__1R__2C">
          <div className="bcd-wish-list" onClick={() => setWishList(!whishList)}>
            {!whishList && <FontAwesomeIcon icon={faHeartRegular} />}
            {whishList && <FontAwesomeIcon color={"red"} icon={faHeartSolid} />}
          </div>
        </div>
        <div className="bcd__1R__3C">
          <div className="bcd-hot-view__container">
            <span className="bcd-hot-tag">HOT</span>
            <span className="bcd-views">{boatDetail.viewInDay} views</span>
          </div>
          <span className="bcd-l24h">in the last 24 hours</span>
        </div>
      </div>
      <div className="bcd__2R-container">
        <div className="bcd__2R__1-3C">
          <NumTitleColumn title={"Length"} value={`${boatDetail.length}m`} />
          <NumTitleColumn title={"Cabins"} value={`${boatDetail.cabins}`} />
          <NumTitleColumn title={"Quests"} value={`${boatDetail.guests}`} />
        </div>
        <div className="bcd__2R__4C">
          <NumTitleColumn
            title={`${boatDetail.totalReview} Reviews`}
            value={<ReactStars count={5} edit={false} value={boatDetail.averageReviewValue} color1={"#ffd700"} />}
          />
        </div>
      </div>
      <div className="bcd__3-4R-container">
        <div className="bcd-option-sail-option__container">
          <OptionsRender options={boatDetail.options} />
          <div className="bcd-sail-extra__container">
            <div className="bcd-sail-extra">
              <span className="sail-extra-title">SAIL TYPE</span>
              <span className="sail-extra-value">{boatDetail.sailType}</span>
            </div>
            <div className="bcd-sail-extra">
              <span className="sail-extra-title">FREE EXTRAS</span>
              <span className="sail-extra-value">{ArrayListToString(boatDetail.freeExtras, ",")}</span>
            </div>
          </div>
        </div>
        <div className="bcd-price-order__container">
          <div className="bcd-price__container">
            <span className="bcd-price-title">FROM</span>
            <span className="bcd-price-value">
              {`${boatDetail.price.toLocaleString("de-BE", {
                style: "currency",
                currency: "EUR",
              })}`}
              <span className="weekly">Weekly</span>
            </span>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <div className="bcd-booking">
            <div className='bcd-booking-title'>
              <FontAwesomeIcon icon={faBolt} />
              <span>DIRECT BOOKING</span>
            </div>
            <div className="bcd-booking-hexagon">VIEW DETAILS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NumTitleColumn.defaultProps = {
  className: "",
};
BoatCardDetail.defaultProps = {
  className: "",
};

export default BoatCardDetail;
