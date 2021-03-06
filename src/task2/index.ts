import csvToJson from 'csvtojson';
import fs from 'fs';

const csvFileName = 'nodejs-hw1-ex1.csv';
const txtFileName = 'nodejs-hw1-ex1.txt';
const csvFilePath = `${__dirname}/${csvFileName}`;
const txtFilePath = `${__dirname}/${txtFileName}`;

const writeStream = fs.createWriteStream(txtFilePath);

const processCSVLine = (json: JSON) => {
	try {
		writeStream.write(JSON.stringify(json) + '\n');
	} catch (error) {
		console.log('Error while writing to .txt file', error);
	}
};

csvToJson()
	.fromFile(csvFilePath)
	.subscribe(
		processCSVLine,
		(error) => console.log('Error while reading from .csv file', error),
		() => console.log('Done!')
	);
