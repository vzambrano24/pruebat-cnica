// Ejemplo de prueba para consultar mascota por ID en una API Swagger
describe('Consulta de mascota por ID', () => {
    it('Debería poder consultar una mascota por su ID', () => {
      const idMascota = 89898989; // ID de la mascota a consultar
      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${idMascota}`, // URL de la API para consultar mascota por ID
        headers: {
          accept: 'application/json', // Encabezado de aceptación de tipo de respuesta
        },
      }).then((response) => {
        // Verificar la respuesta de la API y realizar las verificaciones necesarias
        expect(response.status).to.eq(200); // Verificar que la respuesta tenga un código de estado 200 (éxito)
        expect(response.body.id).to.eq(idMascota); // Verificar que el ID de la mascota en la respuesta sea igual al ID de la mascota consultada
        // ... Realizar más verificaciones en la respuesta de la API ...
      });
    });
  
    it('Debería obtener un error si el ID de la mascota no existe', () => {
      const idMascota = 123000000045; // ID de la mascota que no existe
      cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${idMascota}`, // URL de la API para consultar mascota por ID que no existe
        headers: {
          accept: 'application/json', // Encabezado de aceptación de tipo de respuesta
        },
        failOnStatusCode: false, // Configurar para que no falle la prueba en caso de obtener un código de estado diferente a 2xx
      }).then((response) => {
        // Verificar la respuesta de la API y realizar las verificaciones necesarias
        expect(response.status).to.eq(404); // Verificar que la respuesta tenga un código de estado 404 (no encontrado)
        expect(response.body.message).to.eq('Pet not found'); // Verificar que el mensaje de error en la respuesta sea el esperado
        // ... Realizar más verificaciones en la respuesta de la API ...
      });
    });
  });
  