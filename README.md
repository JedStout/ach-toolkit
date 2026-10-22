# ach-toolkit

[![CI](https://github.com/JedStout/ach-toolkit/actions/workflows/ci.yml/badge.svg)](https://github.com/JedStout/ach-toolkit/actions/workflows/ci.yml)

A TypeScript library, CLI, and browser-based viewer for parsing and validating
[NACHA](https://www.nacha.org/) ACH payment files.

ACH files are 94-character fixed-width text files that carry payroll, vendor payments, and direct
debits between US banks. They're easy to get subtly wrong: a bad routing check digit, an entry
hash that doesn't add up, or a batch total off by a cent. `ach-toolkit` makes those problems easy
to see.

> **Status:** early development. The API will change until 1.0.

## Roadmap

- [x] Project scaffold (#1)
- [ ] Parse files into a typed model (#2)
- [ ] Validation: check digits, hashes, counts, totals (#3)
- [ ] Export to JSON and CSV (#4)
- [ ] Command-line interface (#5)
- [ ] Web viewer (#6)
- [ ] Publish to npm (#7)

## Development

Requires Node.js 22 or later.

```sh
npm install
npm test          # run the test suite
npm run lint      # ESLint
npm run typecheck # TypeScript, no emit
npm run build     # compile to dist/
```

## License

[MIT](LICENSE)
