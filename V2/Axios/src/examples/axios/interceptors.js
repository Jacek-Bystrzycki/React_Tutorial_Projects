import axios from "axios";

const autoFetch = axios.create({
    baseURL: "https://course-api.com",
});

autoFetch.interceptors.request.use(
    (request)=>{
        request.headers.common["Accept"] = "aplication/json";
        console.log("request sent");
        return request;
    },
    (err)=>{
        return Promise.reject(err);
    }
);

autoFetch.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
    (err)=>{
        console.log(err.response);
        if (err.response.status === 404){
            console.log("NOT FOUND");
        }
        return Promise.reject(err);
    }
);

export default autoFetch;