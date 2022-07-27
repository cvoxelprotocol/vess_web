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

export type LinksType = {
  links: LinkType[];
};

export type LinkType = {
  title: string;
  listItems: ListItemType[];
};

export type ListItemType = {
  label: string;
  href: string;
};
