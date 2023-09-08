module.exports.home = function(req, res){

    console.log(req.cookies);
    

    const locals = {
        title : "Homepage",
        content : "This is Homepage"
    };

    return res.render('./home', locals);
}