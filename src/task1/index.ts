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
