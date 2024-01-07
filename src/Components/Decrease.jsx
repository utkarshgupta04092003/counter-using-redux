import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease } from '../redux/countSlice';

export default function Decrease() {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div className="my-2">
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-md"
        onClick={handleDecrease}
      >
        Decrease
      </button>
    </div>
  );
}
