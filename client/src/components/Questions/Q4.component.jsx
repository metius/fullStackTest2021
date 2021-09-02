import SlotMachine from "../SlotMachine/SlotMachine.component";

const Q4 = () => {
  const R1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
  const R2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'];
  const R3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];

  const max = 5;
  const size = R1.length;

  return(
    <>
      <div className='content'>
        <h1>Question 4</h1>
        <p>A function that, when it’s called, gives back the result of a spin and show the result.</p>
        
      </div>
      <SlotMachine reel1={R1} reel2={R2} reel3={R3} max={max} size={size} />
    </>
  )
}

export default Q4;