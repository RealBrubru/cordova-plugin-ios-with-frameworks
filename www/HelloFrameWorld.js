var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');

var helloFrameWorld = new HelloFrameWorld();

function HelloFrameWorld() {
    console.log("HelloFrameWorld.js - is created");
}

helloFrameWorld.resize = function(successCallback, errorCallback, options) {
    console.log("HelloFrameWorld.js - resize: " + JSON.stringify(options));

    options = options || {};
    var getValue = argscheck.getValue;
    
    var sourceUri = options.sourceUri;
    var destinationUri = options.destinationUri;
    var width = getValue(options.width, -1);
    var height = getValue(options.height, -1);

    var args = [sourceUri, destinationUri, width, height];

    exec(successCallback, errorCallback, "HelloFrameWorld", "resize", args);
};


module.exports = helloFrameWorld;