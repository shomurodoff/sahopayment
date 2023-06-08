import { Button, Col, Row, Statistic } from "antd";

import DownloadButtonButton from "../../../components/button/button";
import HeaderContentImg from "../../../../../assets/home/images/header-content-img.png";
import MasterCardFront from "../../../../../assets/home/images/master-card.png";
import MasterCardBack from "../../../../../assets/home/images/master-card-2.png";
import CoinCash from "../../../../../assets/home/images/coin-cash.png";
import React from "react";
import HeroBg from "../../../../../assets/home/images/background.webp";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import DownloadButton from "../../../components/button/button";
const HomeSection = () => {
  const navigate = useNavigate();
  const formatter = (value) => (
    <CountUp end={value} duration={5} separator="," />
  );
  const [headerSectionRef] = useOutletContext();

  return (
    <div ref={headerSectionRef}>
      <Element
        name="buy-crypto"
        id="header-section"
        className=" h-[calc(100vh-64px)] pt-[64px] relative flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div
          className={
            "grid grid-cols-12 flex items-center justify-center w-[1200px] mx-auto gap-x-[50px]"
          }
        >
          <div className={"col-span-6"}>
            <h1 className={"text-7xl text-[#fff]"}>
              World's most secure wallet
            </h1>

            <p className={"text-xl text-[#fff] my-[30px]"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              id egestas eu risus dignissim. Nunc, viverra volutpat nam
              sollicitudin.
            </p>

            <div className={"flex items-center gap-x-4"}>
              <DownloadButton>Download Now</DownloadButton>
              <Button
                className={"border-none text-xl text-[#fff] hover:text-[#fff]"}
              >
                See Features
              </Button>
            </div>
          </div>

          <div className={"col-span-6 justify-self-center relative"}>
            <img
              src={HeaderContentImg}
              width={300}
              className={"relative top-0 z-10"}
            />

            <img
              src={MasterCardFront}
              width={280}
              className={"absolute top-[350px] left-[-90px] z-30 "}
            />
            <img
              src={CoinCash}
              width={300}
              className={"absolute top-[270px] left-0 right-0 z-20"}
            />
            <img
              src={MasterCardBack}
              width={280}
              className={"absolute top-[130px] left-[100px] "}
            />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default HomeSection;
