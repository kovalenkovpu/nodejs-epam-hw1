# nodejs-epam

## TASK 1.1
Write a program which reads a string from the standard input `stdin`, reverses it and then writes it to the standard output `stdout`.
 - The program should be started from npm script via nodemon (`npm run task1`).
 - The program should be running in a stand-by mode and should not be terminated after the first-string processing.
 
## TASK 1.2
Write a program which should do the following:
 - Read the content of csv file from `./csvdirectory`.
 - Use the csvtojson package (https://github.com/Keyang/node-csvtojson) to convert csv file to json object.
 - Write the csv file content to a new txt file.
 - Do not load all the content of the csv file into RAM via stream (read/write file content line by line).
 - In case of read/write errors, log them in the console.
 - The program should be started via npm script using nodemon (`npm run task2`).
 
## TASK 1.3
 - Rewrite the above-mentioned programs to use babel (https://babeljs.io/) and ES6 modules.
 - Run task: `npm run task1`
