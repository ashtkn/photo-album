import React from 'react'

import styles from './avatar.module.css'

export type AvatarProps = {
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={require('@public/images/avatar.jpg')}
        className={styles.avatar}
      ></img>
    </div>
  )
}

export default Avatar
