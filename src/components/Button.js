import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn first'><img className="akerele" src="AKERELE.jpg" />Link 1</button>
      <button className='btn'><img className="akerele" src="AKERELE.jpg" />Link 2</button>
    </Link>
  );
}