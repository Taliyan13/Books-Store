// when user clicked on "My Cart", toggle the Catr UI
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false , notification: null},
    reducers: //map of method that represent the actions we want to handle with this reducer
    {
        toggle(state)
        {
            state.cartIsVisible=!state.cartIsVisible;
        },
        showNotification(state, action){
            state.notification ={
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };

        },
    }
});


//export the reducer export (toggle)
export const uiActions = uiSlice.actions;

export default uiSlice;
