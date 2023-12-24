import axios from "axios";

const aufoFetch = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
});

export {aufoFetch};