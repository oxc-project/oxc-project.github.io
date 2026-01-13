<script setup lang="ts">
import { computed, ref } from "vue";
// Import the generated rules data
import rules from "../../../rules.json" with { type: "json" };

// Filters
const categoryFilter = ref("all");
const scopeFilter = ref("all");
const typeAwareOnly = ref(false);
const hasFixOnly = ref(false);

// Sorting
// name_asc | name_desc | fix | scope | category
const sortBy = ref("name_asc");

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
  if (!fix || fix === "none" || fix === "pending") {
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
    if (categoryFilter.value !== "all" && r.category !== categoryFilter.value) return false;
    if (scopeFilter.value !== "all" && r.scope !== scopeFilter.value) return false;
    if (typeAwareOnly.value && !r.type_aware) return false;
    if (hasFixOnly.value && !hasFix(r.fix)) return false;
    return true;
  });

  // Sort the filtered results
  return filtered.slice().sort((a, b) => {
    switch (sortBy.value) {
      case "name_asc":
        return a.value.localeCompare(b.value);
      case "name_desc":
        return b.value.localeCompare(a.value);
      case "fix": {
        const af = hasFix(a.fix) ? 1 : 0;
        const bf = hasFix(b.fix) ? 1 : 0;
        if (af !== bf) return bf - af; // put has-fix first
        return a.value.localeCompare(b.value);
      }
      case "scope": {
        const s = a.scope.localeCompare(b.scope);
        return s !== 0 ? s : a.value.localeCompare(b.value);
      }
      case "category": {
        const c = a.category.localeCompare(b.category);
        return c !== 0 ? c : a.value.localeCompare(b.value);
      }
      default:
        return 0;
    }
  });
});
</script>

<template>
  <div class="vp-doc">
    <div style="margin-top: 1rem; margin-bottom: 1rem">
      <strong>Total rules: {{ filteredAndSorted.length }}</strong>
    </div>

    <div class="rules-legend" style="margin-bottom: 1rem">
      <strong>Legend for 'Fixable?' column:</strong>
      <div>
        <p>🛠️: auto-fix available</p>
        <p>💡: suggestion available</p>
        <p>⚠️🛠️: dangerous auto-fix</p>
        <p>⚠️💡: dangerous suggestion</p>
        <p>🚧: possible but not implemented</p>
      </div>
    </div>

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
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      <div>
        <label for="scopeFilter"><strong>Plugin (scope)</strong></label>
        <select id="scopeFilter" v-model="scopeFilter">
          <option value="all">All</option>
          <option v-for="s in scopes" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <div>
        <label for="sortBy"><strong>Sort</strong></label>
        <select id="sortBy" v-model="sortBy">
          <option value="name_asc">Name (A → Z)</option>
          <option value="name_desc">Name (Z → A)</option>
          <option value="fix">Fix availability</option>
          <option value="scope">Plugin</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div>
        <label style="display: flex; gap: 0.5rem; align-items: center">
          <input type="checkbox" v-model="typeAwareOnly" />
          Type-aware only
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
          <th>Rule name</th>
          <th>Source</th>
          <th>Category</th>
          <th>Default</th>
          <th>Fixable?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in filteredAndSorted" :key="`${r.scope}:${r.value}`">
          <td>
            <a :href="r.docs_url">{{ r.value }}</a>
          </td>
          <td>{{ r.scope }}</td>
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
  </div>
</template>

<style scoped>
select {
  width: 100%;
}
</style>
