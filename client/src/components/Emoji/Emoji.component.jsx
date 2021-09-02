const Emoji = ({symbol}) => {
  const emojiStyle = {
    'fontSize': '4rem'
  }
  let emoji;
  switch(symbol) {
    case 'cherry':
      emoji = '🍒';
      break;
    case 'lemon':
      emoji = '🍋';
      break;
    case 'apple':
      emoji = '🍏';
      break;
    case 'banana':
      emoji = '🍌';
      break;
    default:
      emoji = '📛';
      break;
  }
  
  return (
    <span
      className="emoji"
      style={emojiStyle}
      role="img"
      aria-label={symbol}
      aria-hidden={symbol}
    >
        {emoji}
    </span>
  )};

export default Emoji;
