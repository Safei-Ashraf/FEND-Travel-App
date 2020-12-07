import 'regenerator-runtime/runtime';
import {describe, expect} from "@jest/globals";



const app = require("../src/server/index.js");
const supertest = require('supertest');
const request = supertest(app);

it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('pass!')
    // ...
    done()
  })
it('Gets the test endpoint API', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/add')
    expect(res.status).toBe(200);
    // ...
    done()
  })





// describe("Test the root path", () => {
//     test("It should response the GET method", done => {
//         request(app)
//             .get("/")
//             .then(response => {
//                 expect(response.statusCode).toBe(200);
//                 done();
//             });
//     });
// });