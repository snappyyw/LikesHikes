import {SET_BLOG} from "../action/blog"

const defaultState = {
    list:[
        {title: "da", subtitle: "Создание сервиса", id: 5, date: "25/07/2001"},
        {title: "da", subtitle: "...", id: 6},
        {title: "da", subtitle: "...", id: 7},
        {title: "da", subtitle: "...", id: 8},
        {title: "da", subtitle: "...", id: 9},
        {title: "da", subtitle: "...", id: 15},
        {title: "da", subtitle: "...", id: 55},
        {title: "da", subtitle: "...", id: 54},
        {title: "da", subtitle: "...", id: 56},
        {title: "da", subtitle: "...", id: 57},
        {title: "da", subtitle: "...", id: 58},
        {title: "da", subtitle: "...", id: 59},
    ],
}

export default function  blog (state = defaultState, action) {
    switch (action.type) {
        case SET_BLOG:

            return{
                ...state,
                list: action.payload,
            }
        default:

            return state;
    }
}