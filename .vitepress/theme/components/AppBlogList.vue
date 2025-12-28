<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useData } from "vitepress";
import blogSidebar from "../../sidebar.blog.json";

interface BlogPost {
  text: string;
  link: string;
  date: Date | null;
}

const { lang } = useData();
const posts = ref<BlogPost[]>([]);

// Parse date from filename (e.g., /blog/2025-12-08-type-aware-alpha)
function parseDateFromLink(link: string): Date | null {
  const match = link.match(/\/blog\/(\d{4}-\d{2}-\d{2})-/);
  if (match) {
    return new Date(match[1]);
  }
  return null;
}

// Format dates on mounted to avoid hydration mismatch
onMounted(() => {
  watchEffect(() => {
    posts.value = blogSidebar.map((post) => ({
      text: post.text,
      link: post.link,
      date: parseDateFromLink(post.link),
    }));
  });
});

function formatDate(date: Date | null): string {
  if (!date) return "";
  return new Intl.DateTimeFormat(lang.value, { dateStyle: "long" }).format(date);
}
</script>

<template>
  <div class="blog-list">
    <h1>The Oxc Blog</h1>
    <ul class="posts">
      <li v-for="post in posts" :key="post.link" class="post">
        <time v-if="post.date" :datetime="post.date.toISOString()" class="post-date">
          {{ formatDate(post.date) }}
        </time>
        <a :href="post.link" class="post-title">{{ post.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-list {
  max-width: 688px;
  margin: 0 auto;
  padding: 32px 24px;
}

.blog-list h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
}

.posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post:first-child {
  padding-top: 0;
}

.post:last-child {
  border-bottom: none;
}

.post-date {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.post-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.post-title:hover {
  color: var(--vp-c-brand-2);
}

@media (min-width: 640px) {
  .post {
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
  }

  .post-date {
    flex-shrink: 0;
    width: 160px;
  }
}
</style>
