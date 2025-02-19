import { gql } from '@apollo/client';

export const LoggedinUserFragment = gql`
  fragment LoggedinUser on User {
    id
    username
    bio
    activeEthAddress
    profilePicture
    headerPicture
    thumbnailPicture
    userInfo {
      email
      discordUsername
      twitterUsername
      promotionTweet
    }
    signupCompleted
    lastCompletedGuide
    links {
      url
      displayName
      type
    }
    checkIsGr15Contributor {
      isGr15Contributor
    }
  }
`;

export const LoggedinWaitlistUserFragment = gql`
  fragment LoggedinWaitlistUser on WaitlistUser {
    id
    email
    phoneNumber
    invitesSent
    refCode
    tokensEarned
    phoneVerified
  }
`;

export const ProfileUserFragment = gql`
  fragment UserProfile on User {
    id
    username
    bio
    headerPicture
    activeEthAddress
    profilePicture
    thumbnailPicture
    links {
      url
      displayName
      type
    }
    additionalInfo {
      orgCount
      podCount
    }
    checkIsGr15Contributor {
      isGr15Contributor
    }
  }
`;

export const SmallUserFragment = gql`
  fragment UserSmall on User {
    id
    username
    headerPicture
    activeEthAddress
    profilePicture
    thumbnailPicture
  }
`;
