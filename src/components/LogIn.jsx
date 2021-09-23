import React from 'react';
import '../stylesheets/styles.scss';

class LogIn extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // console.log(`this is login props ${this.props.addUser}`);
    return (
      <div>
        Username: <input type ="text" id="usernameInput" /><br />
        Password: <input type="password" id="passwordInput" /><br />
      {/* trigger an action to POST input from username and password to backend
      
      */}
        <button onClick={() => {
          return this.props.addUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value);
        }}>Sign up
          
        </button>
      {/* trigger an action to POST input from username and password to backend
      
      */}
        <button
          onClick={() => {
            return this.props.checkUser(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value);
          }}>Log in
        </button>
      </div>
    )
  }
};

export default LogIn;
