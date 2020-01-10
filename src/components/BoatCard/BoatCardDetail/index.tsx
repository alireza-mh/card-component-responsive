import React, { useEffect, useState } from "react";
import { IBoatDetail } from "src/containers/DemoAssets/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faCheck, faQuestionCircle, faBolt } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-stars";
import "./style.less";

/**
 * @interface BoatCardDetail Component IProps
 */
export interface IBoatCardDetailProps {
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
 * @param splitter{string}
 * @param limit{number}
 * @constructor
 */
const ArrayListToString = (array: string[], splitter: string = ", ", limit: number = 6) => {
  const arrayTemp = array.slice(0, limit);
  if (arrayTemp.length > 2) {
    const lastElement = arrayTemp.pop();
    return `${arrayTemp.join(splitter)} ${lastElement}`;
  }
  return arrayTemp.toString();
};
/**
 * @param props: IBoatCardDetailProps
 */
const BoatCardDetail: React.FC<IBoatCardDetailProps> = (props: IBoatCardDetailProps) => {
  const { className, boatDetail } = props;
  const [wishList, setWishList] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /**
   * @description just implemented for more detail --> some messages such as '24 hours' must be change to '24h' in mobile also,
   * we should show 2 free extras in mobile
   */
  useEffect(() => {
    const htmlStyles = window.getComputedStyle(document.querySelector("html"));
    const mobileSize = htmlStyles.getPropertyValue("--mobile-break-point");
    const mql = window.matchMedia(`(max-width: ${mobileSize})`);
    function screenTest(e) {
      setIsMobile(Boolean(e.matches));
    }
    mql.addListener(screenTest);
    return () => {
      mql.removeListener(screenTest);
    };
  }, []);

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
          <div className="bcd-wish-list" onClick={() => setWishList(!wishList)}>
            {!wishList && <FontAwesomeIcon icon={faHeartRegular} />}
            {wishList && <FontAwesomeIcon color={"red"} icon={faHeartSolid} />}
          </div>
        </div>
        <div className="bcd__1R__3C">
          <div className="bcd-hot-view__container">
            <span className="bcd-hot-tag">HOT</span>
            <span className="bcd-views">{boatDetail.viewInDay} views</span>
          </div>
          <span className="bcd-l24h">{`in the last 24${isMobile ? 'h' : ' hours'}`}</span>
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
            value={<ReactStars count={5} edit={false} value={5} color2={"#ffd700"} />}
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
              <span className="sail-extra-value">{ArrayListToString(boatDetail.freeExtras, ", ", isMobile ? 2 : 6)}</span>
            </div>
          </div>
        </div>
        <div className="bcd-price-order__container">
          <div className="bcd-price__container">
            <span className="bcd-price-title">FROM</span>
            <div className='bcd-price-value__container'>
              <span className="bcd-price-value">
                {`${boatDetail.price.toLocaleString(undefined, {
                  style: "currency",
                  currency: "EUR",
                })}`}
                <span className="weekly">Weekly</span>
              </span>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </div>
          </div>
          <div className="bcd-booking">
            <div className="bcd-booking-title">
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
