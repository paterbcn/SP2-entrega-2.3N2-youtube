db.createCollection("users", {
  validator: {
    jsonSchema: {
      bsonType: "object",
      title: "supplier Object Validation",
      required: ["name", "email", "Password"],
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
        sex: {
          bsonType: "string",
          enum: ["male", "female"],
          description: "'birthdate' must be male or female and is required",
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
            required: [],
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
            },
          },
        },
      },
    },
  },
});
