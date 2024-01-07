import React from 'react';
import { useSelector } from 'react-redux';

export default function ShowCount() {
    const count = useSelector((store) => store.count.counter);

    return (
        <div className="bg-gray-600 text-white p-4 rounded-md text-xl font-bold">
            Count: {count}
        </div>
    );
}
