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
import {Green, GreenRev, Purple, PurpleUpsd, GreenUpsD} from './Images';
import Item from './GridItem'
import BuboRow from './BuboRow'


class Wormhole extends React.Component{
    constructor(){
        super()
        this.state = {
            ogBubos: this.props.bubos,
            winBubos: []
        }
    }
    
    componentDidMount = () => {
        const user = this.props.user;
        this.props.getBubos(user.bubosRef);

        // const bubos = this.props.bubos;
        // this.setState({
        //     ogBubos: [...this.state.ogBubos, ...bubos]
        // })
    }


    onMove = (bubo) => {
        const leftBubos = this.state.ogBubos.filter(b => b !== bubo)
        
        this.setState({
            ogBubos: leftBubos
        })

        this.setState((state) => ({
            winBubos: [...this.state.winBubos, bubo ]
        }))
    }


    formRow = (key) => {
        return (
          <React.Fragment>
            <Grid item>
              <Item i={key}></Item> 
            </Grid>
          </React.Fragment>
        );
    }

    render(){
        const user = this.props.user;
        const bubos = this.props.bubos;
        
        const grid3 = [0,1,2]
        const grid4 = [0,1,2,3]
        const grid6 = [0,1,2,3,4]
        const grid7 = [0,1,2,3,4,5,6,7]
        const grid13 = [0,1,2,3,4,5,6,7,8,9,10,11,12]
        const grid14 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        
        console.log("LOCAL STATE", this.state)
        return (
            <div className="star">
             <div className="background" >
             <Grid
                container spacing={0}
                direction="row"
                >
                 {user
                 ?(<>
                 <Grid container item>
                    <Grid
                        item height={73.5} width={73.5}
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
                    {
                        grid13.map(i => (
                            this.formRow(i)
                        ))
                    }
                    </Grid>
                    <Grid container item>
                        {
                            grid6.map(i => (
                                this.formRow(i)
                            ))
                        }  
                            <Grid
                                item height={73.5} width={73.5}
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
                        {
                            grid4.map(i => (
                                this.formRow(i)
                            ))
                        }  
                    </Grid>
                    <Grid container item>
                        {
                            grid14.map(i => (
                                this.formRow(i)
                            ))
                        }   
                    </Grid>
                    <Grid container item >
                        {
                            grid14.map(i => (
                                this.formRow(i)
                            ))
                        }   
                        <Grid
                            item height={73.5} width={73.5}
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
                    </Grid>
                    <Grid container item >
                        {
                            grid7.map(i => (
                                this.formRow(i)
                            ))
                        }   
                        <Grid
                            item height={73.5} width={73.5}
                        >
                            <Spritesheet
                                image={Purple}
                                widthFrame={64}
                                heightFrame={64}
                                steps={8}
                                fps={2}
                                autoplay={true}
                                loop={true}
                                onClick={spritesheet => {
                                    spritesheet.play();}}
                            />
                        </Grid>
                        {
                            grid3.map(i => (
                                this.formRow(i)
                            ))
                        }   
                    </Grid>
                    <Grid container item >
                        {
                            grid4.map(i => (
                                this.formRow(i)
                            ))
                        }  
                        <div className="portal-reverse">
                            <Grid item height={73.5} width={73.5}>
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
                            </Grid>
                        </div> 
                        {
                            grid6.map(i => (
                                this.formRow(i)
                            ))
                        }  
                    </Grid>
                    <Grid container item align="center">
                        <Grid container item xs={4}>
                            {bubos
                            ? bubos.map((bubo, i) => (
                                <div onClick={() => this.onMove(bubo)}>
                                    <Grid
                                        item height={73.5} width={73.5}
                                    >
                                        <CustomizableBubo {...bubo}/>
                                    </Grid>
                                </div>
                            ))
                            : <h1>You lost all your Bubos!
                                <Link to={ROUTES.ASSEMBLE_BUBOS}>Get more.</Link>
                            </h1>
                            }
                        </Grid>
                            <div className="portal-reverse">
                                <Grid item >
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
                                </Grid>
                            </div>
                            {
                            grid4.map(i => (
                                this.formRow(i)
                            ))
                            }   
                        <div className="portal-reverse">
                            <Grid item height={73.5} width={73.5}>
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
                            </Grid>
                        </div> 
                        <BuboRow bubos={this.state.winBubos} />
                    </Grid>
                    <Grid container item >
                        {
                            grid14.map(i => (
                                this.formRow(i)
                            ))
                        }   
                    </Grid>
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
