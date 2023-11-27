<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import { useData } from "vitepress";
import { TEAM_MEMBERS_MAP } from "../constants/team";
import type { TeamMember } from "../constants/team";

const vitePressData = useData();
const title = computed<string>(() => vitePressData.frontmatter.value.title);
const lang = computed<string>(() => vitePressData.lang.value);
const authors = computed(() =>
  (vitePressData.frontmatter.value.authors as TeamMember["id"][]).flatMap((id) => {
    const member = TEAM_MEMBERS_MAP[id];

    if (member) {
      const { avatar, links, name, title } = member;
      const { link = "" } = links?.find((link) => link.link.startsWith("https://github.com/")) ?? {};

      return [{ avatar, link, name, title }];
    }

    return [];
  }),
);
const date = computed(() => {
  const filePath = vitePressData.page.value.filePath;
  const result = filePath.match(/blog\/(?<date>\d{4}-\d{2}-\d{2})-.*$/);
  const { date } = result?.groups ?? {};

  if (date) {
    return new Date(date);
  }
  return null;
});
const isoDatetime = computed(() => date.value?.toISOString() ?? null);
const datetime = ref("");

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    if (date.value) {
      datetime.value = new Intl.DateTimeFormat(lang.value, { dateStyle: "long" }).format(date.value);
    }
  });
});
</script>

<template>
  <header class="AppBlogPostHeader">
    <h1>{{ title }}</h1>
    <p v-if="isoDatetime">
      <time :datetime="isoDatetime">{{ datetime }}</time>
    </p>
    <ul class="authors">
      <li v-for="{ avatar, link, name, title } in authors" :key="name" class="author">
        <img :src="avatar" :alt="name" class="author-avatar" />
        <p class="author-text">
          <a v-if="link" :href="link" target="_blank" class="author-name">{{ name }}</a>
          <span v-else class="author-name">{{ name }}</span>
          <span class="author-title">{{ title }}</span>
        </p>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.authors {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.author {
  display: flex;
  gap: 10px;
  margin: 0;
}

.author-text {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.author-name {
  line-height: 1.25;
}

.author-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.author-avatar {
  width: 48px;
  height: 48px;
}
</style>
