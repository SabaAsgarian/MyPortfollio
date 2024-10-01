"use client"
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [flag, setFlag] = useState(0);
  const [num, setNum] = useState(0);
  const [cloneNum, setCloneNum] = useState(0);

  const arr = [
    'My Name Is Saba Asgarian.  ',
    'I Am Junior FrontEnd Developer.  ',
    'Born In 1997 My Horoscope is Leo. ',
 
    'Welcome To My WebSite.  ',
    'Love You All❤  ',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flag < arr.length) {
        if (num < arr[flag].length) {
          setNum(num + 1);
          setCloneNum(num + 1);
          setText(arr[flag].slice(0, num + 1));
        } else {
          if (cloneNum > 0) {
            setCloneNum(cloneNum - 1);
            setText(arr[flag].slice(0, cloneNum));
          } else {
            setFlag(flag + 1);
            setNum(0);
            clearInterval(intervalId);
          }
        }
      } else {
        setFlag(0);
      }
    }, 80);
    return () => clearInterval(intervalId);
  }, [flag, num, cloneNum, arr]);

  return (
    <div>
      <h1 id="txt" className='text-white font-sr text-[25px]'>{text}</h1>
    </div>
  );
}

export default App;