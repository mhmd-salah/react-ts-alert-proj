import { AlertTriangle, Ban, CheckCheck, Info } from "lucide-react";
import "./App.css";
import Alert from "./components/Ui/Alert/Alert";
import { AlertEnam } from "./types";

function App() {
  return (
    <>
      <Alert
        type={AlertEnam.def}
        icon={<Info size={20} />}
        title={"Note"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={AlertEnam.warn}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={AlertEnam.err}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={AlertEnam.succ}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
      >
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia
          nam blanditiis, tenetur delectus consequatur, officiis architecto
          dicta veritatis provident accusamus sint quae animi repellendus autem,
          aut nemo. Cumque, amet! <a href="#">golink</a>
        </>
      </Alert>
    </>
  );
}

export default App;
