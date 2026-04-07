// describe() sirve para agrupar varios tests relacionados
// Es como el "título" o "bloque" de pruebas
describe('Login simulation', () => {

  // it() define un test individual
  // Aquí describes qué hace el test (muy importante en QA)
  it('Remplit les champs et simule un login', () => {

    // cy.visit() abre una página web en el navegador controlado por Cypress
    // Es el equivalente a escribir la URL en Chrome
    cy.visit('https://example.cypress.io/commands/actions')



      // ------------
    //  1. ESCRIBIR EN UN INPUT
      // ---------------------------

    // cy.get() busca un elemento en la página usando un selector CSS
    // '.action-email' es una clase CSS → selecciona el campo email

    cy.get('.action-email')

      // .type() simula que un usuario escribe en el teclado
      // Aquí estamos escribiendo un email en el input
      .type('test@example.com')

      // .should() es una ASSERTION (verificación)
      // 'have.value' significa: el input debe tener este valor
      // Esto comprueba que lo que escribimos realmente se guardó en el campo
      .should('have.value', 'test@example.com')



    // _____
    //  2. ESCRIBIR PASSWORD (CASO ESPECIAL)
     // --------------
     // Este campo está deshabilitado en la página (disabled)
    // Normalmente Cypress NO permite interactuar con elementos deshabilitados

    cy.get('.action-disabled')

      // .type() con { force: true } fuerza la acción
      //  IMPORTANTE: esto NO es buena práctica en producción
      //  aquí solo lo usamos para aprender

      .type('password123', { force: true })



      // --------------------
    // 🔹 3. ENVIAR FORMULARIO
     // ---------------

    // .action-form es el formulario HTML
    // submit() simula que el usuario envía el formulario

    cy.get('.action-form')

      // submit() es como pulsar ENTER o botón submit
      .submit()



    // ------------
    // 🔹 4. VERIFICACIÓN (ASSERTION)
      // ---------------

    // cy.url() obtiene la URL actual del navegador

    cy.url()

      // should('include', 'actions')
      // Verifica que la URL contiene la palabra "actions"
      // Esto confirma que:
      // ✔ la página no se rompió
      // ✔ seguimos en la página correcta

      .should('include', 'actions')

  })

})