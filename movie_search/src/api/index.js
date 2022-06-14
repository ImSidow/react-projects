import axios from "axios";

const axiosInstance = axios.create({
    // timeout: 5000,
    headers: { "Content-Type": "application/json" },
});

export function searchByTitle(title = "", callback) {
    axiosInstance
        .get(` http://www.omdbapi.com/?s=${title}&apikey=26fc9ec0`)
        .then((res) => {
            callback(res.data.Search);
        })
        .catch((err) => {
            console.log(err);
        });
}

export function searchById(id = "", callback) {
    axiosInstance
        .get(` http://www.omdbapi.com/?i=${id}&apikey=26fc9ec0`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}
