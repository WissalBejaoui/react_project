import auth from '../firebase'
 import firebase from '../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from './actionType'


export const login = () => async dispatch => {
    try{
        dispatch({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)
        const accessToken = res.credential.accessToken
        const profile={
            name: res.additionalUserInfo.profile.Name,
            photoURL: res.additionalUserInfo.profile.picture,
        }   
        console.log(profile)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
        })  
        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })
    } catch (e) {
        console.log(e.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: e.message,
        })

    }
}