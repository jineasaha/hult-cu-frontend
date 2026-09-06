# Hult Prize — Git & Development Workflow

## 1. First-Time Setup on a New Laptop

Install:
- Git
- Node.js

Then:

```bash
git clone <github-repository-url>
cd <project-folder>
npm install
npm run dev
```

---

## 2. Before Starting Work

Always update `main` first:

```bash
git checkout main
git pull origin main
```

Then switch to your personal dev branch.

Each developer must use their own branch named with their name:

```bash
git checkout rajdeep
```

If the branch does not exist yet:

```bash
git checkout -b rajdeep
```

Start the project:

```bash
npm run dev
```

---

## 3. While Working

Work only on your own `yourname` branch.

Check your changes:

```bash
git status
git diff
```

Commit regularly:

```bash
git add .
git commit -m "feat: add events section"
```

### Commit Message Formats

```text
feat: add <feature>
fix: fix <bug>
style: update <styling>
refactor: improve <code>
docs: update <documentation>
```

Examples:

```text
feat: add about section
fix: fix mobile navbar
style: update hero section
```

---

## 4. Rebase vs Merge

### Rebase

Use **rebase when `main` has new changes and you need to update your dev branch**.

```bash
git checkout main
git pull origin main

git checkout yourname
git rebase main
```

If there are conflicts:

```bash
# Resolve the conflicts in the files

git add .
git rebase --continue
```

Then test your project.

> **Rebase = update your dev branch with the latest `main`.**

Do **not** any branch from rebase `main`.

---

### Merge

Use **merge when your work is complete and you are putting your dev branch into `main`**.

First make sure your dev branch is up to date:

```bash
git checkout main
git pull origin main

git checkout yourname
git rebase main
```

Test the project:

```bash
npm run dev
npm run build
```

Then merge into `main`:

```bash
git checkout main
git merge yourname
git push origin main
```

> **Merge = put completed work from your dev branch into `main`.**

---

## 5. Before Finishing Work

Check and test:

```bash
git status
npm run build
```

Commit:

```bash
git add .
git commit -m "feat: complete <task>"
```

Push your branch:

```bash
git push -u origin yourname
```

After your work is merged into `main`, update your local `main`:

```bash
git checkout main
git pull origin main
```

### Golden Rule

```text
main          → stable working version
yourname      → your development work
rebase        → update dev branch from main
merge         → move completed dev work into main
```

**Never develop directly on `main`.**
