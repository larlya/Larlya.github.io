# Bewerbung Social Media – urgewald

Statische Bewerbungswebsite für die Stelle „Social-Media / digitale Kommunikation“ bei urgewald e.V.

## Lokal ansehen

`index.html` im Browser öffnen oder einen lokalen Server starten (z.B. `npx serve .`).

## Inhalte anpassen

- **Profilbild:** Im Hauptrepo wird `../Bewerbung_Quadrat.png` verwendet. Für das Subdomain-Repo bitte eine Kopie als `assets/images/profil.jpg` anlegen und in `index.html` die Bild-URL auf `assets/images/profil.jpg` umstellen.
- **Lebenslauf & Anhang:** Die Seite verlinkt auf `assets/docs/urgewald_Bewerbung_Andres_Lebenslauf.pdf` und `assets/docs/urgewald_Bewerbung_Andres_Anhang.pdf`.
- **Beispielposts (Sektion 3):** Platzhalter-Texte und -Bilder in `index.html` ersetzen. Das Urgewald-Profilbild (Logo mit Schriftzug + Tier) in den Post-Headern wird aus `assets/images/urgewald-profil.png` geladen – diese Datei bitte anlegen (z.B. vom urgewald-Instagram oder der Website).

## Deployment (Subdomain)

Für `urgewald.lara-marie-andres.de`:

1. Diesen Ordner als eigenes GitHub-Repository anlegen (z.B. `urgewald-bewerbung`).
2. GitHub Pages aktivieren (Branch: main, Root).
3. `CNAME` enthält bereits `urgewald.lara-marie-andres.de`.
4. DNS für die Subdomain zeigt bereits auf GitHub Pages.
