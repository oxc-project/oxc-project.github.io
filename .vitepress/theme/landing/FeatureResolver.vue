<template>
  <section id="feature-resolver" class="wrapper border-t grid md:grid-cols-2">
    <div class="px-5 py-6 md:p-10 flex flex-col justify-center gap-15">
      <div class="flex flex-col gap-5">
        <span class="text-grey text-xs font-mono uppercase tracking-wide">Resolver</span>
        <h4 class="text-white">oxc-resolver</h4>
        <p class="text-white/70 text-base max-w-[25rem] text-pretty">
          Node.js-compatible CJS and ESM module resolution
        </p>
        <ul class="checkmark-list">
          <li>
            Behavior alignment with
            <code class="mx-1 outline-none bg-nickel/50 text-aqua">enhanced-resolve</code>
          </li>
          <li>
            28x faster than
            <code class="mx-1 outline-none bg-nickel/50 text-aqua">enhanced-resolve</code>
          </li>
          <li>Highly customizable</li>
        </ul>
        <a href="/docs/guide/usage/resolver" class="button w-fit mt-6">Usage Guide</a>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="h-full overflow-clip flex justify-end items-center py-16 px-5 md:px-10">
        <img
          loading="lazy"
          src="@assets/oxc/oxc-resolver-terminal.png"
          alt="Resolver"
          class="w-full md:w-auto"
        />
      </div>
    </div>
  </section>
</template>
