import { SAVE_ROUTER } from "../action/routers";

const defaultState = {
    routers: [
        {
            id:1,
            name: "Первый путь",
            coordinates:[
                {lat: 57.772369010645065, lng: 40.936606444694654},
                {lat: 57.76816917100584, lng: 40.92774442610945},
                {lat: 57.76763700388096, lng: 40.92626384673323},
                {lat: 57.76522212553052, lng: 40.92122129378523},
                {lat: 57.7670533276977, lng: 40.91720870909895},
                {lat: 57.769113762477, lng: 40.91304703179334},
                {lat: 57.76960450264207, lng: 40.91220450827767},
                {lat: 57.771332492520564, lng: 40.91489744612862},
                {lat: 57.772959840431994, lng: 40.91128637804055},
                {lat: 57.77407983046742, lng: 40.90884281393749},
                {lat: 57.77593918844511, lng: 40.90489460226757},
                {lat: 57.77723998480453, lng: 40.903467667071645},
                {lat: 57.77827542537315, lng: 40.90262008902294},
                {lat: 57.77912399168643, lng: 40.90042903664321},
                {lat: 57.78003353173144, lng: 40.897193567365875},
                {lat: 57.780645599242966, lng: 40.89493112400682},
                {lat: 57.77979899844024, lng: 40.894963310514996},
                {lat: 57.77838032556983, lng: 40.89515642956407},
                {lat: 57.77800848676836, lng: 40.89512424305589},
                {lat: 57.77787119147379, lng: 40.89558558300645},
                {lat: 57.77724775536802, lng: 40.89580015972764},
                {lat: 57.776589863481, lng: 40.89590744808824},
                {lat: 57.77633814515417, lng: 40.89587526158006},
                {lat: 57.77623516896932, lng: 40.89542465046556},
                {lat: 57.77620084350911, lng: 40.8949096663347},
                {lat: 57.775399906842495, lng: 40.89479164913804},
                {lat: 57.774810634953425, lng: 40.89483456448228},
                {lat: 57.77391812718172, lng: 40.89458780125291},
            ],
            duration: "25 часов",
            complexity: "Сложный",
            discription: "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
            region: "Центральный",
            keyPoints: ["Первый", "Кострома", "Монастырь"]
        },
        {
            id:2,
            name: "Второй путь",
            coordinates:[
                {lat: 59.285221741174766, lng: 121.82320441988949},
                {lat: 70.24303779341494, lng: 104.17127071823202},
                {lat: 59.285221741174766, lng: 121.20165745856352},
                {lat: 51.55524932340477, lng: 108.646408839779},
                {lat: 61.731746485346065, lng: 93.10773480662984},
                {lat: 70.11658968577862, lng: 94.22651933701657},
                {lat: 70.11658968577862, lng: 104.04696132596683},
            ],
            duration: "25 часов",
            complexity: "Легкий",
            discription: "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
            region: "Центральный",
            keyPoints: ["Первый", "Кострома", "Монастырь"]
        }
    ],
};

export default function  routers (state = defaultState, action) {
    switch (action.type) {
        case SAVE_ROUTER:
            return{
                ...state,
                routers: action.payload
            }
        default:
            return state;
    }
}