// Generated by CoffeeScript 1.6.2
(function() {
  var Snockets, SnocketsBrunchPlugin, fs, path;

  Snockets = require('snockets');

  fs = require('fs');

  path = require('path');

  SnocketsBrunchPlugin = (function() {
    SnocketsBrunchPlugin.prototype.brunchPlugin = true;

    SnocketsBrunchPlugin.prototype.type = 'javascript';

    SnocketsBrunchPlugin.prototype.pattern = /.*(\.js|\.coffee)/;

    function SnocketsBrunchPlugin(config) {
      this.config = config;
      this.snockets = new Snockets();
    }

    SnocketsBrunchPlugin.prototype.compile = function(data, path, callback) {
      var err, js, wrapped;

      console.log('Compiling through snockets...');
      try {
        js = this.snockets.getConcatenation(path, {
          async: false
        });
        wrapped = "module.exports = (function(window) { " + js + " })(this);";
        return callback(null, wrapped);
      } catch (_error) {
        err = _error;
        return callback(err);
      }
    };

    return SnocketsBrunchPlugin;

  })();

}).call(this);
