Snockets = require('snockets')
fs = require('fs')
path = require('path')


class SnocketsBrunchPlugin
  brunchPlugin: yes
  type: 'javascript'
  pattern: /*.js|*.coffee/
  
  constructor: (@config) ->
    @snockets = new Snockets()

  compile: (data, path, callback) ->
    try
      callback null, snockets.getConcatenation path, async: false
    catch e
      callback err