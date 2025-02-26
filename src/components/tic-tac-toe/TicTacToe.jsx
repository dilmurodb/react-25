import './TicTacToe.css'


export default function TicTacToe() {

    const ticTacToeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return <div className='tic-tac-toe'>
                <div>
                  <h1>Tic Tac Toe Game Component</h1>  
                </div>
                <div className='tic-tac-toe-container'>
                    {
                        ticTacToeArr.map((box, index) => <div key={index} className='tic-tac-toe-box'></div>)
                    }
                </div>
           </div>
}