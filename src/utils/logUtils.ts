const logError = (message: string) => (error: Error) =>
	console.log(message, error);
const logReadError = (error: Error) =>
	logError('Error while reading from .csv file')(error);
const logWriteError = (error: Error) =>
	logError('Error while writing to .txt file')(error);
const logFinish = () => console.log('CSV is processed to JSON');

export { logReadError, logWriteError, logFinish };
