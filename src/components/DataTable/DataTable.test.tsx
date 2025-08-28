import { render, screen } from '@testing-library/react';
import { DataTable } from './DataTable';

const data = [{ id: 1, name: 'Alice' }];
const columns = [{ key: 'id', title: 'ID', dataIndex: 'id' }];

test('renders table with data', () => {
  render(<DataTable data={data} columns={columns} />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
});
