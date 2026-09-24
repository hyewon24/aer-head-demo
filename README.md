# AER Heads — demo page

Static academic project page for **Acoustic Event Realization (AER) Heads** — causally validated cross-attention heads in text-to-audio diffusion models (Stable Audio Open, TANGO, AudioLDM2).

## TODO before publishing

- [ ] Add `paper.pdf` to this folder (the previous owner's PDF was removed — do not reuse it).

## Structure

- **Abstract** — paper abstract.
- **01 / AER Head Masking** (`#aer-head-masking`) — for each of Stable Audio Open / TANGO / AudioLDM2, curated examples comparing Baseline / Bottom-ranked / Random / Top-ranked (AER heads) masking, each at that model's own masking ratio (SAO 10%, TANGO 40%, AudioLDM2 20%). Opens with a same-prompt ("A cat meowing repeatedly") comparison across all four conditions.
- **02 / Low-Ranked Head Masking** (`#low-ranked-masking`) — control condition: masking the lowest-ranked heads, at percentages well beyond the AER range above (SAO 60/70/80%, TANGO 10/20/30%, AudioLDM2 30/40/50%). Generation performance stays close to baseline up to SAO 70% / TANGO 20% / AudioLDM2 40%; the next step up per model (labeled "beyond range" on the card) is where quantitative degradation begins.

## Deploy on GitHub Pages

1. Copy the contents of this folder to your repository root (or `docs/`), so `index.html` sits at that location. Include `samples/`, `img/`, `style.css`, `script.js`, `favicon.svg`, `paper.pdf` (once added), and the hidden `.nojekyll` file.
2. Commit to `main`.
3. Repository **Settings → Pages** → Deploy from a branch → `main` (and `/root` or `/docs`, matching where you placed the files).
4. Wait for the deployment, then open the URL shown in Pages settings.

## Preview locally

Open `index.html` directly, or run `python3 -m http.server 8000` from inside this folder and visit `http://localhost:8000`.

## Editing

Edit copy and sample labels directly in `index.html`. Design tokens (colors, spacing) are at the top of `style.css`; the AER-specific additions (4-column audio grids, 3-column model comparison, mel-spectrogram thumbnails) are appended at the end of that file. `script.js` is unchanged from the template — it pauses other players when one starts playing and pauses a group's audio when its `<details>` is collapsed.
