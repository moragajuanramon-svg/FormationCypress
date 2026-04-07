describe('Mini projet API Cypress - QACart Todo', () => {


  // VARIABLES GLOBALES

  let token
  let taskId


  // AUTHENTIFICATION

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://qacart-todo.herokuapp.com/api/v1/users/login',
      body: {
        email: 'testeurcypress1983@gmail.com',
        password: '1234Abcd*'
      }
    }).then((response) => {

      // Vérifie que la requête est OK
      expect(response.status).to.eq(200)

      // Vérifie que le token est présent
      expect(response.body).to.have.property('access_token')

      // Stocke le token pour les prochains appels
      token = response.body.access_token

      cy.log(' Authentification réussie')
    })
  })


 // TEST 1 : CREATION
  // POST permet de créer une nouvelle ressource côté serveur.


  it('Créer une tâche', () => {
    cy.request({
      method: 'POST',
      url: 'https://qacart-todo.herokuapp.com/api/v1/tasks',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        isCompleted: false,
        item: 'Learn Manuel Testing'
      }
    }).then((response) => {

      // Vérifie le code HTTP
      expect(response.status).to.eq(201)

      // Vérifie les données retournées
      expect(response.body).to.have.property('_id')
      expect(response.body.item).to.eq('Learn Manuel Testing')
      expect(response.body.isCompleted).to.eq(false)

      // Récupère l’ID de la tâche
      taskId = response.body._id

      cy.log(' Tâche créée : ' + taskId)
      cy.log(' Vérifie dans l’UI puis clique Resume')
        // Je mets une pause pour que tu puisses vérifier manuellement dans l’interface que la tâche a bien été créée avant de continuer les tests suivants.
      cy.pause()
    })
  })

   
  // TEST 2 : MODIFICATION
  // PUT permet de mettre à jour complètement une ressource existante.

  // La ressource est identifiée via son ID dans l'URL.
   
  it('Modifier la tâche', () => {
    cy.request({
      method: 'PUT',
      url: `https://qacart-todo.herokuapp.com/api/v1/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        isCompleted: true,
        item: 'New Learn API Testing with Cypress'
      }
    }).then((response) => {

      // Vérifie le code HTTP
      expect(response.status).to.eq(200)

      // Vérifie les nouvelles valeurs
      expect(response.body.item).to.eq('New Learn API Testing with Cypress')
      expect(response.body.isCompleted).to.eq(true)

      cy.log(' Tâche modifiée')
      cy.log(' Vérifie dans l’UI puis clique Resume')
        // Je mets une pause pour que tu puisses vérifier manuellement dans l’interface que la tâche a bien été modifiée avant de continuer les tests suivants.
      cy.pause()
    })
  })

   
  // TEST 3 : SUPPRESSION
   
  it('Supprimer la tâche', () => {
    cy.request({
      method: 'DELETE',
      url: `https://qacart-todo.herokuapp.com/api/v1/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {

      // Vérifie le code HTTP
      expect(response.status).to.eq(200)

      cy.log(' Tâche supprimée')
      cy.log(' Vérifie dans l’UI puis clique Resume')

    })
  })

})