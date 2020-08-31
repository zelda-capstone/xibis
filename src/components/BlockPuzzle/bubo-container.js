import React from 'react'
import {connect} from 'react-redux'
import {getBubosCollection} from '../../store/reducers/bubo'
import CustomizableBubo from '../customizable-bubo'

export class BuboContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    const bubos = this.props.bubos
    return (
      <div id="bubo-list">
        {bubos
          ? bubos.map((bubo, i) => {
              return (
                <div key={i}>
                  <CustomizableBubo {...bubo} />
                </div>
              )
            })
          : 'where are your bubos?'}
      </div>
    )
  }
}

const mapState = (state) => ({
  bubos: state.bubos,
  user: state.user,
})

const mapDispatch = (dispatch) => ({
  getBubos: (buboRef) => dispatch(getBubosCollection(buboRef)),
})

export default connect(mapState, mapDispatch)(BuboContainer)
