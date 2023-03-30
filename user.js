use("youtube");


db.users.drop();

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["name", "email", "password"],
      properties: {
        name: {
          bsonType: "string",
          description: "'name' must be string and is required",
        },
        email: {
          bsonType: "string",
          description: "'email' must be string and is required",
        },
        password: {
          bsonType: "string",
          description: "'Password' must be string and is required",
        },
        birthdate: {
          bsonType: "date",
          description: "'birthdate' must be date and is required",
        },
        gender: {
          bsonType: "string",
          enum: ["male", "female"],
          description: "'gender' must be male or female and is required",
        },
        country: {
          bsonType: "string",
          description: "'country' must be string and is required",
        },
        postal_code: {
          bsonType: "number",
          description: "'postal_code' must be number and is required",
        },
        channel: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["name", "description", "date", "user_subscribed"],
            properties: {
              name: {
                bsonType: "string",
                description: "'name' must be string and is required",
              },
              description: {
                bsonType: "string",
                description: "'description' must be string and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' must be date and is required",
              },
              user_subscribed: {
                bsonType: "array",
                items: {
                  bsonType: "objectId",
                },
              },
            },
          },
        },
        playlist: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["name", "description", "date", "state"],
            properties: {
              name: {
                bsonType: "string",
                description: "'name' must be string and is required",
              },
              description: {
                bsonType: "string",
                description: "'description' must be string and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' must be date and is required",
              },
              state: {
                bsonType: "string",
                enum: ["public", "private"],
                description: "'state' must be public o private and is required",
              },
              videos: {
                bsonType: "array",
                items: {
                  bsonType: "objectId",
                },
              },
            },
          },
        },
      },
    },
  },
});

const user1 = {
  name: "usuario1",
  email: "usu@email.com",
  password: "aaaaa",
  birthdate: new Date("1995-01-01"),
  gender: "female",
  country: "spain",
  postal_code: 08001,
  channel: [
    {
      name: "channel1",
      description: "this is a description",
      date: new Date(),
      user_subscribed: [
        ObjectId("642155d1545c6699fd25082c"),
        ObjectId("642155d1545c6699fd25082b"),
      ],
    },
  ],
  playlist: [
    {
      name: "list1",
      description: "this is a description",
      date: new Date(),
      state: "public",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
    {
      name: "list2",
      description: "this is a description",
      date: new Date(),
      state: "private",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
  ],
};

const user2 = {
  name: "usuario2",
  email: "usu2@email.com",
  password: "111111",
  birthdate: new Date("1985-01-01"),
  gender: "male",
  country: "usa",
  postal_code: 99999,
  channel: [
    {
      name: "channel5",
      description: "this is a description",
      date: new Date(),
      user_subscribed: [
        ObjectId("642155d1545c6699fd25082c"),
        ObjectId("642155d1545c6699fd25082b"),
      ],
    },
    {
      name: "channel6",
      description: "this is a description",
      date: new Date(),
      user_subscribed: [
        ObjectId("642155d1545c6699fd25082c"),
      ],
    },
  ],
  playlist: [
    {
      name: "list10",
      description: "this is a description",
      date: new Date(),
      state: "public",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
    {
      name: "list11",
      description: "this is a description",
      date: new Date(),
      state: "private",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
  ],
};


const user3 = {
  name: "usuario3",
  email: "usu3@email.com",
  password: "888888",
  birthdate: new Date("1999-01-01"),
  gender: "male",
  country: "spain",
  postal_code: 08952,
  channel: [
    {
      name: "channel6",
      description: "this is a description",
      date: new Date(),
      user_subscribed: [
        ObjectId("642155d1545c6699fd25082c"),
        ObjectId("642155d1545c6699fd25082b"),
      ],
    },
    {
      name: "channel7",
      description: "this is a description",
      date: new Date(),
      user_subscribed: [
        ObjectId("642155d1545c6699fd25082c"),
      ],
    },
  ],
  playlist: [
    {
      name: "list5",
      description: "this is a description",
      date: new Date(),
      state: "public",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
    {
      name: "list6",
      description: "this is a description",
      date: new Date(),
      state: "public",
      videos: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
  ],
};


db.users.insertMany([user1,user2,user3])
