import { MoocBackendApp } from '@apps-mooc-backend/MoocBackendApp'
import { AfterAll, BeforeAll, Then, When } from '@cucumber/cucumber'
import assert from 'assert'
import request, { Response, Test } from 'supertest'

let _request: Test
let application: MoocBackendApp
let _response: Response

When('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route)
})

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status)
})

Then('the response should be:', (expectedResponse: string) => {
  assert.deepStrictEqual(_response.body, JSON.parse(expectedResponse) as object)
})

Then('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer)
    .post(route)
    .send(JSON.parse(body) as object)
})

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {})
})

BeforeAll(async () => {
  application = new MoocBackendApp()
  void application.start()
})

AfterAll(async () => {
  await application.stop()
})
