import csvToJson from 'csvtojson';
import fs from 'fs';

import * as logUtils from '../utils/logUtils';

const csvFileName = 'nodejs-hw1-ex1.csv';
const txtFileName = 'nodejs-hw1-ex1.txt';
const csvFilePath = `${__dirname}/${csvFileName}`;
const txtFilePath = `${__dirname}/${txtFileName}`;

const writeStream = fs.createWriteStream(txtFilePath, 'utf8');

const processCSVLine = (json: JSON) => {
	try {
		writeStream.write(JSON.stringify(json) + '\n');
	} catch (error) {
		logUtils.logReadError(error);
	}
};

csvToJson()
	.fromFile(csvFilePath)
	.subscribe(processCSVLine, logUtils.logWriteError, logUtils.logFinish);

// The same with pipe()
/*
const readStream = fs.createReadStream(csvFilePath);

readStream
	.pipe(csvToJson({ downstreamFormat: 'line' }))
	.on('error', logUtils.logReadError)
	.pipe(writeStream)
	.on('error', logUtils.logWriteError)
	.on('close', logUtils.logFinish);
*/
