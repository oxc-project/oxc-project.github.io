# Rules

The progress of all rule implementations is tracked [here](https://github.com/oxc-project/oxc/issues/481).

- Total number of rules: 385
- Rules turned on by default: 91

<!-- textlint-disable terminology -->

## Correctness (159):

Code that is outright wrong or useless.
| Rule name | Source | Default |
| --------------------------------------------- | ---------- | ------- |
| for-direction | eslint | ✅ |
| no-async-promise-executor | eslint | ✅ |
| no-caller | eslint | ✅ |
| no-class-assign | eslint | ✅ |
| no-compare-neg-zero | eslint | ✅ |
| no-cond-assign | eslint | ✅ |
| no-const-assign | eslint | ✅ |
| no-constant-binary-expression | eslint | ✅ |
| no-constant-condition | eslint | ✅ |
| no-control-regex | eslint | ✅ |
| no-debugger | eslint | ✅ |
| no-delete-var | eslint | ✅ |
| no-dupe-class-members | eslint | ✅ |
| no-dupe-else-if | eslint | ✅ |
| no-dupe-keys | eslint | ✅ |
| no-duplicate-case | eslint | ✅ |
| no-empty-character-class | eslint | ✅ |
| no-empty-pattern | eslint | ✅ |
| no-empty-static-block | eslint | ✅ |
| no-ex-assign | eslint | ✅ |
| no-extra-boolean-cast | eslint | ✅ |
| no-func-assign | eslint | ✅ |
| no-global-assign | eslint | ✅ |
| no-import-assign | eslint | ✅ |
| no-irregular-whitespace | eslint | ✅ |
| no-loss-of-precision | eslint | ✅ |
| no-new-native-nonconstructor | eslint | ✅ |
| no-nonoctal-decimal-escape | eslint | ✅ |
| no-obj-calls | eslint | ✅ |
| no-self-assign | eslint | ✅ |
| no-setter-return | eslint | ✅ |
| no-shadow-restricted-names | eslint | ✅ |
| no-sparse-arrays | eslint | ✅ |
| no-this-before-super | eslint | ✅ |
| no-unsafe-finally | eslint | ✅ |
| no-unsafe-negation | eslint | ✅ |
| no-unused-labels | eslint | ✅ |
| no-unused-private-class-members | eslint | ✅ |
| no-useless-catch | eslint | ✅ |
| no-useless-escape | eslint | ✅ |
| no-useless-rename | eslint | ✅ |
| no-with | eslint | ✅ |
| require-yield | eslint | ✅ |
| use-isnan | eslint | ✅ |
| valid-typeof | eslint | ✅ |
| default | import | |
| named | import | |
| namespace | import | |
| expect-expect | jest | |
| no-conditional-expect | jest | |
| no-disabled-tests | jest | |
| no-export | jest | |
| no-focused-tests | jest | |
| no-standalone-expect | jest | |
| require-to-throw-message | jest | |
| valid-describe-callback | jest | |
| valid-expect | jest | |
| valid-title | jest | |
| check-property-names | jsdoc | |
| check-tag-names | jsdoc | |
| implements-on-classes | jsdoc | |
| no-defaults | jsdoc | |
| require-property | jsdoc | |
| require-property-description | jsdoc | |
| require-property-name | jsdoc | |
| require-property-type | jsdoc | |
| require-yields | jsdoc | |
| alt-text | jsx_a11y | |
| anchor-has-content | jsx_a11y | |
| anchor-is-valid | jsx_a11y | |
| aria-activedescendant-has-tabindex | jsx_a11y | |
| aria-props | jsx_a11y | |
| aria-role | jsx_a11y | |
| aria-unsupported-elements | jsx_a11y | |
| autocomplete-valid | jsx_a11y | |
| click-events-have-key-events | jsx_a11y | |
| heading-has-content | jsx_a11y | |
| html-has-lang | jsx_a11y | |
| iframe-has-title | jsx_a11y | |
| img-redundant-alt | jsx_a11y | |
| lang | jsx_a11y | |
| media-has-caption | jsx_a11y | |
| mouse-events-have-key-events | jsx_a11y | |
| no-access-key | jsx_a11y | |
| no-aria-hidden-on-focusable | jsx_a11y | |
| no-autofocus | jsx_a11y | |
| no-distracting-elements | jsx_a11y | |
| no-redundant-roles | jsx_a11y | |
| prefer-tag-over-role | jsx_a11y | |
| role-has-required-aria-props | jsx_a11y | |
| role-supports-aria-props | jsx_a11y | |
| scope | jsx_a11y | |
| tabindex-no-positive | jsx_a11y | |
| google-font-display | nextjs | |
| google-font-preconnect | nextjs | |
| inline-script-id | nextjs | |
| next-script-for-ga | nextjs | |
| no-assign-module-variable | nextjs | |
| no-async-client-component | nextjs | |
| no-before-interactive-script-outside-document | nextjs | |
| no-css-tags | nextjs | |
| no-document-import-in-page | nextjs | |
| no-duplicate-head | nextjs | |
| no-head-element | nextjs | |
| no-head-import-in-document | nextjs | |
| no-img-element | nextjs | |
| no-page-custom-font | nextjs | |
| no-script-component-in-head | nextjs | |
| no-styled-jsx-in-document | nextjs | |
| no-sync-scripts | nextjs | |
| no-title-in-document-head | nextjs | |
| no-typos | nextjs | |
| no-unwanted-polyfillio | nextjs | |
| bad-array-method-on-arguments | oxc | ✅ |
| bad-char-at-comparison | oxc | ✅ |
| bad-comparison-sequence | oxc | ✅ |
| bad-min-max-func | oxc | ✅ |
| bad-object-literal-comparison | oxc | ✅ |
| bad-replace-all-arg | oxc | ✅ |
| const-comparisons | oxc | ✅ |
| double-comparisons | oxc | ✅ |
| erasing-op | oxc | ✅ |
| missing-throw | oxc | ✅ |
| number-arg-out-of-range | oxc | ✅ |
| only-used-in-recursion | oxc | ✅ |
| uninvoked-array-callback | oxc | ✅ |
| jsx-key | react | ✅ |
| jsx-no-duplicate-props | react | ✅ |
| jsx-no-target-blank | react | ✅ |
| jsx-no-undef | react | ✅ |
| no-children-prop | react | ✅ |
| no-direct-mutation-state | react | ✅ |
| no-find-dom-node | react | ✅ |
| no-is-mounted | react | ✅ |
| no-render-return-value | react | ✅ |
| no-string-refs | react | ✅ |
| void-dom-elements-no-children | react | ✅ |
| no-extra-non-null-assertion | typescript | ✅ |
| no-misused-new | typescript | ✅ |
| no-namespace | typescript | ✅ |
| no-non-null-asserted-optional-chain | typescript | ✅ |
| no-this-alias | typescript | ✅ |
| no-unsafe-declaration-merging | typescript | ✅ |
| no-useless-empty-export | typescript | ✅ |
| prefer-as-const | typescript | ✅ |
| triple-slash-reference | typescript | ✅ |
| no-await-in-promise-methods | unicorn | ✅ |
| no-document-cookie | unicorn | ✅ |
| no-empty-file | unicorn | ✅ |
| no-invalid-remove-event-listener | unicorn | ✅ |
| no-new-array | unicorn | ✅ |
| no-single-promise-in-promise-methods | unicorn | ✅ |
| no-thenable | unicorn | ✅ |
| no-unnecessary-await | unicorn | ✅ |
| no-useless-fallback-in-spread | unicorn | ✅ |
| no-useless-length-check | unicorn | ✅ |
| no-useless-spread | unicorn | ✅ |
| prefer-set-size | unicorn | ✅ |
| prefer-string-starts-ends-with | unicorn | ✅ |

## Perf (6):

Code that can be written to run faster.
| Rule name | Source | Default |
| --------------------------- | ---------- | ------- |
| no-await-in-loop | eslint | |
| no-accumulating-spread | oxc | |
| jsx-no-jsx-as-prop | react_perf | |
| jsx-no-new-array-as-prop | react_perf | |
| jsx-no-new-function-as-prop | react_perf | |
| jsx-no-new-object-as-prop | react_perf | |

## Restriction (49):

Lints which prevent the use of language and library features. Must not be enabled as a whole, should be considered on a case-by-case basis before enabling.
| Rule name | Source | Default |
| --------------------------------------- | ---------- | ------- |
| default-case | eslint | |
| no-bitwise | eslint | |
| no-console | eslint | |
| no-div-regex | eslint | |
| no-empty | eslint | |
| no-empty-function | eslint | |
| no-eq-null | eslint | |
| no-eval | eslint | |
| no-iterator | eslint | |
| no-proto | eslint | |
| no-regex-spaces | eslint | |
| no-restricted-globals | eslint | |
| no-undefined | eslint | |
| no-unsafe-optional-chaining | eslint | |
| no-var | eslint | |
| no-void | eslint | |
| unicode-bom | eslint | |
| no-amd | import | |
| no-cycle | import | |
| no-default-export | import | |
| check-access | jsdoc | |
| empty-tags | jsdoc | |
| bad-bitwise-operator | oxc | |
| no-async-await | oxc | |
| no-barrel-file | oxc | |
| no-const-enum | oxc | |
| no-optional-chaining | oxc | |
| no-rest-spread-properties | oxc | |
| button-has-type | react | |
| no-danger | react | |
| no-unknown-property | react | |
| explicit-function-return-type | typescript | |
| no-dynamic-delete | typescript | |
| no-explicit-any | typescript | |
| no-import-type-side-effects | typescript | |
| no-non-null-asserted-nullish-coalescing | typescript | |
| no-non-null-assertion | typescript | |
| no-var-requires | typescript | |
| prefer-literal-enum-member | typescript | |
| no-abusive-eslint-disable | unicorn | |
| no-anonymous-default-export | unicorn | |
| no-array-for-each | unicorn | |
| no-array-reduce | unicorn | |
| no-magic-array-flat-depth | unicorn | |
| no-nested-ternary | unicorn | |
| no-process-exit | unicorn | |
| prefer-modern-math-apis | unicorn | |
| prefer-node-protocol | unicorn | |
| prefer-number-properties | unicorn | |

## Suspicious (14):

code that is most likely wrong or useless.
| Rule name | Source | Default |
| ------------------------------ | ---------- | ------- |
| no-new | eslint | |
| no-useless-concat | eslint | |
| no-useless-constructor | eslint | |
| no-duplicates | import | |
| no-named-as-default | import | |
| no-named-as-default-member | import | |
| no-self-import | import | |
| no-commented-out-tests | jest | |
| approx-constant | oxc | |
| misrefactored-assign-op | oxc | |
| jsx-no-comment-textnodes | react | |
| react-in-jsx-scope | react | |
| no-unnecessary-type-constraint | typescript | |
| prefer-add-event-listener | unicorn | |

## Pedantic (66):

Lints which are rather strict or have occasional false positives.
| Rule name | Source | Default |
| --------------------------------------- | ---------- | ------- |
| array-callback-return | eslint | |
| eqeqeq | eslint | |
| max-classes-per-file | eslint | |
| max-lines | eslint | |
| no-array-constructor | eslint | |
| no-case-declarations | eslint | |
| no-constructor-return | eslint | |
| no-fallthrough | eslint | |
| no-inner-declarations | eslint | |
| no-new-wrappers | eslint | |
| no-prototype-builtins | eslint | |
| no-redeclare | eslint | |
| no-self-compare | eslint | |
| radix | eslint | |
| require-await | eslint | |
| symbol-description | eslint | |
| max-dependencies | import | |
| require-param | jsdoc | |
| require-param-description | jsdoc | |
| require-param-name | jsdoc | |
| require-param-type | jsdoc | |
| require-returns | jsdoc | |
| require-returns-description | jsdoc | |
| require-returns-type | jsdoc | |
| checked-requires-onchange-or-readonly | react | |
| jsx-no-useless-fragment | react | |
| no-unescaped-entities | react | |
| ban-ts-comment | typescript | |
| ban-types | typescript | |
| no-duplicate-enum-values | typescript | |
| prefer-enum-initializers | typescript | |
| prefer-ts-expect-error | typescript | |
| escape-case | unicorn | |
| explicit-length-check | unicorn | |
| new-for-builtins | unicorn | |
| no-hex-escape | unicorn | |
| no-instanceof-array | unicorn | |
| no-lonely-if | unicorn | |
| no-negated-condition | unicorn | |
| no-negation-in-equality-check | unicorn | |
| no-new-buffer | unicorn | |
| no-object-as-default-parameter | unicorn | |
| no-static-only-class | unicorn | |
| no-this-assignment | unicorn | |
| no-typeof-undefined | unicorn | |
| no-unreadable-iife | unicorn | |
| no-useless-promise-resolve-reject | unicorn | |
| no-useless-switch-case | unicorn | |
| prefer-array-flat | unicorn | |
| prefer-array-some | unicorn | |
| prefer-blob-reading-methods | unicorn | |
| prefer-code-point | unicorn | |
| prefer-date-now | unicorn | |
| prefer-dom-node-append | unicorn | |
| prefer-dom-node-dataset | unicorn | |
| prefer-dom-node-remove | unicorn | |
| prefer-event-target | unicorn | |
| prefer-math-trunc | unicorn | |
| prefer-native-coercion-functions | unicorn | |
| prefer-prototype-methods | unicorn | |
| prefer-query-selector | unicorn | |
| prefer-regexp-test | unicorn | |
| prefer-string-replace-all | unicorn | |
| prefer-string-slice | unicorn | |
| prefer-type-error | unicorn | |
| require-number-to-fixed-digits-argument | unicorn | |

## Style (82):

Code that should be written in a more idiomatic way.
| Rule name | Source | Default |
| ------------------------------------ | ---------- | ------- |
| default-case-last | eslint | |
| default-param-last | eslint | |
| guard-for-in | eslint | |
| max-params | eslint | |
| no-continue | eslint | |
| no-label-var | eslint | |
| no-multi-str | eslint | |
| no-script-url | eslint | |
| no-template-curly-in-string | eslint | |
| no-ternary | eslint | |
| prefer-exponentiation-operator | eslint | |
| sort-imports | eslint | |
| consistent-test-it | jest | |
| max-expects | jest | |
| max-nested-describe | jest | |
| no-alias-methods | jest | |
| no-confusing-set-timeout | jest | |
| no-deprecated-functions | jest | |
| no-done-callback | jest | |
| no-duplicate-hooks | jest | |
| no-hooks | jest | |
| no-identical-title | jest | |
| no-interpolation-in-snapshots | jest | |
| no-jasmine-globals | jest | |
| no-large-snapshots | jest | |
| no-mocks-import | jest | |
| no-restricted-jest-methods | jest | |
| no-restricted-matchers | jest | |
| no-test-prefixes | jest | |
| no-test-return-statement | jest | |
| no-untyped-mock-factory | jest | |
| prefer-called-with | jest | |
| prefer-comparison-matcher | jest | |
| prefer-equality-matcher | jest | |
| prefer-expect-resolves | jest | |
| prefer-hooks-in-order | jest | |
| prefer-hooks-on-top | jest | |
| prefer-jest-mocked | jest | |
| prefer-lowercase-title | jest | |
| prefer-mock-promise-shorthand | jest | |
| prefer-spy-on | jest | |
| prefer-strict-equal | jest | |
| prefer-to-be | jest | |
| prefer-to-contain | jest | |
| prefer-to-have-length | jest | |
| prefer-todo | jest | |
| require-hook | jest | |
| require-top-level-describe | jest | |
| no-set-state | react | |
| prefer-es-6-class | react | |
| adjacent-overload-signatures | typescript | |
| array-type | typescript | |
| ban-tslint-comment | typescript | |
| consistent-indexed-object-style | typescript | |
| consistent-type-definitions | typescript | |
| no-empty-interface | typescript | |
| prefer-for-of | typescript | |
| prefer-function-type | typescript | |
| catch-error-name | unicorn | |
| empty-brace-spaces | unicorn | |
| error-message | unicorn | |
| filename-case | unicorn | |
| no-await-expression-member | unicorn | |
| no-console-spaces | unicorn | |
| no-null | unicorn | |
| no-unreadable-array-destructuring | unicorn | |
| no-zero-fractions | unicorn | |
| number-literal-case | unicorn | |
| numeric-separators-style | unicorn | |
| prefer-array-flat-map | unicorn | |
| prefer-dom-node-text-content | unicorn | |
| prefer-includes | unicorn | |
| prefer-logical-operator-over-ternary | unicorn | |
| prefer-modern-dom-apis | unicorn | |
| prefer-optional-catch-binding | unicorn | |
| prefer-reflect-apply | unicorn | |
| prefer-spread | unicorn | |
| prefer-string-trim-start-end | unicorn | |
| require-array-join-separator | unicorn | |
| switch-case-braces | unicorn | |
| text-encoding-identifier-case | unicorn | |
| throw-new-error | unicorn | |

## Nursery (9):

New lints that are still under development.
| Rule name | Source | Default |
| --------------------------------- | ------------ | ------- |
| constructor-super | eslint | |
| getter-return | eslint | |
| no-undef | eslint | |
| no-unreachable | eslint | |
| export | import | |
| require-render-return | react | |
| rules-of-hooks | react | |
| no-side-effects-in-initialization | tree_shaking | |
| consistent-type-imports | typescript | |

<!-- textlint-enable -->
