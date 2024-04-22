const chakram = require('chakram'),
    expect = chakram.expect;

describe("userTests", function () {


    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 0,
            "username": "testrec",
            "firstName": "test",
            "lastName": "rec",
            "email": "test@rec.com",
            "password": "123",
            "phone": "65465465",
            "userStatus": 0
        };

        const resData = {
            "code": 200,
            "type": "unknown",
            "message": "9223372036854757855"
        };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);

        return response.then(function (res) {
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("GET /v2/user/{userName}  userInfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/testrec");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


    it("GET /v2/user/login  loginSuccessfully", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=testrec&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


    it("GET /v2/user/logout  logoutSuccesfully", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

 

   it("PUT /v2/user userUpdate", function () {
       const data = {
         "id": 465116,
         "username": "testrec",
         "firstName": "rec",
         "lastName": "test",
         "email": "rec@test.com",
         "password": "123",
         "phone": "6546546546",
        "userStatus": 0
         };

       const response = chakram.put("https://petstore.swagger.io/v2/user/testrec", data);
       
       return response.then(function (res){
           expect(res).to.have.status(200);
       })
   });

   it("DELETE /v2/user/{username}  deleteUsername", function () {
       const response = chakram.delete("https://petstore.swagger.io/v2/user/testrec");
       expect(response).to.have.status(200);
       return chakram.wait();
   });


});