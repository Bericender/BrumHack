
/*
* GET home page.
*/
var request = require('request');
var fs = require('fs');

exports.index = function(req, res){

  // request('http://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478&date=2013-01', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     //console.log(dataArray);
  //     //console.log(body) // Print the google web page.
  //     res.render('index', { dataArray: body,
  //                           title: "Chilling like a Villain" });
  //   }


  // fs.readdir(__dirname+'/../public/2014-08', function (error, files) {
  //   if (error) {
  //     console.log(error);
  //   } else{
  //     //console.log(dataArray);
  //     //console.log(body) // Print the google web page.
  //     console.log(files);
  //     var dataArray = [];
  //     for (var i = 0; i < files.length; i++){
  //     data = fs.readFileSync(__dirname + '/../public/2014-08/' + files[i], 'utf8');
  //         //data.toString('utf8', 0, data.length);
  //         dataArray.push(data);
  //         console.log(data);
  //
  //     }

  var dataArray = fs.readFileSync(__dirname + '/../public/largedata.json', 'utf8');

  console.log(dataArray);

  res.render('index', {
    dataArray: dataArray,
    title: "Chilling like a Villain"
  });
};
