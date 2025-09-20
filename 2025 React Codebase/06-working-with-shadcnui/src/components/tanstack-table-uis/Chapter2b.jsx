import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import data from "@/constants/data";
import { useState } from "react";

const columns = [
    {
        accessorKey: 'id',
        id: 'id',
        header: 'ID',
        enableGlobalFilter: false,
        enableHiding: false,
    },
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
            const isExpense = (row.getValue('type')) === 'Expense';
            return <Badge variant={isExpense && 'destructive'}>{row.getValue('type')}</Badge>
        },
        enableSorting: false,
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => {
            const isExpense = (row.getValue('type')) === 'Expense';
            return <Badge variant={isExpense ? 'destructive' : 'default'} >{isExpense ? '-' : '+'} ₹ {row.getValue('amount')}</Badge>
        },
    }
];

// module 2 includes how to enable global search or filtering [means the tanstack will find text to all columns]
const Chapter2b = () => {

    const [globalFilter, setGlobalFilter] = useState(''); // when we pass string instead of array to state then the tanstack will automatically starts searching globally [to all columns]


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: { globalFilter },
        onGlobalFilterChange: setGlobalFilter,
    });

    return (
        <>
            <h2 className="text-center my-3">Module 2: Global Filtering</h2>
            <div className="flex gap-2 items-center w-4xl m-auto">
                <Input type='text' style={{ fontSize: 'large' }} placeholder="search globally..." value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} />
                {globalFilter.length > 0 && <Button variant='outline' className='border-2 border-red-400' onClick={() => setGlobalFilter('')}>Reset Search</Button>}
                {globalFilter.length > 0 && <span className="font-medium text-nowrap">{table?.getFilteredRowModel()?.rows?.length} search results found.</span>}
            </div>
            <div className="max-w-7xl m-auto my-5 rounded-md border">
                <Table>
                    <TableCaption>The above table data example is taken from expense tracker app data.</TableCaption>
                    <TableHeader>
                        {table?.getHeaderGroups()?.map((header_group) => (
                            <TableRow key={header_group?.id}>
                                {header_group?.headers?.map((header) => (
                                    <TableHead key={header?.id}>
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
                                        <TableCell key={cell?.id}>
                                            {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                            : <TableRow>
                                <TableCell colSpan={columns?.length} className='h-24 text-center font-medium'>
                                    No results to show.
                                </TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Chapter2b;

/* 🧠 Important Distinction
columnFilters → expects an array of { id, value } → filters specific columns

globalFilter → expects a string → filters all columns using shared logic

📌 TanStack Table knows which filtering mode to apply based on the shape of the state.
*/