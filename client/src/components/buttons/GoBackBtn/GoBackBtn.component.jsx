import {useHistory} from 'react-router-dom';

const GoBackBtn = () => {
  let history = useHistory();
  const handleClick = () => history.goBack();

  return(
    <div className='block p-3'>
      <button
        type='button'
        onClick={handleClick}
        className='button is-info'
      >
      &#8617; Go back
      </button>
    </div>
  )

}

export default GoBackBtn;