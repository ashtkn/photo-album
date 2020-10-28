import React from 'react'

import { siteTitle } from '../constants/info'
import Avatar from './avatar'
import styles from './header.module.css'

export type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        <Avatar className="pr-4" />
        <div>
          <h2 className={styles.welcome}>Welcome!</h2>
          <h1 className={styles.title}>{siteTitle}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
