---
editLink: false
---

<script setup>
import RulesTable from '@components/RulesTable.vue';
import rules from '@data/rules.json' with { type: 'json' };

const hasFix = (fix) => {
  if (fix === "none" || fix === "pending") {
    return false;
  }
  return true;
}

const rulesCount = rules.length;
const defaultCount = rules.filter((r) => r.default).length;
const fixableCount = rules.filter((r) => hasFix(r.fix)).length;
</script>

# Rules

The progress of all rule implementations is tracked [here](https://github.com/oxc-project/oxc/issues/481).

- Total number of rules: {{ rulesCount }}
- Rules turned on by default: {{ defaultCount }}
- Rules with fixes available: {{ fixableCount }}

::: details Legend for 'Fixable?' column

- 🛠️: an auto-fix is available for this rule
- 💡: a suggestion is available for this rule
- ⚠️🛠️: a dangerous auto-fix is available for this rule
- ⚠️💡: a dangerous suggestion is available for this rule
- 🚧: an auto-fix or suggestion is possible, but currently not implemented

:::

<RulesTable />
