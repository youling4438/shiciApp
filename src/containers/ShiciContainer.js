import React from 'react'
import PropTypes from 'prop-types'
import { Shici } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShiciActions from 'actions/shici'

class ShiciContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeShici = this.changeShici.bind(this)
  }
  static propTypes = {
    changeShici: PropTypes.func.isRequired,
    oneShici: PropTypes.string.isRequired,
  }

  changeShici() {
    console.log('changeShici -------------------------');
    this.props.changeShici()
    console.log('changeShici -------------------------');
  }
  render() {
    return (
      <Shici
        change={this.changeShici}
        oneShici={this.props.oneShici}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  oneShici: createSelector(
    (state) => state.shici.oneShici,
    (shiciState) => shiciState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShiciActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiciContainer)
