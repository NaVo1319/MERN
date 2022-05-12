import axios from 'axios'
import {setFiles,addFile,FavFiles} from "../reducers/fileReducer";
export function getFiles(){
    return async dispatch=>{
        try {
            const response = await axios.get('http://localhost:5000/api/files',{
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')}
            })
            dispatch(setFiles(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadFile(file) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`http://localhost:5000/api/files/upload`, formData, {
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            });
            dispatch(addFile(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export function deleteFile(file,userId){
    return async dispatch=>{
        try {
            const path='http://localhost:5000/api/files/'+userId+'/'+file.name
            const response = await axios.delete(path,{
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')}
            })
            alert(path)
            dispatch(deleteFile(file._id))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export function getAllFailes(userID){
    return async dispatch=>{
        try {
            const response = await axios.get('http://localhost:5000/api/files/all',{
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')}
            })
            console.log(response.data)
            if(userID!=undefined){
                const responseTwo = await axios.get('http://localhost:5000/api/files/'+userID,{
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')}
            })
            dispatch(FavFiles(responseTwo.data))
            }
            dispatch(setFiles(response.data))
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export function likeViewImage(file,userId,action){
    return async dispatch=>{
        try {
           console.log('Click')
            const path='http://localhost:5000/api/files/'+userId+'/'+file.name
            const response = await axios.post(path,{
                headers:{Authorization: 'Brearer '+localStorage.getItem('token')},
                action

            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}