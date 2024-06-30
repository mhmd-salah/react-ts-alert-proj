import { BellRing, X } from "lucide-react";
import "./index.scss";

const Alert = () => {
  return (
    <div className="alert-wrapper">
      <BellRing />
      <h4>alert title </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque fugit
        laudantium provident atque nemo omnis, explicabo ad iure natus incidunt?
      </p>
      <span>
        <X/>
      </span>
    </div>
  );
};
export default Alert;
