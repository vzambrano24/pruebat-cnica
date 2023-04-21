// Definir la URL base de la API Swagger
const apiUrl = 'https://petstore.swagger.io/v2/pet';

// Datos de la mascota a añadir
const petData = {
  "id": 89898989,
  "category": {
    "id": 1,
    "name": "dogs"
  },
  "name": "Fido",
  "photoUrls": [
    "https://example.com/fido.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "friendly"
    }
  ],
  "status": "available"
};

// Suite de pruebas para añadir una mascota a la tienda
describe('Añadir una mascota a la tienda', () => {
  // Caso de éxito: Añadir una mascota correctamente
  it('Añadir una mascota correctamente', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      body: petData
    }).then((response) => {
      // Verificar la respuesta
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(petData);
    });
  });

  // Caso de error: Intentar añadir una mascota con un ID duplicado
  it('Intentar añadir una mascota con un ID duplicado', () => {
    // Añadir la mascota inicialmente
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      body: petData
    });

    // Intentar añadir una mascota con el mismo ID
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      body: petData,
      failOnStatusCode: false
    }).then((response) => {
      // Verificar la respuesta de error
      expect(response.status).to.equal(200);
    });
  });
});
