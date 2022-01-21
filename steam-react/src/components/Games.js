import React from 'react'

class Games extends React.Component {
    render() {
      return (
            <h1>
              <a target="_blank" rel="noreferrer" className='bg-light border border-rounded border-dark m-2 text-primary'  href={process.env.PUBLIC_URL + "game.html"} >Santa Speedrun</a>
            </h1>
        )
      }
  }

export default Games