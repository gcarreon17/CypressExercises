describe("User API", () => {
  
  const baseUrl = 'https://petstore.swagger.io/'
  it('POST - Verify successful creation of users and returns status code 200', () => {
    const usersList = [
      {
        id: 101,
        username: 'user101',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '1234567890',
        userStatus: 1
      }
    ];


    cy.api({
      method: 'POST',
      url: 'user/createWithList',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: usersList
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('code');
      expect(response.body).to.have.property('type');
      expect(response.body).to.have.property('message');
      cy.log('Response Message:', response.body.message);
      });
    });


    it('POST - Verify returns status code 405 for incorrect method (GET)', () => {  
      cy.api({
        method: 'GET',
        url: 'user/createWithList',
        headers: {
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,  
      }).then((response) => {
        expect(response.status).to.eq(405);
        });
      });


      it('POST - Verify returns status code 400 for incorrect URL', () => {  
        cy.api({
          method: 'POST',
          url: 'user/createWithList%',
          headers: {
            'Content-Type': 'application/json'
          },
          failOnStatusCode: false,  
        }).then((response) => {
          expect(response.status).to.eq(400);
          });
        });


      it('POST - Verify returns status code 500 for incorrect id format', () => {
        const usersList = [
          {
            id: 'a',
            username: 'user101',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            phone: '1234567890',
            userStatus: 1
          }
        ];
    
    
        cy.api({
          method: 'POST',
          url: 'user/createWithList',
          failOnStatusCode: false,
          headers: {
            'Content-Type': 'application/json'
          },
          body: usersList
        }).then((response) => {
          expect(response.status).to.eq(500);
          });
        });
  

    

  // it("PUT - Overwriting an existing user record", () => {
  //   const UpdatedUser = [
  //     {
  //       "id": 0,
  //       "username": faker.internet.username(),
  //       "firstName": faker.person.firstName(),
  //       "lastName": faker.person.lastName(),
  //       "email": faker.internet.email(),
  //       "password": faker.internet.password(),
  //       "phone": faker.phone.number(),
  //       "userStatus": 0
  //     }
  //     cy.api({
  //         method: 'PUT',
  //         url: 'https://petstore.swagger.io/v2/user/' + fake_user[0].username,
  //         body: UpdatedUser
  //     }).should((response) => {
  //         expect(response.status).to.eq(200)
  //     })
  // })
  // });
});