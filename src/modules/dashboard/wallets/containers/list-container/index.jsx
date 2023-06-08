import { PageContainer } from "@ant-design/pro-components";
import { Breadcrumb } from "antd";
import { get, map, reverse } from "lodash";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useGetAllQuery } from "../../../../../hooks/api";
import { Loader, WalletCard } from "../../../../../components";

const Index = () => {
  const { data, isLoading } = useGetAllQuery({
    key: "wallet-list",
    url: "get-all-wallet/andBalance",
  });

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 xl:gap-x-10 gap-y-2 md:gap-y-5 md:gap-x-5">
          {map(reverse(get(data, "data.objectData")), (item) => (
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <WalletCard data={item} />
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Index;
