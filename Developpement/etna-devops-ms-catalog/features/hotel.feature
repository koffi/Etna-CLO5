Feature: List hotel
  As a Catalog API client
  I want to see the list of hotels

  Scenario: List hotels
    Given I send POST request to "/hotel" hotel route with the following:
    """
    {"name":"George V","type":1,"address":"Paris 8ème","latitude":42.7,"longitude":2.5,"attributes":null,"services":null,"medias":null}
    """
    And the response status should be 201
    And I send POST request to "/hotel" hotel route with the following:
    """
    {"name":"Velana Beach","type":1,"address":"Maafushi","latitude":45.1,"longitude":1.78,"attributes":null,"services":null,"medias":null}
    """
    And the response status should be 201
    When I send GET request to "/hotel"
    Then the response status should be 200
    And the length of body should be 2
    And the response should be:
      """
      [
          {
              "_id": "596285aa34271b00050934c0",
              "name": "George V",
              "type": 1,
              "address": "Paris 8ème",
              "latitude": 42.7,
              "longitude": 2.5,
              "attributes": null,
              "services": null,
              "medias": null
          },
          {
              "_id": "59628de134271b00050934c2",
              "name": "Velana Beach",
              "type": 1,
              "address": "Maafushi",
              "latitude": 45.1,
              "longitude": 1.78,
              "attributes": null,
              "services": null,
              "medias": null
          }
      ]
      """
