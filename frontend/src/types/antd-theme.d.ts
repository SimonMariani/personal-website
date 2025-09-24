/** @format */

// antd-theme.d.ts
import "antd/es/theme/interface";

// Extend the AliasToken interface to include additional values
declare module "antd/es/theme/interface" {
  interface AliasToken {
    colorSecondary?: string;
    colorTextAlternative?: string;
  }
}
