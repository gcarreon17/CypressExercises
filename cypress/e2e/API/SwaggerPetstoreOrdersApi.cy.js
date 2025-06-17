describe('GET - Pet Store Inventory', () => {
  it('GET - log all available statuses in the inventory response and status code 200', () => {
    cy.api({
      method: 'GET',
      url: '/store/inventory',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('object');
      const statusKeys = Object.keys(response.body);
      cy.log('Available status keys: ' + statusKeys.join(', '));
      expect(statusKeys.length).to.be.greaterThan(0);
      statusKeys.forEach((key) => {
        expect(response.body[key]).to.be.a('number');
      });
    });
  });

  it('GET - Verify returns status code 404 for incorrect URL', () => {
    cy.api({
      method: 'GET',
      url: '/store/inventorys',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });


  it('GET - Verify returns status code 405 for incorrect method', () => {
    cy.api({
      method: 'PUT',
      url: '/store/inventory',
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
  });

  it.skip('GET - Verify status code 500', () => {
    cy.intercept('GET', '**/store/inventory', {
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('getInventory');

    cy.api({
      method: 'GET',
      url: 'store/inventory',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.message).to.eq('Internal Server Error');
    });
  });
});

describe('POST - Place Pet Order', () => {
  let Id = 1;
  let petId = 1;

  it('POST - Verify returns status code 200 for valid order', () => {
    const dynamicShipDate = new Date().toISOString().replace('Z', '+0000');
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: '/store/order',
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(orderPayload);
    });
  });

  it('POST - Verify returns status code 404 for incorrect URL', () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: '/store/orders',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('POST - Verify returns status code 405 for invalid method (GET)', () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: 1,
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'GET',
      url: '/store/order',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
  });

  it('POST - Verify return status code 500 for invalid payload (force internal error)', () => {
    const dynamicShipDate = new Date().toISOString();
    const orderPayload = {
      id: Id,
      petId: petId,
      quantity: "invalid",
      shipDate: dynamicShipDate,
      status: "placed",
      complete: true
    };

    cy.api({
      method: 'POST',
      url: '/store/order',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderPayload
    }).then((response) => {
      expect([400, 500]).to.include(response.status);
    });
  });
});

describe('DELETE - Order Record', () => {
  it('DELETE - Verify returns status code 200 for successful delete order record', () => {
    const orderId = 1;

    cy.api({
      method: 'DELETE',
      url: `/store/order/${orderId}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', String(orderId));
    });
  });

  it('DELETE - Verify status code 404 after deleting a non-existent order', () => {
    const fakeOrderId = 99999;

    cy.api({
      method: 'DELETE',
      url: `/store/order/${fakeOrderId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('DELETE - Verify status code 405 for invalid URL', () => {
    const fakeOrderId = 99999;

    cy.api({
      method: 'DELETE',
      url: `store/inventory`,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(405);
    });
  });


  it.skip('DELETE - should return 500 on server error simulation', () => {
    cy.intercept('DELETE', '**/store/order/2', {
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('deleteServerError');

    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/store/order/2',
      failOnStatusCode: false,
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.message).to.eq('Internal Server Error');
    });
  });
});
