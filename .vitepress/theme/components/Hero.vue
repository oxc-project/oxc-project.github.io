<script setup lang="ts">
import { withBase } from "vitepress";
import type { DefaultTheme, HeroAction } from "vitepress/theme";
import { VPButton, VPImage } from "vitepress/theme";
import { inject, onMounted, onUnmounted, type Ref, ref } from "vue";

// Math stuff
function vec2(x, y) {
  return { x: x || 0, y: y || 0 };
}

function vec2_clone(v) {
  return vec2(v.x, v.y);
}

function vec2_sub(a, b) {
  return vec2(a.x - b.x, a.y - b.y);
}

function vec2_len(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function vec2_norm(v) {
  const len = vec2_len(v);
  if (len === 0) {
    return vec2(0, 0);
  }
  return vec2(v.x / len, v.y / len);
}

function vec2_mulf(v, f) {
  return vec2(v.x * f, v.y * f);
}

function vec2_clamp(v, min, max) {
  return vec2(clamp(v.x, min.x, max.x), clamp(v.y, min.y, max.y));
}

function vec2_lerp(a, b, t) {
  return vec2(lerp(a.x, b.x, t), lerp(a.y, b.y, t));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}

function oscillate(input, min, max) {
  const range = max - min;
  return min + Math.abs(((input + range) % (range * 2)) - range);
}

function lemniscateGerono(t) {
  return vec2(Math.sin(t * 2) / 2, Math.cos(t));
}

defineProps<{
  name?: string;
  text?: string;
  tagline?: string;
  image?: DefaultTheme.ThemeableImage;
  actions?: HeroAction[];
}>();

const heroImageSlotExists = inject("hero-image-slot-exists") as Ref<boolean>;
const hero = ref(null);
let rotation = ref(vec2());
let targetRotation = ref(vec2());
let mouse = vec2();
let lastMouse = vec2();
let cooldown = null;
let idle = true;

const onMouseMove = (e) => {
  mouse = vec2(e.clientX, e.clientY);
  if (cooldown) {
    clearTimeout(cooldown);
  }
  cooldown = setTimeout(() => {
    idle = true;
    targetRotation = vec2();
  }, 1500);
  if (idle) {
    idle = false;
    targetRotation = vec2_clone(rotation);
    lastMouse = vec2_clone(mouse);
  }
};

onMounted(() => {
  document.addEventListener("mousemove", onMouseMove);
  nextFrame();
});

onUnmounted(() => {
  if (cooldown) {
    clearTimeout(cooldown);
    idle = true;
    cooldown = null;
    mouse = null;
  }
  document.removeEventListener("mousemove", onMouseMove);
});

function nextFrame() {
  requestAnimationFrame(nextFrame);
  if (hero.value === null) {
    return;
  }
  if (mouse === null) {
    return;
  }
  update();
  render();
}

const RANGE = 10;
const TARGET_MIN = vec2(-RANGE, -RANGE);
const TARGET_MAX = vec2(+RANGE, +RANGE);

const WAVE_RANGE = 20;
const WAVE_MIN = vec2(-WAVE_RANGE, -WAVE_RANGE);
const WAVE_MAX = vec2(+WAVE_RANGE, +WAVE_RANGE);

function update() {
  const time = new Date().getTime() / 800;
  const osc = oscillate(time, -1, 1);
  const dir = vec2_mulf(vec2_norm(vec2_sub(lastMouse, mouse)), 10);

  targetRotation.x += dir.y;
  targetRotation.y -= dir.x;

  let speed = undefined;
  let min = undefined;
  let max = undefined;
  if (idle) {
    targetRotation = vec2_mulf(lemniscateGerono(osc), 20);
    speed = 0.01;
    min = WAVE_MIN;
    max = WAVE_MAX;
  } else {
    speed = 0.02;
    min = TARGET_MIN;
    max = TARGET_MAX;
  }

  targetRotation = vec2_clamp(targetRotation, min, max);

  rotation = vec2_lerp(rotation, targetRotation, speed);

  lastMouse = mouse;
}

function render() {
  hero.value.style.transform = `translate(-50%,-50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
}
</script>

<template>
  <div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
    <div class="container">
      <div class="main">
        <slot name="home-hero-info-before" />
        <slot name="home-hero-info">
          <h1 v-if="name" class="name">
            <span v-html="name" class="clip"></span>
          </h1>
          <p v-if="text" v-html="text" class="text"></p>
          <p v-if="tagline" v-html="tagline" class="tagline"></p>
        </slot>
        <slot name="home-hero-info-after" />

        <div v-if="actions" class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <VPButton
              tag="a"
              size="medium"
              :theme="action.theme"
              :text="action.text"
              :href="action.link"
              :target="action.target"
              :rel="action.rel"
            />
          </div>
        </div>
        <slot name="home-hero-actions-after" />
      </div>

      <div v-if="image || heroImageSlotExists" class="image">
        <div class="image-container perspective">
          <div class="image-bg" />
          <slot name="home-hero-image">
            <img
              class="VPImage image-src"
              :src="withBase(typeof image === 'string' ? image : image.src)"
              alt=""
              ref="hero"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html:not(.dark) .VPImage.dark {
  display: none;
}
.dark .VPImage.light {
  display: none;
}
</style>

<style scoped>
.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
  }
}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}

.main {
  position: relative;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
}

.VPHero.has-image .container {
  text-align: center;
}

@media (min-width: 960px) {
  .VPHero.has-image .container {
    text-align: left;
  }
}

@media (min-width: 960px) {
  .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }

  .VPHero.has-image .main {
    max-width: 592px;
  }
}

.name,
.text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }
}

.tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.VPHero.has-image .actions {
  justify-content: center;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}

@media (min-width: 960px) {
  .VPHero.has-image .actions {
    justify-content: flex-start;
  }
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

.image {
  order: 1;
  margin: -76px -24px -48px;
}

@media (min-width: 640px) {
  .image {
    margin: -108px -24px -48px;
  }
}

@media (min-width: 960px) {
  .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }
}

.perspective {
  perspective: 30cm;
}

.image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}

@media (min-width: 640px) {
  .image-container {
    width: 392px;
    height: 392px;
  }
}

@media (min-width: 960px) {
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /*rtl:ignore*/
    transform: translate(-32px, -32px);
  }
}

.image-bg {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .image-bg {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 960px) {
  .image-bg {
    width: 320px;
    height: 320px;
  }
}

:deep(.image-src) {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  max-width: 192px;
  max-height: 192px;
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  :deep(.image-src) {
    max-width: 256px;
    max-height: 256px;
  }
}

@media (min-width: 960px) {
  :deep(.image-src) {
    max-width: 320px;
    max-height: 320px;
  }
}
</style>
