import {  X } from "lucide-react";
import "./index.scss";
import { FC, ReactNode } from "react";
interface Iprops {
  type: string;
  icon:ReactNode;
  title:string;
  description:string
}
const Alert: FC<Iprops> = ({ type ,icon,title,description}) => {
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
        {description}
      </p>
    </div>
  );
};
export default Alert;
