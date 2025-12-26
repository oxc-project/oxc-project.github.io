<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const features = [
  { id: "feature-linter", label: "linter" },
  { id: "feature-formatter", label: "formatter" },
  { id: "feature-parser", label: "parser" },
  { id: "feature-transformer", label: "transformer" },
  { id: "feature-resolver", label: "resolver" },
  { id: "feature-minifier", label: "minifier" },
];

const activeSection = ref("feature-parser");
const underlineStyle = ref({ left: "0px", width: "0px" });
const listItems = ref<HTMLElement[]>([]);
let scrollTimeout: number | null = null;

const scrollToSection = (e: Event, id: string) => {
  e.preventDefault();
  e.stopPropagation();

  const element = document.getElementById(id);
  if (!element) return;

  // Get the toolbar height to offset the scroll
  const toolbar = (e.currentTarget as HTMLElement).closest("section");
  const toolbarHeight = toolbar?.offsetHeight || 0;

  // Calculate position to scroll to
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - toolbarHeight;

  // Use custom smooth scroll with requestAnimationFrame for guaranteed smooth behavior
  const startPosition = window.scrollY;
  const distance = offsetPosition - startPosition;
  const duration = 800; // ms
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function (easeInOutCubic)
    const ease =
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const updateUnderlinePosition = () => {
  const activeIndex = features.findIndex((f) => f.id === activeSection.value);
  if (activeIndex >= 0 && listItems.value[activeIndex]) {
    const activeItem = listItems.value[activeIndex];
    underlineStyle.value = {
      left: `${activeItem.offsetLeft}px`,
      width: `${activeItem.offsetWidth}px`,
    };

    // Auto-scroll the toolbar on mobile to keep active item in view
    const toolbar = activeItem.closest("ul");
    if (toolbar && window.innerWidth < 640) {
      // sm breakpoint
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      const toolbarWidth = toolbar.clientWidth;

      // Calculate the center position
      const targetScrollLeft = itemLeft - toolbarWidth / 2 + itemWidth / 2;

      toolbar.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }
};

const determineActiveSection = () => {
  // Get all sections and their positions
  const sections = features
    .map((feature) => {
      const element = document.getElementById(feature.id);
      if (!element) return null;

      const rect = element.getBoundingClientRect();
      return {
        id: feature.id,
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height,
      };
    })
    .filter(Boolean);

  // Find the section that's most visible near the top of the viewport
  // We consider a section "active" if it's within 200px of the top
  const threshold = 200;
  let activeId = activeSection.value;

  for (const section of sections) {
    if (!section) continue;

    // If section top is near or above threshold and bottom is below threshold
    if (section.top <= threshold && section.bottom > threshold) {
      activeId = section.id;
      break;
    }
  }

  // If no section found above, check if we're at the very bottom
  if (activeId === activeSection.value) {
    const lastSection = sections[sections.length - 1];
    if (
      lastSection &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
    ) {
      activeId = lastSection.id;
    }
  }

  if (activeId !== activeSection.value) {
    activeSection.value = activeId;
    updateUnderlinePosition();
  }
};

const handleScroll = () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }

  scrollTimeout = window.requestAnimationFrame(() => {
    determineActiveSection();
  });
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Set up scroll listener for active state tracking
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Initial underline position
  setTimeout(() => {
    updateUnderlinePosition();
    determineActiveSection();
  }, 100);

  // Update on resize
  window.addEventListener("resize", updateUnderlinePosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateUnderlinePosition);
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
});
</script>

<template>
  <div class="wrapper wrapper wrapper--ticks border-t w-full relative z-20"></div>
  <section class="wrapper sticky top-0 border-b bg-primary z-10 overflow-hidden">
    <ul
      class="w-full sm:grid sm:grid-cols-6 flex items-center divide-x divide-nickel relative overflow-x-auto scrollbar-hide touch-none sm:touch-auto select-none sm:select-auto"
    >
      <div
        class="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-out"
        :style="underlineStyle"
      />
      <li
        v-for="(feature, _index) in features"
        :key="feature.id"
        ref="listItems"
        class="flex-shrink-0"
      >
        <a
          :href="`#${feature.id}`"
          @click="scrollToSection($event, feature.id)"
          class="h-full text-sm font-mono tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-1.5 transition-colors duration-200 whitespace-nowrap"
          :class="activeSection === feature.id ? 'text-white' : 'text-grey'"
        >
          <span>{{ feature.label }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
