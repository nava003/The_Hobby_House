import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postDesc: String!, $postAuthor: String!) {
    addPost(postDesc: $postDesc, postAuthor: $postAuthor) {
      _id
      postDesc
      postAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postDesc
      postAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;