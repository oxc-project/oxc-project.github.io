export interface Author {
  name: string;
  title: string;
  link: string;
  avatar: string;
}

export const AUTHORS: Record<string, Author> = {
  boshen: {
    name: "Boshen",
    title: "Project Lead",
    link: "https://github.com/boshen",
    avatar: "https://github.com/boshen.png",
  },
};
