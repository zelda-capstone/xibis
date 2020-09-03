import React from 'react'
import CustomizableBubo from '../customizable-bubo'
import Grid from '@material-ui/core/Grid'
import { updateBuboToDb } from '../../store'

class BuboRow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bubos: this.props.bubos
        }
    }

    render(){

        return(
            <Grid container item xs={4}>
                {this.props.bubos
                ? this.props.bubos.map((bubo, i) => (
                    <div key={i}>
                        <Grid
                            item height={73.5} width={73.5}
                        >
                            <CustomizableBubo {...bubo}/>
                        </Grid>
                    </div>
                ))
                : <></>
                }
            </Grid>
        )
    }

}


export default BuboRow