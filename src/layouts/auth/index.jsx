import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../../assets/auth-bg.jpeg";
import { Layout } from "antd";
import clsx from "clsx";
const Index = () => {
  return (
    <Layout
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Layout.Content className="flex justify-center items-center">
        <div className="flex-grow">
          <div className="flex justify-center items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="80"
              className={clsx("transition-all duration-300 ", "fill-[#b937de]")}
              height="50"
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
            <h1 className="text-4xl font-bold text-[#b937de]">
              Saho<span className="text-[#fff]">Pay</span>
            </h1>
          </div>
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Index;
