# PLAYEVENTS — Next.js

Site vitrine en français, responsive, avec export statique et métadonnées SEO.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000. `npm run build` génère le site statique dans `out/`.

## Avant la mise en ligne

Copiez `.env.example` vers `.env.local` et indiquez le vrai domaine, l’adresse email, le téléphone, l’adresse et les réseaux sociaux. Les informations manquantes restent « À compléter » sur la page ; le bouton de demande de devis fonctionne après l’ajout de l’email. Ne déployez pas avec les valeurs d’exemple.

Pour l’hébergement statique, publiez le dossier `out/`. Le domaine définit l’URL canonique et les métadonnées de partage. Ajoutez un sitemap lorsque le domaine définitif sera connu. Les visuels du matériel et des installations sont dans `public/images/`. Ils illustrent les catégories et modèles du brief ; les photos de scènes et de régies ne sont pas présentées comme des réalisations de PLAYEVENTS. Remplacez-les par vos photos originales si vous souhaitez montrer vos réalisations.

Sources des visuels : [Sony FX9](https://www.avc-group.com/int/en/product/sony-pxw-fx9-full-frame-6k-camcorder/), [Midas M32 Live](https://www.musictribe.com/), [MAUI 28 G3](https://www.ld-systems.com/fr/maui-g3/29297/maui-28-g3), [DJI Mavic 3 Pro](https://store.dji.com/product/dji-mavic-3-pro), [Absen LED](https://nas.solutions/), [structure scénique](https://legendtruss.in/), [régie vidéo](https://www.inyourfaceproductions.com/). Vérifiez les droits d’usage des visuels avant une exploitation commerciale sur votre domaine.
