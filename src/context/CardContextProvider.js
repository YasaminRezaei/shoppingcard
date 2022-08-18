import React,{useReducer,createContext} from 'react';

const initialState = {
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
};

const sumItems = (items) => {
    const itemsCounter = items.reduce((total,product) => total+ product.quantity ,0 );
    const total = items.reduce( (total,product) => total + product.quantity*product.price , 0).toFixed(2);
    return {itemsCounter : itemsCounter,total : total}
} 

const reducer = (state,action) => {
    switch (action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1});
            }
            return {...state
                    ,selectedItems : [...state.selectedItems] //+quantity
                    ,...sumItems(state.selectedItems)
                    ,checkout:false
            }
           
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !==action.payload.id)   
            return{...state ,
                   selectedItems : [...newSelectedItems] // selecteditem - payload
                   ,...sumItems(newSelectedItems)
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex( item => item.id ===action.payload.id )
            state.selectedItems[indexI].quantity ++;
            return { ...state, ...sumItems(state.selectedItems)}
        case "DECREASE":
            const indexD = state.selectedItems.findIndex( item => item.id ===action.payload.id )
            state.selectedItems[indexD].quantity --;
            return { ...state, ...sumItems(state.selectedItems)}

        case "CHECKOUT" :
            return {
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }
        
        case "CLEAR" :
            return {
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }
        default:
            return state;
    }


        
    } 


export const CardContext = createContext();
    
const CardContextProvider = (props) => {
const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <CardContext.Provider value={{state : state, dispatch : dispatch}}>
            {props.children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;