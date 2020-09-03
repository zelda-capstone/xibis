import React from "react"
import CustomizableBubo from '../customizable-bubo'
import Grid from '@material-ui/core/Grid'



class Portal extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            accessory: '',
            personality: [],
            bubos: [],
        }
    }

    // r



    render(){
       console.log("props", this.props)
        const bubo = this.props.bubo
        const order = this.props.order
        return(
            <div>
            {bubo.color
              ?  <Grid
                    item height={73.5} width={73.5}
                >
                    <CustomizableBubo {...this.state}  hover={true}/>
                </Grid>
              : <></>
            }
         </div>
        )
    }
}



export default Portal