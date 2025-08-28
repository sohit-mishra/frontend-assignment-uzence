import { Meta, Story } from '@storybook/react';
import { InputField, InputFieldProps } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

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
