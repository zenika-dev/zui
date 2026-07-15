import { ReactNode } from "react";
import { Checkbox as AntdCheckbox, CheckboxChangeEvent } from "antd";

export interface CheckboxProps {
  children?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
}

export function Checkbox({
  children,
  checked,
  defaultChecked,
  onChange,
  disabled,
  indeterminate,
}: CheckboxProps) {
  const handleChange = (e: CheckboxChangeEvent) => {
    onChange?.(e.target.checked);
  };

  return (
    <AntdCheckbox
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange ? handleChange : undefined}
      disabled={disabled}
      indeterminate={indeterminate}
    >
      {children}
    </AntdCheckbox>
  );
}
