/** @format */

import type { AliasToken } from "antd/es/theme/interface";

export const getTitleConfig = (title: string | undefined, token: AliasToken): ApexCharts.ApexOptions["title"] => {
  const align = "center";

  return {
    text: title || "",
    align: align,
    margin: 20,
    style: {
      fontSize: `${token.fontSizeHeading4}px`,
      fontWeight: "bold",
      color: token.colorText,
    },
  };
};
