import React from "react";
import { hot } from "react-hot-loader/root";
import BoatCard from "src/components/BoatCard";
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
  return <div className="app-container"><BoatCard ribbonText='Zizoo Promotion' boatDetail={mockBoatData}/></div>;
};

export default hot(AppContainer);
