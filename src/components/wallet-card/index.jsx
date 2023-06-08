import { Button, Card, Statistic, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io";
import { FaEuroSign, FaRubleSign } from "react-icons/fa";
import { get, isEqual } from "lodash";
import CountUp from "react-countup";
const Index = ({ data }) => {
  console.log(data);
  const formatter = (value) => {
    return <CountUp end={value} separator="," />;
  };

  if (isEqual(get(data, "currencyName"), "USD")) {
    return (
      <Card className="bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg border-0 md:p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">{get(data, "currencyName")}</h4>
          <Button
            shape="circle"
            className="flex justify-center items-center"
            size="large"
            icon={<IoLogoUsd size={24} />}
          />
        </div>
        <div className="text-center flex items-start justify-center mb-4">
          <IoLogoUsd size={32} />
          <Typography.Title className="text-xl">
            <Statistic value={get(data, "balance")} formatter={formatter} />
          </Typography.Title>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button size="small" className="w-1/2 !rounded-3xl">
            Deposit
          </Button>
          <Button size="small" className="w-1/2 !rounded-3xl">
            Withdraw
          </Button>
        </div>
      </Card>
    );
  } else if (isEqual(get(data, "currencyName"), "RUB")) {
    return (
      <Card className="bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg border-0 md:p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">RUB</h4>
          <div>
            <Button
              shape="circle"
              className="flex justify-center items-center"
              size="large"
              icon={<FaRubleSign size={24} />}
            />
          </div>
        </div>
        <div className="text-center flex items-start justify-center mb-4">
          <FaRubleSign size={32} />
          <Typography.Title className="text-xl">
            <Statistic
              value={get(data, "data.balance", 0)}
              formatter={formatter}
            />
          </Typography.Title>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button size="small" className="w-1/2 !rounded-3xl">
            Deposit
          </Button>
          <Button size="small" className="w-1/2 !rounded-3xl">
            Withdraw
          </Button>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg border-0 md:p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">EUR</h4>
          <div>
            <Button
              shape="circle"
              className="flex justify-center items-center"
              size="large"
              icon={<FaEuroSign size={24} />}
            />
          </div>
        </div>
        <div className="text-center flex items-start justify-center mb-4">
          <FaEuroSign size={32} />
          <Typography.Title className="text-xl">
            <Statistic
              value={get(data, "data.balance", 0)}
              formatter={formatter}
            />
          </Typography.Title>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button size="small" className="w-1/2 !rounded-3xl">
            Deposit
          </Button>
          <Button size="small" className="w-1/2 !rounded-3xl">
            Withdraw
          </Button>
        </div>
      </Card>
    );
  }
};

export default Index;
