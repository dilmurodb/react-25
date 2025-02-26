import './TicTacToe.css'
import { useState } from 'react'


export default function TicTacToe() {

    const [toggle, setToggle] = useState(true)
    const [boxIndex, setBoxIndex] = useState()

    // const ticTacToeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ticTacToeArr = Array(9).fill('')

    const handleClick = (index) => {
        console.log(`${index} Box is clicked!`)
        console.log(ticTacToeArr)
        ticTacToeArr[index] = 'X'
        console.log(ticTacToeArr)
        setBoxIndex(index)
        setToggle(!toggle)
    }

    return <div className='tic-tac-toe'>
                <div>
                  <h1>Tic Tac Toe Game Component</h1>  
                </div>
                <div className='tic-tac-toe-container'>
                    {
                        ticTacToeArr.map((box, index) => 
                        <div key={index} 
                             className='tic-tac-toe-box'
                             onClick={() => handleClick(index)}>
                                {box}
                                {/* {
                                    toggle && index === boxIndex
                                            ?
                                        <span>X</span> : null
                                }
                                {
                                    !toggle && index === boxIndex
                                            ?
                                        <span>O</span> : null
                                } */}
                        </div>)
                    }
                </div>
           </div>
}