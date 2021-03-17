import { createContext, useState } from "react";

const Context = createContext();

export const Provider = (props) => {
  const [state, setState] = useState({
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "123" } },
    ],
    heading: "Top 10 Tracks",
  });

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
