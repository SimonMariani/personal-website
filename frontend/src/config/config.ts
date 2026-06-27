/** @format */

const config = {
  apiURL: import.meta.env.MODE === "development" ? "http://localhost:8000" : "https://api.simonmariani.com",
  formSpreeId: "mbdvonek",
};

export const { apiURL, formSpreeId } = config;
