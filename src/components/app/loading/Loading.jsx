import React from 'react';
import styles from './Loading.css';

const Loading = () => (
  <img
    className={styles.Loading}
    // eslint-disable-next-line max-len
    src="https://media4.giphy.com/media/l3vQX4BAzmmXX6hBC/giphy.gif"
    alt="something something loading screen"
  />
);

export default Loading;
