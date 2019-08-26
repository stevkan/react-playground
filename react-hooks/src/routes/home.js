import React, { useContext } from 'react';
import Button from './button';
import styles from '../css/home.css';
import { StoreContext } from '../store/StoreContext';

const Home = () => {
  const { state, actions } = useContext(StoreContext);
  const currentColor = sessionStorage.getItem('bg_color')
  document.getElementsByClassName('main')[0].style.backgroundColor = currentColor;
  
  return (
    <div>
      <Button className={'toggleColor'} onClick={() => actions.changeBackgroundColor(currentColor)} />
      <Button className={'resetColor'} onClick={() => actions.setBackgroundColor()}/>
    </div>
  );
};

export default Home
