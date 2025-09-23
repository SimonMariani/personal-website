/** @format */

const config = {
  apiURL: process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://api.simonmariani.com/",
};

export const { apiURL } = config;
