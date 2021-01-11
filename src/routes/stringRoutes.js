import express from 'express';
const router = express.Router();

class StringRoutes
{

    constructor()
    {
        router.get('/',this.nothing)
        router.get('/replace/:caracter',this.replace)
    }
    nothing(req, res, next)
    {  
        res.status(200).json()
    }

    replace(req, res, next)
    {
       
        res.status(150).json("Invalide Body")
        
    }

}
new StringRoutes()
export default router