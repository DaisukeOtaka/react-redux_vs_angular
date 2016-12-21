import { connect } from 'react-redux'

import * as actions from '../actions/actionCreator'
import FizzBuzzComponent from '../components/fizz-buzz'
import FizzBuzzLib from '../lib/fizz-buzz-lib'

//====================================================================================================
// Functions
//====================================================================================================
function mapStateToProps(state) {
  return {
    max: state.max,
    fizz: state.fizz,
    buzz: state.buzz,
    list: state.list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (e, max, fizz, buzz) => {
      e.preventDefault();
      dispatch(actions.calcFizzBuzz({max: max, fizz: fizz, buzz: buzz, list: FizzBuzzLib.calc(max, fizz, buzz)}));
    },
    handleChange: (max, fizz, buzz) => {
      dispatch(actions.updateValues({max: max, fizz: fizz, buzz: buzz}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FizzBuzzComponent)
