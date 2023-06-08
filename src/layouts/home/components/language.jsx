import React, { useEffect, useState } from "react";
import { filter, get, isEqual, map, toLower } from "lodash";
import clsx from "clsx";
import { useSettingsStore } from "../../../store";
import storage from "../../../services/storage";
import { FlagRus, FlagUsa, FlagUzb } from "../../../assets";

const languages = [
  {
    id: 3213123,
    title: "Uz",
    code: "uz",
    icon: FlagUzb,
  },
  {
    id: 3123142,
    title: "EN",
    code: "en",
    icon: FlagUsa,
  },
  {
    id: 1234123,
    title: "RU",
    code: "ru",
    icon: FlagRus,
  },
];

const Language = ({ main }) => {
  const [isOpenLanguage, setOpenLanguage] = useState(false);
  const language = useSettingsStore((state) => get(state, "lang"));
  const setLanguage = useSettingsStore((state) =>
    get(state, "setLang", () => {})
  );
  const [activeLanguage, setActiveLanguage] = useState({
    id: 123213,
    title: "O'z",
    code: "uz",
    icon: FlagUzb,
  });
  const changeLang = (code) => {
    setLanguage(code);
    storage.set(language, code);
  };

  useEffect(() => {
    changeLang(toLower(get(activeLanguage, "title")));
  }, [activeLanguage]);

  return (
    <div
      className={clsx(
        "flex items-center cursor-pointer relative px-4 py-2 gap-1 bg-gray-100 rounded-md"
      )}
      onClick={() => setOpenLanguage((prevState) => !prevState)}
    >
      <img
        src={get(activeLanguage, "icon")}
        alt={"Image Flag"}
        className={"rounded-md w-6 h-6 block"}
      />
      <span className={clsx("flex items-center")}>
        {get(activeLanguage, "title", "")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
      <div
        className={clsx(
          "absolute top-full translate-y-1 bg-white w-full left-0 z-40  shadow-2xl rounded-2xl transition-all duration-500",
          isOpenLanguage ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className={"flex flex-col items-center"}>
          {map(
            filter(
              languages,
              (lang) =>
                !isEqual(get(lang, "title"), get(activeLanguage, "title"))
            ),
            (value) => (
              <li
                className={
                  "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLanguage(value);
                }}
              >
                <img
                  src={get(value, "icon")}
                  alt={"Image Flag"}
                  className={"rounded-md w-6 h-6"}
                />
                <span className={"hidden md:block"}>{get(value, "title")}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default Language;
