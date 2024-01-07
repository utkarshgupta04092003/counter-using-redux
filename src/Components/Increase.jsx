import React from 'react';
import { increase } from '../redux/countSlice';
import { useDispatch } from 'react-redux';

export default function Increase() {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  return (
    <div className="my-2">
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded-md"
        onClick={handleIncrease}
      >
        Increase
      </button>
    </div>
  );
}
