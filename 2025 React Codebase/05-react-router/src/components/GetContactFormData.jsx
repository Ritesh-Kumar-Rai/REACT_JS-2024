import React from 'react'
import { useLocation } from 'react-router-dom';

const GetContactFormData = () => {

    const location_data = useLocation();
    const passed_form_data = (location_data.state.contact_form);
    return (
        <div className='bg-orange-100 h-[65vh] p-5 w-full rounded-2 flex items-center justify-center'>
            <ol className='text-4xl w-fit'>
                <li className='my-4'><b>Name:</b> {passed_form_data?.name}</li>
                <li className='my-4'><b>Email:</b> {passed_form_data?.email}</li>
                <li className='my-4'><b>Tel No. :</b> {passed_form_data?.tel}</li>
            </ol>
        </div>
    )
}

export default GetContactFormData;