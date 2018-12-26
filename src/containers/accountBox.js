import AccountBox from '../components/home-page/account-box';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {accountAction} from '../actions/accountAction';

const mapStateToProps = (state) => ({
    privateKey: state.accountReducer.privateKey,
    publicKey: state.accountReducer.publicKey,
    userName: state.accountReducer.userName,
    email: state.accountReducer.email,
    avatar: state.accountReducer.avatar,
    balance: state.accountReducer.balance,
    oxygen: state.accountReducer.oxygen,
    numberFollowing: state.accountReducer.numberFollowing,
    numberFollowers: state.accountReducer.numberFollowers,
    numberPost: state.accountReducer.numberPost,
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AccountBox)
