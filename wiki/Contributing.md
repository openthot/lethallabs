# Contributing to Lethal Labs Open Source

First, thank you for considering contributing to our repositories. At Lethal Labs, we value rigorous engineering and heavily depend on external contributions to harden our systems.

## 📝 The Process

1. **Find an Issue**: Ensure there is an open issue for your proposed change. If it's a new feature, open an RFC (Request for Comments) issue first before writing any code. We will not accept large PRs without prior discussion.
2. **Branch Naming**: 
   - Feature: `feat/issue-number-short-description`
   - Bugfix: `fix/issue-number-short-description`
   - Refactor: `refactor/issue-number-short-description`
3. **Draft PR**: Open a draft PR early to signal you are working on it and to get preliminary feedback on the architecture.
4. **Tests & Linting**: All CI pipelines must pass. The coverage cannot drop. 
5. **Review**: A core team member (an Insider) will review. We practice ruthless code reviews—do not take feedback personally. It is purely about code quality.

## 📏 Code Standards

- **Formatting**: We use `Prettier`. Do not bypass the git hooks.
- **Commit Messages**: We strictly follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
  - Example: `feat(router): implement prefetching strategy options`
  - Example: `fix(ui): resolve z-index collision on modal component`

## ⚖️ Pull Request Requirements

Every PR description must include:
- A link to the original issue.
- A concise summary of the architectural approach taken.
- Documentation updates (if the API surface changed).
- Steps on how to locally test the change.
