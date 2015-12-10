var React = require('react');
var KeyStore = require('../stores/KeyStore');


var Keyboard = React.createClass({
  getInitialState: function () {
    return ( { keys: KeyStore.all() } );
  },

  _keysChanged: function () {
    this.setState ( { keys: KeyStore.all() });
    console.log("_keysChanged");
    // this.forceUpdate();
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  render: function () {
    console.log("re-render "+this.state.keys);
    return (
      <div>
        { this.state.keys.map(function(key){
            return <div>{key}</div>;
          }) }
      </div>
    );
  }
});

module.exports = Keyboard;
