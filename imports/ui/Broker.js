



export default class Broker{

    constructor(){
        this.feeds = {}
    }

    post(data,id){
        if(this.feeds[id]!=undefined){
        this.feeds[id].forEach(callback => {callback(data)});
        }
    }

    subscribe(id, callback){
        if(this.feeds[id]!=undefined){        
            this.feeds[id].push(callback);
        }else{
            this.feeds[id]=[callback];
        }
    }
}