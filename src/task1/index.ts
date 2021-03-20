import { stdin, stdout } from 'process';
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
