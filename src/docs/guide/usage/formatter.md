# Formatter

The Oxc formatter is currently under active development. Our goal is to create a Prettier-compatible formatter that provides significantly faster formatting speeds while maintaining full compatibility with Prettier's output.

## Current Status

🚧 **Work in Progress** - The formatter is in the prototype stage and not yet ready for production use.

## Design Goals

- **Prettier Compatibility**: 100% compatible with Prettier's formatting output
- **Performance**: Significantly faster than Prettier (targeting 10x+ improvement)
- **Memory Efficiency**: Lower memory usage compared to existing formatters
- **Language Support**: JavaScript, TypeScript, JSX, and TSX

## Development Progress

- ✅ Core formatting infrastructure
- ✅ Basic JavaScript formatting
- 🚧 TypeScript support
- 🚧 JSX/TSX support
- ⏳ Plugin system
- ⏳ Configuration compatibility

## Using Prettier with Oxc Parser

While the Oxc formatter is under development, you can already benefit from Oxc's parsing speed by using the [@prettier/plugin-oxc](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc) plugin with Prettier.

### Installation

```bash
npm install --save-dev @prettier/plugin-oxc
```

### Configuration

Add the plugin to your Prettier configuration:

```json
{
  "plugins": ["@prettier/plugin-oxc"]
}
```

### Benefits

- **Faster parsing**: Up to 3x faster parsing compared to Prettier's default parser
- **Better error handling**: More accurate error messages and recovery
- **Full compatibility**: Drop-in replacement with identical formatting output

## Future Plans

- **Language Server Integration**: Built-in formatting support for editors
- **Watch Mode**: Efficient file watching and incremental formatting
- **Custom Rules**: Extensible formatting rules beyond Prettier's capabilities
- **Batch Processing**: Optimized formatting for large codebases

## Contributing

The formatter development is tracked in our [GitHub repository](https://github.com/oxc-project/oxc). We welcome contributions and feedback on the formatter architecture and implementation.

For updates on the formatter progress, follow our [GitHub issues](https://github.com/oxc-project/oxc/labels/C-formatter) and [Discord community](https://discord.gg/9uXCAwqQZW).
