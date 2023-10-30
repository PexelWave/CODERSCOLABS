"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,

} from "react";

interface PlaygroundState {
  playgroundName: string;
  setPlaygroundName: Dispatch<SetStateAction<string>>;
}


export const PlaygroundContext = createContext<PlaygroundState | undefined>(
  undefined
);

export const PlaygroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playgroundName, setPlaygroundName] = useState<string>("untitled file");

  const playground: PlaygroundState = {
    playgroundName,
    setPlaygroundName,
  };

  return (
    <PlaygroundContext.Provider value={playground}>
      {children}
    </PlaygroundContext.Provider>
  );
};

const usePlayground = () => {
  const playground = useContext(PlaygroundContext);

  if (playground === undefined)
    throw new Error("usePlayground must be used in a PlaygroundContext");

  return playground;
};

export default usePlayground;
