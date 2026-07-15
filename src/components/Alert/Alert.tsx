/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { Alert as AntdAlert, AlertProps as AntdAlertProps, ConfigProvider, theme, ThemeConfig, Button as AntdBtn } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, CloseOutlined, ExclamationCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { neutral } from "../../tokens";

export interface AlertProps {
  title: ReactNode;
  type?: "info" | "success" | "warning" | "error" | "general";
  description?: ReactNode;
  customIcon?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
  banner?: boolean;
  action?: ReactNode;
}

const iconMap: Record<
  NonNullable<AlertProps["type"]>,
  ReactNode
> = {
  info: <InfoCircleOutlined color="blue5" />,
  success: <CheckCircleOutlined color="green3"/>,
  warning: <ExclamationCircleOutlined color="orange3"/>,
  error: <CloseCircleOutlined color="red5"/>,
  general: undefined,
};

const typeMap: Record<
  NonNullable<AlertProps["type"]>,
  "info" | "success" | "warning" | "error"
> = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  general: "info",
};
const generalAlertTheme: ThemeConfig = {
  components: {
    Alert: {
      colorInfoBg: neutral[50],
    }
  }
};

const closeIcon: ReactNode = (
  <AntdBtn shape="circle" icon={<CloseOutlined />} size="small" />
);


export function Alert({
  title,
  type,
  description,
  customIcon,
  showIcon = true,
  closable,
  onClose,
  banner,
  action,
}: AlertProps) {
  const closableProps: AntdAlertProps["closable"] = closable ? 
    { 
      closeIcon, 
      onClose, 'aria-label': 'close' 
    } : undefined;
  const alertIcon = customIcon ? customIcon : type ? iconMap[type] : undefined;
  const alertType = type ? typeMap[type] : undefined;

  return (
    <ConfigProvider theme={type === "general" ? generalAlertTheme : undefined}>
      <AntdAlert
        title={title}
        type={alertType}
        description={description}
        icon={alertIcon}
        closable={closableProps}
        showIcon={showIcon}
        banner={banner}
        styles={{
          title: {
            fontWeight: 600,
          },
        }}
        action={action}
      />
    </ConfigProvider>
  );
}
