export type TeamMember = CoreTeamMember | CommunityTeamMember;

interface TeamMemberBase /* extends VitePress' `TeamMember` type, which is not exporeted */ {
  id: string;
  type: "core" | "community";
  avatar: string;
  name: string;
  title?: string;
  org?: string;
  orgLink?: string;
  desc?: string;
  links?: {
    icon:
      | "discord"
      | "facebook"
      | "github"
      | "instagram"
      | "linkedin"
      | "mastodon"
      | "slack"
      | "twitter"
      | "x"
      | "youtube"
      | { svg: string };
    link: string;
    ariaLabel?: string;
  }[];
  sponsor?: string;
}

export interface CoreTeamMember extends TeamMemberBase {
  type: "core";
}

export interface CommunityTeamMember extends TeamMemberBase {
  type: "community";
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "boshen",
    type: "core",
    name: "Boshen",
    title: "Creator",
    avatar: "https://www.github.com/Boshen.png",
    links: [
      { icon: "github", link: "https://github.com/Boshen" },
      { icon: "twitter", link: "https://twitter.com/boshen_c" },
    ],
  },
  {
    id: "wenzhe_wang",
    type: "core",
    name: "Wenzhe Wang",
    title: "Member",
    avatar: "https://www.github.com/mysteryven.png",
    links: [
      { icon: "github", link: "https://github.com/mysteryven" },
      { icon: "twitter", link: "https://twitter.com/mysteryven" },
    ],
  },
  {
    id: "nozomu_ikuta",
    type: "community",
    name: "Nozomu Ikuta",
    title: "Contributor",
    avatar: "https://www.github.com/NozomuIkuta.png",
    links: [
      { icon: "github", link: "https://github.com/NozomuIkuta" },
      { icon: "twitter", link: "https://twitter.com/NozomuIkuta" },
    ],
  },
  {
    id: "ubugeeei",
    type: "community",
    name: "Ubugeeei",
    title: "Contributor",
    avatar: "https://www.github.com/Ubugeeei.png",
    links: [
      { icon: "github", link: "https://github.com/Ubugeeei" },
      { icon: "twitter", link: "https://twitter.com/ubugeeei" },
    ],
  },
];

export const CORE_TEAM_MEMBERS = TEAM_MEMBERS.filter(
  ({ type }) => type === "core",
) as CoreTeamMember[];

export const COMMUNITY_TEAM_MEMBERS = TEAM_MEMBERS.filter(
  ({ type }) => type === "community",
) as CommunityTeamMember[];

export const TEAM_MEMBERS_MAP: Record<TeamMember["id"], TeamMember> =
  Object.fromEntries(
    TEAM_MEMBERS.map(({ id, ...rest }) => [id, { id, ...rest }]),
  );
