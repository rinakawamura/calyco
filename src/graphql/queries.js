/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      first_name
      last_name
      dob
      location
      image_url
      avatar {
        bucket
        region
        key
      }
      pushToken
      events {
        items {
          id
          name
          start_datetime
          end_datetime
          image_url
          public
          description
          participants
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      invited_events {
        items {
          id
          userID
          eventID
          senderID
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        first_name
        last_name
        dob
        location
        image_url
        avatar {
          bucket
          region
          key
        }
        pushToken
        events {
          nextToken
        }
        invited_events {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      start_datetime
      end_datetime
      image_url
      avatar {
        bucket
        region
        key
      }
      public
      description
      participants
      userID
      user {
        id
        email
        username
        first_name
        last_name
        dob
        location
        image_url
        avatar {
          bucket
          region
          key
        }
        pushToken
        events {
          nextToken
        }
        invited_events {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        start_datetime
        end_datetime
        image_url
        avatar {
          bucket
          region
          key
        }
        public
        description
        participants
        userID
        user {
          id
          email
          username
          first_name
          last_name
          dob
          location
          image_url
          pushToken
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: AWSEmail
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        username
        first_name
        last_name
        dob
        location
        image_url
        avatar {
          bucket
          region
          key
        }
        pushToken
        events {
          nextToken
        }
        invited_events {
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
      nextToken
    }
  }
`;
