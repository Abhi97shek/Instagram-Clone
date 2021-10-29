import { createSlice,configureStore } from "@reduxjs/toolkit";


const defaultState= {
    email:null,
    userImg:null,
    username: null
};

const userAuthSlice = createSlice({

    name:"slice",
    initialState:defaultState,
    reducers:{
        signInAuth:(state,payload)=>{
                    state.email=action.payload.email;
                    // state.userImg=action.payload.userImg;
                    // state.username=action.payload.username;
        },
        signOutAuth:(state)=>{
            state.email=null;
            state.userImg=null;
            state.username=null;

        }
    }

});

const store = configureStore({
    reducer:{
        isAuth:userAuthSlice.reducer
    }
});



export default store;

export const { signInAuth,signOutAuth} = userAuthSlice.actions;
