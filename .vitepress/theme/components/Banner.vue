<script setup lang="ts">
import { useElementSize, useLocalStorage } from "@vueuse/core";
import { onMounted, ref, watch, watchEffect } from "vue";
const el = ref<HTMLElement>();
const { height } = useElementSize(el);
watchEffect(() => {
  if (height.value) {
    document.documentElement.style.setProperty("--vp-layout-top-height", `${height.value + 16}px`);
  }
});

const show = () => {
  document.documentElement.classList.remove("banner-dismissed");
};
const hide = () => {
  document.documentElement.classList.add("banner-dismissed");
};

const slug = "/blog/2025-06-10-oxlint-stable";

const bannerDismissed = useLocalStorage<boolean>(`oxc-banner-dismissed-${slug}`, false);

watch(
  bannerDismissed,
  () => {
    if (bannerDismissed.value) {
      hide();
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (location.pathname.includes(slug)) {
    hide();
  } else if (!bannerDismissed.value) {
    show();
  }
});

const dismiss = () => {
  bannerDismissed.value = true;
};
</script>

<template>
  <div ref="el" class="banner banner-dismissed">
    <div class="text"><a :href="slug">Announcing Oxlint v1.0 Stable</a> 🎉</div>

    <button type="button" @click="dismiss">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</template>

<style>
.banner-dismissed {
  --vp-layout-top-height: 0px !important;
}

html {
  --vp-layout-top-height: 88px;
}

@media (min-width: 375px) {
  html {
    --vp-layout-top-height: 64px;
  }
}

@media (min-width: 768px) {
  html {
    --vp-layout-top-height: 40px;
  }
}
</style>
<style scoped>
.banner-dismissed .banner {
  display: none;
}

.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);
  padding: 8px;
  text-align: center;
  background: linear-gradient(to right, #bd34fe, #47caff);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: monospace;
  display: flex;
  justify-content: space-between;
}

.text {
  flex: 1;
}

a {
  text-decoration: underline;
}

svg {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}
</style>
