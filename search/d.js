exports.sendPdf = function(req, res) {

  var donneRecu = req.body;

  console.log(donneRecu['lien']);

  var url = donneRecu['http://www.ieee.org/documents/ieeecopyrightform.pdf']; //pdf link

  http.get(url, function(response) {

      var chunks = [];

      response.on('data', function(chunk) {

          console.log('downloading');

          chunks.push(chunk);

      });
	   response.on("end", function() {
          console.log('downloaded');
	   });