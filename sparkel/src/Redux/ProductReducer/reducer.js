

const initialState={
    error:false,
    loading:false,
    allData:[],
}

export const reducer=(state=initialState,action)=>{
switch(action.type){
    case 'REQUEST':{
        return {
            ...state,
            loading:true
        }
    }
    case 'ERROR':{
        return {
            ...state,
            error:true
        }
    }
}
}