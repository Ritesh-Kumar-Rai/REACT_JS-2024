import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import data from "@/constants/data";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

// Creating columns for table [This is about how to render and display data on a table, and do some customisations/manipulations on it]
const columns = [
    {
        accessorKey: "label", // This is responsible of how the Tanstack will trace and find the column_name or data from DataStructures.
        header: "Label", // This is responsible of how and what to display to table column as header.
        enableHiding: false, // This ensures the column will not support hiding functionality [applies to each row]
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "category",
        header: "Header",
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => {
            const money_type = row.getValue('type');
            const isExpense = Boolean((money_type === "Expense"));

            return (<Badge variant={isExpense ? 'destructive' : 'outline'} style={{
                backgroundColor: !isExpense && '#008000b3',
                color: 'white'
            }}>{money_type}</Badge>);
        },
        enableSorting: false,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Header</div>,
        cell: ({ row }) => {
            console.warn(row);
            const type = row?.original?.type;
            return <div className="text-right font-medium"
                style={{ color: type === 'Expense' ? 'crimson' : 'green' }}
            ><span className="font-bold me-0.5">{type === "Expense" ? '-' : '+'}</span>₹{row.getValue('amount')}</div>;
        },
    },

];

/* Note: The above columns the property header and cell supports function as value which accepts row,table,column props as metadata which was passed from flexRender() method [prabably from 2nd args getContext() wala.] 
2 -> cell property is for rows optional custom rendering logic
*/

const Chapter1 = () => {

    const table = useReactTable({
        data, // core data which contains all fields and value (Array of Objects) [{..},{..},{..}, ...}]
        columns, // predefined columns for Column which helps Tanstack render and calculate the data which will helpful for the logic(sorting,filtering,custom tunnings) + display + render parts of data to table
        getCoreRowModel: getCoreRowModel(), // 
    }); // This is the main hook from TanStack which will initialise the Table and returns table_instance which has various methods or properties like getHeaderGroups, getRowModel(), etc.

    return (
        <>
            <h1 className="text-center">Tanstack Chapter 1 Overview to Creating Columns, Rendering Rows/Columns & related methods: </h1>
            <p>The Tanstack table includes following hook and methods/features: </p>
            <div className="mx-2">
                <ul className="list-disc">
                    <li>
                        useReactTable
                        <p>Which accepts:</p>
                        <ul className="ml-4" style={{ listStyle: 'inside' }}>
                            <li>data: row data</li>
                            <li>columns: columns like headers</li>
                            <li>getCoreRowModel: the base logic</li>
                        </ul>
                    </li>
                    <li>
                        The useReactTable returns the <mark>table instance</mark> with methods like:
                        <ul style={{ listStyle: 'inside' }}>
                            <li>getHeaderGroups() -&gt; for rendering headers</li>
                            <li>getRowModel().rows -&gt; for rendering rows</li>
                            <li>Syntax:
                                <code>
                                    {`
                                    const table = useReactTable({
                                        data,
                                        columns,
                                    getCoreRowModel: getCoreRowModel(),
                                    })
                                `}
                                </code>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="my-4 max-w-7xl m-auto overflow-y-auto rounded-md border">
                <Table>
                    <TableCaption>The list of data is for mocking Expense Tracker App</TableCaption>
                    <TableHeader>
                        {table?.getHeaderGroups()?.map((header_group) => (
                            <TableRow key={header_group.id}>
                                {header_group?.headers?.map((header) => (
                                    <TableHead key={header.id}>
                                        {header?.isPlaceholder ? null : flexRender(header?.column?.columnDef?.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table?.getRowModel()?.rows?.length ?
                            table?.getRowModel()?.rows?.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row?.getVisibleCells()?.map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell?.column?.columnDef?.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                            :
                            (<TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Chapter1;

/* useReactTable() Hook:
*This hook is your table brain. You feed it:

    data: your rows
    columns: your definitions
    getCoreRowModel(): the base logic

    It returns a table instance with methods like:

    getHeaderGroups() → for rendering headers
    getRowModel().rows → for rendering rows
*/

/* What is header.isPlaceholder?
* TanStack Table supports grouped headers (like “User Info” spanning multiple columns).
    In those cases, some headers are just structural placeholders—they don’t render anything.

✅ Why we check it:
{header.isPlaceholder ? null : flexRender(...)}

This ensures we don’t render empty header cells that are just part of a group layout.

📌 In simple tables, you won’t see placeholders often—but it’s good practice to check.
*/

/*What is flexRender(renderable, context)?
It’s a utility from TanStack Table that renders whatever you defined in your column’s header or cell.

-It handles:
    Strings
    JSX
    Functions that return JSX

2 Args -> renderable & context
renderable -> The value from header or cell (string, JSX, or function)
context	-> The context object passed to that function (e.g., row, column, table instance)
    
*/