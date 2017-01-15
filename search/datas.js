var http = require('http')
  , fs = require('fs')
  , options

options = {
    host: 'https://gobyexample.com/writing-files'
  , port: 80
  , path: '/git/search/info.doc'
}

var request = http.get(options, function(res){
    var imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile('info.doc', imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
        })
    })

})