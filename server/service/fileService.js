const fs = require('fs')
const File = require('../models/File')
const config = require('config');

exports.ceateDir = (file)=>{
    const filePath = config.get('filePath')+'\\'+file.user+'\\'+file.path
    console.log(filePath)
    return new Promise(((resolve,reject)=>{
        try {
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath)
                return resolve({message: 'File was created'})
            }else{
                return reject({message: 'File already exist'})
            }
            
        } catch (error) {
            return reject({message: 'File error'})
        }
    }))
}
exports.deleteFile=(file)=>{
    fs.unlinkSync(file.path)
}