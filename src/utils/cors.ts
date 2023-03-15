export const corsOptions = {
    origin: ["https://www.youtube.com", "http://localhost:3000","https://www.google.com", "https://front-photo-ph.vercel.app"],
    methods: ["PUT","OPTIONS", "GET", "POST", "DELETE"],
    preflightContinue: true,
    credentials: true,
};