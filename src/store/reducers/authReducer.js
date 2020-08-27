const INITIAL_STATE = {
    authMsg: null,
    user: null
}

export default function (state = INITIAL_STATE, action){
    return {
        ...state,
        authMsg: 'Usuário logado com sucesso',
        user:'nathan@gmail.com'
    }
}