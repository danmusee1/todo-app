import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
 const [value, setValue] = useState<string[]>(Array(9).fill(null))
 const [xIsNex,setXIsNext] =useState(true)

const validateWinner = (value: string[]): string | null => {
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a]; // 'X' or 'O'
    }
  }
 

  return null; // No winner found
};

const winner = validateWinner(value)
console.log("the winner",winner)


     const handleClick = (i:any) =>{
        if(value[i] || winner !== null){
            return
        }
        const newValue=value.slice()
        if(xIsNex ){
       newValue[i]='X'
        }else{
              newValue[i]='O' 
        }
       

      setValue(newValue)
        setXIsNext(!xIsNex)
    }

  return (
    <div className='pt-20'>
        <h1 className='text-center'>THE WINNER IS: {winner}</h1>
  <div className='flex justify-center  '>
        
        <div className='grid grid-cols-3'>
       <Square value={value[0]} onClick={()=> handleClick(0)} />
        <Square value={value[1]} onClick={() => handleClick(1)} />
         <Square value={value[2]} onClick={() => handleClick(2)} />
          <Square value={value[3]} onClick={() => handleClick(3)} />
           <Square value={value[4]} onClick={() => handleClick(4)} />
            <Square value={value[5]} onClick={() => handleClick(5)} />
             <Square value={value[6]} onClick={() => handleClick(6)} />
              <Square value={value[7]} onClick={() => handleClick(7)} />
               <Square value={value[8]} onClick={() => handleClick(8)} />
        </div>
      
    </div>
    </div>
  
  )
}

export default Board