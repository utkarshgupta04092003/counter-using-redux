import React from 'react';
import countStore from './redux/countStore';
import { Provider } from 'react-redux';
import ShowCount from './Components/ShowCount';
import Increase from './Components/Increase';
import Reset from './Components/Reset';
import Decrease from './Components/Decrease';

export default function App() {
  return (
    <Provider store={countStore}>
      <div className="container mx-auto my-8 text-center">
        <ShowCount />

        <div className="flex justify-center space-x-4 mt-4">
          <Increase />
          <Reset />
          <Decrease />
        </div>
      </div>
    </Provider>
  );
}
