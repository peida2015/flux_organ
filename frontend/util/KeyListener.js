var KeyActions = require('../actions/KeyActions');

var Mapping = {
  65	:	"a"	,
  66	:	"b"	,
  67	:	"c"	,
  68	:	"d"	,
  69	:	"e"	,
  70	:	"f"	,
  71	:	"g"	,
  72	:	"h"	,
  73	:	"i"	,
  74	:	"j"	,
  75	:	"k"	,
  76	:	"l"	,
  77	:	"m"	,
  78	:	"n"	,
  79	:	"o"	,
  80	:	"p"	,
  81	:	"q"	,
  82	:	"r"	,
  83	:	"s"	,
  84	:	"t"	,
  85	:	"u"	,
  86	:	"v"	,
  87	:	"w"	,
  88	:	"x"	,
  89	:	"y"	,
  90	:	"z"
};

var KeyNoteMap = {
  "a"	:	"G1"	,
  "s"	:	"G#1/Ab1"	,
  "d"	:	"A1"	,
  "f"	:	"A#1/Bb1"	,
  "g"	:	"B1"	,
  "h"	:	"C2"	,
  "j"	:	"C#2/Db2"	,
  "k"	:	"D2"	,
  "l"	:	"D#2/Eb2"
};

var KeyListener = function () {

  $(document).on("keydown", function(e){
    // console.log();
    KeyActions.keyPressed(KeyNoteMap[Mapping[e.keyCode]]);
  });

  $(document).on("keyup", function(e) {
    KeyActions.keyReleased(KeyNoteMap[Mapping[e.keyCode]]);
  });
};

module.exports = KeyListener;
