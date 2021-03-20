// =============================
// Task1 using JS and babel-node
import readline from 'readline';

import * as logUtils from '../utils/logUtils';

const rl = readline.createInterface({ input: stdin });

rl.on('line', (line) => {
	const reversedData = line.toString().split('').reverse().join('');

	stdout.write(reversedData + '\n');
	// or console.log(reversedData);
});

rl.on('error', (error) => {
	logUtils.logError('Error on reading from stdin')(error);
});

// =============================
// Task2 using JS and babel-node
import csvToJson from 'csvtojson';
import fs from 'fs';

const csvFileName = 'nodejs-hw1-ex1.csv';
const txtFileName = 'nodejs-hw1-ex1.txt';
const csvFilePath = `${path.resolve()}/src/csv/${csvFileName}`;
const txtFilePath = `${__dirname}/${txtFileName}`;

const writeStream = fs.createWriteStream(txtFilePath);

const processCSVLine = (line) => {
	try {
		const formattedLine = Object.keys(line).reduce((acc, key) => {
			if (key === 'Amount') {
				return acc;
			}

			acc = {
				...acc,
				[key.toLowerCase()]: key === 'Price' ? Number(line[key]) : line[key],
			};

			return acc;
		}, {});
		writeStream.write(JSON.stringify(formattedLine) + '\n');
	} catch (error) {
		logUtils.logReadError(error);
	}
};

csvToJson()
	.fromFile(csvFilePath)
	.subscribe(
		processCSVLine,
		(error) => console.log('Error while reading from .csv file', error),
		() => console.log('CSV is processed to JSON')
	);
