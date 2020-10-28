import React from 'react'

import { resolveAvatarImage } from '../lib/avatar-resolver'
import styles from './avatar.module.css'

export type AvatarProps = {
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  const avatarImage = resolveAvatarImage()
  return (
    <div className={className}>
      <img src={avatarImage} className={styles.avatar}></img>
    </div>
  )
}

export default Avatar
