export type MembersType = {
  members: MemberType[];
};

export type MemberType = {
  name: string;
  src: string;
  roles: string[];
  description: string;
  githubURL: string;
  twitterURL: string;
  vessURL: string;
};
