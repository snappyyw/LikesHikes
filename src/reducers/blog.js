const sss = 'sss'

const defaultState={
    list:[
        {title: "da", subtitle: "Создание сервиса", id: 5, date: "25/07/2001"},
        {title: "da", subtitle: "....", id: 6},
        {title: "da", subtitle: "....", id: 7},
        {title: "da", subtitle: "....", id: 8},
        {title: "da", subtitle: "....", id: 9},
        {title: "da", subtitle: "....", id: 15},
        {title: "da", subtitle: "....", id: 55},
        {title: "da", subtitle: "....", id: 54},
        {title: "da", subtitle: "Создание сервиса", id: 5, date: "25/07/2001"},
        {title: "da", subtitle: "....", id: 6},
        {title: "da", subtitle: "....", id: 7},
        {title: "da", subtitle: "....", id: 8},
        {title: "da", subtitle: "....", id: 9},
        {title: "da", subtitle: "....", id: 15},
        {title: "da", subtitle: "....", id: 55},
        {title: "da", subtitle: "....", id: 54},

    ],
    page: 10
}

export default function  blog (state = defaultState, action) {
    switch (action.type) {
        case sss:
            return{
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
}