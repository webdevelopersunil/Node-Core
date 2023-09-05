module.exports.profile = function(req, res){
    res.end('<h1>User Profile Page;</h1>');
}

module.exports.timeline = function(req, res){
    res.send('<h1>User Timeline here ends</h1>');
}