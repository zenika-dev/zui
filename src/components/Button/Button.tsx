import { ReactNode, MouseEventHandler, CSSProperties } from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps, ConfigProvider, theme, ThemeConfig } from 'antd';

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  size?: "small" | "middle" | "large" | "xlarge";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPlacement?: AntdButtonProps["iconPlacement"]
  htmlType?: "button" | "submit" | "reset";
  round?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const variantMap: Record<
  NonNullable<ButtonProps["variant"]>,
  "primary" | "default" | "link"
> = {
  primary: "primary",
  secondary: "default",
  link: "link",
};

const xlButtonTheme: ThemeConfig = {
  components: {
    Button: {
      paddingInlineLG: 128,
    }
  }
};

export function Button({
  children,
  variant = "primary",
  size = "middle",
  disabled,
  loading,
  htmlType = "button",
  icon,
  iconPlacement,
  round,
  onClick,
}: ButtonProps) {
  const isSizeXL = size === "xlarge";
  const sizeValue = isSizeXL ? "large" : size;
  return (
    <ConfigProvider theme={isSizeXL ? xlButtonTheme : undefined}>
      <AntdButton
        type={variantMap[variant]}
        size={sizeValue}
        disabled={disabled}
        loading={loading}
        htmlType={htmlType}
        icon={icon}
        iconPlacement={iconPlacement}
        onClick={onClick}
        shape={round ? "round" : "default"}
      >
        {children}
      </AntdButton>
    </ConfigProvider>
  );
}
