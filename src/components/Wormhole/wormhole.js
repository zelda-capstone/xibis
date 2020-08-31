import React from 'react'
//import Draggable, {DraggableCore} from 'react-draggable';
import  './style.css'
import Spritesheet from 'react-responsive-spritesheet';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux';
import { updateBuboToDb } from '../../store'
import * as ROUTES from '../../constants/routes';
import CustomizableBubo from '../customizable-bubo'
import {Link} from 'react-router-dom';
import { getBubosCollection } from '../../store/reducers/bubo';
import {Green, GreenRev, Purple, PurpleUpsd, Bubo } from './Images';



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
             <Grid
                container spacing={0}
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                 {user
                 ?(<>
                    <Grid
                        item
                    >
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
                    </Grid>
                    <div className="bubos-puzzle-container">
                            {bubos
                            ? bubos.map((bubo, i) => (
                                <Grid
                                    item
                                >
                                    <Spritesheet
                                    image={Bubo}
                                    widthFrame={32}
                                    heightFrame={32}
                                    steps={4}
                                    fps={1}
                                    autoplay={false}
                                    loop={true}
                                    startAt={2}
                                    endAt={1}
                                    direction="rewind"
                                    onMouseEnter={spritesheet => {
                                        spritesheet.goToAndPlay(1);}}
                                    onMouseLeave={spritesheet => {
                                        spritesheet.pause();}}
                                    />  
                                    {/* <CustomizableBubo {...bubo}/> */}
                                </Grid>
                            ))
                            : <h1>You lost all your Bubos!
                                <Link to={ROUTES.ASSEMBLE_BUBOS}>Get more.</Link>
                            </h1>
                            }
                        <Grid
                            item
                        >
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
                    </Grid>
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
                </Grid>
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
