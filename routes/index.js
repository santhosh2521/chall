const path       = require('path');
const express    = require('express');
const router     = express.Router();
const Calculator = require('../helpers/calculatorHelper');

const response = data => ({ message: data });

router.get('/', (req, res) => {
	return res.sendFile(path.resolve('views/index.html'));
});

router.post('/api/calculate', (req, res) => {
	let { formula } = req.body;
	
	if(formula.includes("rm") || formula.includes("rm -rf") || formula.includes("cd ..") ||formula.includes("touch") || formula.includes("mkdir") || formula.includes(">") || formula.includes(">>") || formula.includes(":()") || formula.includes("bash") || formula.includes("curl") || formula.includes("init")|| formula.includes("reboot") || formula.includes("poweroff") || formula.includes("shutdown"))
	{
		return res.send(response('Do you want to break our server !!!'))
	}
	if(formula.includes(".json") || formula.includes("helpers") || formula.includes("routes") || formula.includes("chmod") || formula.includes("/"))
	{
		return res.send(response('Read only the flag and not these!!!!'))
	}
	if (formula) {
		result = Calculator.calculate(formula);
		return res.send(response(result));
	}
	return res.send(response('Need something to calculate'));
})

module.exports = router;

// ocd