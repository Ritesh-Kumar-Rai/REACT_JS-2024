import React from 'react';
import BasicTable from '@/components/tanstack-table-uis/BasicTable';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import Chapter1 from '@/components/tanstack-table-uis/Chapter1';
import Chapter1A from '@/components/tanstack-table-uis/Chapter1A';
import Chapter1B from '@/components/tanstack-table-uis/Chapter1B';

const TanStackTable = () => {

    const [selectedChapter, setSelectedChapter] = React.useState('');

    return (
        <>
            <div>
                <Select value={selectedChapter} onValueChange={(value) => (value === 'intro') ? setSelectedChapter('') : setSelectedChapter(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder='Select the Chapters'></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="intro">Introduction</SelectItem>
                        <SelectItem value="chapter1">Chapter 1</SelectItem>
                        <SelectItem value="chapter1a">Chapter 1A</SelectItem>
                        <SelectItem value="chapter1b">Chapter 1B</SelectItem>
                        <SelectItem value="chapter2">Chapter 2</SelectItem>
                        <SelectItem value="chapter3">Chapter 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                {selectedChapter === '' && <BasicTable />}
                <section className='p-4 my-4 rounded-2xl shadow-2xl'>
                    {selectedChapter === 'chapter1' && <Chapter1 />}
                    {selectedChapter === 'chapter1a' && <Chapter1A />}
                    {selectedChapter === 'chapter1b' && <Chapter1B />}
                </section>
            </div>
        </>
    )
}

export default TanStackTable;