# Lebanon: A Nation on the Brink

An interactive StandWithUs UK Explore history activity for students aged 16 to 17.

## Version 2: Background and documentary edition

This update expands the original five chapter simulation:

* An introductory briefing on Lebanon's different religious communities and changing demographic estimates.
* A clear explanation of the 1943 National Pact and the key political offices.
* Four optional short video extracts from the two source videos supplied by the educator.
* A corrected image for the 1958 crisis: the 1958 US intervention photograph from the original Northern Arrows presentation, rather than a photograph of Gamal Abdel Nasser.
* Revised teacher guidance, source notes and classroom viewing instructions.

The original five decision chapters, historical reveals, scoring logic, midpoint interlude, final council report and reset feature remain in place.

## Classroom journey

1. Welcome screen. Optional council name.
2. **Context briefing:** Compare religious communities and learn how leadership positions were shared. Watch the political system video or continue directly.
3. **1920:** Creating Greater Lebanon.
4. **1943:** Independence and the National Pact. Optional documentary clip.
5. **1958:** Lebanese political crisis and US intervention.
6. **1960s:** Beirut's golden years.
7. **1970:** The growth of the PLO's presence. Optional documentary clip.
8. **1975:** The outbreak of the civil war. Optional documentary clip.
9. Final council report and discussion.

Running time: approximately 12 to 15 minutes without video, or around 20 to 25 minutes with every video and classroom discussion. Students may skip any clip.

## Contents

* `index.html` starts the activity.
* `styles.css` controls the layout and mobile experience.
* `app.js` contains introduction content, chapter decisions, historical reveals, scores and video placements.
* `assets/` includes the images and video posters.
* `videos/` includes four shortened MP4 clips optimised for static GitHub hosting.
* `EDUCATOR_GUIDE.md` offers lesson guidance.
* `SOURCES.md` records citations, notes about estimates, clip timings and the rights reminder.

## GitHub Pages upload

1. Open your existing repository, such as `yehuda-swu/lebanonbrink`.
2. Extract this ZIP on your computer.
3. Upload the **contents** of the extracted folder into the **root** of the repository, including the `assets` and `videos` folders.
4. Overwrite old versions of `index.html`, `styles.css`, `app.js`, `README.md`, `EDUCATOR_GUIDE.md` and `SOURCES.md`.
5. Commit the changes.
6. Make sure GitHub Pages deploys from the `main` branch and root folder in **Settings > Pages**.

Suggested commit message:

`Add Lebanon background briefing and documentary clips`

For a locally cloned Git repository:

```bash
git add .
git commit -m "Add Lebanon background briefing and documentary clips"
git push origin main
```

If no repository exists, create a public repository, upload these files and enable GitHub Pages from `main` and `/ (root)`.

## Changing the activity

The `CHAPTERS` array in `app.js` contains the five chapters. To update the introduction, edit the `intro()` function. The rounded demographic illustrations are in that function. Video definitions are stored in `VIDEO_CLIPS`, and the player markup is handled by `clipCard()`.

Score changes are simulated classroom interpretations and not historical statistics or predictions. Student decisions do not change the documented historical outcome.

## Rights and privacy

The supplied presentation and both uploaded videos may include copyrighted material owned by others. The video extracts are included to support your local education workflow, but possession of downloaded media does not establish permission to redistribute them publicly through GitHub Pages. **Check licensing and obtain any necessary permissions before public deployment.** If you cannot republish the clips, remove the video files and ask to switch to linked, authorised original videos instead.

The activity is static and does not transmit student names or decisions to a database. Optional Google Fonts may be requested by browsers when connected.
