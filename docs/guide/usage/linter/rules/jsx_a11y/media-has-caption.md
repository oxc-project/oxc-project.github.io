---
url: /docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.md
---
# jsx\_a11y/media-has-caption&#x20;

### What it does

Checks if `<audio>` and `<video>` elements have a `<track>` element for captions.
This ensures media content is accessible to all users, including those with hearing impairments.

### Why is this bad?

Without captions, audio and video content is not accessible to users who are deaf or hard of hearing.
Captions are also useful for users in noisy environments or where audio is not available.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<audio></audio>
<video></video>
```

Examples of **correct** code for this rule:

```jsx
<audio><track kind="captions" src="caption_file.vtt" /></audio>
<video><track kind="captions" src="caption_file.vtt" /></video>
```

## Configuration

This rule accepts a configuration object with the following properties:

### audio

type: `string[]`

default: `["audio"]`

Element names to treat as `<audio>` elements

### track

type: `string[]`

default: `["track"]`

Element names to treat as `<track>` elements

### video

type: `string[]`

default: `["video"]`

Element names to treat as `<video>` elements

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/media-has-caption": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/media-has-caption --jsx-a11y-plugin
```

:::

## References

* Rule Source
