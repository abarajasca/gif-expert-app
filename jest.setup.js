import 'whatwg-fetch';

require('dotenv').config({
    path: './configuration/.env.test'
});

jest.mock('./src/env/getEnvironment', () => ({
    getEnvironment: () => ({ ...process.env })
}));
