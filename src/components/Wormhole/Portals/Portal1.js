import React from "react"
import CustomizableBubo from '../../customizable-bubo'
import Grid from '@material-ui/core/Grid'
import BuboRow from "../BuboRow"



const Portal = (props) => {

    const bubo = props.bubo
    const order = props.order
   
    return(
        <div>
        {bubo.color
            ?  <Grid
                item height={73.5} width={73.5}
            >   
                <div onClick={() => props.onMove(bubo)}>
                    <CustomizableBubo {...bubo} hover={true}/>
                </div>
            </Grid>
            : <></>
        }
        </div>
    )
    
}



export default Portal