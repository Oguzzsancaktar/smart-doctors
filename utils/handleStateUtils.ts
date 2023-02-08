import { FormElement } from '@nextui-org/react';

export const handleInputChange = (
  event: React.ChangeEvent<FormElement>,
  currentState: any,
  setFormState: any
) => {
  const { name, value } = event.target;
  setFormState({ ...currentState, [name]: value });
};
