import { TutorsAvaiable } from '@/lib/api';
import React from 'react';
import Card from './Card';

const AvailableTutors = async () => {

    const Tutors = await TutorsAvaiable();
    console.log(Tutors);
    return (
        <div className='w-full  mt-2'>
            <h1 className='text-3xl font-bold text-center '>Available Tutors</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-auto w-[70%] gap-2 mt-5'>
                {Tutors.map((tutor) => <Card key={tutor._id} tutor={tutor}></Card>)}

            </div>
        </div>
    );
};

export default AvailableTutors;