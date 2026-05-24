import api from "../config/api";

export const gameLoader = async () => {
    const response = await api.get("/games");
    
    return response.data;
}

export const gameDetailsLoader = async ({params}) => {
    console.log(params.id);
    const response = await api.get(`/game?id=${params.id}`)

    return response.data;
}

export const categoryLoader = async ({params}) => {
    console.log(params.genre);
    if(params.genre === "All"){
        return gameLoader()
    }
    const response = await api.get(`/games?category=${params.genre}`);
    return response.data;
}