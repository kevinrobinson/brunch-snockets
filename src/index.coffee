Snockets = require('snockets')
fs = require('fs')
path = require('path')


class SnocketsBrunchPlugin
  brunchPlugin: yes
  type: 'javascript'
  extension: 'coffee'
  
  constructor: (@config) ->
    @snockets = new Snockets()

  compile: (data, path, callback) ->
    console.log 'Compiling through snockets...'
    try
      js = @snockets.getConcatenation path, async: false
      wrapped = "module.exports = (function(window) { ;#{js}; })(this);"
      callback null, wrapped
    catch err
      callback err, undefined