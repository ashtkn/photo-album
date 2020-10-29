import React from 'react'

import { siteTitleText, siteWelcomeText } from '../constants'
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
          <h2 className={styles.welcome}>{siteWelcomeText}</h2>
          <h1 className={styles.title}>{siteTitleText}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
