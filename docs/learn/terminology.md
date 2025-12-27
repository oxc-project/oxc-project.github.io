---
url: /docs/learn/terminology.md
---

# Terminology

## Binding

A value being assigned/bound within a scope.

## Binding type

The type of the binding: imported value, assigned value (let/const/var), exported value, func/class declaration, func/method arguments, etc.

## Scope

A block in which bindings can exist. A block is any code surrounded with {}, such as classes, functions, methods, callbacks, if/else, etc. Scopes have a hierarchy, with parents having children (not always), and children belonging to a parent. Bindings in a child shadow those in a parent if they have the same name.

## Scope flags

Metadata about the current scope (not inherited hierarchy scope): function, constructor, top-level (program), etc.

## Symbol

A binding wrapper with references to each usage/call site of the bound variable within the current source text. A symbol is assigned an ID in the order they are scanned, and reach reference points to the symbol by that ID.

## Symbol flags

Metadata about the symbol/binding.

## Reference

A symbol reference is the usage of a symbol (and in turn a binding), and is assigned an ID in the order they are scanned. Each reference is flagged as read, write, or both.

## Span

The start/end offset of the node within the source text.
