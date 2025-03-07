import express from 'express';
import apps from "./routes/app.js"
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001
app.use(cors());

app.use(express.json());

app.use('/data', apps);


app.listen(port, () => {
    console.log("Server is running on port");
});
