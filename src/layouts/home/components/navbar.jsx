import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Header } from "antd/es/layout/layout";
import { Button, Col, Menu, Row } from "antd";
import clsx from "clsx";
const Navbar = ({ headerSectionInView }) => {
  const [activeNavbar, setActiveNavbar] = useState("home");
  const navigate = useNavigate();
  console.log(headerSectionInView, "headerSectionInView");
  return (
    <Header
      className={clsx(
        "sticky w-full top-0 z-50 px-4 bg-transparent  transition-all duration-500",
        !headerSectionInView
          ? " shadow-md  backdrop-blur-md "
          : "backdrop-blur-xl"
      )}
    >
      <Row
        justify={"space-around"}
        className={" flex-grow items-center font-bold"}
      >
        <Col className="flex items-center">
          <ScrollLink
            spy={true}
            smooth={true}
            to="buy-crypto"
            className={clsx(
              "flex items-center gap-2  group",
              !headerSectionInView ? "text-[#000]" : "text-[#fff]",
              "hover:text-[#000]"
            )}
            duration={500}
            offset={-72}
            onClick={() => setActiveNavbar("buy-crypto")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="40"
              className={clsx(
                "transition-all duration-300 ",
                !headerSectionInView
                  ? "fill-[#b937de]"
                  : "fill-[#fff] group-hover:fill-black"
              )}
              height="30"
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
            <h2 className={clsx("text-xl")}>Sahopay</h2>
          </ScrollLink>
        </Col>
        <Col className="hidden md:flex flex-grow items-center">
          <Menu
            selectedKeys={activeNavbar}
            mode="horizontal"
            className={clsx(
              "flex flex-grow justify-center bg-transparent",
              !headerSectionInView ? "" : "text-white"
            )}
            items={[
              {
                key: "buy-crypto",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="buy-crypto"
                    duration={500}
                    offset={-72}
                    onClick={() => setActiveNavbar("buy-crypto")}
                  >
                    Buy Crypto
                  </ScrollLink>
                ),
              },
              {
                key: "features",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="features"
                    duration={500}
                    onClick={() => setActiveNavbar("features")}
                  >
                    Features
                  </ScrollLink>
                ),
              },

              {
                key: "feature",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="feature"
                    duration={500}
                    onClick={() => setActiveNavbar("feature")}
                  >
                    Feature
                  </ScrollLink>
                ),
              },

              {
                key: "about-us",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="about-us"
                    duration={500}
                    onClick={() => setActiveNavbar("about-us")}
                  >
                    About us
                  </ScrollLink>
                ),
              },

              {
                key: "testimonials",
                label: (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    to="testimonials"
                    duration={500}
                    onClick={() => setActiveNavbar("testimonials")}
                  >
                    Testimonials
                  </ScrollLink>
                ),
              },
            ]}
          />
        </Col>
        <Col className="flex items-center gap-2">
          <Button
            className={clsx(
              "px-[24px] text-[#000] shadow-sm rounded-[80px] hover:bg-purple-600 hover:text-[#fff] transition-all duration-300",
              !headerSectionInView ? "bg-[#b937de]" : "bg-white"
            )}
            onClick={() => navigate("/auth/login")}
            type="primary"
          >
            Cabinet
          </Button>
          <Button
            className="border-[#c51f4d] md:hidden"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#c51f4d"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 stroke-red-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            }
          />
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
