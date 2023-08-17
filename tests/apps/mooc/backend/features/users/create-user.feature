Feature: Create a new user
  In order to have reservations on the platform
  As a user 
  I want to create new account

  Scenario: An valid non existing user
  When I send a POST request to "/api/v1/users" with body:
  """
  {
    "id": "54495ad94c934122ede76d70",
    "name": "Carlos",
    "lastname": "Castillo",
    "email": "carlos@gmail.com",
    "password": "123",
    "phone": "0939650879",
    "birthdate": "16/09/1999",
    "height": 1.72,
    "weight": 70
  }
  """
  Then the response status code should be 201
  And the response should be empty
