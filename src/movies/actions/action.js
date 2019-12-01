let action =(data)=> {
    console.log('i am action!!!',data)
    return{
    type:"ADD",
    payload:data
}
}
let detailAction=data=>{
    return{
    type:"FILTER",
        payload:data
    }
}
export  {action,detailAction}