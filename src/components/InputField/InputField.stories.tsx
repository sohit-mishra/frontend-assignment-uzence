import type { Meta, StoryFn } from '@storybook/react';
import { InputField } from './InputField';
import type { InputFieldProps } from './InputField.types';


const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter username',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'We will never share your email.',
  errorMessage: 'Invalid email address',
  invalid: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  label: 'Username',
  placeholder: 'Loading...',
  disabled: true,
};
