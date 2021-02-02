# Anura Syntax

A simple syntax theme based on colors from CotEditor's "Anura" theme.

<img src="https://raw.githubusercontent.com/timgthomas/anura-syntax/master/preview.png" width="475" height="389">

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

Publish a new version with `apm` (note that this also pushes the new release tag):

```
apm publish [<newversion> | major | minor | patch | build]
```
