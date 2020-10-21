import React from 'react';
import styles from './Loading.css';

const Loading = () => (
  <img
    className={styles.Loading}
    src="https://miro.medium.com/max/978/0*NfFRP_WMxD-XT14o.gif"
    alt="something something loading screen"
  />
);

export default Loading;
