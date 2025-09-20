import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import data from "@/constants/data";
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { Button } from "../ui/button";

const columns = [
    {
        accessorKey: 'label',
        header: 'Label',
        /*header: ({ column }) => {
            return (
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Label</span>
                    <input type="text"
                        placeholder="Filter..."
                        value={column.getFilterValue() ?? ""}
                        onChange={e => column.setFilterValue(e.target.value)}
                        className="h-8 text-sm"
                    />
                </div>
            );
        }, // To make search input inside column header */
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
        enableSorting: false,
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
    },
];


// This Chapter2a covers the module 1 of Chapter 2 which is "Column Filtering Basics"
const Chapter2a = () => {

    const [columnFilters, setColumnFilters] = useState([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: { columnFilters },
        onColumnFiltersChange: setColumnFilters,
    });

    const resetColumnFilter = () => {
        table?.setColumnFilters([]);
        // or 
        // table?.resetColumnFilters();
    };

    const columnLabel = table?.getColumn('label');

    return (
        <>
            <h2 className="text-center my-3">Module 1: Column Filtering Basics</h2>
            <div className="max-w-7xl m-auto rounded-md border">
                <div className="my-2 px-2 flex items-center">

                    <label htmlFor="search-label" className="me-2 font-medium">Search for Labels:</label>

                    {/* search bar for searching/filtering data */}
                    <input type="text" id="search-label" placeholder="search label..." className="outline-2 outline-gray-400 rounded-xs focus:outline-gray-700 p-1 font-medium min-w-[30%] mx-1" value={columnLabel.getFilterValue() ?? ''} onChange={(e) => columnLabel.setFilterValue(e.target.value)} />

                    {/* button for clear search inputs */}
                    {table?.getState()?.columnFilters.length > 0 && <Button variant='destructive' size='sm' className='mx-2' onClick={resetColumnFilter}> Reset Column Filters </Button>}

                    {/* total filtered/search results count */}
                    <span className="font-medium ml-2">{table?.getState()?.columnFilters.length && table?.getFilteredRowModel()?.rows.length} Search results.</span>
                </div>
                <Table>
                    <TableCaption>The Chapter 2 module 1: managing expense tracker app data to cover the basics of Column Filtering (Searching)</TableCaption>
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
                        {table?.getRowModel().rows.length ?
                            table?.getRowModel()?.rows?.map((row) => (
                                <TableRow key={row?.id}>
                                    {row?.getVisibleCells().map((cell) => (
                                        <TableCell key={cell?.id}>
                                            {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                            :
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>
                                    No results to show!
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Chapter2a;