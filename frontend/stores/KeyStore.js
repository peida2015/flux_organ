var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var KeyListener = require('../util/KeyListener');

var KeyStore = new Store(AppDispatcher);
var _keys = [];

var resetKeys = function(keys) {
  _keys = keys;
  KeyStore.__emitChange();
};

var addKey = function(key) {
  var keyIdx = _keys.indexOf(key);
  if (keyIdx === -1) {
    _keys.push(key);
  }
  KeyStore.__emitChange();
};

var removeKey = function(key) {
  var keyIdx = _keys.indexOf(key);
  if (keyIdx !== -1) {
    _keys.splice(keyIdx, 1);
  }
  KeyStore.__emitChange();
};

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      // debugger
      break;
    case "REMOVE_KEY":
      removeKey(payload.noteName);
      break;
  }
};

// KeyStore.addListener = function () {
//   KeyListener();
// };

module.exports = KeyStore;
