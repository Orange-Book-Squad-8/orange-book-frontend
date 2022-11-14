import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { CheckBoxContainer, Input, Label } from './index';

interface ICheckBoxProps {
  name: string;
  defaultChecked: boolean;
  label: string;
  altLabel: string;
  changeHandler?: ChangeEventHandler;
}

function CheckBox(props: ICheckBoxProps) {
  const {
    name,
    defaultChecked,
    label,
    altLabel,
    changeHandler,
    ...otherProps
  } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const checkboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    changeHandler && changeHandler(e);
  };

  return (
    <CheckBoxContainer>
      <Input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        checked={checked !== undefined ? checked : defaultChecked}
        onChange={checkboxChangeHandler}
      />

      <Label htmlFor={name}>
        {checked !== undefined
          ? checked
            ? label
            : altLabel
          : defaultChecked
          ? label
          : altLabel}
      </Label>
    </CheckBoxContainer>
  );
}

export default CheckBox;
