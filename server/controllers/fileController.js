const FileService = require('../service/fileService')
const User = require('../models/User')
const config = require("config")
const fs = require("fs")
const File = require('../models/File')

exports.create = async (req,res)=>{
    try {
        const {name,type}=req.body
        const file = new File({name,type, user: req.user.id})
        file.path = name
        await FileService.ceateDir(file)
        await file.save()
        return res.json(file)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}
exports.getFiles = async(req,res)=>{
    try {
        console.log(req.user)
        const files = await File.find({user: req.user.id})
        return res.json(files)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: "It can't get files"})
    }
}
exports.getAllFiles = async(req,res)=>{
    try {
        console.log(req.user)
        const files = await File.find()
        return res.json(files)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: "It can't get files"})
    }
}
exports.uploadFile = async(req,res)=>{
    try {
        const file = req.files.file
        const user = await User.findOne({_id: req.user.id})
        if (user.usedSpace + file.size> user.diskSpace){
            return res.status(400).json({message: "There is no space on disk"})
        }
        user.usedSpace = user.usedSpace+file.size
        let path
        path = config.get('filePath')+'\\'+user.id+'\\'+file.name
        if (fs.existsSync(path)){
            return res.status(400).json({message: "File already exist"})
        }
        file.mv(path)
        const data=file.name.split('.')
        const type = data.pop()
        const dbFile = new File({
            name: data.pop(),
            type,
            size: file.size,
            path,
            user: user.id
        })
        await dbFile.save()
        await user.save()
        res.json(dbFile)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}
exports.downloadFile = async(req, res)=> {
    try {
        const file = await File.findOne({name: req.params.idFile})
        var filepath = 'C:\\Users\\voham\\OneDrive\\Рабочий стол\\Sem6\\CurseWork\\basket-gallery\\server\\files\\'+req.params.idUser+'\\'+req.params.idFile+'.'+file.type
        res.sendFile(filepath);
    } catch (e) {
        return res.status(400).json(e)
    }
}
exports.deleteFile=async(req,res)=>{
    try {
        const file = await File.findOne({name:req.params.idFile,user:req.user.id})
        if (!file){
            return res.status(400).json({message:'file not found'})
        }
        else{
            FileService.deleteFile(file)
            await file.remove()
            return res.json({message:'File was delete'})
        }
    } catch (e) {
        console.log(e)
    }
}