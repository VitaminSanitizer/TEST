# Sine Mora Advisory — pilot website

A one-page marketing site for Sine Mora Advisory, built with [Astro](https://astro.build) and plain CSS. It's a static site: no server, no database, and almost no JavaScript. The only script handles the interest form.

---

## Editing the text (no coding needed)

**All of the words on the site live in one file: [`src/content/site.ts`](src/content/site.ts).**

1. Open `src/content/site.ts` (you can edit it directly on GitHub: open the file and click the pencil icon).
2. Change only the text **inside the quotes**.
3. If your text needs an apostrophe, use the curly one (`’`), not the straight one (`'`). A straight apostrophe inside single quotes breaks the file.
4. Save or commit. If the site is deployed from GitHub, it rebuilds automatically within a minute or two.

The file has a comment at the top of each section explaining what it controls. Anything marked `PLACEHOLDER` should be replaced before launch.

### Adding or removing a team member

In `site.ts`, find `team` → `members`. Each person is one block:

```ts
{
  name: 'Jane Doe',
  school: 'The Wharton School',
  major: 'Economics',
  bio: 'A few sentences about Jane.',
  photo: 'team/jane.jpg',
  photoAlt: 'Portrait of Jane Doe',
},
```

- **Add someone:** copy a whole block (from `{` to `},`), paste it after the last one, and edit it.
- **Remove someone:** delete their whole block.
- **Photos:** put the image in [`public/team/`](public/team/), then set `photo` to `'team/<file name>'`. A portrait (4:5) image around 800×1000 px works best. Photos are shown in black and white for consistency. Leave `photo: ''` to show the person's initials instead.

FAQ items work the same way (`faq` → `items`).

### Connecting the interest form

The form uses [Formspree](https://formspree.io), which works on static sites and has a free tier.

1. Create a Formspree account and a new form.
2. Copy the form's endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
3. In `site.ts`, replace `https://formspree.io/f/YOUR_FORM_ID` with it.

Until you do this, submitting the form shows a message asking people to email you instead. Submissions arrive in your Formspree inbox and by email. Formspree may ask you to confirm the first submission.

### Also update before launch

- `contactEmail`: the address shown in the footer.
- `form.gradYears`: update once a year.
- The team placeholders and FAQ answers.

---

## Running it locally

You need [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. The page reloads automatically when you save a file.

To produce the final static files in `dist/` and preview them:

```bash
npm run build
```

```bash
npm run preview
```

---

## Deploying

### Option A: GitHub Pages (already set up)

A workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes the site on every push to `main`.

One-time setup:

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab).

The site will be at `https://<username>.github.io/<repo-name>/`. The workflow sets the base path automatically, and it also works with a custom domain set in **Settings → Pages**.

> GitHub Pages on a free account requires the repository to be public.

### Option B: Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Vercel detects Astro automatically. Keep the defaults and click **Deploy**.

No environment variables are needed, because the site is served from the domain root. Optionally, set `SITE` to your final URL (for example `https://sinemoraadvisory.com`) so canonical links point to it.

---

## Project structure

```
src/
  content/site.ts        ← all copy (edit this)
  components/            ← one file per page section
  layouts/Base.astro     ← <head>, fonts, meta tags
  pages/index.astro      ← puts the sections in order
  styles/global.css      ← colors, fonts, spacing (design tokens at the top)
public/
  favicon.svg
  team/                  ← team photos
```

- **Colors and fonts:** change the variables at the top of `src/styles/global.css`. Dark mode colors are in the two dark blocks just below; keep them identical.
- **Light/dark button:** `src/components/ThemeToggle.astro`. It follows the visitor's device setting until they click it, then remembers their choice. To remove it, delete the `<ThemeToggle />` line in `src/layouts/Base.astro`.
- **Reordering or removing a section:** edit the list of components in `src/pages/index.astro`.

## Brand notes

Sine Mora Advisory is independent. Don't use the University of Pennsylvania's name in a way that implies endorsement, and never use its logos, seal, or official red and blue colors. Keep the non-affiliation disclaimer in the footer and FAQ.
