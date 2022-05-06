const FileService = require('../service/fileService')
const User = require('../models/User')
const File = require('../models/File')

class FileController{
    async createDir(req,res){
        try {
            const {name,type}=req.body
            const file = new File({name,type, user: user.id})
            file.path = name
            await FileService.createDir(file)
            await file.save()
            return res.json("file")
        } catch (error) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
}