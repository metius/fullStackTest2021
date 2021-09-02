import { useEffect, useReducer } from "react";
import SpinBtn from "../buttons/SpinBtn/SpinBtn.component";
import Emoji from '../Emoji/Emoji.component';
import LoadingBar from '../LoadingBar/LoadingBar.component';
import Alerts from "../Alerts/Alerts.component";
import {getReelItems, checkResult} from '../../helpers/utils';
import { slotMachineReducer } from "../../reducers/slotMachineReducer";


const initialState = {
  coins: 20,
  isLoading: false,
  isAlertActive: false,
  spins: 0,
  result: {},
  reels: [0, 0, 0]
}

const SlotMachine = ({reel1, reel2, reel3, max, size}) => {
  const [state, dispatch] = useReducer(slotMachineReducer, initialState);
  const {coins, isLoading, isAlertActive, spins, result, reels} = state;

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(result.win > 0) {
        dispatch({
          type: 'win',
        })
      } else {
        dispatch({
          type: 'lose'
        })
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [result])

  const handleSpin = () => {
    dispatch({
      type: 'spinStart'
    });
    
    dispatch({
      type: 'setReel',
      payload: getReelItems,   
      max,
      size
    });

    dispatch({
      type: 'checkSpinFn',
      payload: checkResult,
      reel1, 
      reel2, 
      reel3,
    })
  }

  const handleModal = () => {
    dispatch({ type: 'closeModal'})
  };
    

  return(
    <>
      <Alerts 
        status={isAlertActive} 
        title='Congratulations!'
        message={result.message}
        onClick={handleModal}  
        />
      <SpinBtn 
        disabled={coins === 0 ? true : false} 
        onPress={handleSpin}
      />
      <div className='card'>
        <header className="card-header">
          <p className="card-header-title">
            Slot Machine
          </p>
          <p className="card-header-title">
            Coins available: {coins}
          </p>
          <p className="card-header-title">
            Total Spins: {spins}
          </p>
        </header>
        {isLoading 
          ?
          <LoadingBar />
          :
          <div className="card-content">
            <div className="content ">
              <div className="is-flex is-justify-content-space-around">
                <Emoji symbol={reel1[reels[0]]} />
                <Emoji symbol={reel2[reels[1]]} />
                <Emoji symbol={reel3[reels[2]]} />
              </div>
            </div>
          </div>
        }
      </div>
    </>
    
  )
}

export default SlotMachine;