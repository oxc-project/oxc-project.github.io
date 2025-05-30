<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# security/api-keys <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Disallows hard-coded API keys and other credentials.

### Why is this bad?

Hard-coding API keys and committing them to source control is a serious
security risk.

1. If your code is leaked, attackers can use your API keys to access your
   services and data.
2. Accidental bundling of API keys can lead them to be exposed publicly
   in your website, compriming your services.
3. Any developer or contractor you hire will have access to your
   services, even after they lose access to your codebase.
4. Even after being deleted, they will be visible in your git repo's
   commit history.
5. Key rotation requires a code change and redeployment, and can
   therefore not be handled by security teams or by automated systems.
6. Many, many more reasons.

```ts
const API_KEY = "abcdef123456";
const data = await fetch("/api/some/endpoint", {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
```

### What To Do Instead

:::warning
The Oxc team are not security experts. We do not endorse any particular
key management service or strategy. Do your research and choose the best
solution/architecture for your use case.
:::

One possible alternative is to store secrets in a secure secrets manager
(such as [AWS KMS](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/),
[HashiCorp Vault](https://github.com/nodevault/node-vault/tree/v0.10.2),
[Pangea](https://pangea.cloud/docs/sdk/js/vault#retrieve), etc.) and
request them when your application starts (e.g. a Docker container, an
EC2).

### Examples

Examples of **incorrect** code for this rule:

```js
const AWS_ACCESS_KEY_ID = "AKIA1234X678C123B567";
const OPENAI_API_KEY = "sk_test_1234567890";
```

Examples of **correct** code for this rule:

```js
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const OPENAI_API_KEY = await getSecret("open-ai-api-key");
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/fd0935cfcd660901d612b9b146bc136d40d2f02f/crates/oxc_linter/src/rules/security/api_keys/mod.rs)
