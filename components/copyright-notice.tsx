import React from 'react'

export type CopyrightNoticeProps = {
  className?: string
}

const CopyrightNotice: React.FC<CopyrightNoticeProps> = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-center text-xs">©️ 2020 Asahi Takenouchi</p>
    </div>
  )
}

export default CopyrightNotice
