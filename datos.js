const user1 ={
    name:"usuario1",
    email:"usu@email.com",
    password:"aaaaa",
    birthdate:new Date("1995-01-01"),
    sex:"female",
    country:"spain",
    postal_code:08001,
    channel:[{
        name:"channel1",
        description:"this is a description",
        date: new Date(),
        user_subscribed:[ ObjectId("642155d1545c6699fd25082c"),ObjectId("642155d1545c6699fd25082b")], 
    }],
    playlist:[
        {
            name:"list1",
            description:"this is a description",
            date: new Date(),
            state:"public",
            videos:[ObjectId("642153299216c6c22f0aa878"),ObjectId("642153299216c6c22f0aa879")]

        },
        {
            name:"list2",
            description:"this is a description",
            date: new Date(),
            state:"private",
            videos:[ObjectId("642153299216c6c22f0aa878"),ObjectId("642153299216c6c22f0aa879")]

        },
    ]


}