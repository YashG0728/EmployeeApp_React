import axios, { Axios } from "axios";

export const DataTransfer = () => {

    try{
    const resoponse = axios.get("http://localhost:9096/findAll");
    return resoponse;
    }
    catch(err){
        return err;
    }
}
