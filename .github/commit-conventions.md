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

If you are a husky user, please execute before committing

```bash
pnpm run reset:githooks
```

[Debug](simple-git-hooks-link)

<!-- link -->

[simple-git-hooks-link]: https://zqy233.github.io/zqy-blog/1.%E5%9F%BA%E7%A1%80/8.%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83%E5%8C%96/simple-git-hooks.html
