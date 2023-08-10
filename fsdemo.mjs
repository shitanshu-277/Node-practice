import {readFile,writeFile} from 'fs/promises';
//console.log(__dirname);
//console.log(import.meta.url);
const filePath=new URL('./index.html',import.meta.url);
let data = await readFile(filePath,{encoding:'utf-8'});
console.log(data);

const obj={
    title:'my custom title',
    body:'custom body'
}

for(const [key,value] of Object.entries(obj)){
    data=data.replace(`{${key}}`,value)
}

await writeFile(new URL('./index.html',import.meta.url),data);