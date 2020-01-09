import React from "react";
import { hot } from "react-hot-loader/root";
import BoatCardImage from "src/components/BoatCard/BoatCardImage";
import BoatImg from './DemoAssets/boat-image.jpg';
import BoatCardDetail from "src/components/BoatCard/BoatCardDetail";
import {mockBoatData} from "src/components/BoatCard/BoatCardDetail/mockData";
import "./style.less";

interface IProps {
  children?: React.ReactNode;
}

/**
 * @description app container - contain component whit appropriate style and hot reload support
 * @param props
 */
const AppContainer: React.FC<IProps> = (props: IProps) => {
  return <div className="app-container"><BoatCardDetail  boatDetail={mockBoatData}/></div>;
};

export default hot(AppContainer);
