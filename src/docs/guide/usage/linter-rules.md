# Rules

The progress of all rule implementations is tracked [here](https://github.com/oxc-project/oxc/issues/481).

- Total number of rules: 333
- Rules turned on by default: 93

## Correctness (159):

| Rule name                                     | Source     | Default |
| --------------------------------------------- | ---------- | ------- |
| bad-array-method-on-arguments                 | deepscan   | ✅      |
| bad-char-at-comparison                        | deepscan   | ✅      |
| bad-comparison-sequence                       | deepscan   | ✅      |
| bad-object-literal-comparison                 | deepscan   | ✅      |
| bad-min-max-func                              | deepscan   | ✅      |
| bad-replace-all-arg                           | deepscan   | ✅      |
| missing-throw                                 | deepscan   | ✅      |
| number-arg-out-of-range                       | deepscan   | ✅      |
| uninvoked-array-callback                      | deepscan   | ✅      |
| for-direction                                 | ESLint     | ✅      |
| no-this-before-super                          | ESLint     | ✅      |
| no-async-promise-executor                     | ESLint     | ✅      |
| no-caller                                     | ESLint     | ✅      |
| no-class-assign                               | ESLint     | ✅      |
| no-compare-neg-zero                           | ESLint     | ✅      |
| no-cond-assign                                | ESLint     | ✅      |
| no-const-assign                               | ESLint     | ✅      |
| no-constant-binary-expression                 | ESLint     | ✅      |
| no-constant-condition                         | ESLint     | ✅      |
| no-control-regex                              | ESLint     | ✅      |
| no-debugger                                   | ESLint     | ✅      |
| no-delete-var                                 | ESLint     | ✅      |
| no-dupe-class-members                         | ESLint     | ✅      |
| no-dupe-else-if                               | ESLint     | ✅      |
| no-dupe-keys                                  | ESLint     | ✅      |
| no-duplicate-case                             | ESLint     | ✅      |
| no-empty-character-class                      | ESLint     | ✅      |
| no-empty-pattern                              | ESLint     | ✅      |
| no-empty-static-block                         | ESLint     | ✅      |
| no-ex-assign                                  | ESLint     | ✅      |
| no-extra-boolean-cast                         | ESLint     | ✅      |
| no-func-assign                                | ESLint     | ✅      |
| no-global-assign                              | ESLint     | ✅      |
| no-inner-declarations                         | ESLint     | ✅      |
| no-irregular-whitespace                       | ESLint     | ✅      |
| no-loss-of-precision                          | ESLint     | ✅      |
| no-new-symbol                                 | ESLint     | ✅      |
| no-nonoctal-decimal-escape                    | ESLint     | ✅      |
| no-obj-calls                                  | ESLint     | ✅      |
| no-self-assign                                | ESLint     | ✅      |
| no-setter-return                              | ESLint     | ✅      |
| no-shadow-restricted-names                    | ESLint     | ✅      |
| no-sparse-arrays                              | ESLint     | ✅      |
| no-unsafe-finally                             | ESLint     | ✅      |
| no-unsafe-negation                            | ESLint     | ✅      |
| no-unused-labels                              | ESLint     | ✅      |
| no-unused-private-class-members               | ESLint     | ✅      |
| no-useless-catch                              | ESLint     | ✅      |
| no-useless-escape                             | ESLint     | ✅      |
| no-useless-rename                             | ESLint     | ✅      |
| no-with                                       | ESLint     | ✅      |
| require-yield                                 | ESLint     | ✅      |
| use-isnan                                     | ESLint     | ✅      |
| valid-typeof                                  | ESLint     | ✅      |
| no-extra-non-null-assertion                   | TypeScript | ✅      |
| no-misused-new                                | TypeScript | ✅      |
| no-namespace                                  | TypeScript | ✅      |
| no-non-null-asserted-optional-chain           | TypeScript | ✅      |
| no-this-alias                                 | TypeScript | ✅      |
| no-unsafe-declaration-merging                 | TypeScript | ✅      |
| prefer-as-const                               | TypeScript | ✅      |
| triple-slash-reference                        | TypeScript | ✅      |
| prefer-literal-enum-member                    | TypeScript | ✅      |
| expect-expect                                 | jest       |         |
| no-conditional-expect                         | jest       |         |
| no-disabled-tests                             | jest       |         |
| no-export                                     | jest       |         |
| no-focused-tests                              | jest       |         |
| no-standalone-expect                          | jest       |         |
| require-to-throw-message                      | jest       |         |
| valid-describe-callback                       | jest       |         |
| valid-expect                                  | jest       |         |
| valid-title                                   | jest       |         |
| no-await-in-promise-methods                   | unicorn    | ✅      |
| no-document-cookie                            | unicorn    | ✅      |
| no-empty-file                                 | unicorn    | ✅      |
| no-invalid-remove-event-listener              | unicorn    | ✅      |
| no-new-array                                  | unicorn    | ✅      |
| no-single-promise-in-promise-methods          | unicorn    | ✅      |
| no-thenable                                   | unicorn    | ✅      |
| no-unnecessary-await                          | unicorn    | ✅      |
| no-useless-fallback-in-spread                 | unicorn    | ✅      |
| no-useless-length-check                       | unicorn    | ✅      |
| no-useless-spread                             | unicorn    | ✅      |
| prefer-set-size                               | unicorn    | ✅      |
| prefer-string-starts-ends-with                | unicorn    | ✅      |
| jsx-no-target-blank                           | react      | ✅      |
| jsx-key                                       | react      | ✅      |
| jsx-no-duplicate-props                        | react      | ✅      |
| jsx-no-useless-fragment                       | react      | ✅      |
| jsx-no-undef                                  | react      | ✅      |
| no-children-prop                              | react      | ✅      |
| no-direct-mutation-state                      | react      | ✅      |
| no-find-dom-node                              | react      | ✅      |
| no-render-return-value                        | react      | ✅      |
| no-string-refs                                | react      | ✅      |
| no-is-mounted                                 | react      | ✅      |
| require-render-return                         | react      | ✅      |
| void-dom-elements-no-children                 | react      | ✅      |
| jsx-no-jsx-as-prop                            | react_perf |         |
| jsx-no-new-array-as-prop                      | react_perf |         |
| jsx-no-new-function-as-prop                   | react_perf |         |
| jsx-no-new-object-as-prop                     | react_perf |         |
| alt-text                                      | jsx_a11y   |         |
| anchor-has-content                            | jsx_a11y   |         |
| anchor-is-valid                               | jsx_a11y   |         |
| aria-activedescendant-has-tabindex            | jsx_a11y   |         |
| aria-props                                    | jsx_a11y   |         |
| aria-unsupported-elements                     | jsx_a11y   |         |
| click-events-have-key-events                  | jsx_a11y   |         |
| heading-has-content                           | jsx_a11y   |         |
| HTML-has-lang                                 | jsx_a11y   |         |
| lang                                          | jsx_a11y   |         |
| iframe-has-title                              | jsx_a11y   |         |
| img-redundant-alt                             | jsx_a11y   |         |
| media-has-caption                             | jsx_a11y   |         |
| mouse-events-have-key-events                  | jsx_a11y   |         |
| no-access-key                                 | jsx_a11y   |         |
| no-aria-hidden-on-focusable                   | jsx_a11y   |         |
| no-autofocus                                  | jsx_a11y   |         |
| no-redundant-roles                            | jsx_a11y   |         |
| prefer-tag-over-role                          | jsx_a11y   |         |
| role-has-required-aria-props                  | jsx_a11y   |         |
| scope                                         | jsx_a11y   |         |
| tabindex-no-positive                          | jsx_a11y   |         |
| aria-role                                     | jsx_a11y   |         |
| no-distracting-elements                       | jsx_a11y   |         |
| role-supports-aria-props                      | jsx_a11y   |         |
| autocomplete-valid                            | jsx_a11y   |         |
| const-comparisons                             | oxc        | ✅      |
| double-comparisons                            | oxc        | ✅      |
| erasing-op                                    | oxc        | ✅      |
| only-used-in-recursion                        | oxc        | ✅      |
| google-font-display                           | nextjs     |         |
| google-font-preconnect                        | nextjs     |         |
| inline-script-id                              | nextjs     |         |
| next-script-for-ga                            | nextjs     |         |
| no-assign-module-variable                     | nextjs     |         |
| no-async-client-component                     | nextjs     |         |
| no-CSS-tags                                   | nextjs     |         |
| no-head-element                               | nextjs     |         |
| no-head-import-in-document                    | nextjs     |         |
| no-img-element                                | nextjs     |         |
| no-script-component-in-head                   | nextjs     |         |
| no-sync-scripts                               | nextjs     |         |
| no-title-in-document-head                     | nextjs     |         |
| no-typos                                      | nextjs     |         |
| no-document-import-in-page                    | nextjs     |         |
| no-unwanted-polyfillio                        | nextjs     |         |
| no-before-interactive-script-outside-document | nextjs     |         |
| check-property-names                          | JSDoc      |         |
| check-tag-names                               | JSDoc      |         |
| implements-on-classes                         | JSDoc      |         |
| no-defaults                                   | JSDoc      |         |
| require-property                              | JSDoc      |         |
| require-property-type                         | JSDoc      |         |
| require-property-name                         | JSDoc      |         |
| require-property-description                  | JSDoc      |         |
| require-yields                                | JSDoc      |         |

## Restriction (26):

| Rule name                   | Source     | Default |
| --------------------------- | ---------- | ------- |
| bad-bitwise-operator        | deepscan   |         |
| no-bitwise                  | ESLint     |         |
| no-console                  | ESLint     |         |
| no-empty                    | ESLint     |         |
| no-eval                     | ESLint     |         |
| no-eq-null                  | ESLint     |         |
| no-iterator                 | ESLint     |         |
| no-proto                    | ESLint     |         |
| no-regex-spaces             | ESLint     |         |
| no-unsafe-optional-chaining | ESLint     |         |
| no-var                      | ESLint     |         |
| no-void                     | ESLint     |         |
| no-explicit-any             | TypeScript |         |
| no-var-requires             | TypeScript |         |
| no-abusive-eslint-disable   | unicorn    |         |
| no-array-for-each           | unicorn    |         |
| no-array-reduce             | unicorn    |         |
| no-nested-ternary           | unicorn    |         |
| no-process-exit             | unicorn    |         |
| prefer-modern-math-apis     | unicorn    |         |
| prefer-number-properties    | unicorn    |         |
| button-has-type             | react      |         |
| no-danger                   | react      |         |
| no-unknown-property         | react      |         |
| check-access                | JSDoc      |         |
| empty-tags                  | JSDoc      |         |

## Pedantic (51):

| Rule name                               | Source     | Default |
| --------------------------------------- | ---------- | ------- |
| array-callback-return                   | ESLint     |         |
| eqeqeq                                  | ESLint     |         |
| max-lines                               | ESLint     |         |
| no-array-constructor                    | ESLint     |         |
| no-case-declarations                    | ESLint     |         |
| no-mixed-operators                      | ESLint     |         |
| no-new-wrappers                         | ESLint     |         |
| no-prototype-builtins                   | ESLint     |         |
| no-redeclare                            | ESLint     |         |
| no-return-await                         | ESLint     |         |
| no-self-compare                         | ESLint     |         |
| ban-ts-comment                          | TypeScript |         |
| prefer-enum-initializers                | TypeScript |         |
| ban-types                               | TypeScript |         |
| no-duplicate-enum-values                | TypeScript |         |
| prefer-ts-expect-error                  | TypeScript |         |
| escape-case                             | unicorn    |         |
| explicit-length-check                   | unicorn    |         |
| new-for-builtins                        | unicorn    |         |
| no-hex-escape                           | unicorn    |         |
| no-instanceof-array                     | unicorn    |         |
| no-lonely-if                            | unicorn    |         |
| no-negated-condition                    | unicorn    |         |
| no-new-buffer                           | unicorn    |         |
| no-object-as-default-parameter          | unicorn    |         |
| no-static-only-class                    | unicorn    |         |
| no-this-assignment                      | unicorn    |         |
| no-typeof-undefined                     | unicorn    |         |
| no-unreadable-iife                      | unicorn    |         |
| no-useless-promise-resolve-reject       | unicorn    |         |
| no-useless-switch-case                  | unicorn    |         |
| prefer-array-flat                       | unicorn    |         |
| prefer-array-some                       | unicorn    |         |
| prefer-blob-reading-methods             | unicorn    |         |
| prefer-code-point                       | unicorn    |         |
| prefer-date-now                         | unicorn    |         |
| prefer-dom-node-append                  | unicorn    |         |
| prefer-dom-node-dataset                 | unicorn    |         |
| prefer-dom-node-remove                  | unicorn    |         |
| prefer-event-target                     | unicorn    |         |
| prefer-math-trunc                       | unicorn    |         |
| prefer-native-coercion-functions        | unicorn    |         |
| prefer-prototype-methods                | unicorn    |         |
| prefer-query-selector                   | unicorn    |         |
| prefer-regexp-test                      | unicorn    |         |
| prefer-string-replace-all               | unicorn    |         |
| prefer-string-slice                     | unicorn    |         |
| prefer-type-error                       | unicorn    |         |
| require-number-to-fixed-digits-argument | unicorn    |         |
| checked-requires-onchange-or-readonly   | react      |         |
| no-unescaped-entities                   | react      |         |

## Style (68):

| Rule name                            | Source     | Default |
| ------------------------------------ | ---------- | ------- |
| default-case-last                    | ESLint     |         |
| default-param-last                   | ESLint     |         |
| guard-for-in                         | ESLint     |         |
| max-params                           | ESLint     |         |
| no-ternary                           | ESLint     |         |
| no-template-curly-in-string          | ESLint     |         |
| no-continue                          | ESLint     |         |
| no-script-url                        | ESLint     |         |
| adjacent-overload-signatures         | TypeScript |         |
| array-type                           | TypeScript |         |
| ban-tslint-comment                   | TypeScript |         |
| consistent-type-definitions          | TypeScript |         |
| no-empty-interface                   | TypeScript |         |
| prefer-for-of                        | TypeScript |         |
| prefer-function-type                 | TypeScript |         |
| max-expects                          | jest       |         |
| no-alias-methods                     | jest       |         |
| no-confusing-set-timeout             | jest       |         |
| no-deprecated-functions              | jest       |         |
| no-done-callback                     | jest       |         |
| no-hooks                             | jest       |         |
| no-identical-title                   | jest       |         |
| no-interpolation-in-snapshots        | jest       |         |
| no-jasmine-globals                   | jest       |         |
| no-mocks-import                      | jest       |         |
| no-restricted-jest-methods           | jest       |         |
| no-restricted-matchers               | jest       |         |
| no-test-prefixes                     | jest       |         |
| no-test-return-statement             | jest       |         |
| no-untyped-mock-factory              | jest       |         |
| prefer-called-with                   | jest       |         |
| prefer-comparison-matcher            | jest       |         |
| prefer-equality-matcher              | jest       |         |
| prefer-expect-resolves               | jest       |         |
| prefer-lowercase-title               | jest       |         |
| prefer-mock-promise-shorthand        | jest       |         |
| prefer-spy-on                        | jest       |         |
| prefer-strict-equal                  | jest       |         |
| prefer-to-be                         | jest       |         |
| prefer-to-contain                    | jest       |         |
| prefer-to-have-length                | jest       |         |
| prefer-todo                          | jest       |         |
| require-hook                         | jest       |         |
| catch-error-name                     | unicorn    |         |
| empty-brace-spaces                   | unicorn    |         |
| error-message                        | unicorn    |         |
| filename-case                        | unicorn    |         |
| no-await-expression-member           | unicorn    |         |
| no-console-spaces                    | unicorn    |         |
| no-null                              | unicorn    |         |
| no-unreadable-array-destructuring    | unicorn    |         |
| no-zero-fractions                    | unicorn    |         |
| number-literal-case                  | unicorn    |         |
| numeric-separators-style             | unicorn    |         |
| prefer-array-flat-map                | unicorn    |         |
| prefer-node-protocol                 | unicorn    |         |
| prefer-dom-node-text-content         | unicorn    |         |
| prefer-includes                      | unicorn    |         |
| prefer-logical-operator-over-ternary | unicorn    |         |
| prefer-modern-dom-apis               | unicorn    |         |
| prefer-optional-catch-binding        | unicorn    |         |
| prefer-reflect-apply                 | unicorn    |         |
| prefer-spread                        | unicorn    |         |
| prefer-string-trim-start-end         | unicorn    |         |
| require-array-join-separator         | unicorn    |         |
| switch-case-braces                   | unicorn    |         |
| text-encoding-identifier-case        | unicorn    |         |
| throw-new-error                      | unicorn    |         |

## Suspicious (7):

| Rule name                      | Source     | Default |
| ------------------------------ | ---------- | ------- |
| no-unnecessary-type-constraint | TypeScript |         |
| no-commented-out-tests         | jest       |         |
| prefer-add-event-listener      | unicorn    |         |
| jsx-no-comment-textnodes       | react      |         |
| react-in-jsx-scope             | react      |         |
| approx-constant                | oxc        |         |
| misrefactored-assign-op        | oxc        |         |

## Nursery (20):

| Rule name                         | Source       | Default |
| --------------------------------- | ------------ | ------- |
| constructor-super                 | ESLint       |         |
| getter-return                     | ESLint       |         |
| no-fallthrough                    | ESLint       |         |
| no-import-assign                  | ESLint       |         |
| no-undef                          | ESLint       |         |
| default                           | import       |         |
| export                            | import       |         |
| named                             | import       |         |
| namespace                         | import       |         |
| no-amd                            | import       |         |
| no-cycle                          | import       |         |
| no-deprecated                     | import       |         |
| no-named-as-default               | import       |         |
| no-named-as-default-member        | import       |         |
| no-self-import                    | import       |         |
| no-unused-modules                 | import       |         |
| no-duplicates                     | import       |         |
| no-default-export                 | import       |         |
| no-barrel-file                    | oxc          |         |
| no-side-effects-in-initialization | tree_shaking |         |

## Perf (2):

| Rule name              | Source | Default |
| ---------------------- | ------ | ------- |
| no-await-in-loop       | ESLint |         |
| no-accumulating-spread | oxc    |         |
