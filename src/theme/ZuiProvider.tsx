import React from "react";
import { ConfigProvider } from "antd";
import { zuiTheme } from "./zuiTheme";

interface ZuiProviderProps {
  children: React.ReactNode;
}

export function ZuiProvider({ children }: ZuiProviderProps) {
  return <ConfigProvider theme={zuiTheme}>{children}</ConfigProvider>;
}
