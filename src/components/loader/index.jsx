import React from "react";
import { CircleLoader } from "react-spinners";
import clsx from "clsx";

const Index = () => {
  return (
    <div className={clsx("flex justify-center items-center h-full")}>
      <CircleLoader size={220} loading={true} color={"#b937de"} />
    </div>
  );
};

export default Index;
