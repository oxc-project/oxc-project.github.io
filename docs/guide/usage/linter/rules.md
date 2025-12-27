---
url: /docs/guide/usage/linter/rules.md
---

# Rules

The progress of all rule implementations is tracked [here](https://github.com/oxc-project/oxc/issues/481).

* Total number of rules: 640
* Rules turned on by default: 104

**Legend for 'Fixable?' column:**

* 🛠️: an auto-fix is available for this rule
* 💡: a suggestion is available for this rule
* ⚠️🛠️: a dangerous auto-fix is available for this rule
* ⚠️💡: a dangerous suggestion is available for this rule
* 🚧: an auto-fix or suggestion is possible, but currently not implemented

## Correctness (199):

Code that is outright wrong or useless.
| Rule name | Source | Default | Fixable? |
| --------------------------------------------------- | ---------- | ------- | -------- |
| [constructor-super](/docs/guide/usage/linter/rules/eslint/constructor-super.html) | eslint | ✅ | |
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
| [no-empty-static-block](/docs/guide/usage/linter/rules/eslint/no-empty-static-block.html) | eslint | ✅ | 💡 |
| [no-eval](/docs/guide/usage/linter/rules/eslint/no-eval.html) | eslint | ✅ | |
| [no-ex-assign](/docs/guide/usage/linter/rules/eslint/no-ex-assign.html) | eslint | ✅ | |
| [no-extra-boolean-cast](/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html) | eslint | ✅ | 🛠️💡 |
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
| [no-unassigned-vars](/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html) | eslint | ✅ | |
| [no-unsafe-finally](/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html) | eslint | ✅ | |
| [no-unsafe-negation](/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html) | eslint | ✅ | 🛠️ |
| [no-unsafe-optional-chaining](/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html) | eslint | ✅ | |
| [no-unused-expressions](/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html) | eslint | ✅ | |
| [no-unused-labels](/docs/guide/usage/linter/rules/eslint/no-unused-labels.html) | eslint | ✅ | 🛠️ |
| [no-unused-private-class-members](/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html) | eslint | ✅ | |
| [no-unused-vars](/docs/guide/usage/linter/rules/eslint/no-unused-vars.html) | eslint | ✅ | ⚠️💡 |
| [no-useless-backreference](/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html) | eslint | ✅ | |
| [no-useless-catch](/docs/guide/usage/linter/rules/eslint/no-useless-catch.html) | eslint | ✅ | |
| [no-useless-escape](/docs/guide/usage/linter/rules/eslint/no-useless-escape.html) | eslint | ✅ | 🛠️ |
| [no-useless-rename](/docs/guide/usage/linter/rules/eslint/no-useless-rename.html) | eslint | ✅ | |
| [no-with](/docs/guide/usage/linter/rules/eslint/no-with.html) | eslint | ✅ | |
| [require-yield](/docs/guide/usage/linter/rules/eslint/require-yield.html) | eslint | ✅ | |
| [use-isnan](/docs/guide/usage/linter/rules/eslint/use-isnan.html) | eslint | ✅ | 🛠️ |
| [valid-typeof](/docs/guide/usage/linter/rules/eslint/valid-typeof.html) | eslint | ✅ | 🛠️ |
| [default](/docs/guide/usage/linter/rules/import/default.html) | import | | |
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
| [valid-title](/docs/guide/usage/linter/rules/jest/valid-title.html) | jest | | 🛠️ |
| [check-property-names](/docs/guide/usage/linter/rules/jsdoc/check-property-names.html) | jsdoc | | |
| [check-tag-names](/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html) | jsdoc | | |
| [implements-on-classes](/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html) | jsdoc | | |
| [no-defaults](/docs/guide/usage/linter/rules/jsdoc/no-defaults.html) | jsdoc | | |
| [require-property](/docs/guide/usage/linter/rules/jsdoc/require-property.html) | jsdoc | | |
| [require-property-description](/docs/guide/usage/linter/rules/jsdoc/require-property-description.html) | jsdoc | | |
| [require-property-name](/docs/guide/usage/linter/rules/jsdoc/require-property-name.html) | jsdoc | | |
| [require-property-type](/docs/guide/usage/linter/rules/jsdoc/require-property-type.html) | jsdoc | | |
| [require-yields](/docs/guide/usage/linter/rules/jsdoc/require-yields.html) | jsdoc | | |
| [alt-text](/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html) | jsx\_a11y | | |
| [anchor-has-content](/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html) | jsx\_a11y | | 💡 |
| [anchor-is-valid](/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html) | jsx\_a11y | | |
| [aria-activedescendant-has-tabindex](/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html) | jsx\_a11y | | |
| [aria-props](/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html) | jsx\_a11y | | 🛠️ |
| [aria-role](/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html) | jsx\_a11y | | |
| [aria-unsupported-elements](/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html) | jsx\_a11y | | 🛠️ |
| [autocomplete-valid](/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html) | jsx\_a11y | | |
| [click-events-have-key-events](/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html) | jsx\_a11y | | |
| [heading-has-content](/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html) | jsx\_a11y | | |
| [html-has-lang](/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html) | jsx\_a11y | | |
| [iframe-has-title](/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html) | jsx\_a11y | | |
| [img-redundant-alt](/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html) | jsx\_a11y | | |
| [label-has-associated-control](/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html) | jsx\_a11y | | |
| [lang](/docs/guide/usage/linter/rules/jsx_a11y/lang.html) | jsx\_a11y | | |
| [media-has-caption](/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html) | jsx\_a11y | | |
| [mouse-events-have-key-events](/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html) | jsx\_a11y | | |
| [no-access-key](/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html) | jsx\_a11y | | 💡 |
| [no-aria-hidden-on-focusable](/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html) | jsx\_a11y | | 🛠️ |
| [no-autofocus](/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html) | jsx\_a11y | | 🛠️ |
| [no-distracting-elements](/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html) | jsx\_a11y | | |
| [no-noninteractive-tabindex](/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html) | jsx\_a11y | | |
| [no-redundant-roles](/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html) | jsx\_a11y | | 🛠️ |
| [prefer-tag-over-role](/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html) | jsx\_a11y | | |
| [role-has-required-aria-props](/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html) | jsx\_a11y | | |
| [role-supports-aria-props](/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html) | jsx\_a11y | | |
| [scope](/docs/guide/usage/linter/rules/jsx_a11y/scope.html) | jsx\_a11y | | 🛠️ |
| [tabindex-no-positive](/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html) | jsx\_a11y | | ⚠️💡 |
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
| [no-html-link-for-pages](/docs/guide/usage/linter/rules/nextjs/no-html-link-for-pages.html) | nextjs | | |
| [no-img-element](/docs/guide/usage/linter/rules/nextjs/no-img-element.html) | nextjs | | 🚧 |
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
| [erasing-op](/docs/guide/usage/linter/rules/oxc/erasing-op.html) | oxc | ✅ | ⚠️🛠️️ |
| [missing-throw](/docs/guide/usage/linter/rules/oxc/missing-throw.html) | oxc | ✅ | 💡 |
| [number-arg-out-of-range](/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html) | oxc | ✅ | |
| [only-used-in-recursion](/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html) | oxc | ✅ | ⚠️🛠️️ |
| [uninvoked-array-callback](/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html) | oxc | ✅ | |
| [no-callback-in-promise](/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html) | promise | | |
| [no-new-statics](/docs/guide/usage/linter/rules/promise/no-new-statics.html) | promise | | 🛠️ |
| [valid-params](/docs/guide/usage/linter/rules/promise/valid-params.html) | promise | | |
| [exhaustive-deps](/docs/guide/usage/linter/rules/react/exhaustive-deps.html) | react | | ⚠️🛠️️💡 |
| [forward-ref-uses-ref](/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html) | react | | 💡 |
| [jsx-key](/docs/guide/usage/linter/rules/react/jsx-key.html) | react | | |
| [jsx-no-duplicate-props](/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html) | react | | |
| [jsx-no-undef](/docs/guide/usage/linter/rules/react/jsx-no-undef.html) | react | | |
| [jsx-props-no-spread-multi](/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html) | react | | 🛠️ |
| [no-children-prop](/docs/guide/usage/linter/rules/react/no-children-prop.html) | react | | |
| [no-danger-with-children](/docs/guide/usage/linter/rules/react/no-danger-with-children.html) | react | | |
| [no-direct-mutation-state](/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html) | react | | |
| [no-find-dom-node](/docs/guide/usage/linter/rules/react/no-find-dom-node.html) | react | | |
| [no-is-mounted](/docs/guide/usage/linter/rules/react/no-is-mounted.html) | react | | |
| [no-render-return-value](/docs/guide/usage/linter/rules/react/no-render-return-value.html) | react | | |
| [no-string-refs](/docs/guide/usage/linter/rules/react/no-string-refs.html) | react | | |
| [no-unsafe](/docs/guide/usage/linter/rules/react/no-unsafe.html) | react | | |
| [void-dom-elements-no-children](/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html) | react | | |
| [await-thenable](/docs/guide/usage/linter/rules/typescript/await-thenable.html) | typescript | ✅ | 🚧 |
| [no-array-delete](/docs/guide/usage/linter/rules/typescript/no-array-delete.html) | typescript | ✅ | 🚧 |
| [no-base-to-string](/docs/guide/usage/linter/rules/typescript/no-base-to-string.html) | typescript | ✅ | 🚧 |
| [no-duplicate-enum-values](/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html) | typescript | ✅ | |
| [no-duplicate-type-constituents](/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.html) | typescript | ✅ | 🚧 |
| [no-extra-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html) | typescript | ✅ | |
| [no-floating-promises](/docs/guide/usage/linter/rules/typescript/no-floating-promises.html) | typescript | ✅ | 🚧 |
| [no-for-in-array](/docs/guide/usage/linter/rules/typescript/no-for-in-array.html) | typescript | ✅ | 🚧 |
| [no-implied-eval](/docs/guide/usage/linter/rules/typescript/no-implied-eval.html) | typescript | ✅ | 🚧 |
| [no-meaningless-void-operator](/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator.html) | typescript | ✅ | 🚧 |
| [no-misused-new](/docs/guide/usage/linter/rules/typescript/no-misused-new.html) | typescript | ✅ | |
| [no-misused-spread](/docs/guide/usage/linter/rules/typescript/no-misused-spread.html) | typescript | ✅ | 🚧 |
| [no-non-null-asserted-optional-chain](/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html) | typescript | ✅ | 💡 |
| [no-redundant-type-constituents](/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents.html) | typescript | ✅ | 🚧 |
| [no-this-alias](/docs/guide/usage/linter/rules/typescript/no-this-alias.html) | typescript | ✅ | |
| [no-unnecessary-parameter-property-assignment](/docs/guide/usage/linter/rules/typescript/no-unnecessary-parameter-property-assignment.html) | typescript | ✅ | 💡 |
| [no-unsafe-declaration-merging](/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html) | typescript | ✅ | |
| [no-unsafe-unary-minus](/docs/guide/usage/linter/rules/typescript/no-unsafe-unary-minus.html) | typescript | ✅ | 🚧 |
| [no-useless-empty-export](/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html) | typescript | ✅ | 🛠️ |
| [no-wrapper-object-types](/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html) | typescript | ✅ | 🛠️ |
| [prefer-as-const](/docs/guide/usage/linter/rules/typescript/prefer-as-const.html) | typescript | ✅ | 🛠️ |
| [require-array-sort-compare](/docs/guide/usage/linter/rules/typescript/require-array-sort-compare.html) | typescript | ✅ | 🚧 |
| [restrict-template-expressions](/docs/guide/usage/linter/rules/typescript/restrict-template-expressions.html) | typescript | ✅ | 🚧 |
| [triple-slash-reference](/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html) | typescript | ✅ | |
| [unbound-method](/docs/guide/usage/linter/rules/typescript/unbound-method.html) | typescript | ✅ | 🚧 |
| [no-await-in-promise-methods](/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html) | unicorn | ✅ | |
| [no-empty-file](/docs/guide/usage/linter/rules/unicorn/no-empty-file.html) | unicorn | ✅ | |
| [no-invalid-fetch-options](/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html) | unicorn | ✅ | |
| [no-invalid-remove-event-listener](/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html) | unicorn | ✅ | |
| [no-new-array](/docs/guide/usage/linter/rules/unicorn/no-new-array.html) | unicorn | ✅ | 🚧 |
| [no-single-promise-in-promise-methods](/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html) | unicorn | ✅ | 🛠️ |
| [no-thenable](/docs/guide/usage/linter/rules/unicorn/no-thenable.html) | unicorn | ✅ | |
| [no-unnecessary-await](/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html) | unicorn | ✅ | 🛠️ |
| [no-useless-fallback-in-spread](/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html) | unicorn | ✅ | 🛠️ |
| [no-useless-length-check](/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html) | unicorn | ✅ | 🚧 |
| [no-useless-spread](/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html) | unicorn | ✅ | ⚠️🛠️️ |
| [prefer-set-size](/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html) | unicorn | ✅ | 🛠️ |
| [prefer-string-starts-ends-with](/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html) | unicorn | ✅ | 🛠️ |
| [no-conditional-tests](/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html) | vitest | | |
| [require-local-test-context-for-concurrent-snapshots](/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html) | vitest | | 🚧 |
| [no-deprecated-destroyed-lifecycle](/docs/guide/usage/linter/rules/vue/no-deprecated-destroyed-lifecycle.html) | vue | | 🛠️ |
| [no-export-in-script-setup](/docs/guide/usage/linter/rules/vue/no-export-in-script-setup.html) | vue | | |
| [prefer-import-from-vue](/docs/guide/usage/linter/rules/vue/prefer-import-from-vue.html) | vue | | 🛠️ |
| [valid-define-emits](/docs/guide/usage/linter/rules/vue/valid-define-emits.html) | vue | | 🚧 |
| [valid-define-props](/docs/guide/usage/linter/rules/vue/valid-define-props.html) | vue | | 🚧 |

## Perf (12):

Code that can be written to run faster.
| Rule name | Source | Default | Fixable? |
| --------------------------- | ---------- | ------- | -------- |
| [no-await-in-loop](/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html) | eslint | | |
| [no-useless-call](/docs/guide/usage/linter/rules/eslint/no-useless-call.html) | eslint | | |
| [no-accumulating-spread](/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html) | oxc | | |
| [no-map-spread](/docs/guide/usage/linter/rules/oxc/no-map-spread.html) | oxc | | 🛠️💡 |
| [no-array-index-key](/docs/guide/usage/linter/rules/react/no-array-index-key.html) | react | | |
| [jsx-no-jsx-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.html) | react\_perf | | |
| [jsx-no-new-array-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-array-as-prop.html) | react\_perf | | |
| [jsx-no-new-function-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-function-as-prop.html) | react\_perf | | |
| [jsx-no-new-object-as-prop](/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html) | react\_perf | | |
| [prefer-array-find](/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html) | unicorn | | 🚧 |
| [prefer-array-flat-map](/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html) | unicorn | | 🛠️ |
| [prefer-set-has](/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html) | unicorn | | ⚠️🛠️️ |

## Restriction (80):

Lints which prevent the use of language and library features. Must not be enabled as a whole, should be considered on a case-by-case basis before enabling.
| Rule name | Source | Default | Fixable? |
| --------------------------------------- | ---------- | ------- | -------- |
| [class-methods-use-this](/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html) | eslint | | |
| [default-case](/docs/guide/usage/linter/rules/eslint/default-case.html) | eslint | | |
| [no-alert](/docs/guide/usage/linter/rules/eslint/no-alert.html) | eslint | | |
| [no-bitwise](/docs/guide/usage/linter/rules/eslint/no-bitwise.html) | eslint | | |
| [no-console](/docs/guide/usage/linter/rules/eslint/no-console.html) | eslint | | 💡 |
| [no-div-regex](/docs/guide/usage/linter/rules/eslint/no-div-regex.html) | eslint | | 🛠️ |
| [no-empty](/docs/guide/usage/linter/rules/eslint/no-empty.html) | eslint | | 💡 |
| [no-empty-function](/docs/guide/usage/linter/rules/eslint/no-empty-function.html) | eslint | | |
| [no-eq-null](/docs/guide/usage/linter/rules/eslint/no-eq-null.html) | eslint | | ⚠️🛠️️ |
| [no-iterator](/docs/guide/usage/linter/rules/eslint/no-iterator.html) | eslint | | 💡 |
| [no-param-reassign](/docs/guide/usage/linter/rules/eslint/no-param-reassign.html) | eslint | | |
| [no-plusplus](/docs/guide/usage/linter/rules/eslint/no-plusplus.html) | eslint | | 💡 |
| [no-proto](/docs/guide/usage/linter/rules/eslint/no-proto.html) | eslint | | 🚧 |
| [no-regex-spaces](/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html) | eslint | | 🛠️ |
| [no-restricted-globals](/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html) | eslint | | |
| [no-restricted-imports](/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html) | eslint | | |
| [no-sequences](/docs/guide/usage/linter/rules/eslint/no-sequences.html) | eslint | | |
| [no-undefined](/docs/guide/usage/linter/rules/eslint/no-undefined.html) | eslint | | |
| [no-var](/docs/guide/usage/linter/rules/eslint/no-var.html) | eslint | | 🛠️ |
| [no-void](/docs/guide/usage/linter/rules/eslint/no-void.html) | eslint | | 💡 |
| [unicode-bom](/docs/guide/usage/linter/rules/eslint/unicode-bom.html) | eslint | | 🛠️ |
| [extensions](/docs/guide/usage/linter/rules/import/extensions.html) | import | | |
| [no-amd](/docs/guide/usage/linter/rules/import/no-amd.html) | import | | |
| [no-commonjs](/docs/guide/usage/linter/rules/import/no-commonjs.html) | import | | |
| [no-cycle](/docs/guide/usage/linter/rules/import/no-cycle.html) | import | | |
| [no-default-export](/docs/guide/usage/linter/rules/import/no-default-export.html) | import | | |
| [no-dynamic-require](/docs/guide/usage/linter/rules/import/no-dynamic-require.html) | import | | |
| [no-webpack-loader-syntax](/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html) | import | | |
| [unambiguous](/docs/guide/usage/linter/rules/import/unambiguous.html) | import | | |
| [check-access](/docs/guide/usage/linter/rules/jsdoc/check-access.html) | jsdoc | | |
| [empty-tags](/docs/guide/usage/linter/rules/jsdoc/empty-tags.html) | jsdoc | | |
| [anchor-ambiguous-text](/docs/guide/usage/linter/rules/jsx_a11y/anchor-ambiguous-text.html) | jsx\_a11y | | |
| [no-new-require](/docs/guide/usage/linter/rules/node/no-new-require.html) | node | | |
| [no-process-env](/docs/guide/usage/linter/rules/node/no-process-env.html) | node | | |
| [bad-bitwise-operator](/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html) | oxc | | 💡 |
| [no-async-await](/docs/guide/usage/linter/rules/oxc/no-async-await.html) | oxc | | |
| [no-barrel-file](/docs/guide/usage/linter/rules/oxc/no-barrel-file.html) | oxc | | |
| [no-const-enum](/docs/guide/usage/linter/rules/oxc/no-const-enum.html) | oxc | | 🛠️ |
| [no-optional-chaining](/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html) | oxc | | |
| [no-rest-spread-properties](/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html) | oxc | | |
| [catch-or-return](/docs/guide/usage/linter/rules/promise/catch-or-return.html) | promise | | |
| [spec-only](/docs/guide/usage/linter/rules/promise/spec-only.html) | promise | | |
| [button-has-type](/docs/guide/usage/linter/rules/react/button-has-type.html) | react | | |
| [forbid-dom-props](/docs/guide/usage/linter/rules/react/forbid-dom-props.html) | react | | |
| [forbid-elements](/docs/guide/usage/linter/rules/react/forbid-elements.html) | react | | |
| [jsx-filename-extension](/docs/guide/usage/linter/rules/react/jsx-filename-extension.html) | react | | 🚧 |
| [no-danger](/docs/guide/usage/linter/rules/react/no-danger.html) | react | | |
| [no-unknown-property](/docs/guide/usage/linter/rules/react/no-unknown-property.html) | react | | 🚧 |
| [only-export-components](/docs/guide/usage/linter/rules/react/only-export-components.html) | react | | |
| [explicit-function-return-type](/docs/guide/usage/linter/rules/typescript/explicit-function-return-type.html) | typescript | | |
| [explicit-module-boundary-types](/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types.html) | typescript | | |
| [no-dynamic-delete](/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html) | typescript | | |
| [no-empty-object-type](/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html) | typescript | | |
| [no-explicit-any](/docs/guide/usage/linter/rules/typescript/no-explicit-any.html) | typescript | | 🛠️ |
| [no-import-type-side-effects](/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html) | typescript | | 🛠️ |
| [no-namespace](/docs/guide/usage/linter/rules/typescript/no-namespace.html) | typescript | | |
| [no-non-null-asserted-nullish-coalescing](/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html) | typescript | | |
| [no-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html) | typescript | | |
| [no-require-imports](/docs/guide/usage/linter/rules/typescript/no-require-imports.html) | typescript | | 🚧 |
| [no-restricted-types](/docs/guide/usage/linter/rules/typescript/no-restricted-types.html) | typescript | | 🛠️💡 |
| [no-var-requires](/docs/guide/usage/linter/rules/typescript/no-var-requires.html) | typescript | | |
| [non-nullable-type-assertion-style](/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style.html) | typescript | | 🚧 |
| [prefer-literal-enum-member](/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html) | typescript | | |
| [promise-function-async](/docs/guide/usage/linter/rules/typescript/promise-function-async.html) | typescript | | 🚧 |
| [use-unknown-in-catch-callback-variable](/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable.html) | typescript | | 🚧 |
| [no-abusive-eslint-disable](/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html) | unicorn | | |
| [no-anonymous-default-export](/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html) | unicorn | | |
| [no-array-for-each](/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html) | unicorn | | 🚧 |
| [no-array-reduce](/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html) | unicorn | | |
| [no-document-cookie](/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html) | unicorn | | |
| [no-length-as-slice-end](/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html) | unicorn | | 🛠️ |
| [no-magic-array-flat-depth](/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html) | unicorn | | |
| [no-process-exit](/docs/guide/usage/linter/rules/unicorn/no-process-exit.html) | unicorn | | 🚧 |
| [no-useless-error-capture-stack-trace](/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html) | unicorn | | 🚧 |
| [prefer-modern-math-apis](/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html) | unicorn | | 🚧 |
| [prefer-node-protocol](/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html) | unicorn | | 🛠️ |
| [prefer-number-properties](/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html) | unicorn | | ⚠️🛠️️ |
| [max-props](/docs/guide/usage/linter/rules/vue/max-props.html) | vue | | |
| [no-import-compiler-macros](/docs/guide/usage/linter/rules/vue/no-import-compiler-macros.html) | vue | | ⚠️🛠️️ |
| [no-multiple-slot-args](/docs/guide/usage/linter/rules/vue/no-multiple-slot-args.html) | vue | | 🚧 |

## Suspicious (48):

code that is most likely wrong or useless.
| Rule name | Source | Default | Fixable? |
| -------------------------------------- | ---------- | ------- | -------- |
| [block-scoped-var](/docs/guide/usage/linter/rules/eslint/block-scoped-var.html) | eslint | | |
| [no-extend-native](/docs/guide/usage/linter/rules/eslint/no-extend-native.html) | eslint | | |
| [no-extra-bind](/docs/guide/usage/linter/rules/eslint/no-extra-bind.html) | eslint | | 🚧 |
| [no-new](/docs/guide/usage/linter/rules/eslint/no-new.html) | eslint | | |
| [no-unexpected-multiline](/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html) | eslint | | ⚠️🛠️️ |
| [no-unneeded-ternary](/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html) | eslint | | ⚠️🛠️️ |
| [no-useless-concat](/docs/guide/usage/linter/rules/eslint/no-useless-concat.html) | eslint | | |
| [no-useless-constructor](/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html) | eslint | | 🛠️ |
| [preserve-caught-error](/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html) | eslint | | 🛠️ |
| [no-absolute-path](/docs/guide/usage/linter/rules/import/no-absolute-path.html) | import | | 🚧 |
| [no-empty-named-blocks](/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html) | import | | 🛠️ |
| [no-named-as-default](/docs/guide/usage/linter/rules/import/no-named-as-default.html) | import | | |
| [no-named-as-default-member](/docs/guide/usage/linter/rules/import/no-named-as-default-member.html) | import | | |
| [no-self-import](/docs/guide/usage/linter/rules/import/no-self-import.html) | import | | |
| [no-unassigned-import](/docs/guide/usage/linter/rules/import/no-unassigned-import.html) | import | | |
| [no-commented-out-tests](/docs/guide/usage/linter/rules/jest/no-commented-out-tests.html) | jest | | |
| [approx-constant](/docs/guide/usage/linter/rules/oxc/approx-constant.html) | oxc | | 💡 |
| [misrefactored-assign-op](/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html) | oxc | | 💡 |
| [no-async-endpoint-handlers](/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html) | oxc | | |
| [no-this-in-exported-function](/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html) | oxc | | |
| [always-return](/docs/guide/usage/linter/rules/promise/always-return.html) | promise | | |
| [no-multiple-resolved](/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html) | promise | | |
| [no-promise-in-callback](/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html) | promise | | |
| [iframe-missing-sandbox](/docs/guide/usage/linter/rules/react/iframe-missing-sandbox.html) | react | | 🚧 |
| [jsx-no-comment-textnodes](/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html) | react | | |
| [jsx-no-script-url](/docs/guide/usage/linter/rules/react/jsx-no-script-url.html) | react | | 🚧 |
| [no-namespace](/docs/guide/usage/linter/rules/react/no-namespace.html) | react | | |
| [react-in-jsx-scope](/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html) | react | | |
| [style-prop-object](/docs/guide/usage/linter/rules/react/style-prop-object.html) | react | | |
| [no-confusing-non-null-assertion](/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html) | typescript | | 🚧 |
| [no-extraneous-class](/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html) | typescript | | ⚠️💡 |
| [no-unnecessary-boolean-literal-compare](/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html) | typescript | | 🚧 |
| [no-unnecessary-template-expression](/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.html) | typescript | | 🚧 |
| [no-unnecessary-type-arguments](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.html) | typescript | | 🚧 |
| [no-unnecessary-type-assertion](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html) | typescript | | 🚧 |
| [no-unnecessary-type-constraint](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html) | typescript | | |
| [no-unsafe-enum-comparison](/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html) | typescript | | 🚧 |
| [no-unsafe-type-assertion](/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html) | typescript | | 🚧 |
| [consistent-function-scoping](/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html) | unicorn | | 🚧 |
| [no-accessor-recursion](/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html) | unicorn | | |
| [no-array-reverse](/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html) | unicorn | | 🛠️ |
| [no-array-sort](/docs/guide/usage/linter/rules/unicorn/no-array-sort.html) | unicorn | | 🛠️ |
| [no-instanceof-builtins](/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html) | unicorn | | 🚧 |
| [prefer-add-event-listener](/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html) | unicorn | | 🚧 |
| [require-module-specifiers](/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html) | unicorn | | 🛠️ |
| [require-post-message-target-origin](/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html) | unicorn | | 💡 |
| [no-required-prop-with-default](/docs/guide/usage/linter/rules/vue/no-required-prop-with-default.html) | vue | | 🚧 |
| [require-default-export](/docs/guide/usage/linter/rules/vue/require-default-export.html) | vue | | |

## Pedantic (113):

Lints which are rather strict or have occasional false positives.
| Rule name | Source | Default | Fixable? |
| --------------------------------------- | ---------- | ------- | -------- |
| [accessor-pairs](/docs/guide/usage/linter/rules/eslint/accessor-pairs.html) | eslint | | |
| [array-callback-return](/docs/guide/usage/linter/rules/eslint/array-callback-return.html) | eslint | | |
| [eqeqeq](/docs/guide/usage/linter/rules/eslint/eqeqeq.html) | eslint | | ⚠️🛠️️ |
| [max-classes-per-file](/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html) | eslint | | |
| [max-depth](/docs/guide/usage/linter/rules/eslint/max-depth.html) | eslint | | |
| [max-lines](/docs/guide/usage/linter/rules/eslint/max-lines.html) | eslint | | |
| [max-lines-per-function](/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html) | eslint | | |
| [max-nested-callbacks](/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html) | eslint | | |
| [no-array-constructor](/docs/guide/usage/linter/rules/eslint/no-array-constructor.html) | eslint | | 🛠️ |
| [no-case-declarations](/docs/guide/usage/linter/rules/eslint/no-case-declarations.html) | eslint | | |
| [no-constructor-return](/docs/guide/usage/linter/rules/eslint/no-constructor-return.html) | eslint | | |
| [no-else-return](/docs/guide/usage/linter/rules/eslint/no-else-return.html) | eslint | | 🛠️ |
| [no-fallthrough](/docs/guide/usage/linter/rules/eslint/no-fallthrough.html) | eslint | | 🚧 |
| [no-inline-comments](/docs/guide/usage/linter/rules/eslint/no-inline-comments.html) | eslint | | |
| [no-inner-declarations](/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html) | eslint | | |
| [no-lonely-if](/docs/guide/usage/linter/rules/eslint/no-lonely-if.html) | eslint | | 🚧 |
| [no-loop-func](/docs/guide/usage/linter/rules/eslint/no-loop-func.html) | eslint | | |
| [no-negated-condition](/docs/guide/usage/linter/rules/eslint/no-negated-condition.html) | eslint | | 🚧 |
| [no-new-wrappers](/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html) | eslint | | 🛠️ |
| [no-object-constructor](/docs/guide/usage/linter/rules/eslint/no-object-constructor.html) | eslint | | 🚧 |
| [no-promise-executor-return](/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html) | eslint | | |
| [no-prototype-builtins](/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html) | eslint | | |
| [no-redeclare](/docs/guide/usage/linter/rules/eslint/no-redeclare.html) | eslint | | |
| [no-self-compare](/docs/guide/usage/linter/rules/eslint/no-self-compare.html) | eslint | | |
| [no-throw-literal](/docs/guide/usage/linter/rules/eslint/no-throw-literal.html) | eslint | | 💡 |
| [no-useless-return](/docs/guide/usage/linter/rules/eslint/no-useless-return.html) | eslint | | 🚧 |
| [no-warning-comments](/docs/guide/usage/linter/rules/eslint/no-warning-comments.html) | eslint | | |
| [radix](/docs/guide/usage/linter/rules/eslint/radix.html) | eslint | | ⚠️🛠️️ |
| [require-await](/docs/guide/usage/linter/rules/eslint/require-await.html) | eslint | | ⚠️🛠️️ |
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
| [jsx-no-target-blank](/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html) | react | | |
| [jsx-no-useless-fragment](/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html) | react | | 💡 |
| [no-unescaped-entities](/docs/guide/usage/linter/rules/react/no-unescaped-entities.html) | react | | |
| [rules-of-hooks](/docs/guide/usage/linter/rules/react/rules-of-hooks.html) | react | | |
| [ban-ts-comment](/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html) | typescript | | 🛠️ |
| [ban-types](/docs/guide/usage/linter/rules/typescript/ban-types.html) | typescript | | 🚧 |
| [no-confusing-void-expression](/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html) | typescript | | 🚧 |
| [no-deprecated](/docs/guide/usage/linter/rules/typescript/no-deprecated.html) | typescript | | |
| [no-misused-promises](/docs/guide/usage/linter/rules/typescript/no-misused-promises.html) | typescript | | 🚧 |
| [no-mixed-enums](/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html) | typescript | | 🚧 |
| [no-unsafe-argument](/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html) | typescript | | 🚧 |
| [no-unsafe-assignment](/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html) | typescript | | 🚧 |
| [no-unsafe-call](/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html) | typescript | | 🚧 |
| [no-unsafe-function-type](/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html) | typescript | | |
| [no-unsafe-member-access](/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.html) | typescript | | 🚧 |
| [no-unsafe-return](/docs/guide/usage/linter/rules/typescript/no-unsafe-return.html) | typescript | | 🚧 |
| [only-throw-error](/docs/guide/usage/linter/rules/typescript/only-throw-error.html) | typescript | | 🚧 |
| [prefer-enum-initializers](/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html) | typescript | | 💡 |
| [prefer-includes](/docs/guide/usage/linter/rules/typescript/prefer-includes.html) | typescript | | 🚧 |
| [prefer-nullish-coalescing](/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.html) | typescript | | 🚧 |
| [prefer-promise-reject-errors](/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html) | typescript | | 🚧 |
| [prefer-ts-expect-error](/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html) | typescript | | 🛠️ |
| [related-getter-setter-pairs](/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html) | typescript | | 🚧 |
| [require-await](/docs/guide/usage/linter/rules/typescript/require-await.html) | typescript | | 🚧 |
| [restrict-plus-operands](/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html) | typescript | | 🚧 |
| [return-await](/docs/guide/usage/linter/rules/typescript/return-await.html) | typescript | | 🚧 |
| [strict-boolean-expressions](/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html) | typescript | | 🚧 |
| [switch-exhaustiveness-check](/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html) | typescript | | 🚧 |
| [consistent-assert](/docs/guide/usage/linter/rules/unicorn/consistent-assert.html) | unicorn | | 🛠️ |
| [consistent-empty-array-spread](/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html) | unicorn | | 💡 |
| [escape-case](/docs/guide/usage/linter/rules/unicorn/escape-case.html) | unicorn | | 🛠️ |
| [explicit-length-check](/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html) | unicorn | | 🛠️ |
| [new-for-builtins](/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html) | unicorn | | |
| [no-array-callback-reference](/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html) | unicorn | | 🚧 |
| [no-hex-escape](/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html) | unicorn | | 🛠️ |
| [no-immediate-mutation](/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html) | unicorn | | 🚧 |
| [no-instanceof-array](/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html) | unicorn | | 🛠️ |
| [no-lonely-if](/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html) | unicorn | | |
| [no-negation-in-equality-check](/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html) | unicorn | | 💡 |
| [no-new-buffer](/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html) | unicorn | | 🚧 |
| [no-object-as-default-parameter](/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html) | unicorn | | |
| [no-static-only-class](/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html) | unicorn | | ⚠️🛠️️ |
| [no-this-assignment](/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html) | unicorn | | |
| [no-typeof-undefined](/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html) | unicorn | | 🚧 |
| [no-unnecessary-array-flat-depth](/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html) | unicorn | | 💡 |
| [no-unnecessary-array-splice-count](/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html) | unicorn | | 🛠️ |
| [no-unnecessary-slice-end](/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html) | unicorn | | 🛠️ |
| [no-unreadable-iife](/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html) | unicorn | | |
| [no-useless-promise-resolve-reject](/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html) | unicorn | | 🛠️ |
| [no-useless-switch-case](/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html) | unicorn | | 🚧 |
| [no-useless-undefined](/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html) | unicorn | | 🛠️ |
| [prefer-array-flat](/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html) | unicorn | | ⚠️🛠️️ |
| [prefer-array-some](/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html) | unicorn | | 🛠️ |
| [prefer-at](/docs/guide/usage/linter/rules/unicorn/prefer-at.html) | unicorn | | ⚠️🛠️️ |
| [prefer-blob-reading-methods](/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html) | unicorn | | 🚧 |
| [prefer-code-point](/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html) | unicorn | | 🛠️ |
| [prefer-date-now](/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html) | unicorn | | 🛠️ |
| [prefer-dom-node-append](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html) | unicorn | | 🛠️ |
| [prefer-dom-node-dataset](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html) | unicorn | | 🚧 |
| [prefer-dom-node-remove](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html) | unicorn | | |
| [prefer-event-target](/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html) | unicorn | | |
| [prefer-math-min-max](/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html) | unicorn | | 🛠️ |
| [prefer-math-trunc](/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html) | unicorn | | 🚧 |
| [prefer-native-coercion-functions](/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html) | unicorn | | 🚧 |
| [prefer-prototype-methods](/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html) | unicorn | | 🛠️ |
| [prefer-query-selector](/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html) | unicorn | | 🛠️ |
| [prefer-regexp-test](/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html) | unicorn | | 🛠️ |
| [prefer-string-replace-all](/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html) | unicorn | | 🛠️ |
| [prefer-string-slice](/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html) | unicorn | | 🛠️ |
| [prefer-top-level-await](/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html) | unicorn | | |
| [prefer-type-error](/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html) | unicorn | | 🛠️ |
| [require-number-to-fixed-digits-argument](/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html) | unicorn | | 🛠️ |

## Style (179):

Code that should be written in a more idiomatic way.
| Rule name | Source | Default | Fixable? |
| ------------------------------------ | ---------- | ------- | -------- |
| [arrow-body-style](/docs/guide/usage/linter/rules/eslint/arrow-body-style.html) | eslint | | 🛠️ |
| [capitalized-comments](/docs/guide/usage/linter/rules/eslint/capitalized-comments.html) | eslint | | 🛠️ |
| [curly](/docs/guide/usage/linter/rules/eslint/curly.html) | eslint | | 🛠️ |
| [default-case-last](/docs/guide/usage/linter/rules/eslint/default-case-last.html) | eslint | | |
| [default-param-last](/docs/guide/usage/linter/rules/eslint/default-param-last.html) | eslint | | |
| [func-names](/docs/guide/usage/linter/rules/eslint/func-names.html) | eslint | | 🛠️💡 |
| [func-style](/docs/guide/usage/linter/rules/eslint/func-style.html) | eslint | | 🚧 |
| [grouped-accessor-pairs](/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html) | eslint | | 🚧 |
| [guard-for-in](/docs/guide/usage/linter/rules/eslint/guard-for-in.html) | eslint | | |
| [id-length](/docs/guide/usage/linter/rules/eslint/id-length.html) | eslint | | |
| [init-declarations](/docs/guide/usage/linter/rules/eslint/init-declarations.html) | eslint | | |
| [max-params](/docs/guide/usage/linter/rules/eslint/max-params.html) | eslint | | |
| [max-statements](/docs/guide/usage/linter/rules/eslint/max-statements.html) | eslint | | |
| [new-cap](/docs/guide/usage/linter/rules/eslint/new-cap.html) | eslint | | 🚧 |
| [no-continue](/docs/guide/usage/linter/rules/eslint/no-continue.html) | eslint | | |
| [no-duplicate-imports](/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html) | eslint | | 🚧 |
| [no-extra-label](/docs/guide/usage/linter/rules/eslint/no-extra-label.html) | eslint | | 🛠️ |
| [no-implicit-coercion](/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html) | eslint | | 🛠️ |
| [no-label-var](/docs/guide/usage/linter/rules/eslint/no-label-var.html) | eslint | | |
| [no-labels](/docs/guide/usage/linter/rules/eslint/no-labels.html) | eslint | | |
| [no-lone-blocks](/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html) | eslint | | |
| [no-magic-numbers](/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html) | eslint | | 🚧 |
| [no-multi-assign](/docs/guide/usage/linter/rules/eslint/no-multi-assign.html) | eslint | | |
| [no-multi-str](/docs/guide/usage/linter/rules/eslint/no-multi-str.html) | eslint | | |
| [no-nested-ternary](/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html) | eslint | | |
| [no-new-func](/docs/guide/usage/linter/rules/eslint/no-new-func.html) | eslint | | |
| [no-return-assign](/docs/guide/usage/linter/rules/eslint/no-return-assign.html) | eslint | | 🚧 |
| [no-script-url](/docs/guide/usage/linter/rules/eslint/no-script-url.html) | eslint | | |
| [no-template-curly-in-string](/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html) | eslint | | |
| [no-ternary](/docs/guide/usage/linter/rules/eslint/no-ternary.html) | eslint | | |
| [no-useless-computed-key](/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html) | eslint | | 🚧 |
| [operator-assignment](/docs/guide/usage/linter/rules/eslint/operator-assignment.html) | eslint | | ⚠️🛠️️ |
| [prefer-destructuring](/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html) | eslint | | 🚧 |
| [prefer-exponentiation-operator](/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html) | eslint | | |
| [prefer-numeric-literals](/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html) | eslint | | 🛠️ |
| [prefer-object-has-own](/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html) | eslint | | 🛠️ |
| [prefer-object-spread](/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html) | eslint | | 🛠️ |
| [prefer-promise-reject-errors](/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html) | eslint | | |
| [prefer-rest-params](/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html) | eslint | | |
| [prefer-spread](/docs/guide/usage/linter/rules/eslint/prefer-spread.html) | eslint | | |
| [prefer-template](/docs/guide/usage/linter/rules/eslint/prefer-template.html) | eslint | | 🚧 |
| [sort-imports](/docs/guide/usage/linter/rules/eslint/sort-imports.html) | eslint | | 🛠️ |
| [sort-keys](/docs/guide/usage/linter/rules/eslint/sort-keys.html) | eslint | | 🛠️ |
| [vars-on-top](/docs/guide/usage/linter/rules/eslint/vars-on-top.html) | eslint | | |
| [yoda](/docs/guide/usage/linter/rules/eslint/yoda.html) | eslint | | 🛠️ |
| [consistent-type-specifier-style](/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html) | import | | 🛠️ |
| [exports-last](/docs/guide/usage/linter/rules/import/exports-last.html) | import | | |
| [first](/docs/guide/usage/linter/rules/import/first.html) | import | | 🚧 |
| [group-exports](/docs/guide/usage/linter/rules/import/group-exports.html) | import | | |
| [no-anonymous-default-export](/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html) | import | | |
| [no-duplicates](/docs/guide/usage/linter/rules/import/no-duplicates.html) | import | | |
| [no-mutable-exports](/docs/guide/usage/linter/rules/import/no-mutable-exports.html) | import | | |
| [no-named-default](/docs/guide/usage/linter/rules/import/no-named-default.html) | import | | |
| [no-named-export](/docs/guide/usage/linter/rules/import/no-named-export.html) | import | | |
| [no-namespace](/docs/guide/usage/linter/rules/import/no-namespace.html) | import | | 🚧 |
| [prefer-default-export](/docs/guide/usage/linter/rules/import/prefer-default-export.html) | import | | |
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
| [padding-around-test-blocks](/docs/guide/usage/linter/rules/jest/padding-around-test-blocks.html) | jest | | 🛠️ |
| [prefer-called-with](/docs/guide/usage/linter/rules/jest/prefer-called-with.html) | jest | | 🛠️ |
| [prefer-comparison-matcher](/docs/guide/usage/linter/rules/jest/prefer-comparison-matcher.html) | jest | | 🛠️ |
| [prefer-each](/docs/guide/usage/linter/rules/jest/prefer-each.html) | jest | | |
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
| [prefer-to-contain](/docs/guide/usage/linter/rules/jest/prefer-to-contain.html) | jest | | 🛠️ |
| [prefer-to-have-been-called](/docs/guide/usage/linter/rules/jest/prefer-to-have-been-called.html) | jest | | 🛠️ |
| [prefer-to-have-been-called-times](/docs/guide/usage/linter/rules/jest/prefer-to-have-been-called-times.html) | jest | | 🛠️ |
| [prefer-to-have-length](/docs/guide/usage/linter/rules/jest/prefer-to-have-length.html) | jest | | 🛠️ |
| [prefer-todo](/docs/guide/usage/linter/rules/jest/prefer-todo.html) | jest | | 🛠️ |
| [require-hook](/docs/guide/usage/linter/rules/jest/require-hook.html) | jest | | |
| [require-top-level-describe](/docs/guide/usage/linter/rules/jest/require-top-level-describe.html) | jest | | |
| [no-exports-assign](/docs/guide/usage/linter/rules/node/no-exports-assign.html) | node | | 🛠️ |
| [avoid-new](/docs/guide/usage/linter/rules/promise/avoid-new.html) | promise | | |
| [no-nesting](/docs/guide/usage/linter/rules/promise/no-nesting.html) | promise | | 🚧 |
| [no-return-wrap](/docs/guide/usage/linter/rules/promise/no-return-wrap.html) | promise | | 🚧 |
| [param-names](/docs/guide/usage/linter/rules/promise/param-names.html) | promise | | |
| [prefer-await-to-callbacks](/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html) | promise | | |
| [prefer-await-to-then](/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html) | promise | | |
| [prefer-catch](/docs/guide/usage/linter/rules/promise/prefer-catch.html) | promise | | 🚧 |
| [jsx-boolean-value](/docs/guide/usage/linter/rules/react/jsx-boolean-value.html) | react | | 🛠️ |
| [jsx-curly-brace-presence](/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html) | react | | 🛠️ |
| [jsx-fragments](/docs/guide/usage/linter/rules/react/jsx-fragments.html) | react | | 🛠️ |
| [jsx-handler-names](/docs/guide/usage/linter/rules/react/jsx-handler-names.html) | react | | |
| [jsx-pascal-case](/docs/guide/usage/linter/rules/react/jsx-pascal-case.html) | react | | |
| [jsx-props-no-spreading](/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html) | react | | |
| [no-redundant-should-component-update](/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html) | react | | |
| [no-set-state](/docs/guide/usage/linter/rules/react/no-set-state.html) | react | | |
| [prefer-es6-class](/docs/guide/usage/linter/rules/react/prefer-es6-class.html) | react | | |
| [self-closing-comp](/docs/guide/usage/linter/rules/react/self-closing-comp.html) | react | | 🛠️ |
| [state-in-constructor](/docs/guide/usage/linter/rules/react/state-in-constructor.html) | react | | |
| [adjacent-overload-signatures](/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html) | typescript | | |
| [array-type](/docs/guide/usage/linter/rules/typescript/array-type.html) | typescript | | 🛠️ |
| [ban-tslint-comment](/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html) | typescript | | 🛠️ |
| [consistent-generic-constructors](/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html) | typescript | | 🚧 |
| [consistent-indexed-object-style](/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html) | typescript | | 🛠️ |
| [consistent-type-definitions](/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html) | typescript | | ⚠️🛠️️ |
| [consistent-type-imports](/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html) | typescript | | 🛠️ |
| [no-empty-interface](/docs/guide/usage/linter/rules/typescript/no-empty-interface.html) | typescript | | |
| [no-inferrable-types](/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html) | typescript | | 💡 |
| [prefer-for-of](/docs/guide/usage/linter/rules/typescript/prefer-for-of.html) | typescript | | 🚧 |
| [prefer-function-type](/docs/guide/usage/linter/rules/typescript/prefer-function-type.html) | typescript | | 🛠️ |
| [prefer-namespace-keyword](/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html) | typescript | | 🛠️ |
| [prefer-reduce-type-parameter](/docs/guide/usage/linter/rules/typescript/prefer-reduce-type-parameter.html) | typescript | | 🚧 |
| [prefer-return-this-type](/docs/guide/usage/linter/rules/typescript/prefer-return-this-type.html) | typescript | | 🚧 |
| [catch-error-name](/docs/guide/usage/linter/rules/unicorn/catch-error-name.html) | unicorn | | 🛠️ |
| [consistent-date-clone](/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html) | unicorn | | 🛠️ |
| [consistent-existence-index-check](/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html) | unicorn | | 🛠️ |
| [empty-brace-spaces](/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html) | unicorn | | 🛠️ |
| [error-message](/docs/guide/usage/linter/rules/unicorn/error-message.html) | unicorn | | |
| [filename-case](/docs/guide/usage/linter/rules/unicorn/filename-case.html) | unicorn | | |
| [no-array-method-this-argument](/docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.html) | unicorn | | 🚧 |
| [no-await-expression-member](/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html) | unicorn | | ⚠️🛠️️ |
| [no-console-spaces](/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html) | unicorn | | 🛠️ |
| [no-nested-ternary](/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html) | unicorn | | 🛠️ |
| [no-null](/docs/guide/usage/linter/rules/unicorn/no-null.html) | unicorn | | 🛠️ |
| [no-unreadable-array-destructuring](/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html) | unicorn | | |
| [no-useless-collection-argument](/docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.html) | unicorn | | 🚧 |
| [no-zero-fractions](/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html) | unicorn | | 🛠️ |
| [number-literal-case](/docs/guide/usage/linter/rules/unicorn/number-literal-case.html) | unicorn | | 🛠️ |
| [numeric-separators-style](/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html) | unicorn | | 🛠️ |
| [prefer-array-index-of](/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html) | unicorn | | 🚧 |
| [prefer-bigint-literals](/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html) | unicorn | | 🛠️ |
| [prefer-class-fields](/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html) | unicorn | | 🛠️💡 |
| [prefer-classlist-toggle](/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html) | unicorn | | 🛠️ |
| [prefer-default-parameters](/docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.html) | unicorn | | 🚧 |
| [prefer-dom-node-text-content](/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html) | unicorn | | 🛠️ |
| [prefer-global-this](/docs/guide/usage/linter/rules/unicorn/prefer-global-this.html) | unicorn | | 🚧 |
| [prefer-includes](/docs/guide/usage/linter/rules/unicorn/prefer-includes.html) | unicorn | | 🚧 |
| [prefer-keyboard-event-key](/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html) | unicorn | | 🛠️ |
| [prefer-logical-operator-over-ternary](/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html) | unicorn | | 🚧 |
| [prefer-modern-dom-apis](/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html) | unicorn | | 🚧 |
| [prefer-negative-index](/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html) | unicorn | | 🛠️ |
| [prefer-object-from-entries](/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html) | unicorn | | 🚧 |
| [prefer-optional-catch-binding](/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html) | unicorn | | 🛠️ |
| [prefer-reflect-apply](/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html) | unicorn | | |
| [prefer-response-static-json](/docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.html) | unicorn | | 🚧 |
| [prefer-spread](/docs/guide/usage/linter/rules/unicorn/prefer-spread.html) | unicorn | | 🛠️ |
| [prefer-string-raw](/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html) | unicorn | | 🛠️ |
| [prefer-string-trim-start-end](/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html) | unicorn | | 🛠️ |
| [prefer-structured-clone](/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html) | unicorn | | 💡 |
| [require-array-join-separator](/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html) | unicorn | | 🛠️ |
| [require-module-attributes](/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html) | unicorn | | 💡 |
| [switch-case-braces](/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html) | unicorn | | 🛠️ |
| [text-encoding-identifier-case](/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html) | unicorn | | 🛠️ |
| [throw-new-error](/docs/guide/usage/linter/rules/unicorn/throw-new-error.html) | unicorn | | 🛠️ |
| [no-import-node-test](/docs/guide/usage/linter/rules/vitest/no-import-node-test.html) | vitest | | 🛠️ |
| [prefer-called-times](/docs/guide/usage/linter/rules/vitest/prefer-called-times.html) | vitest | | 🛠️ |
| [prefer-to-be-falsy](/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html) | vitest | | 🛠️ |
| [prefer-to-be-object](/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html) | vitest | | 🛠️ |
| [prefer-to-be-truthy](/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html) | vitest | | 🛠️ |
| [define-emits-declaration](/docs/guide/usage/linter/rules/vue/define-emits-declaration.html) | vue | | 🚧 |
| [define-props-declaration](/docs/guide/usage/linter/rules/vue/define-props-declaration.html) | vue | | |
| [define-props-destructuring](/docs/guide/usage/linter/rules/vue/define-props-destructuring.html) | vue | | |
| [require-typed-ref](/docs/guide/usage/linter/rules/vue/require-typed-ref.html) | vue | | |

## Nursery (9):

New lints that are still under development.
| Rule name | Source | Default | Fixable? |
| ----------------------------- | ------- | ------- | -------- |
| [getter-return](/docs/guide/usage/linter/rules/eslint/getter-return.html) | eslint | | |
| [no-misleading-character-class](/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html) | eslint | | |
| [no-undef](/docs/guide/usage/linter/rules/eslint/no-undef.html) | eslint | | |
| [no-unreachable](/docs/guide/usage/linter/rules/eslint/no-unreachable.html) | eslint | | |
| [export](/docs/guide/usage/linter/rules/import/export.html) | import | | |
| [named](/docs/guide/usage/linter/rules/import/named.html) | import | | |
| [branches-sharing-code](/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html) | oxc | | |
| [no-return-in-finally](/docs/guide/usage/linter/rules/promise/no-return-in-finally.html) | promise | | |
| [require-render-return](/docs/guide/usage/linter/rules/react/require-render-return.html) | react | | |
