const CONFIG = {
    API_URL: (process.env.NODE_ENV === "production" ? "https://backend.mathis-dyk.fr/articles" : "http://localhost:1337/articles")
}

export default CONFIG