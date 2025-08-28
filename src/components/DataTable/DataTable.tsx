import React, { useState } from 'react';
import { DataTableProps } from './DataTable.types';
import clsx from 'clsx';

export function DataTable<T>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSelectRow = (row: T) => {
    let newSelection = [];
    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      newSelection = selectable === 'single' ? [row] : [...selectedRows, row];
    }
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!data.length) return <div className="p-4 text-center">No data available</div>;

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          {selectable && <th className="p-2 border-b" />}
          {columns.map((col) => (
            <th key={col.key} className="p-2 border-b text-left">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className={clsx(
              'hover:bg-gray-100 cursor-pointer',
              selectedRows.includes(row) && 'bg-blue-100'
            )}
            onClick={() => selectable && handleSelectRow(row)}
          >
            {selectable && (
              <td className="p-2 border-b">
                <input type="checkbox" checked={selectedRows.includes(row)} readOnly />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2 border-b">
                {row[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
