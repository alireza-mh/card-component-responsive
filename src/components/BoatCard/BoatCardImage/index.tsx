import React from "react";
import "./style.less";

/**
 * @interface BoatCardImage Component IProps
 */
interface IBoatCardImageProps extends React.HTMLProps<HTMLDivElement> {
  imageSrc: string;
  /* ribbon properties */
  ribbonText?: string;
  ribbonColor?: string;
  ribbonClassname?: string;
}

/**
 * @param props: IBoatCardImageProps
 */
const BoatCardImage: React.FC<IBoatCardImageProps> = (props: IBoatCardImageProps) => {
  const { className, ribbonClassname, ribbonText, ribbonColor, imageSrc } = props;
  return (
    <div className={`boat-card-image__container ${className}`}>
      <div className="boat-card-image" style={{ backgroundImage: `url(${imageSrc})` }} />
      {ribbonText && (
        <div className={`boat-card-image__ribbon ${ribbonClassname}`} style={{ backgroundColor: ribbonColor }}>
          <span className="boat-card-image__ribbon-text">{ribbonText.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

BoatCardImage.defaultProps = {
  ribbonColor: "#363E40",
  className: "",
  ribbonClassname: "",
};

export default BoatCardImage;
