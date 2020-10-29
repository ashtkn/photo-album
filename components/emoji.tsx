import React from 'react'

type EmojiProps = {
  className?: string
  label?: string
  symbol?: string
}

const Emoji: React.FC<EmojiProps> = ({ className, label, symbol }) => (
  <span
    className={className}
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
)
export default Emoji
