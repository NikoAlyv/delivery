import React, {useCallback} from 'react';
import {IInput, Input} from './Input';
import {Controller, ControllerProps} from 'react-hook-form';

interface IInputController extends IInput, Omit<ControllerProps, 'render'> {
  control: any;
  disabledControl?: boolean;
  manipulator?: 'cardNumber' | 'otherManipulator';
}

export const InputControlled: React.FC<IInputController> = ({
  name,
  control,
  defaultValue = '',
  rules,
  setValue,
  disabled,
  disabledControl,
  ...inputProps
}) => {
  return (
    <Controller
      control={control}
      name={name as string}
      rules={rules}
      defaultValue={defaultValue}
      render={({field}) => (
        <Input
          disabled={disabled || disabledControl}
          setValue={field.onChange}
          value={field.value}
          onBlur={field.onBlur}
          {...inputProps}
        />
      )}
    />
  );
};
