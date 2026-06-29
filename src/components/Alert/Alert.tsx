/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { Alert as AntdAlert, AlertProps as AntdAlertProps, ConfigProvider, theme } from "antd";
import { CheckCircleOutlined, CheckCircleTwoTone, CloseCircleOutlined, CloseCircleTwoTone, ExclamationCircleOutlined, ExclamationCircleTwoTone, InfoCircleOutlined, InfoCircleTwoTone } from "@ant-design/icons";

export interface AlertProps {
  title: ReactNode;
  type?: "info" | "success" | "warning" | "error" | "general";
  description?: ReactNode;
  customIcon?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
  banner?: boolean;
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
}

export function Alert({
  title,
  type,
  description,
  customIcon,
  showIcon = true,
  closable,
  onClose,
  banner,
}: AlertProps) {
  const closableProps: AntdAlertProps["closable"] = closable ? 
    { closeIcon: true, onClose, 'aria-label': 'close' } 
    : undefined;
  const alertIcon = customIcon ? customIcon : type ? iconMap[type] : undefined;

  return (
    <ConfigProvider theme={{
      components: {
        // Alert: {
        //   colorErrorBg: red1,
        //   colorErrorBorder: red3,
        //   colorInfoBg: blue1,
        //   colorInfoBorder: blue3,
        //   colorSuccessBg: green1,
        //   colorSuccessBorder: green3,
        //   colorWarningBg: orange1,
        //   colorWarningBorder: orange3,
        //   borderRadiusLG: 2,
        // }
      }
    }}>
      <AntdAlert
        title={title}
        type={typeMap[type]}
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
      />
    </ConfigProvider>
  );
}
