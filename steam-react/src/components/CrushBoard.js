import {useState, useEffect} from 'react';
import "./components.css";
const width = 8
const candyColors = [
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "yellow"
]



const CrushBoard = () => {
    const [currentColorArrangment, setCurrentColorArrangement] = useState()
    
    const createBoard = () => {
        const randomColorArrangment = []
        for (let i=0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangment.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangment)
    }

    useEffect(() => {
        createBoard()
    }, [])



  return (
    <div className='loveCrush'>
        <div className='game'>
            {currentColorArrangment?.map((candyColor, index) => (
                <img
                 key={index}
                 style={{backgroundColor: candyColor}}
                 alt={candyColor}
                />
            ))}
        </div>

    </div>
  )
};

export default CrushBoard;
