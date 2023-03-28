db.createCollection("videos", {
  validator: {
    jsonSchema: {
      bsonType: "object",
      title: "videos Object Validation",
        size: {
        required:["title","description","size","file_name","state"],
      properties: {
        title: {
          bsonType: "string",
          description: "'title' must be string and is required",
        },
        description: {
          bsonType: "string",
          description: "'description' must be string and is required",
        },
        size: {
          bsonType: "number",
          description: "'size' must be number and is required",
        },
        file_name: {
          bsonType: "string",
          description: "'file_name' must be string and is required",
        },
        thumbnail: {
          bsonType: "binData",
          description: "'thumbnail' must be binData",
        },
        playbacks: {
          bsonType: "number",
          description: "'playbacks' must be number ",
        },
        state: {
          bsonType: "string",
          enum: ["public", "private"],
          description: "'state' must be public or private and is required",
        },
        vote: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required:["user_id","date","vote"],
            properties: {
              user_id: {
                bsonType: "objectId",
                description: "'user_id' must be objectId and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' must be date and is required",
              },
              vote: {
                bsonType: "string",
                enum: ["like", "dislike"],
                description: "'vote' must be like or dislike and is required",
              },
            },
          },
        },
        label: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
        comments: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required:["text","date"],
            properties: {
              text: {
                bsonType: "string",
                description: "'text' must be string and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' must be date and is required",
              },
              votes: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  properties: {
                    user_id: {
                      bsonType: "objectId",
                      description: "'user_id' must be objectId",
                    },
                    vote: {
                      bsonType: "string",
                      enum: ["like", "dislike"],
                      description: "'vote' must be like or dislike",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}});
