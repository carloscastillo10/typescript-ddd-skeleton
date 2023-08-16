import { AfterAll, BeforeAll, Then, When } from '@cucumber/cucumber'
import assert from 'assert'
import request, { Response, Test } from 'supertest'
import { MoocBackendApp } from '../../../../../../src/apps/mooc/backend/MoocBackendApp'

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

BeforeAll(async () => {
  application = new MoocBackendApp()
  void application.start()
})

AfterAll(async () => {
  await application.stop()
})
