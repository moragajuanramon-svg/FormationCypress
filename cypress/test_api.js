class API01 {

   firstAPI() {

    return  cy.api({

            method: 'GET',

            url : 'https://www.thecolorapi.com/id?rgb=rgb(0,71,171)'

      })

   }

     

}

export default API01;