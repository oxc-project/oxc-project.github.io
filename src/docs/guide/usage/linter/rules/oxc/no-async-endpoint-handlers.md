<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/no_async_endpoint_handlers.rs`;
</script>

# oxc/no-async-endpoint-handlers <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Disallows the use of `async` functions as Express endpoint handlers.

### Why is this bad?

Before v5, Express will not automatically handle Promise rejections from
handler functions with your application's error handler. You must
instead explicitly pass the rejected promise to `next()`.

```js
const app = express();
app.get("/", (req, res, next) => {
  new Promise((resolve, reject) => {
    return User.findById(req.params.id);
  })
    .then(user => res.json(user))
    .catch(next);
});
```

If this is not done, your server will crash with an unhandled promise
rejection.

```js
const app = express();
app.get("/", async (req, res) => {
  // Server will crash if User.findById rejects
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

See [Express' Error Handling Guide](https://expressjs.com/en/guide/error-handling.html) for more
information.

### Examples

Examples of **incorrect** code for this rule:

```js
const app = express();
app.get("/", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

const router = express.Router();
router.use(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  req.user = user;
  next();
});

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
app.post("/user", createUser);

// Async handlers that are imported will not be detected because each
// file is checked in isolation. This does not trigger the rule, but still
// violates it and _will_ result in server crashes.
const asyncHandler = require("./asyncHandler");
app.get("/async", asyncHandler);
```

Examples of **correct** code for this rule:

```js
const app = express();
// not async
app.use((req, res, next) => {
  req.receivedAt = Date.now();
});

app.get("/", (req, res, next) => {
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
});

const asyncHandler = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};
app.get("/user", (req, res, next) => asyncHandler(req, res).catch(next));
```

## Configuration

This rule takes the following configuration:

```ts
type NoAsyncEndpointHandlersConfig = {
  /**
   * An array of names that are allowed to be async.
   */
  allowedNames?: string[];
};
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/no-async-endpoint-handlers
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-async-endpoint-handlers": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
