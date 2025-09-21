import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import data from '@/constants/data';
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

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
        filterFn: "arrIncludesSome", // matches any selected value
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => {
            const isExpense = (row.getValue('type')) === 'Expense';
            return <Badge variant={isExpense && 'destructive'}>{row.getValue('type')}</Badge>
        },
        enableSorting: false,
        filterFn: 'equalsString', //exact match
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

// demonstrates the use of Custom UI's to apply filters differently for each columns
const Chapter2c = () => {

    const [columnFilters, setColumnFilters] = useState([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: { columnFilters },
        onColumnFiltersChange: setColumnFilters,
    });

    const categoryColumn = table.getColumn('category');
    const selectedColumnArr = categoryColumn.getFilterValue() ?? [];

    const handleCategoryChange = (value, checked) => {
        const updated_values = checked ? [...selectedColumnArr, value] : selectedColumnArr.filter(v => v !== value);
        categoryColumn.setFilterValue(updated_values);
        // here updated_values is a arr, but tanstack expects string to compare with each column value by using filterValue.toLowerCase(). This will cause an error because array can't be converted to lowercase; To fix this, modify the column filterFn to arrIncludes or arrIncludesSome 
    };

    return (
        <>
            <h2 className='text-center my-3'>Module 3: Custom Filter UI</h2>
            {/* here i am skipping debounce part because that was a smaller one function code, and will use later*/}
            <div className='my-3 flex gap-5 items-center'>
                <div>
                    <Select aria-labelledby='type-select' value={table.getColumn('type').getFilterValue() ?? ""} onValueChange={(value) => table.getColumn('type').setFilterValue(value)}>
                        <SelectTrigger>
                            <SelectValue placeholder='select type' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Transaction Type</SelectLabel>
                                <SelectItem value='income'>Income</SelectItem>
                                <SelectItem value='expense'>Expense</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex gap-5'>
                    <h4 className='font-medium'>Select Categories to display:</h4>
                    <div>
                        <Checkbox id='food' checked={selectedColumnArr.includes('Food')} onCheckedChange={(checked) => handleCategoryChange('Food', checked)} />
                        <label htmlFor="food" className='ml-2'>Food</label>
                    </div>
                    <div>
                        <Checkbox id='shopping' checked={selectedColumnArr.includes('Shopping')} onCheckedChange={(checked) => handleCategoryChange('Shopping', checked)} />
                        <label htmlFor="shopping" className='ml-2'>Shopping</label>
                    </div>
                    <div>
                        <Checkbox id='entertainment' checked={selectedColumnArr.includes('Entertainment')} onCheckedChange={(checked) => handleCategoryChange('Entertainment', checked)} />
                        <label htmlFor="entertainment" className='ml-2'>Entertainment</label>
                    </div>
                    <div>
                        <Checkbox id='utilities' checked={selectedColumnArr.includes('Utilities')} onCheckedChange={(checked) => handleCategoryChange('Utilities', checked)} />
                        <label htmlFor="utilities" className='ml-2'>Utilities</label>
                    </div>
                </div>
                <div>
                    {table.getState().columnFilters.length > 0 && <Button variant='destructive' onClick={() => table.resetColumnFilters()}>Reset Filters</Button>}
                </div>
            </div>

            {/* table */}
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

export default Chapter2c;