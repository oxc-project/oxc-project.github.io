<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

interface Badge {
  src: string;
  alt: string;
}

const vitePressData = useData();

const badges = computed<Badge[]>(() => vitePressData.frontmatter.value.badges);
</script>

<template>
  <ul class="AppBadgeList">
    <li v-for="badge in badges" :key="badge.src" class="badge">
      <img :src="badge.src" :alt="badge.alt" />
    </li>
  </ul>
</template>

<style scoped>
.AppBadgeList {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px;
  min-height: 20px;
  padding: 0;
  list-style: none;
}

.badge {
  margin: 0;
}
</style>
