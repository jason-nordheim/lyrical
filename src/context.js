import { createContext, useEffect, useState } from "react";
import { getTopTracks } from "./util/MusicMatchApi";

export const Context = createContext();

export const Provider = (props) => {
  const [state, setState] = useState({
    track_list: [],
    heading: "Top 10 Tracks",
  });

  useEffect(() => {
    getTopTracks();
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
