import React from 'react';
import FontAwesomeIcon from './fontAwesomeIcons';

class ChatBox extends React.Component {
    render() {
        return (
                <a href="#!" className="btn-floating  btn-chatBox">
                    <FontAwesomeIcon iconClasses="fab fa-facebook-messenger" />
                </a>
        )
    }
}

export default ChatBox; 