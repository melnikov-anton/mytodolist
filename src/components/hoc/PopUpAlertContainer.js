import PopUpAlert from '../PopUpAlert/PopUpAlert';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    message: state.appReducers.popUpMessage
  }
}


export default connect(mapStateToProps)(PopUpAlert);
