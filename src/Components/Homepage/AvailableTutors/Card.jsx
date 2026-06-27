import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ tutor }) => {
    return (
        <div>
            <div className="card bg-base-100   shadow-sm">
                <figure>
                    <Image src={tutor.photo}
                        alt={tutor.name}
                        width={400}
                        height={220}
                        className="w-full h-56 object-cover"></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tutor.name}</h2>
                    <p>{tutor.subject}</p>
                    <p><span className='font-bold mr-2'>Available days:</span>{tutor.availableDays}</p>
                    <p><span className='font-bold mr-2'>Location:</span>{tutor.location}</p>

                    <div className="card-actions ">
                        <p><span className='font-bold mr-2'>Hourly Fee:</span>{`${tutor.hourlyFee}$`}</p>
                        <button className="btn btn-primary"><Link href={`/tutors/details/${tutor._id}`}>Book Session</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;