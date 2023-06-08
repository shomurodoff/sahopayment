import React, { useEffect } from "react";
import { useGetAllQuery } from "../../hooks/api";
import { useSettingsStore, useStore } from "../../store";
import { get, isNil } from "lodash";
import { OverlayLoader } from "../../components/loader";

const Auth = ({ children, ...rest }) => {
  const token = useSettingsStore((state) => get(state, "token"));
  const setUser = useStore((state) => get(state, "setUser", () => {}));

  const setAuth = useStore((state) => get(state, "setAuth", () => {}));

  const {
    data = null,
    isLoading,
    isFetching,
  } = useGetAllQuery({
    key: "get-me",
    url: "/get-me",
    hideErrorMsg: true,
    params: {
      params: {},
    },
    enabled: !isNil(token),
    cb: {
      success: (data) => {
        setUser(data);
        setAuth(true);
      },
      fail: () => {},
    },
  });

  if (isLoading) {
    return <OverlayLoader />;
  }

  return children;
};

export default Auth;
