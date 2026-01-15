<script setup lang="ts">
import { useData } from "vitepress";
import Alert from "./Alert.vue";
import { computed } from "vue";

const { frontmatter } = useData();
const title = frontmatter.value.rule_name;
const category = frontmatter.value.category;
const fix = frontmatter.value.fix;
const typeAware = frontmatter.value.type_aware;

const hasFixMessage = computed(() => {
  return fix !== "none";
});

const defaultMessage = typeAware
  ? "This rule is turned on by default when type-aware linting is enabled."
  : "This rule is turned on by default.";

const fixEmoji = computed(() => {
  switch (fix) {
    case "fixable_fix":
    case "conditional_fix":
      return "🛠️";
    case "fixable_suggestion":
    case "conditional_suggestion":
      return "💡";
    case "fixable_dangerous_fix":
    case "conditional_dangerous_fix":
      return "⚠️🛠️";
    case "fixable_dangerous_suggestion":
    case "conditional_dangerous_suggestion":
      return "⚠️💡";
    case "conditional_safe_fix_or_suggestion":
      return "🛠️💡";
    case "pending":
      return "🚧";
    default:
      return "";
  }
});

const fixMessage = computed(() => {
  const f = fix ?? "none";

  if (f === "none") {
    return "No auto-fix is available for this rule.";
  }
  if (f === "pending") {
    return "An auto-fix is planned for this rule, but not implemented at this time.";
  }

  // Parse tokens after the prefix (e.g., "fixable_dangerous_fix_or_suggestion")
  const tokens = f.split("_");
  const prefix = tokens[0];
  const rest = tokens.slice(1);
  const isConditional = prefix === "conditional";
  const hasFix = rest.includes("fix");
  const hasSuggestion = rest.includes("suggestion");
  const isDangerous = rest.includes("dangerous");

  // Determine the noun per Rust logic
  let noun = "auto-fix is available for this rule";
  if (hasFix && hasSuggestion) {
    noun = "auto-fix and a suggestion are available for this rule";
  } else if (hasFix) {
    noun = "auto-fix is available for this rule";
  } else if (hasSuggestion) {
    noun = "suggestion is available for this rule";
  }

  let message = isDangerous ? `dangerous ${noun}` : noun;

  // Article selection
  const first = message.trim().charAt(0).toLowerCase();
  const article = ["a", "e", "i", "o", "u"].includes(first) ? "An" : "A";

  if (isConditional) {
    message += " for some violations";
  }

  return `${article} ${message}.`;
});
</script>

<template>
  <div>
    <header class="AppBlogPostHeader">
      <h1>{{ title }} <Badge type="info" :text="category" /></h1>
    </header>

    <div class="rule-meta">
      <Alert v-if="frontmatter.default" class="default-on" type="success">
        <span class="emoji">✅</span> {{ defaultMessage }}
      </Alert>

      <Alert v-if="frontmatter.type_aware" type="info">
        <span class="emoji">💭</span> This rule requires
        <a href="/docs/guide/usage/linter/type-aware" target="_blank" rel="noreferrer"
          >type information</a
        >.
      </Alert>

      <Alert v-if="hasFixMessage" class="fix" type="info">
        <span class="emoji">{{ fixEmoji }}</span> {{ fixMessage }}
      </Alert>
    </div>
  </div>
</template>
