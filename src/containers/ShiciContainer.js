import React from 'react'
import PropTypes from 'prop-types'
import { Shici } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShiciActions from 'actions/shici'

class ShiciContainer extends React.Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
    oneShici: PropTypes.string.isRequired,
  }

  change = () => {
    console.log('this.props.change()');
    this.props.change()
  }

  render() {
    return (
      <Shici
        change={this.change}
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
