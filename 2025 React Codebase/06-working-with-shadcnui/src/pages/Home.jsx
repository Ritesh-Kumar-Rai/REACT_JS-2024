import Date_Picker from '@/components/custom_uis/Date_Picker';
import { Button } from '@/components/ui/button';
import React from 'react'

const Home = () => {
    return (
        <section className='py-5'>
            <Button variant='outline'>Click Me</Button>

            <div className='my-4 p-3 flex justify-center flex-col items-center gap-7'>
                <Date_Picker />
            </div>
        </section>
    )
}

export default Home;