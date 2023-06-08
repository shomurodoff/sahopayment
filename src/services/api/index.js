import axios from "axios";
import { get, isEqual } from "lodash";
import NProgress from "nprogress";
import storage from "../storage";
import config from "../../config";
import Swal from "sweetalert2";
import i18next from "i18next";

NProgress.configure({
  showSpinner: true,
  trickleRate: 0.02,
  trickleSpeed: 400,
  easing: "ease",
  speed: 200,
});

const request = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});

request.interceptors.request.use(
  (config) => {
    NProgress.inc();
    const token = get(JSON.parse(storage.get("settings")), "state.token", null);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    NProgress.done(true);
    console.log(error);
  }
);

request.interceptors.response.use(
  (response) => {
    NProgress.done(true);
    return response;
  },
  (error) => {
    const statusCode = error.response.status;
    if (isEqual(statusCode, 401)) {
      Swal.fire({
        position: "center",
        icon: "error",
        backdrop: "rgba(0,0,0,0.9)",
        background: "none",
        title: i18next.t("Your token was expired. Please log in again !!! "),
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#13D6D1",
        confirmButtonText: i18next.t("Log out"),
        customClass: {
          title: "title-color",
        },
      }).then((result) => {
        window.localStorage.clear();
        window.location.reload();
      });
    }
    // if (isEqual(statusCode, 401)) {
    //   Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     backdrop: "rgba(0,0,0,0.9)",
    //     background: "none",
    //     title: i18next.t("Your token was expired. Please log in again !!! "),
    //     showConfirmButton: true,
    //     showCancelButton: false,
    //     confirmButtonColor: "#d33",
    //     cancelButtonColor: "#13D6D1",
    //     confirmButtonText: i18next.t("Log out"),
    //     customClass: {
    //       title: "title-color",
    //     },
    //   }).then((result) => {
    //     window.localStorage.clear();
    //     window.location.reload();
    //   });
    // }
    // if (statusCode == 500) {
    //   if (!includes(error?.config?.url, "user")) {
    //     Swal.fire({
    //       position: "center",
    //       icon: "error",
    //       backdrop: "rgba(0,0,0,0.9)",
    //       background: "none",
    //       title: i18next.t("Sorry, Server is not working"),
    //       showConfirmButton: true,
    //       showCancelButton: true,
    //       confirmButtonColor: "#d33",
    //       cancelButtonColor: "#13D6D1",
    //       confirmButtonText: i18next.t("Log out"),
    //       cancelButtonText: i18next.t("Cancel"),
    //       customClass: {
    //         title: "title-color",
    //       },
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         window.localStorage.clear();
    //         window.location.reload();
    //       }
    //     });
    //   }
    // }
    NProgress.done(true);
    return Promise.reject(error);
  }
);

export { request };
