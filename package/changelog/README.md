# changeset use command

more info: [prereleases](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)
semver specification: [semver.org](https://semver.org/)

## version construction

npm: [about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)
calculate: [npm semver](https://semver.npmjs.com/)

> 0.0.0 => (major.minor.patch)

### step1: set changelog

```bash
pnpm changeset
```

### step2: enter test select version

```bash
pnpm changeset pre enter alpha   # alpha version
# or
pnpm changeset pre enter beta    # beta version
# or
pnpm changeset pre enter rc      # rc version

```

### step3: generated test version

```bash
pnpm changeset version
```

### step4: exit test pre

```bash
pnpm changeset pre exit
```

### tep5: release the official version

```bash
pnpm changeset version

```
