exports.middlewareGlobal = (req, res, next) =>{
    
    if(req.body.cliente){
        console.log(`vi que voce postou ${req.body.cliente}`);
    }

    next();
};