import csvToJson from 'csvtojson';
import fs from 'fs';
import path from 'path';

import * as logUtils from '../utils/logUtils';
import { RawLine, ResultLine } from './types';

const csvFileName = 'nodejs-hw1-ex1.csv';
const txtFileName = 'nodejs-hw1-ex1.txt';
const csvFilePath = `${path.resolve()}/src/csv/${csvFileName}`;
const txtFilePath = `${__dirname}/${txtFileName}`;

const writeStream = fs.createWriteStream(txtFilePath, 'utf8');

const processCSVLine = (line: RawLine) => {
	try {
		const formattedLine = (Object.keys(line) as Array<
			keyof typeof line
		>).reduce<Partial<ResultLine>>((acc, key) => {
			if (key === 'Amount') {
				return acc;
			}

			const resultKey = key.toLowerCase() as keyof ResultLine;

			acc = {
				...acc,
				[resultKey]: key === 'Price' ? Number(line[key]) : line[key],
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
