



export default class Broker{

    constructor(){
        routings = {}
    }

    post(data,id){
        if(routings[id]!=undefined){
        routings[id].forEach(callback => {callback(data)});
        }
    }

    suscribe(id, callback){
        if(routings[id]!=undefined){        
            routings[id].push(callback);
        }else{
            routings[id]=[callback];
        }
    }
}