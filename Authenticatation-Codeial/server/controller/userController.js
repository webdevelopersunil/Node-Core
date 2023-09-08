const User = require('../model/User');

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

module.exports.createUser = async (req, res) => {

    try {

        const locals = {
            title : "Sign In"
        };
        console.log(req.body); // test purpose

        const user = await User.findOne({ _id: req.params.id });
        
        if(!user){

            console.log('Common Email Found');
            return res.redirect('back');

        }else{
            
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            return res.render('./sign_in', locals);
        }
        

    } catch(error) {

        if(error){ console.error(error); return; }
    }
};


module.exports.createSession = (req, res) => {

    const locals = {
        title : "Session"
    };
    
    console.log(req.body);

    return res.render('./sign_in', locals);
};