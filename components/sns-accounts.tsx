import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { snsAccountList } from '../constants/info'

export type SnsAccountsProps = {
  className?: string
}

const SnsAccounts: React.FC<SnsAccountsProps> = ({ className }) => {
  return (
    <div className={className}>
      {snsAccountList.map(({ href, icon }) => (
        <a className="px-1 text-2xl" href={href}>
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  )
}

export default SnsAccounts
