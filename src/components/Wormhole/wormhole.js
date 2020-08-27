import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';
import  './style.css'
import Spritesheet from 'react-responsive-spritesheet';
import Green from './Green-Portal-Sprite.png'
import Purple from './Purple-Portal-Sprite.png'
import PurpleUpsd from './Purple-Portal-Sprite-UpsD-1.png'
import GreenRev from './Green-Portal-Sprite-Rev.png'
import { connect } from 'react-redux'
import { updateBuboToDb } from '../../store'
import * as ROUTES from '../../constants/routes';
import CustomizableBubo from '../customizable-bubo'
import {Link} from 'react-router-dom'
import { getBubosCollection } from '../../store/reducers/bubo'




class Wormhole extends React.Component{

    componentDidMount(){
        const user = this.props.user;
        this.props.getBubos(user.bubosRef);
        
    }

    render(){
        const user = this.props.user;
        const bubos = this.props.bubos;

        return (
            <div className="star">
             <div className="background" >
                 {user
                 ?(<>
                    <div className="portal" >
                    <Spritesheet
                        image={PurpleUpsd}
                        widthFrame={73}
                        heightFrame={64}
                        steps={8}
                        fps={2}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.play();}}
                    />
                    </div>
                    <div className="bubos-puzzle-container">
                        <div className="bubos-container">
                            {bubos
                            ? bubos.map((bubo, i) => (
                                <div key={i}>
                                    <CustomizableBubo {...bubo}/>
                                </div>
                            ))
                            : <h1>You lost all your Bubos!
                                <Link to={ROUTES.ASSEMBLE_BUBOS}>Get more.</Link>
                            </h1> 
                            }
                        </div>
                        <Spritesheet
                        image={Green}
                        widthFrame={64}
                        heightFrame={64}
                        steps={24}
                        fps={3}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.play();}}
                    />  
                    </div>
                  <div className="portal-reverse">
                    <Spritesheet
                        image={Green}
                        widthFrame={64}
                        heightFrame={64}
                        direction="rewind"
                        steps={24}
                        fps={3}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.pause();
                            spritesheet.play()}}
                    /> 
                    </div> 
                    <div className="portal-reverse">
                    <Spritesheet
                        image={GreenRev}
                        widthFrame={64}
                        heightFrame={64}
                        direction="rewind"
                        steps={24}
                        fps={3}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.pause();
                            spritesheet.play()}}
                    />  
                    </div>
                  </>
                 )
                : <h1>loading.....</h1> 
                }
             </div>
            </div>
          );
    }

}


const MapState = (state) => {
    return{
        bubos: state.bubos,
        user: state.user
    }
}


const MapDispatch = dispatch => {
    return {
      getBubos: ((buboRef) => dispatch(getBubosCollection(buboRef)))
    }
  }

export default connect(MapState, MapDispatch)(Wormhole)
