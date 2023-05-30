import React from 'react';
import './style.css';
import Homepage from './components/pages/Homepage/Homepage';

export default function App() {
  return (
    <>
      <head>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=5"
          name="viewport"
        />
      </head>
      <Homepage/>
    </>
  );
}
