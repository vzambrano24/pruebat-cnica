// Definir el nombre del test y la URL de la API
describe("Consultar mascota por estatus y verificar ID y estatus", () => {
  const apiUrl = "https://petstore.swagger.io/v2/pet/findByStatus"; // URL de la API
  const status = "sold"; // Estatus de la mascota a consultar
  const petId = 89898989; // ID de la mascota a verificar en la lista

  // Definir el test
  it("debe consultar mascotas por estatus y verificar ID y estatus", () => {
    // Hacer una petición a la API para consultar mascotas por estatus
    cy.request("GET", `${apiUrl}?status=${status}`).then((response) => {
      // Verificar que la respuesta tenga un código de estado 200 (OK)
      expect(response.status).to.equal(200);

      // Verificar que la lista de mascotas contenga la mascota con el ID correcto
      const pet = response.body.find((pet) => pet.id === petId);
      expect(pet).to.not.be.undefined;

      // Verificar que el estatus de la mascota sea "sold"
      expect(pet.status).to.equal(status);
    });
  });
});
