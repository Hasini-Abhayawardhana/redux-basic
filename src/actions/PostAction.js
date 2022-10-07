import {FETCH_BUTTON_CLICK,SELECT_POST} from './Types' 
import axios from 'axios'
//action creater
/*export const fetchPosts=()=>{
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
*/

export const fetchPosts = () => dispach => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(res => {
        dispach({
            type:FETCH_BUTTON_CLICK,
            payload: res.data
        })
    })
}

//action creater
export const selectPost = (post) => {
    //action
    return {
        type:SELECT_POST,
        payload:post
    }
}