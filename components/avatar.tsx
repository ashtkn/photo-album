import React from 'react'

import styles from './avatar.module.css'

const Avatar = (): JSX.Element => {
  return (
    <img
      src={require('@public/images/avatar.jpg')}
      className={styles.avatar}
    ></img>
  )
}

export default Avatar
