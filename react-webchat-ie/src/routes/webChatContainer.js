import 'core-js/es6/map';
import 'core-js/es6/promise'
import 'core-js/es6/set';
import 'core-js/es6/symbol';
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/includes';
import 'core-js/fn/math/sign';
import 'core-js/fn/object/assign';
import 'core-js/fn/string/starts-with';

import { fetch as fetchPolyfill } from 'whatwg-fetch';

import React from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default class WebChatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      directLine: null
    };
  }

  componentDidMount() {
    this.fetchToken();
  }

  fetchToken(token) {
    fetchPolyfill('http://localhost:3500/directline/token', { method: 'POST' })
      .then(res => res.json()) // expecting a json response
      .then(json =>
        this.setState(() => ({
          directLine: createDirectLine(
            {
              token: json.token
            }
          )
        }))
      )
  }

  render() {
    return (
      this.state.directLine ?
        <ReactWebChat
          directLine={this.state.directLine}
        />
        :
        <div>Connecting to bot&hellip;</div>
    )
  }
}