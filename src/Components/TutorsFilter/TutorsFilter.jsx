'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const TutorsFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [startDate, setStartDate] = useState(searchParams.get('startDate') || '');
    const [endDate, setEndDate] = useState(searchParams.get('endDate') || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const queryParams = new URLSearchParams();
            if (search) queryParams.set('search', search);
            if (startDate) queryParams.set('startDate', startDate);
            if (endDate) queryParams.set('endDate', endDate);

            router.push(`/tutors?${queryParams.toString()}`, { scroll: false });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [search, startDate, endDate, router]);

    const handleReset = () => {
        setSearch('');
        setStartDate('');
        setEndDate('');
        router.push('/tutors');
    };

    return (
        <div className="bg-base-100 p-6 rounded-3xl border border-base-300 shadow-sm max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                {/* Search Bar */}
                <div className="form-control w-full">
                    <label className="label py-1">
                        <span className="label-text font-semibold text-base-content/80">Search by Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Search tutor name..."
                        className="input input-bordered w-full rounded-2xl"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Start Date */}
                <div className="form-control w-full">
                    <label className="label py-1">
                        <span className="label-text font-semibold text-base-content/80">Registration Start Date</span>
                    </label>
                    <input
                        type="date"
                        className="input input-bordered w-full rounded-2xl"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                {/* End Date */}
                <div className="form-control w-full">
                    <label className="label py-1">
                        <span className="label-text font-semibold text-base-content/80">Registration End Date</span>
                    </label>
                    <input
                        type="date"
                        className="input input-bordered w-full rounded-2xl"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={handleReset}
                    className="btn btn-outline btn-sm rounded-xl px-6"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default TutorsFilter;
