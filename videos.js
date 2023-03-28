use("youtube");

db.videos.drop();

db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["title", "description", "size", "file_name", "state"],
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
            required: ["user_id", "date", "vote"],
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
            required: ["text", "date"],
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
});

const video1 = {
  title: "video1",
  description: "this is a video",
  size: 99,
  file_name: "video1.mpeg",
  playbacks: 100,
  state: "public",
  vote: [
    {
      user_id: ObjectId("642155d1545c6699fd25082c"),
      date: new Date(),
      vote: "like",
    },
    {
      user_id: ObjectId("642155d1545c6699fd25082b"),
      date: new Date(),
      vote: "like",
    },
  ],
  label: ["label1", "label2", "label3"],
  comments: [
    {
      text: "this is a comment",
      date: new Date(),
      votes: [
        {
          user_id: ObjectId("642155d1545c6699fd25082b"),
          vote: "like",
        },
        {
          user_id: ObjectId("642155d1545c6699fd25082b"),
          vote: "like",
        },
      ],
    },
  ],
};

const video2 = {
    title: "video2",
    description: "this is a video",
    size: 99,
    file_name: "video2.mpeg",
    playbacks: 30,
    state: "private",
    
    label: ["label5", "label6"],
    comments: [
      {
        text: "this is a comment",
        date: new Date(),
        
      },
    ],
  };

  const video3 = {
    title: "video3",
    description: "this is a video",
    size: 55,
    file_name: "video3.mpeg",
    playbacks: 366,
    state: "public",
    vote: [
      {
        user_id: ObjectId("642155d1545c6699fd25082c"),
        date: new Date(),
        vote: "like",
      },
      {
        user_id: ObjectId("642155d1545c6699fd25082b"),
        date: new Date(),
        vote: "dislike",
      },
    ],
    label: ["label11", "label12", "label13"],
    comments: [
      {
        text: "this is a comment",
        date: new Date(),
        votes: [
          {
            user_id: ObjectId("642155d1545c6699fd25082b"),
            vote: "dislike",
          },
          {
            user_id: ObjectId("642155d1545c6699fd25082b"),
            vote: "dislike",
          },
        ],
      },
    ],
  };

db.videos.insertMany([video1,video2,video3])
