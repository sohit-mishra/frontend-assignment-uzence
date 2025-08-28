import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';
import type { Column } from './DataTable.types';

interface User {
  id: number;
  name: string;
}

const data: User[] = [{ id: 1, name: 'Alice' }];

const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id' },
  { key: 'name', title: 'Name', dataIndex: 'name' },
];

describe('DataTable', () => {
  test('renders table with data', () => {
    render(<DataTable<User> data={data} columns={columns} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('renders empty state', () => {
    render(<DataTable<User> data={[]} columns={columns} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
