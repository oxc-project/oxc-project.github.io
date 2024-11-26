import type { DefaultTheme } from "vitepress";

export type TeamMember = CoreTeamMember | Emeriti | CommunityTeamMember | Consultant;

interface TeamMemberBase extends DefaultTheme.TeamMember {
  id: string;
  type: "core" | "emeriti" | "community" | "consultant";
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

export interface Emeriti extends TeamMemberBase {
  type: "emeriti";
}

export const CORE_MEMBERS: TeamMember[] = [
  {
    id: "boshen",
    type: "core",
    name: "Boshen",
    title: "Project Lead",
    avatar: "https://www.github.com/Boshen.png",
    links: [
      { icon: "github", link: "https://github.com/Boshen" },
      { icon: "bluesky", link: "https://bsky.app/profile/boshen.github.io" },
      { icon: "twitter", link: "https://twitter.com/boshen_c" },
    ],
  },
  {
    id: "Dunqing",
    type: "core",
    name: "Dunqing",
    title: "Core",
    avatar: "https://www.github.com/dunqing.png",
    links: [
      { icon: "github", link: "https://github.com/dunqing" },
      { icon: "twitter", link: "https://twitter.com/Dunqingg" },
    ],
  },
  {
    id: "overlookmotel",
    type: "core",
    name: "overlookmotel",
    title: "Core",
    avatar: "https://www.github.com/overlookmotel.png",
    links: [
      { icon: "github", link: "https://github.com/overlookmotel" },
      { icon: "twitter", link: "https://twitter.com/overlook_motel" },
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
    id: "leaysgur",
    type: "core",
    name: "Yuji Sugiura",
    title: "Member",
    avatar: "https://www.github.com/leaysgur.png",
    links: [
      { icon: "github", link: "https://github.com/leaysgur" },
      { icon: "twitter", link: "https://x.com/leaysgur" },
    ],
  },
  {
    id: "camchenry",
    type: "core",
    name: "Cam",
    title: "Member",
    avatar: "https://www.github.com/camchenry.png",
    links: [
      { icon: "github", link: "https://github.com/camchenry" },
      { icon: "twitter", link: "https://x.com/cammchenry" },
    ],
  },
  {
    id: "mysteryven",
    type: "emeriti",
    name: "Mysteryven",
    avatar: "https://www.github.com/mysteryven.png",
    links: [
      { icon: "github", link: "https://github.com/mysteryven" },
      { icon: "twitter", link: "https://twitter.com/mysteryven" },
    ],
  },
  {
    id: "don",
    type: "emeriti",
    name: "Don",
    avatar: "https://www.github.com/donisaac.png",
    links: [
      { icon: "github", link: "https://github.com/donisaac" },
      { icon: "twitter", link: "https://twitter.com/Don_dev_" },
    ],
  },
  {
    id: "rzvxa",
    type: "emeriti",
    name: "rzvxa",
    avatar: "https://www.github.com/rzvxa.png",
    links: [
      { icon: "github", link: "https://github.com/rzvxa" },
      { icon: "twitter", link: "https://twitter.com/rzvxa" },
    ],
  },
  {
    id: "ematipico",
    type: "consultant",
    name: "Emanuele",
    title: "Lead",
    avatar: "https://www.github.com/ematipico.png",
    org: "Biome",
    orgLink: "https://github.com/biomejs",
    links: [
      { icon: "github", link: "https://github.com/ematipico" },
      { icon: "twitter", link: "https://twitter.com/ematipico" },
    ],
  },
  {
    id: "anonrig",
    type: "consultant",
    name: "Yagiz",
    title: "Principal Engineer",
    avatar: "https://www.github.com/anonrig.png",
    org: "Cloudflare",
    orgLink: "https://github.com/cloudflare",
    links: [
      { icon: "github", link: "https://github.com/anonrig" },
      { icon: "twitter", link: "https://twitter.com/yagiznizipli" },
    ],
  },
];

export const CORE_TEAM_MEMBERS = CORE_MEMBERS.filter(({ type }) => type === "core") as CoreTeamMember[];

export const CONSULTANTS = CORE_MEMBERS.filter(({ type }) => type === "consultant") as Consultant[];

export const EMERITI = CORE_MEMBERS.filter(({ type }) => type === "emeriti") as Emeriti[];

export const TEAM_MEMBERS_MAP: Record<TeamMember["id"], TeamMember> = Object.fromEntries(
  CORE_MEMBERS.map(({ id, ...rest }) => [id, { id, ...rest }]),
);
