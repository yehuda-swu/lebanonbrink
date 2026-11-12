# Lebanon: A Nation on the Brink

An interactive StandWithUs UK Explore activity designed for students aged 16 to 17.

## What pupils do

Pupils advise an imagined council in five historical chapters:

1. 1920: The creation of Greater Lebanon
2. 1943: The National Pact and independence
3. 1958: Political crisis and foreign intervention
4. 1970: The growing presence of the PLO
5. 1975: The outbreak of the Lebanese Civil War

In each chapter, pupils choose one of three responses and then reveal what actually happened. Two simulated meters illustrate possible tensions between national stability and state authority. These meters are **not actual historical statistics or predictions**.

The activity also has a short golden years interlude after 1958, an end of activity briefing, an educator guide, and a sources panel.

## Contents

* `index.html` is the entry page.
* `styles.css` contains the design and responsive layout.
* `app.js` contains the chapter content, scenarios, and score logic.
* `assets/` contains selected images extracted from the source presentation.
* `EDUCATOR_GUIDE.md` provides lesson instructions.
* `SOURCES.md` provides references and image notes.

## Run locally

Open `index.html` in a browser. The activity does not require a server or external database. Google Fonts are optional; system font fallbacks are included.

## Publish to GitHub Pages

1. Create a public repository at GitHub named `lebanonbrink`.
2. Unzip the downloaded archive on your computer.
3. Open the new repository and choose **Add file**, then **Upload files**.
4. Upload the **contents** of the extracted folder, not the ZIP archive or a folder enclosing `index.html`.
5. Enter the commit message **Add Lebanon: A Nation on the Brink interactive activity**.
6. Open **Settings**, then **Pages**.
7. Select **Deploy from a branch**. Choose `main` and `/ (root)`, then save.
8. Once GitHub Pages finishes publishing, the expected address is `https://yehuda-swu.github.io/lebanonbrink/` if the repository is under the `yehuda-swu` account.

If working with a local Git repository instead of the GitHub uploader:

```bash
git add .
git commit -m "Add Lebanon: A Nation on the Brink interactive activity"
git push origin main
```

## Change the chapters

The `CHAPTERS` array at the top of `app.js` holds the text, source notes, images, choices and hypothetical score impacts. Each choice has a `stability` and `authority` value. The actual historical reveal remains the same irrespective of the pupil's choice.

## Images and rights

The photographs and maps in `assets/` are crops of pages from the original presentation supplied for this request. They are included to demonstrate the intended lesson design. The original presentation may contain third party photographs with separate rights. **Please confirm the appropriate permissions before publishing the activity to a public website.** If required, replace the JPG images in `assets/` with licensed alternatives, keeping the same filenames.

This package does not include any video files.

## Practical notes

* Designed for desktop, interactive whiteboards, tablets and phones.
* No pupils' details are sent to a server.
* The optional council name is held only in the current page session.
* The reset button returns the game to the welcome screen.
* A printable final report is included.
* All assets are local except the optional fonts and hyperlinks to historical sources.
