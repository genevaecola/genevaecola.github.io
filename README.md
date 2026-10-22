# Geneva Ecola — single-page academic website

This version keeps the original lavender and purple palette, Arial typography, rounded cards, portrait, publication images, and contact buttons. The portrait stays in a wider left sidebar above larger section links that highlight as you scroll. A first-person About Me introduction replaces the large research headline. The tab icon traces the supplied chirp waveform. Contact buttons sit in the top bar. Dates are larger and centered in their columns. On smaller screens a compact portrait and section navigation remain below the top bar. Talks, Posters, News, and the bottom contact section have been removed.

## Preview

Open index.html in a browser. For a local server, run `python3 -m http.server 8000` in this folder, then visit http://localhost:8000.

## Update GitHub Pages

1. Unzip this folder.
2. In the genevaecola.github.io repository, choose **Add file → Upload files**.
3. Drag the files and the images folder **inside** this folder into the repository root (where index.html currently lives). Do not upload the ZIP or its enclosing folder.
4. Delete the old `publications.html`, `experience.html`, and `contact.html` files from the repository. Uploading this ZIP’s contents does not remove existing files. In GitHub, open each old file, use its file menu to delete it, and commit the deletion.
5. Commit the upload to main. GitHub Pages will rebuild the site using the existing repository configuration.
6. Refresh the live site after deployment. If the old appearance is cached, use a hard refresh.

Keep CNAME, favicon.svg, GenevaEcolaCV.pdf, images/, index.html, style.css, script.js only. The old publications.html, experience.html and contact.html pages have been removed from this package; delete them from the GitHub repository too. Old page URLs will no longer resolve, so use section links such as /#publications instead. The existing Google Analytics tag and custom domain are preserved.

## Content updates

Edit the matching section in index.html; each section has an id such as publications or teaching. Add or remove matching links in the section navigation when changing sections. Replace GenevaEcolaCV.pdf to update the downloadable CV.

Content comes from the supplied website and October 2026 CV. Research interests are retained from the website. Education, research and professional experience, fellowships, awards, teaching and service include the CV entries. Publication links and images are retained and ordered newest first. Obvious spelling errors in the website were corrected. No build tool, framework, or installation is needed.
