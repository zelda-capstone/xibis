import React from 'react'
import  './style.css'
import Spritesheet from 'react-responsive-spritesheet';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux';
import * as ROUTES from '../../constants/routes';
import CustomizableBubo from '../customizable-bubo'
import {Link} from 'react-router-dom';
import { getBubosCollection } from '../../store/reducers/bubo';
import {Green, GreenRev, Purple, PurpleUpsd, PurpleRev} from './Images';
import Item from './GridItem'
import BuboRow from './BuboRow'
import {Portal} from './Portals'
import Transition from './transition'


class Wormhole extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ogBubos: [],
            winBubos: [],
            portalBubos: [],
            winOrder: [],
            play: true,
            count: 0
        }
        this.music = 0;
    }


    componentDidMount = () => {
        const user = this.props.user;
        this.props.getBubos(user.bubosRef);

        this.getWinOrder();
        this.music = this.props.sounds.play('bubos_tropics')
    }

    componentWillUnmount() {
        this.props.sounds.fade(this.props.sounds.volume(), 0, 1000, this.music)
    }


    bringInBubos = (event) => {
        this.setState((state) => ({
            ogBubos: this.props.bubos
        }))

        this.setState((state) => ({
            winBubos: []
        }))


        this.setState((state) => ({
            portalBubos: []
        }))

        this.setState({
            play: false
        })
    }


    getWinOrder = () => {
        let array = [0,1,2,3,4,5,6,7,8,9]

        for(let i = array.length -1; i > 0; i-- ){
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        this.setState((state) => ({
            winOrder: array
        }))

    }


    onMove = (bubo, i, click) => {
        const leftBubos = this.state.ogBubos.filter(b => b !== bubo)
        this.props.effects.play('wormhole_FX')

        this.setState((state) => ({
            ogBubos: leftBubos
        }))

        if(this.state.portalBubos.length < 9){
            this.setState((state) => ({
                portalBubos: [bubo, ...this.state.portalBubos ]
            }))


            this.setState((state) => ({
                order: i
            }))


        }else{

            //const leftBubos = this.state.portalBubos.filter(b => b !== bubo)

            this.setState((state) => ({
                winBubos: [...this.state.winBubos, bubo ]
            }))
        }

    }

    checkForWin = () => {

        let player = this.state.winBubos
        let comp = this.state.winOrder
        let num = 0

        for(let i = 0; i < player.length; i++){

            if(player[i] === this.props.bubos[comp[i]]){
               num++
            }
        }

        let bool = this.state.count >= 8

        return {bool,num}
    }


    formRow = (key) => {
        return (
          <React.Fragment key={key}>
            <Grid item>
              <Item i={key}></Item>
            </Grid>
          </React.Fragment>
        );
    }


    render(){

        const user = this.props.user;

        const grid2 = [0,1]
        const grid4 = [0,1,2,3]
        const grid5 = [0,1,2,3,4]
        const grid7 = [0,1,2,3,4,5,6,7]
        const grid8 = [0,1,2,3,4,5,6,7,8,9]
        const grid11 = [0,1,2,3,4,5,6,7,8,9,10]
        // const grid13 = [0,1,2,3,4,5,6,7,8,9,10,11,12]
        // const grid14 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]


        if(this.state.winBubos.length === 10){
            const {bool, num} = this.checkForWin()

            return bool
            ? (<Transition win={true} history={this.props.history} count={num} replay={this.bringInBubos}/>)
            : (<Transition win={false} history={this.props.history} count={num} replay={this.bringInBubos}/>)
        }else{

          return (
            <div className="star">
             <div className="background" >
             <Grid
                container spacing={0}
                direction="row"
                flex-grow={0}
                >
                 {user
                 ?(<>
                 <Grid container item alignItems="center">
                    <Grid
                        item height={73.5} width={73.5}
                    >
                    <Spritesheet
                        image={Purple}
                        widthFrame={64}
                        heightFrame={64}
                        steps={24}
                        fps={2}
                        autoplay={true}
                        loop={true}
                    />
                    </Grid>
                    {this.state.portalBubos[1]
                        ?<Portal bubo={this.state.portalBubos[1]}
                            order={this.state.order}
                            onMove={this.onMove}/>
                        :null}
                    {
                        grid8.map(i => (
                            this.formRow(i)
                        ))
                    }
                    {this.state.portalBubos[5]
                                ?<Portal bubo={this.state.portalBubos[5]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                    <Grid
                        item height={73.5} width={73.5}
                    >
                            <Spritesheet
                            image={GreenRev}
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
                    <Grid container item alignItems="center">
                        {
                            grid5.map(i => (
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
                            {this.state.portalBubos[2]
                                ?<Portal bubo={this.state.portalBubos[2]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                            {
                                grid7.map(i => (
                                    this.formRow(i)
                                ))
                            }
                            {this.state.portalBubos[0]
                                ?<Portal bubo={this.state.portalBubos[0]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                            <Grid
                                item height={73.5} width={73.5}
                            >
                            <Spritesheet
                                image={GreenRev}
                                widthFrame={64}
                                heightFrame={64}
                                steps={24}
                                fps={3}
                                autoplay={true}
                                loop={true}
                            />
                            </Grid>
                        </Grid>
                    <Grid container item alignItems="center">

                    </Grid>
                {this.state.play
                    ?<Grid container item >
                        {
                            grid7.map(i => (
                                this.formRow(i)
                            ))
                        }
                            <button className="button play" onClick={() => this.bringInBubos()}>play!</button>
                        {
                            grid5.map(i => (
                                    this.formRow(i)
                                ))
                        }
                     </Grid>
                    :null}
                    <Grid container item alignItems="center" >
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
                        {this.state.portalBubos[4]
                        ?<Portal bubo={this.state.portalBubos[4]}
                            order={this.state.order}
                            onMove={this.onMove}/>
                        :null}
                        {
                            grid4.map(i => (
                                this.formRow(i)
                            ))
                        }
                        {this.state.portalBubos[7]
                                ?<Portal bubo={this.state.portalBubos[7]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                        <Grid
                        item height={73.5} width={73.5}
                            >
                            <Spritesheet
                                image={PurpleRev}
                                widthFrame={64}
                                heightFrame={64}
                                steps={24}
                                fps={3.5}
                                autoplay={true}
                                loop={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item alignItems="center">
                        {
                            grid2.map(i => (
                                this.formRow(i)
                            ))
                        }
                        {this.state.portalBubos[3]
                                ?<Portal bubo={this.state.portalBubos[3]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                        <div className="Click-reverse">
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
                     </Grid>
                    <Grid container item alignItems="center">
                        {
                            grid5.map(i => (
                                this.formRow(i)
                            ))
                        }
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
                            />
                            {this.state.portalBubos[6]
                                ?<Portal bubo={this.state.portalBubos[6]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                        </Grid>

                    </Grid>
                    <Grid container item wrap="nowrap" flex-grow={0} >
                        <Grid container item xs={4}>
                            {this.state.ogBubos
                            ? this.state.ogBubos.map((bubo, i) => (
                                <div onClick={() => this.onMove(bubo, i)} key={i}>
                                    <Grid
                                        item height={73.5} width={73.5}
                                    >
                                        <CustomizableBubo {...bubo} hover={true}/>
                                    </Grid>
                                </div>
                            ))
                            : <h1>You lost all your Bubos!
                                <Link to={ROUTES.ASSEMBLE_BUBOS}>Get more.</Link>
                            </h1>
                            }
                        </Grid>
                        {this.state.portalBubos[8]
                                ?<Portal bubo={this.state.portalBubos[8]}
                                    order={this.state.order}
                                    onMove={this.onMove}/>
                                :null}
                            <div className="Click-reverse">
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
                        <div className="Click-reverse">
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
                    <Grid container item height="100%" >
                        <div className="intro-container">
                            <div className='typewriter'>
                                {
                                    this.state.winOrder.map(number => (
                                        ` ${number} `
                                    ))
                                }
                            </div>
                        </div>
                        {
                            grid11.map(i => (
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
