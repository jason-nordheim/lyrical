import { useContext } from "react";
import { Consumer } from "../../context";
const Tracks = () => {
  const context = useContext(Consumer);
  console.log(context);
  return <>Tracks Component</>;
};

export default Tracks;
