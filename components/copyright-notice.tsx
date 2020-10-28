import React from 'react'

import { copyrightText } from '../constants'

export type CopyrightNoticeProps = {
  className?: string
}

const CopyrightNotice: React.FC<CopyrightNoticeProps> = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-center text-xs">{copyrightText}</p>
    </div>
  )
}

export default CopyrightNotice
