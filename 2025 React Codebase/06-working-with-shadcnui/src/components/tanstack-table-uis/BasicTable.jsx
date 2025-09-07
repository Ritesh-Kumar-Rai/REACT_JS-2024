import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";

import STUDENTS from "../../constants/STUDENTS.json";
import { useState } from "react";

const default_columns = [
    {
        accessorKey: "firstName",
        header: "Name",
        cell: (props) => {
            const row = props.row.original;
            return <div className="px-2">{`${row.firstName} ${row.middleName} ${row.lastName}`}</div>;
        },
        size: 200,
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone Number",
        cell: (props) => <div style={{ fontWeight: 'bold', color: 'rgb(100,0,0)' }}>{props.getValue()['1'] || props.getValue()['2']}</div>
    },
    {
        accessorKey: "date_of_birth",
        header: "DOB",
        cell: (props) => <span className="w-full block text-center">{new Date(props.getValue()).toLocaleDateString()}</span>,
        size: 200,
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: (props) => `${props.getValue()?.street}, ${props.getValue()?.city}, ${props.getValue()?.state} `,
        size: 500,
    }
];

const BasicTable = () => {

    const [data, setData] = useState([...STUDENTS]);
    const [columns, setColumns] = useState([...default_columns]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(table.getHeaderGroups());

    return (
        <section>
            <h1>TanStack Table</h1>
            <table className="border shadow-lg" align="center" style={{ width: table.getTotalSize(), margin: 'auto', marginBlock: '2rem' }}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup}>
                            {headerGroup.headers.map((header) => <th key={header.id} className="p-1" style={{ width: header.getSize() }}>{header.column.columnDef.header}</th>)}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default BasicTable;