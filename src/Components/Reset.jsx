import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/countSlice';

export default function Reset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="my-2">
      <button
        className="border border-gray-600 px-4 py-2 rounded-md"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
