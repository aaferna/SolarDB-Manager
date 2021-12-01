const insert = (data, colect) => {

    if(!localStorage.getItem(colect)){
        let d = []
        d.push(data)
        localStorage.setItem(colect, JSON.stringify(d));
        return true
    } else {
        let dataforPush = JSON.parse(localStorage.getItem(colect));
        dataforPush.push(data);
        localStorage.setItem(colect, JSON.stringify(dataforPush));
        return true
    }

}

const get = (colect)=> {
    if(localStorage.getItem(colect)){
        return JSON.parse(localStorage.getItem(colect));
    }
}

const select = (colect, id) => {
    if(localStorage.getItem(colect)){
        return JSON.parse(localStorage.getItem(colect))[id];
    }
}

