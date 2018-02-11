import jsonfile from 'jsonfile';
import { existsSync } from 'fs';

const path = './webpack/testUsers/testUsers.json';

let data = null;
if (existsSync(path)) {
    data = jsonfile.readFileSync(path);
}

let result = null;

if (data) {
    const { current, headers } = data;
    result = headers[current];
}

export default result;
