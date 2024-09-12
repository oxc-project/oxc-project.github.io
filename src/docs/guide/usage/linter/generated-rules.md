# Rules

The progress of all rule implementations is tracked [here](https://github.com/oxc-project/oxc/issues/481).

- Total number of rules: 428
- Rules turned on by default: 94

## Correctness (167):

Code that is outright wrong or useless.
| Rule name | Source | Default | Fixable? |
| --------------------------------------------------- | ---------- | ------- | -------- |
| [for-direction](/docs/guide/usage/linter/rules/eslint/for-direction.html) | eslint | ✅ | ⚠️🛠️️ |
| [no-async-promise-executor](/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html) | eslint | ✅ | |
| [no-caller](/docs/guide/usage/linter/rules/eslint/no-caller.html) | eslint | ✅ | |
| [no-class-assign](/docs/guide/usage/linter/rules/eslint/no-class-assign.html) | eslint | ✅ | |
| [no-compare-neg-zero](/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html) | eslint | ✅ | 🛠️💡 |
| [no-cond-assign](/docs/guide/usage/linter/rules/eslint/no-cond-assign.html) | eslint | ✅ | |
| [no-const-assign](/docs/guide/usage/linter/rules/eslint/no-const-assign.html) | eslint | ✅ | |
| [no-constant-binary-expression](/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html) | eslint | ✅ | |
| [no-constant-condition](/docs/guide/usage/linter/rules/eslint/no-constant-condition.html) | eslint | ✅ | |
| [no-control-regex](/docs/guide/usage/linter/rules/eslint/no-control-regex.html) | eslint | ✅ | |
| [no-debugger](/docs/guide/usage/linter/rules/eslint/no-debugger.html) | eslint | ✅ | 🛠️ |
| [no-delete-var](/docs/guide/usage/linter/rules/eslint/no-delete-var.html) | eslint | ✅ | |
| [no-dupe-class-members](/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html) | eslint | ✅ | |
| [no-dupe-else-if](/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html) | eslint | ✅ | |
| [no-dupe-keys](/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html) | eslint | ✅ | |
| [no-duplicate-case](/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html) | eslint | ✅ | |
| [no-empty-character-class](/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html) | eslint | ✅ | |
| [no-empty-pattern](/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html) | eslint | ✅ | |
| [no-empty-static-block](/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html) | eslint | ✅ | |
| [no-ex-assign](/docs/guide/usage/linter/rules/eslint/no-ex-assign.html) | eslint | ✅ | |
| [no-extra-boolean-cast](/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html) | eslint | ✅ | 🚧 |
| [no-func-assign](/docs/guide/usage/linter/rules/eslint/no-func-assign.html) | eslint | ✅ | |
| [no-global-assign](/docs/guide/usage/linter/rules/eslint/no-global-assign.html) | eslint | ✅ | |
| [no-import-assign](/docs/guide/usage/linter/rules/eslint/no-import-assign.html) | eslint | ✅ | |
| [no-invalid-regexp](/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html) | eslint | ✅ | |
| [no-irregular-whitespace](/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html) | eslint | ✅ | |
| [no-loss-of-precision](/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html) | eslint | ✅ | |
| [no-new-native-nonconstructor](/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html) | eslint | ✅ | |
| [no-nonoctal-decimal-escape](/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html) | eslint | ✅ | 🚧 |
| [no-obj-calls](/docs/guide/usage/linter/rules/eslint/no-obj-calls.html) | eslint | ✅ | |
| [no-self-assign](/docs/guide/usage/linter/rules/eslint/no-self-assign.html) | eslint | ✅ | |
| [no-setter-return](/docs/guide/usage/linter/rules/eslint/no-setter-return.html) | eslint | ✅ | |
| [no-shadow-restricted-names](/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html) | eslint | ✅ | |
| [no-sparse-arrays](/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html) | eslint | ✅ | |
| [no-this-before-super](/docs/guide/usage/linter/rules/eslint/no-this-before-super.html) | eslint | ✅ | |
| [no-unsafe-finally](/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html) | eslint | ✅ | |
| [no-unsafe-negation](/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html) | eslint | ✅ | 🛠️ |
| [no-unused-labels](/docs/guide/usage/linter/rules/eslint/no-unused-labels.html) | eslint | ✅ | 🛠️ |
| [no-unused-private-class-members](/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html) | eslint | ✅ | |
| [no-unused-vars](/docs/guide/usage/linter/rules/eslint/no-unused-vars.html) | eslint | ✅ | ⚠️💡 |
| [no-useless-catch](/docs/guide/usage/linter/rules/eslint/no-useless-catch.html) | eslint | ✅ | |
| [no-useless-escape](/docs/guide/usage/linter/rules/eslint/no-useless-escape.html) | eslint | ✅ | 🛠️ |
| [no-useless-rename](/docs/guide/usage/linter/rules/eslint/no-useless-rename.html) | eslint | ✅ | |
| [no-with](/docs/guide/usage/linter/rules/eslint/no-with.html) | eslint | ✅ | |
| [require-yield](/docs/guide/usage/linter/rules/eslint/require-yield.html) | eslint | ✅ | |
| [use-isnan](/docs/guide/usage/linter/rules/eslint/use-isnan.html) | eslint | ✅ | 🛠️ |
| [valid-typeof](/docs/guide/usage/linter/rules/eslint/valid-typeof.html) | eslint | ✅ | 🛠️ |
| [default](/docs/guide/usage/linter/rules/import/default.html) | import | | |
| [named](/docs/guide/usage/linter/rules/import/named.html) | import | | |
| [namespace](/docs/guide/usage/linter/rules/import/namespace.html) | import | | |
| [expect-expect](/docs/guide/usage/linter/rules/jest/expect-expect.html) | jest | | |
| [no-conditional-expect](/docs/guide/usage/linter/rules/jest/no-conditional-expect.html) | jest | | |
| [no-disabled-tests](/docs/guide/usage/linter/rules/jest/no-disabled-tests.html) | jest | | |
| [no-export](/docs/guide/usage/linter/rules/jest/no-export.html) | jest | | |
| [no-focused-tests](/docs/guide/usage/linter/rules/jest/no-focused-tests.html) | jest | | 🛠️ |
| [no-standalone-expect](/docs/guide/usage/linter/rules/jest/no-standalone-expect.html) | jest | | |
| [require-to-throw-message](/docs/guide/usage/linter/rules/jest/require-to-throw-message.html) | jest | | |
| [valid-describe-callback](/docs/guide/usage/linter/rules/jest/valid-describe-callback.html) | jest | | |
| [valid-expect](/docs/guide/usage/linter/rules/jest/valid-expect.html) | jest | | |
| [valid-title](/docs/guide/usage/linter/rules/jest/valid-title.html) | jest | | |
| [check-property-names](/docs/guide/usage/linter/rules/jsdoc/check-property-names.html) | jsdoc | | |
| [check-tag-names](/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html) | jsdoc | | |
| [implements-on-classes](/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html) | jsdoc | | |
| [no-defaults](/docs/guide/usage/linter/rules/jsdoc/no-defaults.html) | jsdoc | | |
| [require-property](/docs/guide/usage/linter/rules/jsdoc/require-property.html) | jsdoc | | |
| [require-property-description](/docs/guide/usage/linter/rules/jsdoc/require-property-description.html) | jsdoc | | |
| [require-property-name](/docs/guide/usage/linter/rules/jsdoc/require-property-name.html) | jsdoc | | |
| [require-property-type](/docs/guide/usage/linter/rules/jsdoc/require-property-type.html) | jsdoc | | |
| [require-yields](/docs/guide/usage/linter/rules/jsdoc/require-yields.html) | jsdoc | | |
| [alt-text](/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html) | jsx_a11y | | |
| [anchor-has-content](/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html) | jsx_a11y | | 💡 |
| [anchor-is-valid](/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html) | jsx_a11y | | |
| [aria-activedescendant-has-tabindex](/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html) | jsx_a11y | | |
| [aria-props](/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html) | jsx_a11y | | 🛠️ |
| [aria-role](/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html) | jsx_a11y | | |
| [aria-unsupported-elements](/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html) | jsx_a11y | | 🛠️ |
| [autocomplete-valid](/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html) | jsx_a11y | | |
| [click-events-have-key-events](/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html) | jsx_a11y | | |
| [heading-has-content](/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html) | jsx_a11y | | |
| [html-has-lang](/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html) | jsx_a11y | | |
| [iframe-has-title](/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html) | jsx_a11y | | |
| [img-redundant-alt](/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html) | jsx_a11y | | |
| [label-has-associated-control](/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html) | jsx_a11y | | |
| [lang](/docs/guide/usage/linter/rules/jsx_a11y/lang.html) | jsx_a11y | | |
| [media-has-caption](/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html) | jsx_a11y | | |
| [mouse-events-have-key-events](/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html) | jsx_a11y | | |
| [no-access-key](/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html) | jsx_a11y | | |
| [no-aria-hidden-on-focusable](/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html) | jsx_a11y | | 🛠️ |
| [no-autofocus](/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html) | jsx_a11y | | 🛠️ |
| [no-distracting-elements](/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html) | jsx_a11y | | |
| [no-redundant-roles](/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html) | jsx_a11y | | 🛠️ |
| [prefer-tag-over-role](/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html) | jsx_a11y | | |
| [role-has-required-aria-props](/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html) | jsx_a11y | | |
| [role-supports-aria-props](/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html) | jsx_a11y | | |
| [scope](/docs/guide/usage/linter/rules/jsx_a11y/scope.html) | jsx_a11y | | 🛠️ |
| [tabindex-no-positive](/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html) | jsx_a11y | | 🚧 |
| [google-font-display](/docs/guide/usage/linter/rules/nextjs/google-font-display.html) | nextjs | | |
| [google-font-preconnect](/docs/guide/usage/linter/rules/nextjs/google-font-preconnect.html) | nextjs | | |
| [inline-script-id](/docs/guide/usage/linter/rules/nextjs/inline-script-id.html) | nextjs | | |
| [next-script-for-ga](/docs/guide/usage/linter/rules/nextjs/next-script-for-ga.html) | nextjs | | |
| [no-assign-module-variable](/docs/guide/usage/linter/rules/nextjs/no-assign-module-variable.html) | nextjs | | |
| [no-async-client-component](/docs/guide/usage/linter/rules/nextjs/no-async-client-component.html) | nextjs | | |
| [no-before-interactive-script-outside-document](/docs/guide/usage/linter/rules/nextjs/no-before-interactive-script-outside-document.html) | nextjs | | |
| [no-css-tags](/docs/guide/usage/linter/rules/nextjs/no-css-tags.html) | nextjs | | |
| [no-document-import-in-page](/docs/guide/usage/linter/rules/nextjs/no-document-import-in-page.html) | nextjs | | |
| [no-duplicate-head](/docs/guide/usage/linter/rules/nextjs/no-duplicate-head.html) | nextjs | | |
| [no-head-element](/docs/guide/usage/linter/rules/nextjs/no-head-element.html) | nextjs | | |
| [no-head-import-in-document](/docs/guide/usage/linter/rules/nextjs/no-head-import-in-document.html) | nextjs | | |
| [no-img-element](/docs/guide/usage/linter/rules/nextjs/no-img-element.html) | nextjs | | |
| [no-page-custom-font](/docs/guide/usage/linter/rules/nextjs/no-page-custom-font.html) | nextjs | | |
| [no-script-component-in-head](/docs/guide/usage/linter/rules/nextjs/no-script-component-in-head.html) | nextjs | | |
| [no-styled-jsx-in-document](/docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.html) | nextjs | | |
| [no-sync-scripts](/docs/guide/usage/linter/rules/nextjs/no-sync-scripts.html) | nextjs | | |
| [no-title-in-document-head](/docs/guide/usage/linter/rules/nextjs/no-title-in-document-head.html) | nextjs | | |
| [no-typos](/docs/guide/usage/linter/rules/nextjs/no-typos.html) | nextjs | | 🚧 |
| [no-unwanted-polyfillio](/docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.html) | nextjs | | |
| [bad-array-method-on-arguments](/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html) | oxc | ✅ | |
| [bad-char-at-comparison](/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html) | oxc | ✅ | |
| [bad-comparison-sequence](/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html) | oxc | ✅ | |
| [bad-min-max-func](/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html) | oxc | ✅ | |
| [bad-object-literal-comparison](/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html) | oxc | ✅ | |
| [bad-replace-all-arg](/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html) | oxc | ✅ | |
| [const-comparisons](/docs/guide/usage/linter/rules/oxc/const-comparisons.html) | oxc | ✅ | |
| [double-comparisons](/docs/guide/usage/linter/rules/oxc/double-comparisons.html) | oxc | ✅ | 🛠️ |
| [erasing-op](/docs/guide/usage/linter/rules/oxc/erasing-op.html) | oxc | ✅ | 💡 |
| [missing-throw](/docs/guide/usage/linter/rules/oxc/missing-throw.html) | oxc | ✅ | 💡 |
| [number-arg-out-of-range](/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html) | oxc | ✅ | |
| [only-used-in-recursion](/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html) | oxc | ✅ | ⚠️🛠️️ |
| [uninvoked-array-callback](/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html) | oxc | ✅ | |
| [no-new-statics](/docs/guide/usage/linter/rules/promise/no-new-statics.html) | promise | | 🛠️ |
| [valid-params](/docs/guide/usage/linter/rules/promise/valid-params.html) | promise | | |
| [jsx-key](/docs/guide/usage/linter/rules/react/jsx-key.html) | react | ✅ | |
| [jsx-no-duplicate-props](/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html) | react | ✅ | |
| [jsx-no-target-blank](/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html) | react | ✅ | |
| [jsx-no-undef](/docs/guide/usage/linter/rules/react/jsx-no-undef.html) | react | ✅ | |
| [jsx-props-no-spread-multi](/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html) | react | ✅ | 🛠️ |
| [no-children-prop](/docs/guide/usage/linter/rules/react/no-children-prop.html) | react | ✅ | |
| [no-direct-mutation-state](/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html) | react | ✅ | |
| [no-find-dom-node](/docs/guide/usage/linter/rules/react/no-find-dom-node.html) | react | ✅ | |
| [no-is-mounted](/docs/guide/usage/linter/rules/react/no-is-mounted.html) | react | ✅ | |
| [no-render-return-value](/docs/guide/usage/linter/rules/react/no-render-return-value.html) | react | ✅ | |
| [no-string-refs](/docs/guide/usage/linter/rules/react/no-string-refs.html) | react | ✅ | |
| [void-dom-elements-no-children](/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html) | react | ✅ | |
| [no-extra-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html) | typescript | ✅ | |
| [no-misused-new](/docs/guide/usage/linter/rules/typescript/no-misused-new.html) | typescript | ✅ | |
| [no-non-null-asserted-optional-chain](/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html) | typescript | ✅ | |
| [no-this-alias](/docs/guide/usage/linter/rules/typescript/no-this-alias.html) | typescript | ✅ | |
| [no-unsafe-declaration-merging](/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html) | typescript | ✅ | |
| [no-useless-empty-export](/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html) | typescript | ✅ | 🛠️ |
| [no-wrapper-object-types](/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html) | typescript | ✅ | 🛠️ |
| [prefer-as-const](/docs/guide/usage/linter/rules/typescript/prefer-as-const.html) | typescript | ✅ | 🛠️ |
| [triple-slash-reference](/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html) | typescript | ✅ | |
| [no-await-in-promise-methods](/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html) | unicorn | ✅ | |
| [no-document-cookie](/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html) | unicorn | ✅ | |
| [no-empty-file](/docs/guide/usage/linter/rules/unicorn/no-empty-file.html) | unicorn | ✅ | |
| [no-invalid-remove-event-listener](/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html) | unicorn | ✅ | |
| [no-new-array](/docs/guide/usage/linter/rules/unicorn/no-new-array.html) | unicorn | ✅ | 🚧 |
| [no-single-promise-in-promise-methods](/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html) | unicorn | ✅ | 🛠️ |
| [no-thenable](/docs/guide/usage/linter/rules/unicorn/no-thenable.html) | unicorn | ✅ | |
| [no-unnecessary-await](/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html) | unicorn | ✅ | 🛠️ |
| [no-useless-fallback-in-spread](/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html) | unicorn | ✅ | 🛠️ |
| [no-useless-length-check](/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html) | unicorn | ✅ | 🚧 |
| [no-useless-spread](/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html) | unicorn | ✅ | 🛠️ |
| [prefer-set-size](/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html) | unicorn | ✅ | 🛠️ |
| [prefer-string-starts-ends-with](/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html) | unicorn | ✅ | 🛠️ |
| [no-conditional-tests](/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html) | vitest | | |
| [require-local-test-context-for-concurrent-snapshots](/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html) | vitest | | 🚧 |

## Perf (6):

Code that can be written to run faster.
| Rule name | Source | Default | Fixable? |
| --------------------------- | ---------- | ------- | -------- |
| [no-await-in-loop](/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html) | eslint | | |
| [no-accumulating-spread](/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html) | oxc | | |
| [jsx-no-jsx-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.html) | react_perf | | |
| [jsx-no-new-array-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-array-as-prop.html) | react_perf | | |
| [jsx-no-new-function-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-function-as-prop.html) | react_perf | | |
| [jsx-no-new-object-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html) | react_perf | | |

## Restriction (58):

Lints which prevent the use of language and library features. Must not be enabled as a whole, should be considered on a case-by-case basis before enabling.
| Rule name | Source | Default | Fixable? |
| --------------------------------------- | ---------- | ------- | -------- |
| [default-case](/docs/guide/usage/linter/rules/eslint/default-case.html) | eslint | | |
| [no-alert](/docs/guide/usage/linter/rules/eslint/no-alert.html) | eslint | | |
| [no-bitwise](/docs/guide/usage/linter/rules/eslint/no-bitwise.html) | eslint | | |
| [no-console](/docs/guide/usage/linter/rules/eslint/no-console.html) | eslint | | |
| [no-div-regex](/docs/guide/usage/linter/rules/eslint/no-div-regex.html) | eslint | | 🛠️ |
| [no-empty](/docs/guide/usage/linter/rules/eslint/no-empty.html) | eslint | | 💡 |
| [no-empty-function](/docs/guide/usage/linter/rules/eslint/no-empty-function.html) | eslint | | |
| [no-eq-null](/docs/guide/usage/linter/rules/eslint/no-eq-null.html) | eslint | | ⚠️🛠️️ |
| [no-eval](/docs/guide/usage/linter/rules/eslint/no-eval.html) | eslint | | |
| [no-iterator](/docs/guide/usage/linter/rules/eslint/no-iterator.html) | eslint | | |
| [no-plusplus](/docs/guide/usage/linter/rules/eslint/no-plusplus.html) | eslint | | 🚧 |
| [no-proto](/docs/guide/usage/linter/rules/eslint/no-proto.html) | eslint | | |
| [no-regex-spaces](/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html) | eslint | | |
| [no-restricted-globals](/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html) | eslint | | |
| [no-undefined](/docs/guide/usage/linter/rules/eslint/no-undefined.html) | eslint | | |
| [no-unsafe-optional-chaining](/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html) | eslint | | |
| [no-var](/docs/guide/usage/linter/rules/eslint/no-var.html) | eslint | | 🛠️ |
| [no-void](/docs/guide/usage/linter/rules/eslint/no-void.html) | eslint | | |
| [unicode-bom](/docs/guide/usage/linter/rules/eslint/unicode-bom.html) | eslint | | 🛠️ |
| [no-amd](/docs/guide/usage/linter/rules/import/no-amd.html) | import | | |
| [no-cycle](/docs/guide/usage/linter/rules/import/no-cycle.html) | import | | |
| [no-default-export](/docs/guide/usage/linter/rules/import/no-default-export.html) | import | | |
| [no-dynamic-require](/docs/guide/usage/linter/rules/import/no-dynamic-require.html) | import | | |
| [no-webpack-loader-syntax](/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html) | import | | |
| [check-access](/docs/guide/usage/linter/rules/jsdoc/check-access.html) | jsdoc | | |
| [empty-tags](/docs/guide/usage/linter/rules/jsdoc/empty-tags.html) | jsdoc | | |
| [bad-bitwise-operator](/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html) | oxc | | |
| [no-async-await](/docs/guide/usage/linter/rules/oxc/no-async-await.html) | oxc | | |
| [no-barrel-file](/docs/guide/usage/linter/rules/oxc/no-barrel-file.html) | oxc | | |
| [no-const-enum](/docs/guide/usage/linter/rules/oxc/no-const-enum.html) | oxc | | 🛠️ |
| [no-optional-chaining](/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html) | oxc | | |
| [no-rest-spread-properties](/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html) | oxc | | |
| [avoid-new](/docs/guide/usage/linter/rules/promise/avoid-new.html) | promise | | |
| [catch-or-return](/docs/guide/usage/linter/rules/promise/catch-or-return.html) | promise | | |
| [spec-only](/docs/guide/usage/linter/rules/promise/spec-only.html) | promise | | |
| [button-has-type](/docs/guide/usage/linter/rules/react/button-has-type.html) | react | | |
| [no-danger](/docs/guide/usage/linter/rules/react/no-danger.html) | react | | |
| [no-unknown-property](/docs/guide/usage/linter/rules/react/no-unknown-property.html) | react | | 🚧 |
| [explicit-function-return-type](/docs/guide/usage/linter/rules/typescript/explicit-function-return-type.html) | typescript | | |
| [no-dynamic-delete](/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html) | typescript | | |
| [no-explicit-any](/docs/guide/usage/linter/rules/typescript/no-explicit-any.html) | typescript | | 🛠️ |
| [no-import-type-side-effects](/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html) | typescript | | 🛠️ |
| [no-namespace](/docs/guide/usage/linter/rules/typescript/no-namespace.html) | typescript | | |
| [no-non-null-asserted-nullish-coalescing](/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html) | typescript | | |
| [no-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html) | typescript | | |
| [no-var-requires](/docs/guide/usage/linter/rules/typescript/no-var-requires.html) | typescript | | |
| [prefer-literal-enum-member](/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html) | typescript | | |
| [no-abusive-eslint-disable](/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html) | unicorn | | |
| [no-anonymous-default-export](/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html) | unicorn | | |
| [no-array-for-each](/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html) | unicorn | | 🚧 |
| [no-array-reduce](/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html) | unicorn | | |
| [no-length-as-slice-end](/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html) | unicorn | | 🛠️ |
| [no-magic-array-flat-depth](/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html) | unicorn | | |
| [no-nested-ternary](/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html) | unicorn | | 🛠️ |
| [no-process-exit](/docs/guide/usage/linter/rules/unicorn/no-process-exit.html) | unicorn | | |
| [prefer-modern-math-apis](/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html) | unicorn | | 🚧 |
| [prefer-node-protocol](/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html) | unicorn | | 🛠️ |
| [prefer-number-properties](/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html) | unicorn | | 🚧 |

## Suspicious (18):

code that is most likely wrong or useless.
| Rule name | Source | Default | Fixable? |
| ------------------------------- | ---------- | ------- | -------- |
| [no-new](/docs/guide/usage/linter/rules/eslint/no-new.html) | eslint | | |
| [no-useless-concat](/docs/guide/usage/linter/rules/eslint/no-useless-concat.html) | eslint | | |
| [no-useless-constructor](/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html) | eslint | | 🛠️ |
| [no-duplicates](/docs/guide/usage/linter/rules/import/no-duplicates.html) | import | | |
| [no-named-as-default](/docs/guide/usage/linter/rules/import/no-named-as-default.html) | import | | |
| [no-named-as-default-member](/docs/guide/usage/linter/rules/import/no-named-as-default-member.html) | import | | |
| [no-self-import](/docs/guide/usage/linter/rules/import/no-self-import.html) | import | | |
| [no-commented-out-tests](/docs/guide/usage/linter/rules/jest/no-commented-out-tests.html) | jest | | |
| [approx-constant](/docs/guide/usage/linter/rules/oxc/approx-constant.html) | oxc | | |
| [misrefactored-assign-op](/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html) | oxc | | 🚧 |
| [no-async-endpoint-handlers](/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html) | oxc | | |
| [jsx-no-comment-textnodes](/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html) | react | | |
| [react-in-jsx-scope](/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html) | react | | |
| [no-confusing-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html) | typescript | | 🚧 |
| [no-extraneous-class](/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html) | typescript | | |
| [no-unnecessary-type-constraint](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html) | typescript | | |
| [consistent-function-scoping](/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html) | unicorn | | 🚧 |
| [prefer-add-event-listener](/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html) | unicorn | | 🚧 |

## Pedantic (70):

Lints which are rather strict or have occasional false positives.
| Rule name | Source | Default | Fixable? |
| --------------------------------------- | ---------- | ------- | -------- |
| [array-callback-return](/docs/guide/usage/linter/rules/eslint/array-callback-return.html) | eslint | | |
| [eqeqeq](/docs/guide/usage/linter/rules/eslint/eqeqeq.html) | eslint | | 🛠️ |
| [max-classes-per-file](/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html) | eslint | | |
| [max-lines](/docs/guide/usage/linter/rules/eslint/max-lines.html) | eslint | | |
| [no-array-constructor](/docs/guide/usage/linter/rules/eslint/no-array-constructor.html) | eslint | | |
| [no-case-declarations](/docs/guide/usage/linter/rules/eslint/no-case-declarations.html) | eslint | | |
| [no-constructor-return](/docs/guide/usage/linter/rules/eslint/no-constructor-return.html) | eslint | | |
| [no-fallthrough](/docs/guide/usage/linter/rules/eslint/no-fallthrough.html) | eslint | | 🚧 |
| [no-inner-declarations](/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html) | eslint | | |
| [no-new-wrappers](/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html) | eslint | | |
| [no-prototype-builtins](/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html) | eslint | | |
| [no-redeclare](/docs/guide/usage/linter/rules/eslint/no-redeclare.html) | eslint | | |
| [no-self-compare](/docs/guide/usage/linter/rules/eslint/no-self-compare.html) | eslint | | |
| [radix](/docs/guide/usage/linter/rules/eslint/radix.html) | eslint | | |
| [require-await](/docs/guide/usage/linter/rules/eslint/require-await.html) | eslint | | |
| [sort-keys](/docs/guide/usage/linter/rules/eslint/sort-keys.html) | eslint | | 🚧 |
| [sort-vars](/docs/guide/usage/linter/rules/eslint/sort-vars.html) | eslint | | 🚧 |
| [symbol-description](/docs/guide/usage/linter/rules/eslint/symbol-description.html) | eslint | | |
| [max-dependencies](/docs/guide/usage/linter/rules/import/max-dependencies.html) | import | | |
| [no-conditional-in-test](/docs/guide/usage/linter/rules/jest/no-conditional-in-test.html) | jest | | |
| [require-param](/docs/guide/usage/linter/rules/jsdoc/require-param.html) | jsdoc | | |
| [require-param-description](/docs/guide/usage/linter/rules/jsdoc/require-param-description.html) | jsdoc | | |
| [require-param-name](/docs/guide/usage/linter/rules/jsdoc/require-param-name.html) | jsdoc | | |
| [require-param-type](/docs/guide/usage/linter/rules/jsdoc/require-param-type.html) | jsdoc | | |
| [require-returns](/docs/guide/usage/linter/rules/jsdoc/require-returns.html) | jsdoc | | |
| [require-returns-description](/docs/guide/usage/linter/rules/jsdoc/require-returns-description.html) | jsdoc | | |
| [require-returns-type](/docs/guide/usage/linter/rules/jsdoc/require-returns-type.html) | jsdoc | | |
| [checked-requires-onchange-or-readonly](/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html) | react | | |
| [jsx-no-useless-fragment](/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html) | react | | |
| [no-unescaped-entities](/docs/guide/usage/linter/rules/react/no-unescaped-entities.html) | react | | |
| [ban-ts-comment](/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html) | typescript | | 🛠️ |
| [ban-types](/docs/guide/usage/linter/rules/typescript/ban-types.html) | typescript | | 🚧 |
| [no-duplicate-enum-values](/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html) | typescript | | |
| [prefer-enum-initializers](/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html) | typescript | | 🚧 |
| [prefer-ts-expect-error](/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html) | typescript | | 🛠️ |
| [escape-case](/docs/guide/usage/linter/rules/unicorn/escape-case.html) | unicorn | | 🛠️ |
| [explicit-length-check](/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html) | unicorn | | 🛠️ |
| [new-for-builtins](/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html) | unicorn | | |
| [no-hex-escape](/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html) | unicorn | | 🛠️ |
| [no-instanceof-array](/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html) | unicorn | | 🛠️ |
| [no-lonely-if](/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html) | unicorn | | |
| [no-negated-condition](/docs/guide/usage/linter/rules/unicorn/no-negated-condition.html) | unicorn | | 🚧 |
| [no-negation-in-equality-check](/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html) | unicorn | | 🚧 |
| [no-new-buffer](/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html) | unicorn | | 🚧 |
| [no-object-as-default-parameter](/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html) | unicorn | | |
| [no-static-only-class](/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html) | unicorn | | |
| [no-this-assignment](/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html) | unicorn | | |
| [no-typeof-undefined](/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html) | unicorn | | 🚧 |
| [no-unreadable-iife](/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html) | unicorn | | |
| [no-useless-promise-resolve-reject](/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html) | unicorn | | 🛠️ |
| [no-useless-switch-case](/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html) | unicorn | | 🚧 |
| [no-useless-undefined](/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html) | unicorn | | 🛠️ |
| [prefer-array-flat](/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html) | unicorn | | 🛠️ |
| [prefer-array-some](/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html) | unicorn | | 🛠️ |
| [prefer-blob-reading-methods](/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html) | unicorn | | 🚧 |
| [prefer-code-point](/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html) | unicorn | | 🛠️ |
| [prefer-date-now](/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html) | unicorn | | 🛠️ |
| [prefer-dom-node-append](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html) | unicorn | | 🛠️ |
| [prefer-dom-node-dataset](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html) | unicorn | | 🚧 |
| [prefer-dom-node-remove](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html) | unicorn | | |
| [prefer-event-target](/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html) | unicorn | | |
| [prefer-math-trunc](/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html) | unicorn | | 🚧 |
| [prefer-native-coercion-functions](/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html) | unicorn | | 🚧 |
| [prefer-prototype-methods](/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html) | unicorn | | 🛠️ |
| [prefer-query-selector](/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html) | unicorn | | 🛠️ |
| [prefer-regexp-test](/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html) | unicorn | | 🛠️ |
| [prefer-string-replace-all](/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html) | unicorn | | 🛠️ |
| [prefer-string-slice](/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html) | unicorn | | 🛠️ |
| [prefer-type-error](/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html) | unicorn | | 🛠️ |
| [require-number-to-fixed-digits-argument](/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html) | unicorn | | 🛠️ |

## Style (99):

Code that should be written in a more idiomatic way.
| Rule name | Source | Default | Fixable? |
| ------------------------------------ | ---------- | ------- | -------- |
| [default-case-last](/docs/guide/usage/linter/rules/eslint/default-case-last.html) | eslint | | |
| [default-param-last](/docs/guide/usage/linter/rules/eslint/default-param-last.html) | eslint | | |
| [func-names](/docs/guide/usage/linter/rules/eslint/func-names.html) | eslint | | 🛠️💡 |
| [guard-for-in](/docs/guide/usage/linter/rules/eslint/guard-for-in.html) | eslint | | |
| [max-params](/docs/guide/usage/linter/rules/eslint/max-params.html) | eslint | | |
| [no-continue](/docs/guide/usage/linter/rules/eslint/no-continue.html) | eslint | | |
| [no-label-var](/docs/guide/usage/linter/rules/eslint/no-label-var.html) | eslint | | |
| [no-magic-numbers](/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html) | eslint | | 🚧 |
| [no-multi-str](/docs/guide/usage/linter/rules/eslint/no-multi-str.html) | eslint | | |
| [no-new-func](/docs/guide/usage/linter/rules/eslint/no-new-func.html) | eslint | | |
| [no-script-url](/docs/guide/usage/linter/rules/eslint/no-script-url.html) | eslint | | |
| [no-template-curly-in-string](/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html) | eslint | | |
| [no-ternary](/docs/guide/usage/linter/rules/eslint/no-ternary.html) | eslint | | |
| [prefer-exponentiation-operator](/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html) | eslint | | |
| [prefer-numeric-literals](/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html) | eslint | | 🛠️ |
| [sort-imports](/docs/guide/usage/linter/rules/eslint/sort-imports.html) | eslint | | 🛠️ |
| [consistent-test-it](/docs/guide/usage/linter/rules/jest/consistent-test-it.html) | jest | | 🛠️ |
| [max-expects](/docs/guide/usage/linter/rules/jest/max-expects.html) | jest | | |
| [max-nested-describe](/docs/guide/usage/linter/rules/jest/max-nested-describe.html) | jest | | |
| [no-alias-methods](/docs/guide/usage/linter/rules/jest/no-alias-methods.html) | jest | | 🛠️ |
| [no-confusing-set-timeout](/docs/guide/usage/linter/rules/jest/no-confusing-set-timeout.html) | jest | | |
| [no-deprecated-functions](/docs/guide/usage/linter/rules/jest/no-deprecated-functions.html) | jest | | 🛠️ |
| [no-done-callback](/docs/guide/usage/linter/rules/jest/no-done-callback.html) | jest | | |
| [no-duplicate-hooks](/docs/guide/usage/linter/rules/jest/no-duplicate-hooks.html) | jest | | |
| [no-hooks](/docs/guide/usage/linter/rules/jest/no-hooks.html) | jest | | |
| [no-identical-title](/docs/guide/usage/linter/rules/jest/no-identical-title.html) | jest | | |
| [no-interpolation-in-snapshots](/docs/guide/usage/linter/rules/jest/no-interpolation-in-snapshots.html) | jest | | |
| [no-jasmine-globals](/docs/guide/usage/linter/rules/jest/no-jasmine-globals.html) | jest | | 🛠️ |
| [no-large-snapshots](/docs/guide/usage/linter/rules/jest/no-large-snapshots.html) | jest | | |
| [no-mocks-import](/docs/guide/usage/linter/rules/jest/no-mocks-import.html) | jest | | |
| [no-restricted-jest-methods](/docs/guide/usage/linter/rules/jest/no-restricted-jest-methods.html) | jest | | |
| [no-restricted-matchers](/docs/guide/usage/linter/rules/jest/no-restricted-matchers.html) | jest | | |
| [no-test-prefixes](/docs/guide/usage/linter/rules/jest/no-test-prefixes.html) | jest | | 🛠️ |
| [no-test-return-statement](/docs/guide/usage/linter/rules/jest/no-test-return-statement.html) | jest | | |
| [no-untyped-mock-factory](/docs/guide/usage/linter/rules/jest/no-untyped-mock-factory.html) | jest | | 🛠️ |
| [prefer-called-with](/docs/guide/usage/linter/rules/jest/prefer-called-with.html) | jest | | |
| [prefer-comparison-matcher](/docs/guide/usage/linter/rules/jest/prefer-comparison-matcher.html) | jest | | 🛠️ |
| [prefer-equality-matcher](/docs/guide/usage/linter/rules/jest/prefer-equality-matcher.html) | jest | | |
| [prefer-expect-resolves](/docs/guide/usage/linter/rules/jest/prefer-expect-resolves.html) | jest | | 🛠️ |
| [prefer-hooks-in-order](/docs/guide/usage/linter/rules/jest/prefer-hooks-in-order.html) | jest | | |
| [prefer-hooks-on-top](/docs/guide/usage/linter/rules/jest/prefer-hooks-on-top.html) | jest | | |
| [prefer-jest-mocked](/docs/guide/usage/linter/rules/jest/prefer-jest-mocked.html) | jest | | 🛠️ |
| [prefer-lowercase-title](/docs/guide/usage/linter/rules/jest/prefer-lowercase-title.html) | jest | | 🛠️ |
| [prefer-mock-promise-shorthand](/docs/guide/usage/linter/rules/jest/prefer-mock-promise-shorthand.html) | jest | | 🛠️ |
| [prefer-spy-on](/docs/guide/usage/linter/rules/jest/prefer-spy-on.html) | jest | | 🛠️ |
| [prefer-strict-equal](/docs/guide/usage/linter/rules/jest/prefer-strict-equal.html) | jest | | 🛠️ |
| [prefer-to-be](/docs/guide/usage/linter/rules/jest/prefer-to-be.html) | jest | | 🛠️ |
| [prefer-to-contain](/docs/guide/usage/linter/rules/jest/prefer-to-contain.html) | jest | | |
| [prefer-to-have-length](/docs/guide/usage/linter/rules/jest/prefer-to-have-length.html) | jest | | 🛠️ |
| [prefer-todo](/docs/guide/usage/linter/rules/jest/prefer-todo.html) | jest | | 🛠️ |
| [require-hook](/docs/guide/usage/linter/rules/jest/require-hook.html) | jest | | |
| [require-top-level-describe](/docs/guide/usage/linter/rules/jest/require-top-level-describe.html) | jest | | |
| [no-exports-assign](/docs/guide/usage/linter/rules/node/no-exports-assign.html) | node | | 🛠️ |
| [param-names](/docs/guide/usage/linter/rules/promise/param-names.html) | promise | | |
| [prefer-await-to-then](/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html) | promise | | |
| [jsx-boolean-value](/docs/guide/usage/linter/rules/react/jsx-boolean-value.html) | react | | 🛠️ |
| [jsx-curly-brace-presence](/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html) | react | | |
| [no-set-state](/docs/guide/usage/linter/rules/react/no-set-state.html) | react | | |
| [prefer-es6-class](/docs/guide/usage/linter/rules/react/prefer-es6-class.html) | react | | |
| [self-closing-comp](/docs/guide/usage/linter/rules/react/self-closing-comp.html) | react | | 🚧 |
| [adjacent-overload-signatures](/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html) | typescript | | |
| [array-type](/docs/guide/usage/linter/rules/typescript/array-type.html) | typescript | | 🛠️ |
| [ban-tslint-comment](/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html) | typescript | | 🛠️ |
| [consistent-indexed-object-style](/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html) | typescript | | 🛠️ |
| [consistent-type-definitions](/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html) | typescript | | 🛠️ |
| [no-empty-interface](/docs/guide/usage/linter/rules/typescript/no-empty-interface.html) | typescript | | |
| [prefer-for-of](/docs/guide/usage/linter/rules/typescript/prefer-for-of.html) | typescript | | 🚧 |
| [prefer-function-type](/docs/guide/usage/linter/rules/typescript/prefer-function-type.html) | typescript | | 🛠️ |
| [prefer-namespace-keyword](/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html) | typescript | | 🛠️ |
| [catch-error-name](/docs/guide/usage/linter/rules/unicorn/catch-error-name.html) | unicorn | | 🚧 |
| [empty-brace-spaces](/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html) | unicorn | | 🛠️ |
| [error-message](/docs/guide/usage/linter/rules/unicorn/error-message.html) | unicorn | | |
| [filename-case](/docs/guide/usage/linter/rules/unicorn/filename-case.html) | unicorn | | |
| [no-await-expression-member](/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html) | unicorn | | |
| [no-console-spaces](/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html) | unicorn | | 🛠️ |
| [no-null](/docs/guide/usage/linter/rules/unicorn/no-null.html) | unicorn | | 🛠️ |
| [no-unreadable-array-destructuring](/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html) | unicorn | | |
| [no-zero-fractions](/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html) | unicorn | | 🛠️ |
| [number-literal-case](/docs/guide/usage/linter/rules/unicorn/number-literal-case.html) | unicorn | | 🛠️ |
| [numeric-separators-style](/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html) | unicorn | | 🛠️ |
| [prefer-array-flat-map](/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html) | unicorn | | 🛠️ |
| [prefer-dom-node-text-content](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html) | unicorn | | 🛠️ |
| [prefer-includes](/docs/guide/usage/linter/rules/unicorn/prefer-includes.html) | unicorn | | 🚧 |
| [prefer-logical-operator-over-ternary](/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html) | unicorn | | 🚧 |
| [prefer-modern-dom-apis](/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html) | unicorn | | 🚧 |
| [prefer-optional-catch-binding](/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html) | unicorn | | 🛠️ |
| [prefer-reflect-apply](/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html) | unicorn | | |
| [prefer-spread](/docs/guide/usage/linter/rules/unicorn/prefer-spread.html) | unicorn | | 🛠️ |
| [prefer-string-trim-start-end](/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html) | unicorn | | 🛠️ |
| [prefer-structured-clone](/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html) | unicorn | | 🚧 |
| [require-array-join-separator](/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html) | unicorn | | 🛠️ |
| [switch-case-braces](/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html) | unicorn | | 🛠️ |
| [text-encoding-identifier-case](/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html) | unicorn | | 🛠️ |
| [throw-new-error](/docs/guide/usage/linter/rules/unicorn/throw-new-error.html) | unicorn | | 🛠️ |
| [no-import-node-test](/docs/guide/usage/linter/rules/vitest/no-import-node-test.html) | vitest | | 🛠️ |
| [prefer-each](/docs/guide/usage/linter/rules/vitest/prefer-each.html) | vitest | | |
| [prefer-to-be-falsy](/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html) | vitest | | 🛠️ |
| [prefer-to-be-object](/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html) | vitest | | 🛠️ |
| [prefer-to-be-truthy](/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html) | vitest | | 🛠️ |

## Nursery (10):

New lints that are still under development.
| Rule name | Source | Default | Fixable? |
| --------------------------------- | ------------ | ------- | -------- |
| [constructor-super](/docs/guide/usage/linter/rules/eslint/constructor-super.html) | eslint | | |
| [getter-return](/docs/guide/usage/linter/rules/eslint/getter-return.html) | eslint | | |
| [no-undef](/docs/guide/usage/linter/rules/eslint/no-undef.html) | eslint | | |
| [no-unreachable](/docs/guide/usage/linter/rules/eslint/no-unreachable.html) | eslint | | |
| [export](/docs/guide/usage/linter/rules/import/export.html) | import | | |
| [no-return-in-finally](/docs/guide/usage/linter/rules/promise/no-return-in-finally.html) | promise | | |
| [require-render-return](/docs/guide/usage/linter/rules/react/require-render-return.html) | react | | |
| [rules-of-hooks](/docs/guide/usage/linter/rules/react/rules-of-hooks.html) | react | | |
| [no-side-effects-in-initialization](/docs/guide/usage/linter/rules/tree_shaking/no-side-effects-in-initialization.html) | tree_shaking | | |
| [consistent-type-imports](/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html) | typescript | | 🛠️ |
