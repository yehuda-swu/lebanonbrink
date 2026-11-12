# Lebanon: A Nation on the Brink

A StandWithUs UK Explore activity for pupils aged 16 to 17, covering Lebanon's creation and early political crises through the start of the 1975 civil war.


## Lightweight GitHub browser upload edition

This package has been compressed for GitHub's website uploader and contains the same eight video excerpts with reduced video resolution. **Extract this ZIP first; upload the contents, not the ZIP file itself.** For detailed instructions and a fallback procedure using smaller upload batches, read `UPLOAD_INSTRUCTIONS.txt`.

## Version 3: The Council Chamber

This edition includes:

* A more prominent political system video at the beginning, accurately cut from 0:00 to 1:36.
* Large pie charts comparing the religious community estimates in the educator's presentation, with a prominent census limitation notice.
* Larger, bolder text, animated icons, enhanced decision controls and mobile layout improvements.
* Three fictional delegates in every chapter. They raise different political concerns and respond when pupils choose an option. Their statements are invented for education, not quotations or unified positions held by entire communities.
* Full width **WHAT REALLY HAPPENED?** screens after all five choices. Historical excerpts attempt to autoplay with sound. A visible Play From Start button is provided if autoplay is blocked by the browser.
* An archival clip for Beirut's golden years and a final video briefing before the council report.
* The existing stability and state authority indicators, historic choices, recap and reset functionality.

## Video excerpts

| Activity screen | Original video interval | Duration | Filename |
| --- | --- | --- | --- |
| Introductory political system film | 0:00 to 1:36 | 1:36 | `videos/political_system_intro.mp4` |
| 1920 reveal | 1:11 to 3:39 | 2:28 | `videos/history_1920.mp4` |
| 1943 reveal | 3:39 to 4:10 | 0:31 | `videos/history_1943.mp4` |
| 1958 reveal | 4:10 to 6:43 | 2:33 | `videos/history_1958.mp4` |
| Beirut's golden years | 6:43 to 7:17 | 0:34 | `videos/history_golden.mp4` |
| 1970 reveal | 7:13 to 8:07 | 0:54 | `videos/history_1970.mp4` |
| 1975 reveal | 8:07 to 13:20 | 5:13 | `videos/history_1975.mp4` |
| Final briefing | 13:20 to 13:52 | 0:32 | `videos/history_final.mp4` |

The documentary excerpts are from *How Lebanon Descended Into Civil War*, credited in the game to **Hikma History**. The separate political system introduction is from *It's complicated: Lebanon's political system*, credited to **TRT World**, as indicated by the original file's branding. Video timings above are source timestamps. Each delivered file starts at time zero and ends at its specified duration.

## Playing the activity

1. Open `index.html` on GitHub Pages and start the background briefing.
2. Watch or skip the political system introduction, then compare the two pie charts.
3. In each chapter, read the problem, consider advice from the fictional delegates, and choose one of three decisions.
4. After confirming, read **WHAT REALLY HAPPENED?** and watch the matching excerpt.
5. Continue through Beirut's golden years, the 1970 crisis and the beginning of the 1975 civil war.
6. Watch the final briefing and review the council report.

The complete video content totals 14 minutes 21 seconds including the introduction. Additional discussion increases the running time. Pupils can skip clips.

## Deploying on GitHub Pages

1. Extract the ZIP and open your existing repository.
2. Upload the **contents** of the extracted folder to the repository root, preserving the `assets` and `videos` folders.
3. Replace the previous `index.html`, `app.js`, `styles.css`, guide and source notes.
4. Commit the changes and ensure **Settings > Pages** is publishing from `main` and the repository root.
5. The largest MP4 file in this edition is less than GitHub's 25 MiB browser upload limit. If GitHub rejects large uploads, use Git from your computer instead.

Suggested commit message:

`Improve Lebanon simulation with council voices and historical video reveals`

If you maintain the repository locally:

```bash
git add -A
git commit -m "Improve Lebanon simulation with council voices and historical video reveals"
git push origin main
```

Delete the old video filenames (`civil_war.mp4`, `national_pact.mp4` and `plo_in_lebanon.mp4`) from the repository when replacing version 2 so they do not remain as unused files.

## Editing the experience

* `app.js`: `CHAPTERS` contains decisions; `DELEGATES` contains fictional council reactions; `VIDEO_CLIPS` sets video titles and timestamps; `intro()`, `revealPage()` and `finalVideo()` control the screens.
* `styles.css`: fonts, colours, animation and responsive layout.
* `assets`: archive imagery and posters from the educator's presentation.
* `videos`: eight short MP4 files, encoded to play directly on GitHub Pages.
* `EDUCATOR_GUIDE.md`: classroom notes and prompts.
* `SOURCES.md`: historical and audiovisual credits.

## Accuracy, rights and privacy

Simulation scores are teaching devices. They are not historical evidence and student choices cannot rewrite documented events. The religious community percentages are from the supplied presentation and should not be presented as precise census data. Lebanon last held a national official census in 1932.

**Copyright:** The photographs and films were supplied to adapt the activity, but the supply of a file does not itself grant permission to redistribute it publicly. Check publication and excerpting rights with the original video and photography owners before enabling a public GitHub Pages site. The game does not collect or send student names or their choices to a server.
