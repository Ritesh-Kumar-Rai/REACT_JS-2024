import React from 'react';
import data from '@/constants/data';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import GetTableCustomColumn from './GetTableCustomColumn';
import { Button } from '../ui/button';

const columns = [
    {
        accessorKey: 'label',
        header: (props) => {
            return <GetTableCustomColumn column={props.column} title='Label' />
        },
        enableHiding: false,
    },
    {
        accessorKey: 'date',
        sortingFn: 'datetime',
        header: (props) => <GetTableCustomColumn column={props.column} title='Date' />,
    },
    {
        accessorKey: 'category',
        header: ({ column }) => <GetTableCustomColumn column={column} title='Category' />,

    },
    {
        accessorKey: 'type',
        header: (props) => <GetTableCustomColumn column={props.column} title='Type' />,
        cell: ({ row }) => {
            const isExpense = (row.getValue('type')) === "Expense";
            return <div style={{ color: isExpense ? 'crimson' : 'green', fontWeight: 'bold' }}>{row.getValue('type')}</div>
        },
        enableSorting: false,
    },
    {
        accessorKey: 'amount',
        header: (props) => <GetTableCustomColumn column={props.column} title='Amount' />,
        cell: ({ row }) => {
            const obj = row.original;
            const money_type = obj.type;
            const isExpense = money_type === 'Expense';
            return <div style={{ color: isExpense ? 'crimson' : 'green', fontWeight: 'bold' }}>₹{obj.amount}</div>
        },
    },
];

const Chapter1B = () => {

    const [sorting, setSorting] = React.useState([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
        onSortingChange: setSorting,
    });

    const sortingState = table?.getState().sorting;
    console.log(table?.getState());// contains state also [which we can get by getState()]
    console.log(table);// which contains setter methods also for state
    // [So, to get a state use table.getState() and to modify the state use table.setterMethod(value) which changes the value of state]

    // table?.setSorting for modifying sorting state

    return (
        <>
            <h1 className='text-center'>Chapter 1B: Making Column Sortable with Tanstack (getSortedRowModel())</h1>

            {sortingState.length > 0 && <div className='max-w-7xl m-auto my-4 flex justify-end'>
                <Button variant='secondary' className='bg-red-400' onClick={() => table?.setSorting([])}>Reset Sorted Columns</Button>
            </div >}

            <div className='m-auto my-4 max-w-7xl overflow-y-auto rounded-md border shadow-md'>
                <Table>
                    <TableCaption>The above table demonstrates the Tanstack Sorting functionality.</TableCaption>
                    <TableHeader>
                        {table.getHeaderGroups().map((header_group) => (
                            <TableRow key={header_group.id}>
                                {header_group.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length > 0 ?
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )) :
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center font-medium'>
                                    No results.
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Chapter1B;