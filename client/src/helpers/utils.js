export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getReelItem = (current, plus, length) => {
  return (current + plus) % (length - 1)};

export const getReelItems = (reels, max, length) => {
  return reels.map(reel => {
    return (reel + getRandomNumber(max)) % (length - 1)})
}

const check2Equals = (arr) => {
  const sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
          results.push(sorted_arr[i]);
      }
  }
  return results;
}

const setMessage = (num, kind, win) => `You won ${win} coins with ${num} ${kind}`;

export const checkResult = (arr) => {
  //   3 cherries in a row: won 50 coins
  // . 3 Apples in a row: won 20 coins
  // . 3 Bananas in a row: won 15 coins
  // . 3 lemons in a row: won 3 coins
  // . 2 cherries in a row: won 40 coins
  // . 2 Apples in a row: won 10 coins
  // . 2 Bananas in a row: won 5 coins

  //test create array for match 2 elements:
  let result = 0;
  let win = 0;
  let message = '';

  //first check if there is a 3 equal values:
  if((new Set(arr)).size === 1) {
    
    switch(arr[0]) {
      case 'cherry':
        win = 50;
        message = setMessage(3,'cherries',win);
        break;
      case 'apple':
        win = 20;
        message = setMessage(3,'apples',win);
        break;
      case 'banana':
        win = 15;
        message = setMessage(3,'bananas',win);
        break;
      case 'lemon':
        win = 3;
        message = setMessage(3,'lemons',win);
        break;
      default:
        win = 0;        
        break;
    }
  } 
  else if((result = check2Equals(arr)).length === 1) {
    
    switch(result[0]) {
      case 'cherry':
        win = 40;
        message = setMessage(2,'cherries',win);
        break;
      case 'apple':
        win = 10;
        message = setMessage(2,'apples',win);
        break;
      case 'banana':
        win = 5;
        message = setMessage(2,'bananas',win);
        break;
      case 'lemon':
        win = 0;
        break;
      default:
        win = 0;        
        break;
    } 
  }else {
      win = 0;
  }

  return {win, message};
}
