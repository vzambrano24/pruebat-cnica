// Ejemplo de prueba para actualizar el nombre y estado de una mascota en una API Swagger
describe("Actualizar nombre y estado de mascota", () => {
  it("Debería poder actualizar el nombre y estado de una mascota existente", () => {
    const idMascota = 89898989; // ID de la mascota a actualizar
    const nuevoNombre = "doggie update"; // Nuevo nombre de la mascota
    const nuevoEstado = "sold"; // Nuevo estado de la mascota
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet", // URL de la API para actualizar la mascota
      headers: {
        "Content-Type": "application/json", // Encabezado de tipo de contenido
        accept: "application/json", // Encabezado de aceptar tipo de contenido
      },
      body: {
        id: idMascota,
        category: {
          id: 0,
          name: "string",
        },
        name: nuevoNombre, // Nuevo nombre de la mascota
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: nuevoEstado, // Nuevo estado de la mascota
      },
    }).then((response) => {
      // Verificar la respuesta de la API y realizar las verificaciones necesarias
      expect(response.status).to.eq(200); // Verificar que la respuesta tenga un código de estado 200 (éxito)
      expect(response.body.name).to.eq(nuevoNombre); // Verificar que el nombre de la mascota en la respuesta sea igual al nuevo nombre
      expect(response.body.status).to.eq(nuevoEstado); // Verificar que el estado de la mascota en la respuesta sea igual al nuevo estado
      // ... Realizar más verificaciones en la respuesta de la API ...
    });
  });

  it("Debería obtener un error si el ID de la mascota no existe", () => {
    const idMascota = 12345; // ID de la mascota que no existe
    const nuevoNombre = "doggie update"; // Nuevo nombre de la mascota
    const nuevoEstado = "available"; // Nuevo estado de la mascota
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet", // URL de la API para actualizar la mascota que no existe
      headers: {
        "Content-Type": "application/json", // Encabezado de tipo de contenido
        accept: "application/json", // Encabezado de aceptar tipo de contenido
      },
      body: {
        id: idMascota,
        category: {
          id: 0,
          name: "string",
        },
        name: nuevoNombre, // Nuevo nombre de la mascota
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: nuevoEstado, // Nuevo estado de la mascota
      },
      failOnStatusCode: false, // Configurar para que no falle la prueba en caso de obtener un código de estado diferente a 2xx
    }).then((response) => {
      // Verificar la respuesta de la API y realizar las verificaciones necesarias
      expect(response.status).to.eq;

      // Actualizar el nombre y estado de la mascota
      cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
        id: 777777, // ID de la mascota a actualizar
        name: "doggie update", // Nuevo nombre de la mascota
        status: "sold", // Nuevo estado de la mascota
      }).then((response) => {
        // Verificar que la respuesta tenga un código de estado 200 (éxito)
        expect(response.status).to.equal(200);
        // Verificar que el nombre de la mascota se haya actualizado correctamente
        expect(response.body.name).to.equal("doggie update");
        // Verificar que el estado de la mascota se haya actualizado correctamente
        expect(response.body.status).to.equal("sold");
      });
    });
  });
});
