// =============================
// Task1 using JS and babel-node
import { stdin, stdout } from 'process';

stdin.on('data', (data) => {
	try {
		const reversedData = data.toString().split('').reverse().join('');

		stdout.write(reversedData + '\n');
	} catch (error) {
		console.error(error);
	}
});

stdin.on('error', (error) => {
	console.error('Error on reading from stdin', error.message);
});

// =============================
// Task2 using JS and babel-node
import csvToJson from 'csvtojson';
import fs from 'fs';

const csvFileName = 'nodejs-hw1-ex1.csv';
const txtFileName = 'nodejs-hw1-ex1.txt';
const csvFilePath = `${__dirname}/${csvFileName}`;
const txtFilePath = `${__dirname}/${txtFileName}`;

const writeStream = fs.createWriteStream(txtFilePath);

const processCSVLine = (json) => {
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
		() => console.log('CSV is processed to JSON')
	);
