import React from 'react';
import { connect } from 'react-redux';
import App from "../App";

export const Signup:React.FC =({user})=> {
    return (
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname" placeholder="Zigmund"/><br/>
                <input type="submit" value="Submit"/>
                <p>Меня зовут: {user}</p>
            </form>
    );
};




const mapStateToProps = store => {
    return {
        user: store.user,
    }
}
export default connect(mapStateToProps)(App)
