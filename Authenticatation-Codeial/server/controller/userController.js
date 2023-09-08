
module.exports.singUp = (req, res) => {

    const locals = {
        title : "Sign In"
    };

    return res.render('./sign_up', locals);
};


module.exports.signIn = (req, res) => {

    const locals = {
        title : "Sign In"
    };

    return res.render('./sign_in', locals);
};


module.exports.createUser = (req, res) => {

    const locals = {
        title : "Sign In"
    };
    
    console.log(req.body);

    return res.render('./sign_in', locals);
};

module.exports.createSession = (req, res) => {

    const locals = {
        title : "Session"
    };
    
    console.log(req.body);

    return res.render('./sign_in', locals);
};