/**
 * OXC Sponsor Data
 * Bronze sponsors and individual backers for the OXC project
 */

interface Sponsor {
  name: string;
  url: string;
  img?: string;
}

export const sponsors: Record<string, Sponsor[]> = {
  bronze: [
    {
      name: "Schoolhouse",
      url: "https://schoolhouse.world",
      img: "/sponsors/schoolhouse.svg",
    },
    {
      name: "N-iX",
      url: "https://n-ix.com",
      img: "/sponsors/nix.svg",
    },
  ],
  backers: [
    { name: "Brooooooklyn", url: "https://lyn.one", img: "https://github.com/Brooooooklyn.png" },
    { name: "ubugeeei", url: "https://ublog.dev", img: "https://github.com/ubugeeei.png" },
    {
      name: "MIreland",
      url: "https://github.com/MIreland",
      img: "https://github.com/MIreland.png",
    },
    {
      name: "leo91000",
      url: "https://github.com/leo91000",
      img: "https://github.com/leo91000.png",
    },
    { name: "spence", url: "https://github.com/spence", img: "https://github.com/spence.png" },
    {
      name: "Snyder Tech",
      url: "https://snyder.tech",
      img: "https://github.com/snydertechnologies.png",
    },
    {
      name: "ArrayZoneYour",
      url: "https://arrayzoneyour.github.io",
      img: "https://github.com/ArrayZoneYour.png",
    },
    { name: "re-taro", url: "https://re-taro.dev", img: "https://github.com/re-taro.png" },
    { name: "EmNudge", url: "https://emnudge.dev", img: "https://github.com/EmNudge.png" },
    {
      name: "Kevin Peckham",
      url: "https://lightningjar.com",
      img: "https://github.com/kevinpeckham.png",
    },
    { name: "maraisr", url: "https://marais.io", img: "https://github.com/maraisr.png" },
    { name: "tkh44", url: "https://github.com/tkh44", img: "https://github.com/tkh44.png" },
    {
      name: "Kuba Jastrz",
      url: "https://kubajastrz.com",
      img: "https://github.com/KubaJastrz.png",
    },
    { name: "Ivan Nikolic", url: "https://ivannikolic.com", img: "https://github.com/niksy.png" },
    {
      name: "toakleaf",
      url: "https://github.com/toakleaf",
      img: "https://github.com/toakleaf.png",
    },
    {
      name: "Kenzo Wada",
      url: "https://corp.ourplan.jp",
      img: "https://github.com/Kenzo-Wada.png",
    },
    {
      name: "Christian Juth",
      url: "https://christianjuth.com",
      img: "https://github.com/christianjuth.png",
    },
    {
      name: "Oskar Lebuda",
      url: "https://github.com/OskarLebuda",
      img: "https://github.com/OskarLebuda.png",
    },
    {
      name: "olejorgenb",
      url: "https://github.com/olejorgenb",
      img: "https://github.com/olejorgenb.png",
    },
    {
      name: "tintounn",
      url: "https://github.com/tintounn",
      img: "https://github.com/tintounn.png",
    },
    { name: "eai04191", url: "https://mizle.net", img: "https://github.com/eai04191.png" },
    { name: "Ulrich Stark", url: "https://ustark.de", img: "https://github.com/ulrichstark.png" },
    { name: "Liminity", url: "https://liminity.se", img: "https://github.com/liminityab.png" },
    { name: "kasmacioma", url: "https://kosmotema.dev", img: "https://github.com/kasmacioma.png" },
    {
      name: "Hyeseong Kim",
      url: "https://blog.cometkim.kr",
      img: "https://github.com/cometkim.png",
    },
    {
      name: "red40maxxer",
      url: "https://github.com/red40maxxer",
      img: "https://github.com/red40maxxer.png",
    },
    {
      name: "Dedale",
      url: "https://dedale.com",
      img: "https://github.com/dedale-intelligence.png",
    },
    { name: "nnnnoel", url: "https://github.com/nnnnoel", img: "https://github.com/nnnnoel.png" },
    {
      name: "Connor Shea",
      url: "https://connorshea.gitlab.io",
      img: "https://github.com/connorshea.png",
    },
    { name: "n1203", url: "https://anyreview.dev", img: "https://github.com/n1203.png" },
    {
      name: "naokihaba",
      url: "https://github.com/naokihaba",
      img: "https://github.com/naokihaba.png",
    },
    {
      name: "Tunglies",
      url: "https://github.com/Tunglies",
      img: "https://github.com/Tunglies.png",
    },
    { name: "kzhrk", url: "https://opencollective.com/kzhrk", img: "https://github.com/kzhrk.png" },
  ],
};
