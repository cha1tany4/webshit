---
layout: page
title: Contribute
permalink: /contribute/
---

Webshit is a community archive. We welcome contributions from anyone who's noticed a web failure worth documenting.

## How to Contribute

1. **Open an issue** — Suggest a topic or report an error in an existing post
2. **Submit a pull request** — Write a post following the guidelines below
3. **Share the site** — Link to posts, share via RSS, tell people about it

## Writing Guidelines

### What We Publish

- **Shorts** (up to 300 words) — A direct observation or take. Punchy, clear, no fluff.
- **Essays** (1500–3000 words) — Deep analysis with context, causes, and solutions.

### Quality Standards

- **Evidence-based** — Cite sources. Link to documentation, research, or primary sources.
- **Fair** — Acknowledge constraints and tradeoffs. Companies are made of people with real pressures.
- **Constructive** — Always gesture toward better approaches. Criticism alone isn't enough.
- **Direct** — No hedging. No "some might say." State your position.

### Post Format

```yaml
---
layout: post
title: "Clear, specific title"
date: YYYY-MM-DD
category: technical  # technical | ethical | psychological | systemic
tags: [tag1, tag2]
author: your-key    # must match your entry in _data/authors.yml
type: short         # short | essay
---
```

### Adding Yourself as an Author

Before submitting your first post, add yourself to `_data/authors.yml`:

```yaml
your-key:
  name: Your Name or Handle
  bio: One sentence about you.
  url: https://yoursite.com  # optional
```

Use a short lowercase key with hyphens (e.g. `jane-doe`). This key goes in the `author` field of your post frontmatter.

### Submission Checklist

- [ ] Added yourself to `_data/authors.yml`
- [ ] Follows the post template above
- [ ] Sources linked inline
- [ ] Spelling and grammar checked
- [ ] No personally identifying information about private individuals
- [ ] Stays on-topic (web failures)

## Code of Conduct

Be direct. Be fair. No harassment. See the [Code of Conduct](https://github.com/webshitorg/webshit/blob/main/CODE_OF_CONDUCT.md) for full details.
