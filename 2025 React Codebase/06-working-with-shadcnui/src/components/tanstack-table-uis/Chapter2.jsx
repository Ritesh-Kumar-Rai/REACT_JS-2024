import { useState } from 'react'
import { Badge } from '../ui/badge';
import Chapter2a from './Chapter2a';

const Chapter2 = () => {

    const [selected_module, setSelectedModule] = useState(1);

    const onModuleSelection = (module_no = 1) => {
        if (!module_no || module_no === selected_module) {
            return;
        }

        setSelectedModule(module_no);
    };

    return (
        <>
            <h1 className='text-center'>Chapter 2: Filtering & Searching</h1>
            <div className='flex gap-2 justify-center flex-wrap py-2 mt-5'>
                <Badge className='cursor-pointer' variant={selected_module === 1 ? 'default' : 'secondary'} onClick={() => onModuleSelection(1)}>module 1</Badge>
                <Badge className='cursor-pointer' variant={selected_module === 2 ? 'default' : 'secondary'} onClick={() => onModuleSelection(2)}>module 2</Badge>
                <Badge className='cursor-pointer' variant={selected_module === 3 ? 'default' : 'secondary'} onClick={() => onModuleSelection(3)}>module 3</Badge>
                <Badge className='cursor-pointer' variant={selected_module === 4 ? 'default' : 'secondary'} onClick={() => onModuleSelection(4)}>module 4</Badge>
            </div>

            {selected_module === 1 && <Chapter2a />}
        </>
    )
}

export default Chapter2;