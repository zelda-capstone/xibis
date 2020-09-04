import React from "react"
import CustomizableBubo from '../../customizable-bubo'
import Grid from '@material-ui/core/Grid'
import BuboRow from "../BuboRow"



const Portal = (props) => {

    //onsole.log("props", props)
    const bubo = props.bubo
    const order = props.order
    // if((order % 2) === 1){
    //     console.log("ODD")
    // }


    //if((order % 2) === 1){
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
    // }else{
    //    return null
    // }
}



export default Portal