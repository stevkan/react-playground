import React from 'react';
import styles from '../css/home.css';

const Button = (props) => {
  if (props.className === 'toggleColor') {
    return (<button className={styles.home} onClick={() => props.onClick()} >Cycle Colors</button>)
  } else if (props.className === 'resetColor') {
    return (<button className={styles.home} onClick={() => props.onClick()} >Reset Color</button>)
  }
};

export default Button;
