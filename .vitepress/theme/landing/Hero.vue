<script setup>
import RiveAnimation from "@voidzero-dev/vitepress-theme/src/components/shared/RiveAnimation.vue";
import oxcAnimation from "@voidzero-dev/vitepress-theme/src/assets/oxc/animations/640_x_630_oxc masthead_.riv";
</script>

<template>
  <div class="wrapper wrapper--ticks grid md:grid-cols-2 w-full border-nickel divide-x">
    <div class="flex flex-col p-10 justify-center items-center md:items-start">
      <div
        class="flex flex-col gap-5 max-w-[30rem] text-center md:text-left items-center md:items-start"
      >
        <a class="flex items-center gap-2" href="https://voidzero.dev" target="_blank">
          <span class="text-grey text-xs font-mono uppercase tracking-wide">By</span>
          <img src="@assets/logos/voidzero-light.svg" alt="VoidZero" class="h-2.5" />
        </a>
        <h1 class="text-white text-pretty">The JavaScript Oxidation Compiler</h1>
        <p class="text-white/70 text-lg max-w-[25rem] text-pretty">
          A collection of high-performance JavaScript tools written in Rust
        </p>
        <div class="flex items-center gap-5 mt-8">
          <a href="/docs/guide/introduction" class="button button--primary inline-block w-fit">
            Get Started
          </a>
          <a
            href="https://github.com/oxc-project/oxc"
            target="_blank"
            rel="noopener noreferrer"
            class="button inline-block w-fit"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col min-h-[22rem] sm:min-h-[30rem]">
      <div class="relative px-10 h-full flex flex-col justify-center overflow-clip pb-10 sm:pb-0">
        <RiveAnimation
          :desktop-src="oxcAnimation"
          :mobile-src="oxcAnimation"
          :desktop-width="640"
          :desktop-height="630"
          :mobile-width="640"
          :mobile-height="630"
          canvas-class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
