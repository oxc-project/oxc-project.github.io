<script setup lang="ts">
import { computed, ref } from "vue";
// Import the generated rules data
import rules from "@data/rules.json" with { type: "json" };

// Filters
const categoryFilter = ref("all");
const scopeFilter = ref("all");
const includeTypeAware = ref(true);
const hasFixOnly = ref(false);

// Sorting
const sortColumn = ref<"name" | "source" | "category" | "default" | "fix">("name");
const sortDirection = ref<"asc" | "desc">("asc");

const toggleSort = (column: "name" | "source" | "category" | "default" | "fix") => {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = column;
    sortDirection.value = "asc";
  }
};

// Derive available filter options
const categories = computed(() => {
  const set = new Set(rules.map((r) => r.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
});

const scopes = computed(() => {
  const set = new Set(rules.map((r) => r.scope));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
});

// Helpers
const hasFix = (fix: string) => {
  if (fix === "none" || fix === "pending") {
    return false;
  }
  return true;
};

const fixIcons = (fix: string) => {
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
    case "none":
    default:
      return "";
  }
};

// Apply filters and sorting to all rules
const filteredAndSorted = computed(() => {
  let filtered = rules.filter((r) => {
    if (categoryFilter.value !== "all" && r.category !== categoryFilter.value) {
      return false;
    }

    if (scopeFilter.value !== "all" && r.scope !== scopeFilter.value) {
      return false;
    }

    if (!includeTypeAware.value && r.type_aware) {
      return false;
    }

    if (hasFixOnly.value && !hasFix(r.fix)) {
      return false;
    }

    return true;
  });

  // Sort the filtered results
  return filtered.slice().sort((a, b) => {
    let comparison = 0;

    switch (sortColumn.value) {
      case "name":
        comparison = a.value.localeCompare(b.value);
        break;
      case "source": {
        comparison = a.scope.localeCompare(b.scope);
        if (comparison === 0) comparison = a.value.localeCompare(b.value);
        break;
      }
      case "category": {
        comparison = a.category.localeCompare(b.category);
        if (comparison === 0) comparison = a.value.localeCompare(b.value);
        break;
      }
      case "default": {
        const aDefault = a.default ? 1 : 0;
        const bDefault = b.default ? 1 : 0;
        comparison = bDefault - aDefault; // default rules first
        if (comparison === 0) comparison = a.value.localeCompare(b.value);
        break;
      }
      case "fix": {
        // sort by whether it has a fix or not,
        // and then by fix type alphabetically.
        const af = a.fix;
        const bf = b.fix;

        if (hasFix(af) && !hasFix(bf)) {
          comparison = 1;
        } else if (!hasFix(af) && hasFix(bf)) {
          comparison = -1;
        } else {
          comparison = af.localeCompare(bf);
        }

        break;
      }
    }

    return sortDirection.value === "asc" ? comparison : -comparison;
  });
});

// Map of plugin values to display names, e.g. jsx_a11y -> jsx-a11y
// This is only really needed for plugins that have names with underscores.
const pluginDisplayNames: Record<string, string> = {
  jsx_a11y: "jsx-a11y",
  react_perf: "react-perf",
};
</script>

<template>
  <div
    class="rules-controls"
    style="
      margin: 1rem 0;
      display: grid;
      gap: 0.75rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      align-items: end;
    "
  >
    <div>
      <label for="categoryFilter"><strong>Category</strong></label>
      <select id="categoryFilter" v-model="categoryFilter">
        <option value="all">All</option>
        <!-- Display categories with the first letter capitalized. -->
        <option v-for="c in categories" :key="c" :value="c">
          {{ c.charAt(0).toUpperCase() + c.slice(1) }}
        </option>
      </select>
    </div>

    <div>
      <label for="scopeFilter"><strong>Source/Plugin</strong></label>
      <select id="scopeFilter" v-model="scopeFilter">
        <option value="all">All</option>
        <option v-for="s in scopes" :key="s" :value="s">{{ pluginDisplayNames[s] || s }}</option>
      </select>
    </div>

    <div>
      <label style="display: flex; gap: 0.5rem; align-items: center">
        <input type="checkbox" v-model="includeTypeAware" />
        Include type-aware rules
      </label>
      <label style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.25rem">
        <input type="checkbox" v-model="hasFixOnly" />
        Has fix available
      </label>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th
          @click="toggleSort('name')"
          @keydown.enter="toggleSort('name')"
          @keydown.space.prevent="toggleSort('name')"
          tabindex="0"
          class="sortable"
        >
          Rule name
          <span v-if="sortColumn === 'name'" class="sort-indicator">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
        <th
          @click="toggleSort('source')"
          @keydown.enter="toggleSort('source')"
          @keydown.space.prevent="toggleSort('source')"
          tabindex="0"
          class="sortable"
        >
          Source
          <span v-if="sortColumn === 'source'" class="sort-indicator">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
        <th
          @click="toggleSort('category')"
          @keydown.enter="toggleSort('category')"
          @keydown.space.prevent="toggleSort('category')"
          tabindex="0"
          class="sortable"
        >
          Category
          <span v-if="sortColumn === 'category'" class="sort-indicator">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
        <th
          @click="toggleSort('default')"
          @keydown.enter="toggleSort('default')"
          @keydown.space.prevent="toggleSort('default')"
          tabindex="0"
          class="sortable"
        >
          Default
          <span v-if="sortColumn === 'default'" class="sort-indicator">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
        <th
          @click="toggleSort('fix')"
          @keydown.enter="toggleSort('fix')"
          @keydown.space.prevent="toggleSort('fix')"
          tabindex="0"
          class="sortable"
        >
          Fixable?
          <span v-if="sortColumn === 'fix'" class="sort-indicator">
            {{ sortDirection === "asc" ? "▲" : "▼" }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in filteredAndSorted" :key="`${r.scope}:${r.value}`">
        <td>
          <a :href="`/docs/guide/usage/linter/rules/${r.scope}/${r.value}`">{{ r.value }}</a>
        </td>
        <td>{{ pluginDisplayNames[r.scope] || r.scope }}</td>
        <td>{{ r.category }}</td>
        <td v-if="r.default">✅</td>
        <td v-else></td>
        <td>{{ fixIcons(r.fix) }}</td>
      </tr>
      <tr v-if="filteredAndSorted.length === 0">
        <td colspan="5" style="opacity: 0.7">No rules match current filters.</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.9rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

select:hover {
  border-color: var(--vp-c-brand-1);
}

select:focus {
  outline: none;
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

input[type="checkbox"]:focus {
  outline: 1px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.sortable {
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}

.sortable:hover {
  background-color: var(--vp-c-bg-soft);
}

.sortable:focus {
  outline: 1px solid var(--vp-c-brand-1);
  outline-offset: -1px;
  background-color: var(--vp-c-bg-soft);
}

.sort-indicator {
  margin-left: 0.25rem;
  font-size: 0.75em;
}
</style>
