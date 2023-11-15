<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useData } from 'vitepress'
import { AUTHORS } from '../../authors'
import type { Author } from '../../authors'

            const vitePressData = useData()
const title =           computed<string>(() => vitePressData.frontmatter.value.title)
const authors = computed<Author[]>(() => {
  return vitePressData.frontmatter.value.authors.map((author) => AUTHORS[author]).filter(Boolean)
})
const date = computed(() => {
  const filePath = vitePressData.page.value.filePath
  const result = filePath.match(/^blog\/(?<date>\d{4}-\d{2}-\d{2})-.*$/)
  const { date } = result?.groups ?? {}

  if (date) {
    return new Date(date)
  }
  return null
})
const isoDatetime = computed(() => date.value?.toISOString() ?? null)
const datetime = ref('')

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    if (date.value) {
      datetime.value = new Intl.DateTimeFormat(vitePressData.lang.value, { dateStyle: 'long' }).format(date.value)
    }
  })
})
</script>

<template>
  <header class="AppBlogPostHeader">
    <h1>{{ title }}</h1>
    <p v-if="isoDatetime">
      <time :datetime="isoDatetime">{{ datetime }}</time>
    </p>
    <ul class="authors">
      <li v-for="author in authors" :key="author.name" class="author">
        <img :src="author.avatar" :alt="author.name" class="author-avatar">
        <p class="author-text">
          <a :href="author.link" target="_blank" class="author-name">{{ author.name }}</a>
          <span class="author-title">{{ author.title }}</span>
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
