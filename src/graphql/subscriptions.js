/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      name
      dob
      location
      events {
        items {
          id
          name
          date
          start_time
          end_time
          location
          public
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendships {
        items {
          id
          userID
          friendID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendRequests {
        items {
          id
          userID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      name
      dob
      location
      events {
        items {
          id
          name
          date
          start_time
          end_time
          location
          public
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendships {
        items {
          id
          userID
          friendID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendRequests {
        items {
          id
          userID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      name
      dob
      location
      events {
        items {
          id
          name
          date
          start_time
          end_time
          location
          public
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendships {
        items {
          id
          userID
          friendID
          createdAt
          updatedAt
        }
        nextToken
      }
      friendRequests {
        items {
          id
          userID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      name
      date
      start_time
      end_time
      location
      public
      userID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      name
      date
      start_time
      end_time
      location
      public
      userID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      name
      date
      start_time
      end_time
      location
      public
      userID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendship = /* GraphQL */ `
  subscription OnCreateFriendship {
    onCreateFriendship {
      id
      userID
      friendID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendship = /* GraphQL */ `
  subscription OnUpdateFriendship {
    onUpdateFriendship {
      id
      userID
      friendID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendship = /* GraphQL */ `
  subscription OnDeleteFriendship {
    onDeleteFriendship {
      id
      userID
      friendID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest {
    onCreateFriendRequest {
      id
      userID
      senderID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest {
    onUpdateFriendRequest {
      id
      userID
      senderID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest {
    onDeleteFriendRequest {
      id
      userID
      senderID
      user {
        id
        email
        name
        dob
        location
        events {
          nextToken
        }
        friendships {
          nextToken
        }
        friendRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;