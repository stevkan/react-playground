import React, { Component } from 'react';
import WebChatContainer from './webChatContainer';

const FragmentStyling = {
  'container': {
    'display': 'flex',
    'justifyContent': 'center'
  },
  'div': {
    'height': '40rem',
    'minHeight': '20rem',
    'width': '60%',
    'display': 'flex',
    'justifyContent': 'space-around',
    'marginTop': '2rem'
  }
}

class WebChatView extends Component {
  render() {
    return (
      <div style={FragmentStyling.container}>
        <div style={FragmentStyling.div}>
          <WebChatContainer id="webchat" role="main" />
        </div >
      </div>
    )
  }
}

export default WebChatView;