describe('Mini projet API Cypress - QACart Todo', () => {

  // Variables globales pour stocker les données entre les étapes
  let token
  let taskId

  // 🔐 Étape 1 : Authentification utilisateur
  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://qacart-todo.herokuapp.com/api/v1/users/login',
      body: {
        email: 'testeurcypress1983@gmail.com',
        password: '1234Abcd*'
      }
    }).then((response) => {

      // Vérification que la requête a réussi
      expect(response.status).to.eq(200)

      // Vérification que le token est présent dans la réponse
      expect(response.body).to.have.property('access_token')

      // Sauvegarde du token pour les appels suivants
      token = response.body.access_token

      cy.log('🔐 Authentification réussie')
    })
  })

  // ➕ Étape 2 : Création d’une tâche
  it('Ajouter une tâche', () => {
    cy.request({
      method: 'POST',
      url: 'https://qacart-todo.herokuapp.com/api/v1/tasks',
      headers: {
        // Envoi du token pour autoriser la requête
        Authorization: `Bearer ${token}`
      },
      body: {
        isCompleted: false,
        item: 'Learn Manuel Testing'
      }
    }).then((response) => {

      // Vérification du succès de la création (HTTP 201)
      expect(response.status).to.eq(201)

      // Vérification des données retournées
      expect(response.body.item).to.eq('Learn Manuel Testing')
      expect(response.body.isCompleted).to.eq(false)

      // Récupération de l'identifiant de la tâche créée
      taskId = response.body._id

      cy.log('✅ Tâche créée avec ID : ' + taskId)

      // Pause pour permettre une vérification manuelle dans l'UI
      cy.log('👉 Vérifier la tâche dans l’interface puis cliquer sur Resume')
      cy.pause()
    })
  })

  // ❌ Étape 3 : Suppression de la tâche
  it('Supprimer la tâche', () => {
    cy.request({
      method: 'DELETE',
      url: `https://qacart-todo.herokuapp.com/api/v1/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {

      // Vérification que la suppression a réussi
      expect(response.status).to.eq(200)

      cy.log('🗑️ Tâche supprimée avec succès')
    })
  })

})
