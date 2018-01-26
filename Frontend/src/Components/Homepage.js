import React, {Component} from 'react';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Homepage extends Component {


    render() {
        return (
            <div className="homepage">
                <div className="welcome">
                    iTrack
                </div>
                <div className="welcome-below">
                    Managing resources made simple.
                </div>
                <form>
                    <label>
                        E-mail:
                        <input type="text" name="login"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password"/>
                    </label>
                    <label>
                        <input type="submit" className="login-button button primary " value="LOGIN"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Homepage;