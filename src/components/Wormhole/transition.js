import React from 'react'
import * as ROUTES from '../../constants/routes';



class Transition extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   

    handleClick = (event) => {
        console.log(this.props)
        event.target.value === "yes" 
        ? this.props.history.push(ROUTES.WORMHOLE)
        : this.props.history.push(ROUTES.MAP)
    }

    render(){
        if(this.props.win === false){
            return(
                <div className="intro-container">
                    <div className='typewriter'>
                    You didn't win! Play again?
                    </div>
                    <div>
                        <button 
                            value="yes" 
                            className="button" 
                            onClick={(e) => this.handleClick(e)}>Yes!</button>
                        <button    
                            value="no"
                            className="button" 
                            onClick={(e) => this.handleClick(e)}>No..</button>
                    </div>
                </div>


            )
        }
    }
}

export default Transition