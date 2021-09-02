const SpinBtn = ({disabled, onPress}) => {
  
  return(
    <div className='block p-3'>
      <button
        type='button'
        className='button is-info'
        disabled={disabled}
        onClick={onPress}
      >
      &#8634; Spin
      </button>
    </div>
  )

}

export default SpinBtn;