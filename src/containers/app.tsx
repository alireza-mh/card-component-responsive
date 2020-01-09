import React from "react";
import { hot } from "react-hot-loader/root";
import "./style.less";

interface IProps {
  children?: React.ReactNode;
}

/**
 * @description app container - contain component whit appropriate style and hot reload support
 * @param props
 */
const AppContainer: React.FC<IProps> = (props: IProps) => {
  return <div className="app-container">{props.children}</div>;
};

export default hot(AppContainer);
