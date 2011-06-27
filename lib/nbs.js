var util=require('util'),
    querystring=require('querystring'),
    rest=require('restler'),
    BASE_URL='.api3.nextbigsound.com/',
    nbs=exports;
nbs.init=function(appname){
    this.appname=appname;
};
nbs.searchArtistByName=function(artistName,success,error){
    jsonRequest('artists/search',{q:artistName},success,error);
};
nbs.findArtistId=function(artistName,callback){
    nbs.searchArtistByName(artistName,function(data){
            var found=false;
            for(var key in data){
                if(data.hasOwnProperty(key)){
                    callback(key);
                    found=true;
                    break;
                }
            }
            if(!found){
                callback('-1');
            }
        },function(error){
        callback('-1');
    });
};
nbs.findProfile=function(artistId,success,error){
    jsonRequest('profiles/artist/'+artistId,{},success,error);
};

var jsonRequest=function(resource,params,successCallback,errorCallback){
    params=params||{};
    rest.get('http://'+nbs.appname+BASE_URL+resource+'.json?'+querystring.stringify(params))
        .on('complete',successCallback)
        .on('error',errorCallback);
};