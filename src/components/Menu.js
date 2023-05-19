import { Datacontext } from "../App";
import { useContext } from "react";

const Menu = () => {
  const { setAppState } = useContext(Datacontext);
  return (
    <div className="menu">
      <h1>แบบทดสอบ</h1>
      <button onClick={() => setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
    </div>
  );
};

export default Menu;
