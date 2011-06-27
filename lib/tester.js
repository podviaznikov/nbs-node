var util=require('util'),
    nbs=require('./nbs'),
    express=require('express'),
    app=express.createServer();

nbs.init('mplayer');

nbs.findProfile(356,function(data) {
  util.log(util.inspect(data));
},
function(er){
    util.log('error');
});

nbs.searchArtistByName('Kanye',function(data){
  util.log(util.inspect(data));
},
function(er){
    util.log('error');
});
nbs.findArtistId('Kanye',function(id){
    util.log('Id='+id);
});
app.listen(process.env.C9_PORT);
util.log('started app');