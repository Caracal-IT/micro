# micro

## Project Overview

This project uses a structured AI context system to keep instructions,
skills, agents, and prompts organised.

**Stack:** Go  
**Generator:** opencode CLI

### AI System Architecture

```text
.opencode/ (source of truth)
    ↓
opencode generator
    ↓
.opencode/ (AI consumption layer)
```

---

## AI System

| Directory    | Role                                                 |
|--------------|------------------------------------------------------|
| `.opencode/` | Source of truth generated from selected `src/` items |

---

## Selected AI Items

- capabilities: docker
- language: go

---

## Initialization Flow

The `init` wizard walks through the following steps:

1. **Project detection** – auto-detects the project type from the filesystem.
2. **Project type confirmation** – Node.js, Go, Java, C#, Python, Rust, or Empty.
3. **Category selection** – each `src/<category>/` section is shown in the wizard.
4. **Item selection** – choose sub-folder items with checkbox controls (spacebar / pointer).
5. **Generation** – copies selected files into `.opencode/`.
6. **Update** – marks installed items and re-copies marked items on update.

---

## CLI Commands

```bash
# Initialise a new AI workspace (runs the interactive wizard)
npx github:Caracal-IT/ai init

# Initialise in a specific directory
npx github:Caracal-IT/ai init ./my-project

# Regenerate .opencode/
npx github:Caracal-IT/ai generate

# Update an existing AI workspace
npx github:Caracal-IT/ai update
```
