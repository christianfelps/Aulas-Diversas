const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);

}

async function walk(files, rootDir){

    for (let file of files ){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()){
            readDir(fileFullPath);
            continue;
        }
        
        if(!/\.css$/g.test(fileFullPath)) continue;

        console.log(file, stats.isDirectory());
    }
}
    readDir('C:/Users/chris/Desktop/JavaScript otavio/');