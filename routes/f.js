const path       = require('path');
const express    = require('express');
const router     = express.Router();

router.get('/', (req, res) => {
    return res.send('<h1>See deeper</h1> \n\n\n\n\n\n\n\n\n\n\n\n<!--<a class="navbar-brand mb-0 h1" href="/f/l">another hint yay!!</a>-->');
});


router.get('/l', (req, res) => {
    return res.send('<div><center><h1>Your on the right track!!!!!!</h1><center> \n\n\n\n\n\n\n\n\n\n\n\n<!--<a class="card" href="/f/l/a">One step closer at a time</a>-->');
});

router.get('/l/a',(req,res)=>
{
    return res.send('<div><center><h1>I aint giving the last part that easily!!!!!</h1><center>\n\n\n\n\n\n\n\n\n\n <!-- look at the path and think what could lead to the flag-->');
});

router.get('/l/a/g',(req,res)=>
    {
        return res.redirect('https://www.youtube.com/watch?v=oHg5SJYRHA0&list=PL8dZXjD8meS_WZzEKSReIBPLzKaW3HboH&index=2');
    });
module.exports = router;