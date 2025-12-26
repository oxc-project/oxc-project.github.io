/**
 * OXC Sponsor Data
 * Bronze sponsors and individual backers for the OXC project
 */

import type { SponsorTier } from "@voidzero-dev/vitepress-theme/src/types/sponsors";

export const sponsors: SponsorTier[] = [
  {
    tier: "Silver Sponsors",
    size: "big",
    items: [
      {
        name: "Schoolhouse",
        url: "https://schoolhouse.world",
        img: "data:image/webp;base64,UklGRoICAABXRUJQVlA4IHYCAACQEACdASpQAFAAPm0wkkckIyGhK5cagIANiWgA1BHAvZ/rX5Gfhn8qlS/qP4Dyi/oWnAfkT2AP0T6QHmH/aDqH+gB/b/8t1tfoAeWN7Kv7X+kKnoi42wB1txTd1mkGMO7U3/H6CcR+uv/xqZmKafCtbuTei/2+QwuVduOJHRBaH0VnEkNL/Dg9zNfZyAAA/uC5f/bIHCRR03P/qUYo1VFB+Ipj//DJzD8WXRVICnh1CWekXMCg9h1YEJbOfXL9xJ3PweDzhPpxzdmf4Z6v/x/6sdlrG+itd/lVGHlJJ+XdLjxJz1i/4QHrQ/Dd8b6c8IMNcQeSx9PX3HGMd+c6X/FaUf4LceIydpIKL8tJeqR2GRjmRqmSjnJFvHkcmESHB1XVaUYZGBXTHZzG51a/DHuKcEows8bahM5pGDpnoyMXRPF768C5aAsrSpv7wQzu8tXWYT4RT9qJqCBlmoyfOt3kpqygHxyNV+75LCAf3XmPjyhPJhLFIgyf5kAdR2fx5wzlbQXNKeohNSy+WI7RuKcOJXRTNn+RXBr2klnc0HqAW/F5VXzAcmXwjOP5O6xnaaCFP0etuH3M/OyA4FZA15iMOjXTrd0zMfX/VAanChuW/zjnMUQqhpfydxGfWPTv7RfWTNxD5H/pGt6O4FNpVg/DUzxaWloPCTy2uhhylytnIYGz7c/AHj/vLHVdlyiA+idVohmq4RUc/0w3GuxQWAl12B1TTn++JqtyHJ2L8C1bAxzFR5e4hLD2wNjF6xYv8m1/xoHZC2s3Ff+crw2IMji31NMMZXJwK/HU7/CfZedq+3te8kabkn3N26nm2N2kJX0EH7MAAAA=",
      },
      {
        name: "Zephyr Cloud IO",
        url: "https://zephyr-cloud.io/",
        img: "data:image/webp;base64,UklGRowEAABXRUJQVlA4IIAEAACQFQCdASpQAFAAPm0wkUWkIyGVzHb8QAbEtIAK9J/s3bJz3HvT2jzjX4ris2Dt7kypxF6Vaah5M6MZB9OaYjUlyz9X/VEwbytGcyWy6fz5oLkTjZKxQfePcdF6ZJ+NY1m4wElmVapRhcWvLDSzmpK84cpCLabq6/Cz6xQFgpfEOc6Gcf24l8PrUQXzB+dXFCI/2tJl2wi+erHPKpg/QX3erajvXBndCo88YIqGIVH8eU0QlSIAAP7jwaEw8s6svrwEORcLrTgumIzf5zPk0hXczWb3UwlS0ExR0MUXeQUgk0EWaDabwifuzqjVyKzlkyvKmTx3iShpBQI7J4q8ASFXB9YB1udJjy4ToRdjuGZMJye6PdqnepO1tW5kSjNMTULgP29TkYS7JYbKS7t+6LCuI0kKYtArn2UZQmUoX5STpDx60yLr4MMjqaOFnkt3OWD1TTstwif/QWHCskIy0Rn3opjAGVwgtl7ULAP0FSc2giKSwDuRcbXksivq17+b7/7JC3r5S9r2ILWDn5bqxAgfx81DuhZM7PheBpQWqvf9F9KlfY+1woK/0XLXwBuvPCetWjDBJmj3BYPDfJIler+G+ae4lfPPm/fI95qH4y0GSZ/+5sgimHpyFrPhnIcd9AXe7HjnVYlMtQg6Pa35UIItGPd5xdCNnflq5+5AMLppSwOvh2RQRh17H6B6b8Imq4wotvSSVYXOI1AjAOHxxQZ0sITHymgUNaOt8NkNxY1N4N8OePCYXHuQZ7MEd9ETeiMDlprwLwl4xZQyj8vO4VcmtJqY27/7SWiE/NtTeOAfmZZpvH0sz355guwBJIfkMU6mvqxWn5+UG7blKang2fWYUH64XoF1cnehouhfplwF7X98aZvbqfBrjZKP7rMfe/XYWeGmcktn31DUxKNB6QwI+gNTWQ6BDzb3NpcHLjcPOhfJbBmvpai6InG01fh2C7TpULEQj5MkQau2Q4AmQHp+sycAxw4rnSM45gcmCvRXWpfQwW3oZQJ/TwdWuHRd9Gea5bI/vkvIn2J7MVjwb6GfHSrLods8Rz68/0A81wm5WtZUM3huelFhCpnUwK5217k4VzSE2nLiBaUX/TUuFGj05QW6SZxdvi901yaRq39WpOzW5yNq4uJVU73wz8rSY5BgfNPrSLRp3Wv3lsdUiPnR/EfkXBR4XxIZMmCTaRig2Dbuivz3/x+o11uBo4kAH0+/FDcaQz7lPguZZkdeiba7K2n4gTmTqZoeVcIZupN018ZNncdxqLCKJvuy6/P1zqEWuXKSnGWykkxruUBvMxM1UIeZ+e8+4CpZ83wGhJuw8xiNlViPRtQ5iW1JxkgX645JThtDTjwYU+SQn4tk7rrNGY817UbwgAAKrs9s0idfcKlDLsCElntP63X0fIzhfkcVDgiqzVZENoDygoGoYiVwIYBqPr47VW4nULWoghnSWd4onrrF5T1K+89sUFLJBW96qWZQTUybeiJ+1e34/xc/kbKvYJI1UI8O/Y+LeL5QXy+gzTG940CiMeytOM8AAAA=",
      },
    ],
  },
  {
    tier: "Bronze Sponsors",
    size: "medium",
    items: [
      {
        name: "N-iX Ltd",
        url: "https://n-ix.com",
        img: "data:image/webp;base64,UklGRsQCAABXRUJQVlA4ILgCAAAQEQCdASpQAFAAPm0wlEYkIyIhKlgLwIANiUAMwCMAulDwB7/+Un6QHmA3QD9kOsi9ADywf2q+EX9vv2AmxWPlvty3nr2M7Zz3e57j+J7oNVpCJPBMog6GwgtRjuyPInN6o/Uk4vo//S1BYHE8NUxfjgLu6hOtg7orBvwLpN7IE0Q5Rc0kwXfVASvg9JRqeCMAAP78qAIMMffJcrXEg3rx57uwBWmQ/9w11cSn+/lh02uYHf8bJr8RD/pi45QLVKMzaEhWztf1PJQYsCINbAXDW6ysH+3Ul/Vs00s9/4JQMqYBiLbmRjQysf01vPeCevromI2d/mGFYzYR/hqfG88LqvNITUyCz67CPrt83kdW85mO5BhxAuP8gO17j/tktrNA1ZaJIvHJPn9GdA/TULt/iBbcAEg8U4o5a1/Zo/6GuYH9iaf21eDlzSGQrc3hU6epswsvn2pkJftvwL3uA6JAmQBlIvfttwC0rXx2/xNFWEgBIMIT+J29bDBfqu4yngJBtKfzv5EHfJGGbnxygqGN7WABvALnaE0Nstq3aZ94pcHbVvCanWb7I1WUJfiGt0o+A+H6xeu4DJEBwpQE2zg5vH3au5+sBB0wknJjrzkJ1Kf4qE/r9s6HaICsZi80hB8bIcsqVS1pR5z5seZSQD5u11Vo2gPKnsIONP56Cui9fAbArH7P0JJJSr5JiKdDlVO2yy3Qedww5BT7s2ERUk0wCu+eg3oijePjwACOvLBrDZxXkrM1LFBY51CYBcQ5RTZ3NHeQOQXzI37WmN6P7zdv1iMaoQdUa3wnwb5C0ddTQGxA5SyubRD/SU9XEtfXjC/hMIwCppqTQZcPqAEsdR45N08Hz4USjG6M+hu9j/W8x33VLO4AtwNdKwRBA1ZMwzakwr8eChE2R6Ozz/Udfw5YA9eUHgkgAAA=",
      },
      {
        name: "Miro",
        url: "https://miro.com",
        img: "data:image/webp;base64,UklGRiAFAABXRUJQVlA4IBQFAAAwGgCdASpQAFAAPmEojEWkIqEdaw0AQAYEtgBldtCsnwG+8fjl7StW/tn4X5j0+XWF+q/rv4edorzAOcR5gP1a/QDsU+gB+l/Wtegj5bHsxftn6TGaIf3fsm/q/KnpEPsT+MzlW8A8g8wO4u/2nGDUAP5F/hfPfz/vThyUG/4r5RpQZ9PJquNkWZ7SIg4rStaG3RoPlsoxxsWvE72AmXEl2PTu0vmggZbjYnTom9lkdBvnrsGzMWVrdE0uHcXzu7nnjKRun6kQ0vc1fhqgjEX0iCCEWWDdELx7AAD+QA2uPH6j2I4+gb3HUSDFGltf+7ne5n+5nuruJsbnQl1f8aKSkLpbnax2FYpOwzTRu6v+deb7Rm6a2Uw4dYsv5qoIdJZtn0dip54RTeqe3lI5J58b69qsfX9vVILdsRKE3/H6+/BXbMG95NyCSJ/9yC7JyMUDTmrFjEFczXJSpUvp5evzyQPt2Fu3/pSqXOFSEtQisVBSyxgYuwftCmdrMQ5JlBBEWayaBhZbvD2Xn9ycN6g1+mfa+k/zNY8ZCsMIvtDqPwIm/fjEu4+H0B6F5WeftOi/Nhj55SvXjI4IprdHb/zM8jEPDWVJrNxJh9ag8OsQFejG0DPTbvZZv/O6gWZ4g7Rs6XwU20zd1AA2ANQOiz82aV8PcK833RItnKpxFAlCSbZfIKQpXpNBJLu+plSj3bd73PxRCwwsEsqbRnWARPkfN1fGUrAFGLzCJ+/zlYyn5MCPlCljIyr5QdxOqAvjRb+QHWLoiO6Hw4Kw0Z1bwpmsZpl1HX67XyBW8lC/mkAxQ0wkDR125+JDkLvQzrIrR9v5Zp4FWkOa7H6chfy6kwWz6S2SxCTGLHOWRrkeP7wVxdT0xh7McqGBuAX34QeFmmBbgy/0jgr+WXexHmRHpXUJjaFkmCRn/x153LaJLRkEnt95mjyJjr2C/Nl7YSPMpmo7qB9hlxYHsMth+nZH1Sj2KPibkl6bHH6f+xA2fT7YPNtuDu/JTR6hljxd+PXZZXMAQN2CSQ0A+DkHz/6lnRPw/2JtX15ujJDN4D9+OXNZZHr02B3/Lf+eV+//EFm5bRv0r/AMad613+xp3zQGXDeoR+QVpSSumcroq+rYPvyh/H4h8pPnJtzKW/LBlYq3seNe4Yvy1ajJeooOw2khVRLSBy2+xL3K9qjP2nYYGWBgEHrko//yZjiugVdZ6F6nhXy0kyDe8T4h5BXEUE29LzrFz/fzz+PhWhgCUigi0gshKivQ7FP1w2z9BqjRQ5mkXFb5385vG/Tn45YwKQjRa7kkMJYfr87nzSrigThsNxIDAsKnj/ED+aGD4IzLE46y/LMI/W308c01ob+5If4t+5NQIZ1Mz6Xb6U75nrIhhCDILPiAn4asojEjNPUAhRafVqlRVPVLLKWYGmiAvj3CqVhOtXzgRNXPF7TB8JhexWOAV4Iv4L4MNDDvdm2Hs1WyYWSxaLR/dw4YOQJIIhXSao4HyjbrTdlRt+J+V7//+Uz3OIGy7Pfo1WeI2Cx+KB5FG6+GHP3X34oYFdlGlw8v9RC/V0ztJit+pZ96/XofKRfuF5AnJ5t0FijfvSiAwplNyAHlvUcZWtpun0nik68mnoNLztntwoDO/13XFvRRfddSZZLiw1AjQsP+KbzxY0Dhv10THaCjGv8Kzk/u4fRiTgWZ1TRxik3SAiAFl5Z4eW10/Q/58qdS/n/wniPYaqlfA4IAAAAA",
      },
    ],
  },
  {
    tier: "Backers",
    size: "avatar",
    items: [
      {
        name: "Brooooooklyn",
        url: "https://lyn.one",
        img: "https://github.com/Brooooooklyn.png",
      },
      {
        name: "ubugeeei",
        url: "https://ublog.dev",
        img: "https://github.com/ubugeeei.png",
      },
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
      {
        name: "spence",
        url: "https://github.com/spence",
        img: "https://github.com/spence.png",
      },
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
      {
        name: "re-taro",
        url: "https://re-taro.dev",
        img: "https://github.com/re-taro.png",
      },
      {
        name: "EmNudge",
        url: "https://emnudge.dev",
        img: "https://github.com/EmNudge.png",
      },
      {
        name: "Kevin Peckham",
        url: "https://lightningjar.com",
        img: "https://github.com/kevinpeckham.png",
      },
      {
        name: "maraisr",
        url: "https://marais.io",
        img: "https://github.com/maraisr.png",
      },
      {
        name: "tkh44",
        url: "https://github.com/tkh44",
        img: "https://github.com/tkh44.png",
      },
      {
        name: "Kuba Jastrz",
        url: "https://kubajastrz.com",
        img: "https://github.com/KubaJastrz.png",
      },
      {
        name: "Ivan Nikolic",
        url: "https://ivannikolic.com",
        img: "https://github.com/niksy.png",
      },
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
      {
        name: "eai04191",
        url: "https://mizle.net",
        img: "https://github.com/eai04191.png",
      },
      {
        name: "Ulrich Stark",
        url: "https://ustark.de",
        img: "https://github.com/ulrichstark.png",
      },
      {
        name: "Liminity",
        url: "https://liminity.se",
        img: "https://github.com/liminityab.png",
      },
      {
        name: "kasmacioma",
        url: "https://kosmotema.dev",
        img: "https://github.com/kasmacioma.png",
      },
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
      {
        name: "nnnnoel",
        url: "https://github.com/nnnnoel",
        img: "https://github.com/nnnnoel.png",
      },
      {
        name: "Connor Shea",
        url: "https://connorshea.gitlab.io",
        img: "https://github.com/connorshea.png",
      },
      {
        name: "n1203",
        url: "https://anyreview.dev",
        img: "https://github.com/n1203.png",
      },
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
      {
        name: "kzhrk",
        url: "https://opencollective.com/kzhrk",
        img: "https://github.com/kzhrk.png",
      },
    ],
  },
];
