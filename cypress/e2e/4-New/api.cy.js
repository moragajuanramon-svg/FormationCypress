import API01 from '../../test_api'

const api01 = new API01();

describe("My First Test API", () => {

  it("GET - List", () => {

       api01.firstAPI().then((data) => {

          expect (data.status).to.eq(200)  ; 

          expect (data.body).to.have.property('image')  ;

            expect (data.body).to.have.property('rgb')  ;

            expect(data.statusText).to.eq('OK')  ;

               })

  })

  

})