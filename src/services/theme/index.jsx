import { ConfigProvider, theme } from "antd";
import React from "react";
import { useSettingsStore } from "../../store";
import { get } from "lodash";

const Index = ({ children }) => {
  const isDark = useSettingsStore((state) => get(state, "darkMode", null));
  return (
    <div>
      <ConfigProvider
        theme={{
          algorithm: isDark && theme.darkAlgorithm,
          token: {
            colorPrimary: "#b937de",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default Index;
