function xodimlarReducer(state = {
    xodimlar: [
        {
            key: 1,
            name: "Alisher",
            lastName: "Aliyev",
            phone: "+99893 999 88 77",
            lavozim: "Frontend Developer",
            daraja: "Senior"
        },
        {
            key: 2,
            name: "Bobur",
            lastName: "Erkinov",
            phone: "+99893 999 88 77",
            lavozim: "Backend Developer",
            daraja: "Middle"
        },
    ],
    data: "",
    search: ""
}, action) {
    switch (action.type) {
        case "ADD_USER" :
            const users = [...state.xodimlar]
            users.push({
                key: state.xodimlar.length + 1,
                name: action.payload.name,
                lastName: action.payload.lastName,
                phone: action.payload.phone,
                lavozim: action.payload.lavozim,
                daraja: action.payload.daraja
            })
            return {...state, xodimlar: users}
        case "DELETE_USER" :
            let a = [...state.xodimlar]
            a.map((item, index) => {
                if (item.key === action.payload) {
                    a.splice(index, 1)
                }
            })
            return state = {...state, xodimlar: a}
        case "EDIT_DATA":
            state = {...state, data: action.payload}
            break
        case "SAVE_EDIT" :
            let edit = state.xodimlar.map(item=>{
                let data = state.data
                if (item.key === data.key){
                    item={
                        ...item,
                        name: action.payload.name,
                        lastName: action.payload.lastName,
                        phone: action.payload.phone,
                        lavozim: action.payload.lavozim,
                        daraja: action.payload.daraja,
                    }
                }
                return item
            })
            state={...state, xodimlar: edit}
            break
    }

    return state
}

export default xodimlarReducer