import React from 'react'

import CopyrightNotice from './copyright-notice'
import SnsAccounts from './sns-accounts'

export type FooterProps = {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={className}>
      <SnsAccounts className="text-center" />
      <CopyrightNotice className="pt-2" />
    </div>
  )
}

export default Footer
