import gql from "graphql-tag";

const CREATE_CHAT_MUTATION = gql`
  mutation CreateChatMutation($content: String!, $from: String!) {
    createChat(content: $content, from: $from) {
      id
      content
      from
      createdAt
    }
  }
`;

export default CREATE_CHAT_MUTATION;
