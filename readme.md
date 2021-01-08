# Anura Syntax

A simple syntax theme based on colors from CotEditor's "Anura" theme.

## Installation

To install Anura, search for `anura-syntax` on Atom's "Install" screen, or use APM:

```
$ apm install anura-syntax
```

## Development

To make changes to Anura:

1. Inside the repo directory, run `apm link -d`. This will symlink the repo folder to `~/.atom/dev/packages/`.
1. Open the directory in dev mode with `atom -d .`. In this mode, any changes you make will appear immediately.

## Publishing to APM

```
npm version X.X.X
git push && git push --tags
apm publish -t vX.X.X
```
