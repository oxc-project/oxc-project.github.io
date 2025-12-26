<script setup>
import PerformanceBar from "@voidzero-dev/vitepress-theme/src/components/shared/PerformanceBar.vue";
import parserBenchmarkBg from "@voidzero-dev/vitepress-theme/src/assets/oxc/oxc-feature-background.jpg";

const performanceData = [
  {
    name: "OXC",
    percentage: 20,
    time: "26.3ms",
    isPrimary: true,
  },
  {
    name: "SWC",
    percentage: 65,
    time: "84.1ms",
  },
  {
    name: "Biome",
    percentage: 100,
    time: "130.1ms",
  },
];
</script>

<template>
  <section id="feature-parser" class="wrapper grid border-t md:grid-cols-2">
    <div class="px-5 py-6 md:p-10 md:py-15 flex flex-col justify-center gap-15">
      <div class="flex flex-col gap-5">
        <span class="text-grey text-xs font-mono uppercase tracking-wide">Parser</span>
        <h4 class="text-white">oxc-parser</h4>
        <p class="text-white/70 text-base max-w-100 text-pretty">
          The foundation for advanced transformations and compilations
        </p>
        <ul class="checkmark-list">
          <li>3x faster than <code class="mx-1 outline-none bg-nickel/50 text-aqua">SWC</code></li>
          <li>
            Parses <code class="mx-1 outline-none bg-nickel/50 text-aqua">.js(x)</code> and
            <code class="mx-1 outline-none bg-nickel/50 text-aqua">.ts(x)</code>
          </li>
          <li>Passes all Test262 stage4 tests</li>
        </ul>
        <a href="/docs/guide/usage/parser" class="button w-fit mt-6">Usage Guide</a>
      </div>
    </div>
    <div class="flex flex-col justify-center px-5 md:px-10 py-5 md:pb-10 md:py-10">
      <p class="text-white font-medium mb-10">Parser Benchmark for Oxc, Swc and Biome</p>
      <div class="flex flex-col gap-6">
        <PerformanceBar
          v-for="item in performanceData"
          :key="item.name"
          :data="item"
          :background-image="parserBenchmarkBg"
          large
        />
      </div>
      <p class="text-xs mt-10">
        Parsing typescript.js on Macbook Pro M3 Max |
        <a
          href="https://github.com/oxc-project/bench-javascript-parser-written-in-rust"
          target="_blank"
          >Source</a
        >
      </p>
    </div>
  </section>
</template>

<style scoped></style>
