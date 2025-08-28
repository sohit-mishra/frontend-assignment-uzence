import { Meta, Story } from '@storybook/react';
import { DataTable, DataTableProps } from './DataTable';

interface User {
  id: number;
  name: string;
  email: string;
}

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const Template: Story<DataTableProps<User>> = (args) => <DataTable {...args} />;

const sampleData: User[] = [
  { id: 1, name: 'Alice', email: 'alice@test.com' },
  { id: 2, name: 'Bob', email: 'bob@test.com' },
];

const columns = [
  { key: 'id', title: 'ID', dataIndex: 'id' },
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns,
};

export const Selectable = Template.bind({});
Selectable.args = {
  data: sampleData,
  columns,
  selectable: true,
};
