import { fileURLToPath } from 'url';
import { join, dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getMessages = (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
};

export const postMessages = (req, res) => {
    console.log("haha");
}