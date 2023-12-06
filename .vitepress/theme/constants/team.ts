import type { DefaultTheme } from "vitepress";

export type TeamMember = CoreTeamMember | CommunityTeamMember;

interface TeamMemberBase extends DefaultTheme.TeamMember {
  id: string;
  type: "core" | "community";
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
    title: "Project Lead",
    avatar: "https://www.github.com/Boshen.png",
    links: [
      { icon: "github", link: "https://github.com/Boshen" },
      { icon: "twitter", link: "https://twitter.com/boshen_c" },
    ],
  },
  {
    id: "mysteryven",
    type: "core",
    name: "Mysteryven",
    title: "Member",
    avatar: "https://www.github.com/mysteryven.png",
    links: [
      { icon: "github", link: "https://github.com/mysteryven" },
      { icon: "twitter", link: "https://twitter.com/mysteryven" },
    ],
  },
  {
    id: "cameron",
    type: "core",
    name: "Cameron",
    title: "Member",
    avatar: "https://www.github.com/camc314.png",
    links: [{ icon: "github", link: "https://github.com/camc314" }],
  },
];

export const CORE_TEAM_MEMBERS = TEAM_MEMBERS.filter(({ type }) => type === "core") as CoreTeamMember[];

export const COMMUNITY_TEAM_MEMBERS = TEAM_MEMBERS.filter(({ type }) => type === "community") as CommunityTeamMember[];

export const TEAM_MEMBERS_MAP: Record<TeamMember["id"], TeamMember> = Object.fromEntries(
  TEAM_MEMBERS.map(({ id, ...rest }) => [id, { id, ...rest }]),
);
