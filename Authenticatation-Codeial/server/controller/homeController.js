module.exports.home = function(req, res){

    const locals = {
        title : "Homepage",
        content : "This is Homepage"
    };

    return res.render('./home', locals);
}