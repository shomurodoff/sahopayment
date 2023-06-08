import { MenuFoldOutlined, UploadOutlined } from "@ant-design/icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiWallet, BiTransfer, BiUser } from "react-icons/bi";
import { TbSun } from "react-icons/tb";
import { MdAddBox } from "react-icons/md";
import { Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useSettingsStore } from "../../store";
import { get } from "lodash";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import bgLight from "../../assets/bg-image-3.jpg";
import bgDark from "../../assets/bg-black.avif";
const { Header, Sider, Content } = Layout;
const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const isDark = useSettingsStore((state) => get(state, "darkMode", null));

  const setDarkMode = useSettingsStore((state) =>
    get(state, "setMode", () => {})
  );

  const { pathname } = useLocation();

  const width = useWindowWidth();

  const navigate = useNavigate();

  const items = [
    {
      label: (
        <div className="py-2 w-[120px]">
          <Link to={"/profile"}>Profile</Link>
        </div>
      ),
      key: "0",
    },
    {
      label: <div className="py-2">Profile</div>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <div className="py-2">Logout</div>,
      key: "3",
    },
  ];
  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        width={300}
        collapsible
        collapsedWidth={50}
        collapsed={width < 768 ? true : collapsed}
        theme={isDark ? "dark" : "light"}
        onBreakpoint={(md) => console.log(md, "brokenbroken")}
        // className={clsx("border-r z-10", isDark && "border-gray-600")}
        className=""
        style={{
          background: isDark ? "#001529" : "#ffffff",
        }}
      >
        <div>
          <div className="flex justify-center items-center gap-2 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="40"
              className={clsx("transition-all duration-300 ", "fill-[#b937de]")}
              height="31"
              viewBox="0 0 203.000000 131.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M536 1274 c-95 -21 -187 -65 -271 -129 -229 -176 -303 -488 -179 -762 64 -142 241 -286 413 -337 142 -42 360 -2 494 91 26 18 51 33 55 33 16 0 128 124 156 173 38 64 72 168 81 245 l7 62 -100 0 c-59 0 -103 4 -107 10 -8 13 325 341 342 337 19 -3 333 -318 333 -333 0 -11 -22 -14 -99 -14 l-98 0 -6 -59 c-22 -204 -91 -371 -217 -520 l-45 -54 87 6 c233 16 465 162 560 352 45 88 61 180 56 312 -4 110 -7 125 -44 212 -48 115 -123 208 -217 271 -273 184 -611 147 -830 -90 -35 -38 -77 -95 -95 -127 -37 -70 -72 -191 -72 -250 l0 -43 100 0 c73 0 100 -3 100 -12 0 -16 -320 -338 -336 -338 -16 0 -334 318 -334 335 0 12 18 15 100 15 55 0 100 3 100 8 6 183 90 415 198 549 28 33 48 64 45 67 -11 11 -106 5 -177 -10z" />
              </g>
            </svg>
            {!collapsed && (
              <h1 className="hidden md:block text-xl font-bold text-[#b937de]">
                SahoPay
              </h1>
            )}
          </div>
        </div>
        <Menu
          theme={isDark ? "dark" : "light"}
          className="min-h-[calc(100vh-64px)]  !border-none"
          mode="inline"
          onClick={({ key }) => navigate(key)}
          defaultSelectedKeys={["/"]}
          selectedKeys={pathname}
          items={[
            {
              key: "/",
              icon: <BiWallet size={18} />,
              label: "Wallets",
            },
            {
              key: "/deposit",
              icon: <MdAddBox size={18} />,
              label: "Deposit",
            },
            {
              key: "/transfer",
              icon: <BiTransfer size={18} />,
              label: "Transfer",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className={clsx(
            "px-2 md:px-[20px] flex items-center justify-end md:justify-between shadow-2xl sticky",
            isDark && "border-gray-600"
          )}
          style={{
            background: isDark ? "#001529" : "#ffffff",
          }}
        >
          <Button
            className="hidden md:block"
            icon={<MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Space size={4}>
            <div>
              {isDark ? (
                <Button
                  className="flex justify-center items-center"
                  icon={<TbSun />}
                  onClick={() => setDarkMode(false)}
                />
              ) : (
                <Button
                  className="flex justify-center items-center"
                  icon={<BsFillMoonStarsFill />}
                  onClick={() => setDarkMode(true)}
                />
              )}
            </div>{" "}
            <Dropdown menu={{ items }}>
              <Button
                className="flex justify-center items-center"
                icon={<BiUser />}
              />
            </Dropdown>
          </Space>
        </Header>
        <Content
          className="overflow-auto px-4 md:px-5 py-4 md:py-5 bg-no-repeat bg-cover bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10"
          style={{
            backgroundImage: `url(${isDark ? bgDark : bgLight})`,
          }}
        >
          <Outlet />
        </Content>
        {/* <Layout.Footer
          style={{
            height: 30,
            background: isDark ? "#001529" : "#ffffff",
          }}
          className="px-5 flex items-center"
        >
          <div className="flex gap-x-4">
            <p>{dayjs().format("YYYY")}</p>
            Sahopay
          </div>
        </Layout.Footer> */}
      </Layout>
    </Layout>
  );
};
export default Index;
