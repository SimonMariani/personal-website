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

export const getTooltipConfig = (token: AliasToken): ApexCharts.ApexOptions["tooltip"] => {
  return {
    enabled: true,
    style: {
      fontSize: `${token.fontSize}px`,
    },
    theme: "dark",
    y: {
      formatter: percentageFormatter,
    },
  };
};

export const getToolbarConfig = (): NonNullable<ApexCharts.ApexOptions["chart"]>["toolbar"] => {
  return {
    show: false,
    tools: {
      download: true,
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      reset: true,
    },
  };
};

export const getThemeConfig = (token: AliasToken, shadeIntensity?: number): ApexCharts.ApexOptions["theme"] => {
  return {
    monochrome: {
      enabled: true,
      shadeTo: "light",
      shadeIntensity: shadeIntensity || 0.5,
      color: token.colorPrimary,
    },
  };
};

export const percentageFormatter = (value: number): string => {
  return value + "%";
};
