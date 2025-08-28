import type { Meta, StoryFn } from '@storybook/react';
import { DataTable } from './DataTable';
import type { DataTableProps, Column } from './DataTable.types';

interface User {
  id: number;
  name: string;
  email: string;
}

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta<DataTableProps<User>>;

const Template: StoryFn<DataTableProps<User>> = (args: DataTableProps<User>) => (
  <DataTable {...args} />
);

const sampleData: User[] = [
  { id: 1, name: 'Alice', email: 'alice@test.com' },
  { id: 2, name: 'Bob', email: 'bob@test.com' },
];

const columns: Column<User>[] = [
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


export const EmptyState = Template.bind({});
EmptyState.args = {
  data: [],
  columns,
};


export const LoadingState = Template.bind({});
LoadingState.args = {
  data: [],
  columns,
  loading: true,
};
