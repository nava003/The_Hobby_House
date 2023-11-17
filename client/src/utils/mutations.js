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
  mutation addPost( $postDesc: String!) {
    addPost( postDesc: $postDesc) {
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
  mutation addComment($postId: ID!, $commentText: String!) {
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

export const ADD_LIKE = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likes
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
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

export const EDIT_POST = gql`
  mutation editPost($postId: ID!, $postDesc: String!) {
    editPost(postId: $postId, postDesc: $postDesc) {
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