export const slotMachineReducer = (state, action) => {
  switch(action.type) {
    case 'spinStart':
      return {
        ...state,
        isLoading: true,
        coins: state.coins - 1,
        spins: state.spins + 1,
      };
    case 'setReel':
      return {
        ...state,
        reels: action.payload(state.reels, action.max, action.size),
      };  
    case 'closeModal':
      return {
        ...state,
        isAlertActive: false,
      };
    case 'checkSpin':
      return {
        ...state,
        win: action.payload.win,
        message: action.payload.message,
      };
    case 'checkSpinFn':
      return {
        ...state,
        result: action.payload([action.reel1[state.reels[0]], action.reel2[state.reels[1]], action.reel3[state.reels[2]]])
      }
    case 'win':
      return {
        ...state,
        coins: state.result.win + state.coins,
        isAlertActive: true,
        isLoading: false,
      };
    case 'lose':
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}