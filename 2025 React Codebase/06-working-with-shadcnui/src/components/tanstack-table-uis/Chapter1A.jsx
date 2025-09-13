import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import data from '@/constants/data';
import { Badge } from '../ui/badge';
import { Trash2 } from 'lucide-react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const getColumns = (setState) => {
    // columns for tanstack table
    return [
        {
            accessorKey: 'label',
            header: 'Label',
            enableHiding: false,
        },
        {
            accessorKey: 'date',
            header: 'Date',
        },
        {
            accessorKey: 'category',
            header: 'Category',
        },
        {
            accessorKey: 'type',
            header: 'Type',
            cell: ({ row }) => {
                const expense_type = row.getValue('type');
                const isExpense = expense_type === 'Expense';
                return <div style={{ fontWeight: 'bold', color: isExpense ? 'crimson' : 'green' }}>{expense_type}</div>
            },
            enableSorting: false,
        },
        {
            accessorKey: 'amount',
            header: () => <div className='text-right'>Amount</div>,
            cell: ({ row }) => {
                const amount = row.getValue('amount');
                const expense_type = row.getValue('type');
                return (<div className='text-right font-medium' style={{ color: expense_type === 'Expense' ? 'crimson' : 'green' }}>
                    <span className='me-0.5'>{expense_type === 'Expense' ? '-' : '+'}</span>
                    {amount}
                </div>)
            },
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row }) => {
                const deleteEntry = () => {
                    const id = row?.original?.id; // here we can't use row.getValue('id') because it will return undefined if we never defined accessorKey: 'id' in columns definition, the row.getValue() finds value from column definition not in data.

                    // let's delete the specific data
                    setState((prev_entry) => prev_entry.filter((entry) => entry?.id !== id)); // This will return the rows or objects whose id is not matched with id variable..
                };
                return <Badge variant='destructive' style={{ cursor: 'pointer' }} onClick={deleteEntry}><Trash2 /></Badge>;
            },
            enableHiding: false,
            enableSorting: false,
        },
    ];
};

// Lets create a React state of data and perform deletion on it
const Chapter1A = () => {
    const [tabledata, setTableData] = React.useState(data); // converting static data into React state variable

    const columns = React.useMemo(() => getColumns(setTableData), [setTableData]); // getting columns from getColumns() function by passing setter method to this, and memoize it so that while Chapter1A() component re-renders this will stay as it is [it's reference will stay remain same in all cases until the setter_method changes]

    const table = useReactTable({
        data: tabledata,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <h1>Chapter 1A Convert Create a Table with React State as var, then perform delete operation on it</h1>

            <div className='my-4'>
                <Table>
                    <TableCaption>The Data is showcases a Expenses of user by TanStack Table</TableCaption>
                    <TableHeader>
                        {table?.getHeaderGroups()?.map((header_group) => (
                            <TableRow key={header_group?.id}>
                                {header_group?.headers?.map((header) => (
                                    <TableHead key={header.id}>
                                        {header?.isPlaceholder ? null : flexRender(header?.column?.columnDef?.header, header?.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table?.getRowModel()?.rows?.length ?
                            table?.getRowModel()?.rows?.map((row) => (
                                <TableRow key={row?.id}>
                                    {row?.getVisibleCells()?.map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell?.column?.columnDef?.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )) : (<TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>No results.</TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Chapter1A;