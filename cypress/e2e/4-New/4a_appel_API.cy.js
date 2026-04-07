describe('API Cat Fact', () => {

  it('Récupère un fait aléatoire sur les chats', () => {

    cy.request('https://www.freepublicapis.com/')
      .then((response) => {

        // Vérifier le status HTTP
        expect(response.status).to.eq(200)

           // Vérifier que c'est un tableau
        expect(response.body).to.be.an('array')

        // Vérifier qu'il y a au moins 1 élément
        expect(response.body.length).to.be.greaterThan(0)

        // Vérifier la propriété artid
        expect(response.body[0]).to.have.property('artid')

        // Vérifier que artid n'est pas vide
        expect(response.body[0].artid).to.not.be.empty

      })

  })

})