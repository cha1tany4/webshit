# Webshit

A curated archive documenting the technical, ethical, psychological, and systemic failures of modern web environments.

**Live site:** [webshit.org](https://webshit.org)

## What This Is

The web has a problem. Pages that take 10 seconds to load. Consent dialogs designed to make opting out impossible. Infinite scroll engineered to hijack attention. Webshit documents these failures — not to doomscroll about them, but to name them clearly, understand why they happen, and point toward better approaches.

**Coverage areas:**
- **Technical** — Bloated JavaScript, slow load times, broken accessibility
- **Ethical** — Dark patterns, surveillance capitalism, manipulative design
- **Psychological** — Attention hijacking, addiction mechanics, burnout design
- **Systemic** — Platform consolidation, incentive misalignment, regulatory capture

## How the Site Is Built

Webshit practices what it preaches:

- Static HTML via [Jekyll](https://jekyllrb.com/) — no server-side processing
- Hosted on [GitHub Pages](https://pages.github.com/)
- Styled with [Pico CSS](https://picocss.com/) — 6KB, classless, semantic
- Analytics via [GoatCounter](https://www.goatcounter.com/) — no cookies, no tracking pixels
- No JavaScript frameworks. No newsletter modals. No cookie banners.
- Loads in under 1 second on 3G

## Contributing

We welcome posts, corrections, and accessibility fixes. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full process.

Quick version:
- **Shorts** — up to 300 words, direct observation
- **Essays** — 1500–3000 words, with context, causes, and solutions
- Always cite sources. Always suggest better approaches.

To submit a post:

1. Fork the repo
2. `git checkout -b post/your-post-title`
3. Add yourself to `_data/authors.yml` if this is your first post
4. Write your post in `_posts/YYYY-MM-DD-title.md`
5. Open a pull request

## License

Content is published under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Share and adapt freely, with attribution, for non-commercial purposes only.
