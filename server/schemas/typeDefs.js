const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
  }

  type Category {
    _id: ID
    name: String
  }

  type Post {
    _id: ID
    postDesc: String!
    postAuthor: String
    createdAt: String
    comments: [Comment]!
    likes: Int
    category: Category
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postDesc: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post 
    removeComment (postId: ID!, commentId: ID!): Post
    updatePost(postId: ID!, postDesc: String!): Post
    updateComment(postId: ID!, commentId: ID!, commentText: String!): Post
    updateUser(userId: ID!, username: String!, email: String!): User
    updatePassword(userId: ID!, password: String!, email: String!): User
    likePost(postId: ID!): Post
    editPost(postId: ID!, postDesc: String!): Post
    
  }
`;

module.exports = typeDefs;
