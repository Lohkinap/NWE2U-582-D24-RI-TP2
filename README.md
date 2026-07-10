# TP2: Retour vers le Futur

Réalisé par **Jérémy Roy-Pelletier** `2045783` et **Frédérick Lemieux** `0977928` dans le cadre du cours _Intégration des interfaces web II (582-D64-RI)_ au Cégep de Trois-Rivières.

## Dépôt et accès

> [!WARNING]
>Le fichier [`index.html`](src/index.html) doit être lancé via un serveur local, comme l'extension [vscode-live-server](https://github.com/ritwickdey/vscode-live-server), pour assurer le bon fonctionnement des scripts.

- **Code source:** Disponible sur le [dépôt GitHub](https://github.com/Lohkinap/NWE2U-582-D24-RI-TP2).
- **Clone:** `git clone git@github.com:Lohkinap/NWE2U-582-D24-RI-TP2.git`

## Requis

### Librairies et composants

- Tailwind: https://tailwindcss.com
- DaisyUI: https://daisyui.com
     - Accordéon: https://daisyui.com/components/accordion/#accordion-with-arrow-icon
     - Carrousel : https://daisyui.com/components/carousel/#carousel-with-indicator-buttons
     - Navbar: https://daisyui.com/components/navbar/#navbar-with-menu-and-submenu

### Animations

#### CSS

- `.btn__hover` : propriétés _color_, _scale_, _transform_ au survol du logo
- `.logo__hover` : propriétés _transition_, _color_, _filter_, _transform_ au survol du logo

#### Tailwind

- `<img class="hover:scale-102 transition duration-300">` : effet de _scale_, _transition_, _duration_ au survol des images des sections `#actors`,`#facts`, `#gallery`, `#hero`, `#media`

#### Javascript

- `updateBackgroundPosition()` : effet de parallaxe sur le background de la page
- `initModal()` : animation _zoom in/out_ et _blur_ lors de l'ouverture et la fermeture du modal
- `initCounters()`, `animateCounter()` : animation du compteur _budget_, _box-office mondial_, _gigowatts_ et _miles par heure_

## Répartition des tâches

Nous avons jonglé entre les tâches et réparti le travail selon l'avancement du projet ainsi que nos disponibilités respectives.

|                               | **Jérémy** | **Frédérick** |
| :---------------------------- | :--------: | :-----------: |
| Maquette                      |     -      |       -       |
| Intégration de la maquette    |     x      |       x       |
| Section : présentation        |     x      |       x       |
| Section : images / extraits   |     x      |       x       |
| Section : acteurs             |     x      |       x       |
| Section : lieux de tournage   |     x      |       x       |
| Section : faits divers        |     x      |       x       |
| Section : les coulisses       |     x      |       x       |
| Section : foire aux questions |     x      |       x       |
| Animations                    |     x      |       x       |
| Images                        |     x      |       x       |
| Rédaction du contenu          |     x      |               |
| Documentation                 |            |       x       |
