import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname} from 'path';
import { messagesRouter } from "./routes/messages.routes.js";
import { friendsRouter } from "./routes/friends.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}${req.baseUrl}${req.url} ${delta}ms`);
})

app.use('/site', express.static(join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(3000, () => {
    console.log("Listening to Port:3000");
})