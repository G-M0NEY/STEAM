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


    const checkForColumnOfFour = () => {
        for (let i = 0; i < 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangment[i]

            if( columnOfFour.every(square => currentColorArrangment[square] === decidedColor)) {
                columnOfFour.forEach(square => currentColorArrangment[square] = '')
            }
        }
    }
    
    const checkForColumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangment[i]

            if( columnOfThree.every(square => currentColorArrangment[square] === decidedColor)) {
                columnOfThree.forEach(square => currentColorArrangment[square] = '')
            }
        }
    }
    

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

    useEffect (() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForColumnOfThree()
            setCurrentColorArrangement([...currentColorArrangment])
        }, 100)
        return () => clearInterval(timer)
    }, [checkForColumnOfFour, checkForColumnOfThree,  currentColorArrangment])



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
