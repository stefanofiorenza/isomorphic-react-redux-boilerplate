import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Isomorphic Hello</h1>
        <Link to="/test">
          Click me to test the routing (client-side if JavaScript is enabled)
        </Link>
      </div>
    );
  }
}
