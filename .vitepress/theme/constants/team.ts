import type { DefaultTheme } from "vitepress";

export type TeamMember = CoreTeamMember | CommunityTeamMember | Consultant;

interface TeamMemberBase extends DefaultTheme.TeamMember {
  id: string;
  type: "core" | "community" | "consultant";
}

export interface CoreTeamMember extends TeamMemberBase {
  type: "core";
}

export interface CommunityTeamMember extends TeamMemberBase {
  type: "community";
}

export interface Consultant extends TeamMemberBase {
  type: "consultant";
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
  {
    id: "Dunqing",
    type: "core",
    name: "Dunqing",
    title: "Member",
    avatar: "https://www.github.com/dunqing.png",
    links: [
      { icon: "github", link: "https://github.com/dunqing" },
      { icon: "twitter", link: "https://twitter.com/Dunqingg" },
    ],
  },
  {
    id: "ematipico",
    type: "consultant",
    name: "Emanuele",
    title: "Lead",
    avatar: "https://www.github.com/ematipico.png",
    org: "Biome",
    orgLink: "https://github.com/biomejs/biome",
    links: [
      { icon: "github", link: "https://github.com/ematipico" },
      { icon: "twitter", link: "https://twitter.com/ematipico" },
    ],
  },
];

export const CORE_TEAM_MEMBERS = TEAM_MEMBERS.filter(({ type }) => type === "core") as CoreTeamMember[];

export const TEAM_MEMBERS_MAP: Record<TeamMember["id"], TeamMember> = Object.fromEntries(
  TEAM_MEMBERS.map(({ id, ...rest }) => [id, { id, ...rest }]),
);

export const CONSULTANTS = TEAM_MEMBERS.filter(({ type }) => type === "consultant") as Consultant[];
