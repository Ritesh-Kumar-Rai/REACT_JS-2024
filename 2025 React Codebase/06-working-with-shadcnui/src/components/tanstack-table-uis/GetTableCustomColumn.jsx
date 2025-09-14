import { ArrowDown01, ArrowUp01, ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

// This component will be responsible to generate a Column Header for table based on conditions
const GetTableCustomColumn = ({ column, title }) => {

    if (!column.getCanSort()) { // getCanSort() returns true/false whether this column supports sorting or not which we described in column definition like enableSorting: true/false
        return <span>{title}</span>
    }

    const sorting_state = column.getIsSorted(); // returns asc/desc/false[unsorted]
    // Here we can use either toggleSorting() or getToggleSortingHandler() both works same [asc -> desc -> none (unsorted)] but getToggleSortingHandler() returns DOM attachable method;

    return (
        <div>
            <Button variant='ghost' size='sm' onClick={column.getToggleSortingHandler()} title={!sorting_state ? 'unsorted' : sorting_state}>
                {title}
                {sorting_state === 'asc' && <ArrowUp01 />}
                {sorting_state === 'desc' && <ArrowDown01 />}
                {!sorting_state && <ArrowUpDown />}
            </Button>
        </div>
    )
}

export default GetTableCustomColumn;