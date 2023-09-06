module.exports.index = function(req, res){
    return res.render('frontend/home');
}

module.exports.saveToDo = function(req, res){
    console.log(req.body);

    return res.redirect('back');
}