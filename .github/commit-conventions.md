## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

#### TL;DR:

Messages must be matched by the following regex:

```regexp
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

#### Examples

Appears under "Features" header, `eslint` subheader:

```
feat(eslint): add 'comments' option
```

Appears under "Bug Fixes" header, `eslint-model` subheader, with a link to issue #297:

```
fix(eslint-model): handle events on blur

close #297
```
