import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [headerSectionRef, headerSectionInView] = useInView({ threshold: 0 });
  return (
    <div className={"container mx-auto shadow-xl"}>
      <Navbar headerSectionInView={headerSectionInView} />
      <Outlet context={[headerSectionRef]} />
    </div>
  );
};

export default Index;
