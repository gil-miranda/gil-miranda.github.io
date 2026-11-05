# Gil Neto — personal portfolio

A lightweight responsive personal landing page. Zero frameworks, zero build step, no analytics or third-party scripts.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then go to `http://localhost:8080`.

## Publish to GitHub Pages

1. Sign in to GitHub as `gil-miranda`.
2. Create a **Public** repository named `gil-miranda.github.io` (if that name isn't already used). Do not check "Add a README".
3. Upload the files in the *root* of `gil-neto-portfolio-github-pages.zip` to the `main` branch. `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/` must all be in the repository root (not under a `gil-neto-portfolio/` directory).
4. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)` and save.
5. GitHub Pages should publish to `https://gil-miranda.github.io/`. This is an expected address, not a verified live deployment.

Alternative: for a separate repository named `gil-neto-portfolio`, the expected address is `https://gil-miranda.github.io/gil-neto-portfolio/`.

No build step, dependencies, secrets or analytics are required. The repo should be public for standard Free-plan Pages hosting.

## Other hosting

Cloudflare Pages (Direct Upload) and Netlify Drop work too. Git-based Cloudflare Pages: framework preset **None**, build command **blank**, output directory **/**.

## Customize

- Edit `index.html` for texts, projects and outbound links.
- Edit `styles.css` for colors and typography (theme variables at the top).
- Replace `assets/avatar.webp` and `assets/banner.webp` to update the art.
- Change `https://x.com/teoremaespectra` if your X handle changes.
- **Important:** statuses are deliberately factual: published election data app; the other three cards are explorations or concepts, not represented as shipped products.
- After publishing, update `<meta property="og:image">` with an absolute URL to your hosted banner for robust link previews.

All images used in this project were generated for you in this conversation.
