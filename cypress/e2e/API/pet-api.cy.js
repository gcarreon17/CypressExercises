
let petId; // Shared variable to store the pet ID
// {'testIsolation': false},
//const apiKey = Cypress.env('API_KEY') || 'special-key';

describe('Pet Store API Tests', () => {
  const pet = {
    id: 12345,
    name: 'Fulgoso',
    status: 'available',
  };

  const updatedPet = {
    id: 12345,
    name: 'Fulgoso Updated',
    status: 'sold',
  };


//POST - Create a new pet
// This test creates a new pet in the pet store API and stores the pet ID for later use.
  before(() => {
    cy.api({
      method: 'POST',
      url: '/pet',
      body: pet,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', pet.id)
      petId = response.body.id
    });
  });


  // DELETE request
  // This is to ensure that the pet is deleted after all tests are run, regardless of their outcome.
  after(() => {
    cy.api({
      method: 'DELETE',
      url: `/pet/${petId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    });
  });


  //PUT request - Update an existing pet
  // This test updates the pet's details and verifies the response.
  it('PUT - Update an existing pet', () => {
    cy.wrap(petId).should('exist'); // Ensure petId exists

    cy.api({
      method: 'PUT',
      url: '/pet',
      body: updatedPet,
    }).then((response) => {
      expect(response.status).to.eq(200) // Validate status code
      expect(response.body).to.have.property('id', petId) // Validate response body
      expect(response.body).to.have.property('name', updatedPet.name);
      expect(response.body).to.have.property('status', updatedPet.status)
    });
    cy.captureSnapshot('Successful PUT - Update an existing pet');
  });

  //GET request - Find pet by ID
  // This test retrieves the pet by its ID and verifies the response.
  it('GET - Find pet by ID', () => {
    cy.wrap(petId).should('exist')
    cy.waitUntil(
      () =>
        cy.api({
            method: 'GET',
            url: `/pet/${petId}`,
          })
          .should((response) => {
            expect(response.status).to.eq(200);
            return response.body.name === updatedPet.name;
          }),
      {
        timeout: 10000,
        interval: 1000,
      }
    );
    cy.api({
      method: 'GET',
      url: `/pet/${petId}`,
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', petId)
      expect(response.body).to.have.property('name', updatedPet.name)
    });
    cy.captureSnapshot('Successful GET - Find pet by ID');
  });

  
  it('GET - Ensure no sensitive data is exposed', () => {
    cy.wrap(petId).should('exist')

    cy.api({
      method: 'GET',
      url: `/pet/${petId}`,
    }).should((response) => {
      expect(response.body).to.not.have.property('bearer-token')
      expect(response.body).to.not.have.property('access-token')
      expect(response.body).to.not.have.property('jwt-token')
      expect(response.body).to.not.have.property('password')
      expect(response.body).to.not.have.property('api_key')
    });
     cy.captureSnapshot('Successful GET - Ensure no sensitive data is exposed');
  });
});