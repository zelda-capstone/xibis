import React from 'react'
import * as ROUTES from '../../constants/routes';



class Transition extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   

    handleClick = (event) => {

        event.target.value === "yes" 
        ? this.props.replay()
        : this.props.history.push(ROUTES.MAP) /////CHANGE to render win page 
    }


    render(){
       
        return(
            <div className="intro-container">
                    {
                        this.props.win
                        ?  <div className='typewriter'>
                            {this.props.count} of you were in the correct order!
                            You WON! Play again?
                            </div>
                        :  <div className='typewriter'>
                            Only {this.props.count} of you were in the correct order!
                            Sorry, you can't pass. Maybe play again?
                            </div>
                    }
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

export default Transition