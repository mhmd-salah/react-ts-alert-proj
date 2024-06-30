import {  X } from "lucide-react";
import "./index.scss"
import { FC } from "react";
import { Iprops } from "../../../types";

const Alert: FC<Iprops> = ({ type ,icon,title,description,children}) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title} </h4>
          
        </div>
        <span>
          <X />
        </span>
      </div>
      <p>
        {children?children:<p>{description}</p>}
      </p>
    </div>
  );
};
export default Alert;
