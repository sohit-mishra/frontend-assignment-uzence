import { useState } from 'react';
import type { DataTableProps } from './DataTable.types';
import clsx from 'clsx';

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSelectRow = (row: T) => {
    let newSelection: T[] = [];

    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      if (selectable === 'single') {
        newSelection = [row];
      } else {
        newSelection = [...selectedRows, row];
      }
    }

    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  if (!data.length) {
    return <div className="p-4 text-center text-gray-500">No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {selectable && <th className="p-3 w-6" />}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(
                'hover:bg-gray-100 cursor-pointer',
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                selectedRows.includes(row) && 'bg-blue-100'
              )}
              onClick={() => selectable && handleSelectRow(row)}
            >
              {selectable && (
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    readOnly
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-gray-700">
                  {row[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { DataTableProps, Column } from './DataTable.types';
