import { useContext } from "react";
import { Context } from "../../context";
const Tracks = () => {
  const context = useContext(Context);
  console.log(context);
  return <>Tracks Component</>;
};

export default Tracks;
