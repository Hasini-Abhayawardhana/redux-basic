import {FETCH_BUTTON_CLICK} from './Types' 

//action creater
export const fetchPosts=()=>{
    //action
    return{
        type:FETCH_BUTTON_CLICK,
        payload:[
            {
                id: 1,
                user_id: 1,
                title: "First",
                text: "User Click Button"
            },
            {
                id: 2,
                user_id: 1,
                title: "Second Step",
                text: "Call action and go Reducer"
            },
            {
                id: 3,
                user_id: 1,
                title: "Third",
                text: "Data Store Object"
            },
            {
                id: 4,
                user_id: 2,
                title: "My Last",
                text: "Provider and finally component"
            }
        ]
    }
}