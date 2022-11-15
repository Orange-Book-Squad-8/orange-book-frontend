import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { CheckBoxContainer, Input, Label } from './index';
import { api } from '../../lib/axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setWatchedLesson } from '../../redux/reducers';

interface ICheckBoxProps {
  name: string;
  defaultChecked: boolean;
  label: string;
  altLabel: string;
  changeHandler?: ChangeEventHandler;
  lessonId: number;
}

interface watchedLesson {
  [index: string]: number[];
}

function CheckBox(props: ICheckBoxProps) {
  const {
    name,
    defaultChecked,
    label,
    altLabel,
    changeHandler,
    lessonId,
    ...otherProps
  } = props;
  const [checked, setChecked] = useState(defaultChecked);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const checkboxChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (checked) {
        await api.put('/users/unwatched', {
          lessonId,
          userId: user.id
        });
      } else {
        await api.put('/users/watched', {
          lessonId,
          userId: user.id
        });
      }
      const response = await api.get<watchedLesson>(`/users/${user.id}/lessons`);

      dispatch(setWatchedLesson(response.data));

      setChecked(!checked);

      changeHandler && changeHandler(e);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CheckBoxContainer>
      <Input
        type='checkbox'
        name={name}
        id={name}
        checked={checked !== undefined ? checked : false}
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
