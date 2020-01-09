import React from "react";
import BoatCardImage, {IBoatCardImageProps} from "src/components/BoatCard/BoatCardImage";
import BoatCardDetail, {IBoatCardDetailProps} from "src/components/BoatCard/BoatCardDetail";
import "./style.less";


/**
 * @interface BoatCard Component IProps
 */
interface IBoatCardProps extends IBoatCardImageProps, IBoatCardDetailProps   {
}

/**
 * @param props: IBoatCardProps
 */
const BoatCard: React.FC<IBoatCardProps> = (props: IBoatCardProps) => {
  const { className, boatDetail, ...restImageProps } = props;
  return (
    <div className={`boat-card ${className}`}>
      <div className="boat-card-image__wrapper">
        <BoatCardImage {...restImageProps} imageSrc={boatDetail.image} />
      </div>
      <div className="boat-card-detail__wrapper">
        <BoatCardDetail boatDetail={boatDetail}/>
      </div>
    </div>
  );
};

BoatCard.defaultProps = {
  className: "",
};

export default BoatCard;
