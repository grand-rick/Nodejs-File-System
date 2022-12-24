import {promises as fs} from 'fs';

const writeData = async ():Promise<void> => {
    try {
        const myFile = await fs.readFile('writeFile.txt', 'utf-8');
        console.log(myFile);
    } catch(err) {
        console.log(err);
    }
}
writeData();