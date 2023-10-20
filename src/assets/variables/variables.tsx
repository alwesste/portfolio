export const presentation : string = `Après avoir passé quatre années à l'étranger. J'ai decide de me reconvertir dans un domaine qui me passionne "le developpement web".
Pour cela j'ai passer une certification RNCP de niveau 5 chez openclassrooms. Au cours de ma formation, j'ai acquis une solide expertise dans un éventail
de technologies essentielles pour le développement front-end. J'ai développé des compétences en JavaScript, TypeScript, React, Vue, Redux, HTML5, CSS3, Sass et l'optimisation web. 
Ma connaissance du référencement (SEO) et mon expérience dans l'optimisation de sites web garantissent que les projets que je touche sont non seulement visuellement attrayants, 
mais aussi performants sur les moteurs de recherche.Je suis adepte des méthodes agiles, ce qui signifie que je suis flexible, réactif et axé sur la collaboration. Je suis à l'aise dans 
l'environnement Node.js et je peux intégrer des fonctionnalités côté serveur dans mes applications front-end. Cela me permet de créer des applications web robustes et évolutives.
`

import events from "../../assets/images/77events.png"
import argentBank from "../../assets/images/argentBank.png"
import booki from "../../assets/images/booki.png"
import kasa from "../../assets/images/kasa.png"
import ohmyfood from "../../assets/images/ohmyfood.png"
import printit from "../../assets/images/printit.png"
import sophie from "../../assets/images/sophie.png"

const textTitleEvents = 'Events';
const textTitleArgentBank = 'ArgentBank';
const textTitleBooki = 'Bookie';
const textTitleKasa = 'Kasa';
const textTitleOhmyfood = 'Ohmyfood';
const textTitlePrintit = 'PrintIt';
const textTitleSophie = 'Sophie Bluel';

const textEvents: string = "Ceci est un texte pour le projet '77 Events'.";
const textBank: string = "Ceci est un texte pour le projet 'Argent Bank'.";
const textBooki: string = "Ceci est un texte pour le projet 'Booki'.";
const textKasa: string = "Ceci est un texte pour le projet 'Kasa'.";
const textOhmyfood: string = "Ceci est un texte pour le projet 'OhMyFood'.";
const textPrintIt: string = "Ceci est un texte pour le projet 'PrintIt'.";
const textSophie: string = "Ceci est un texte pour le projet 'Sophie'.";

export interface Card {
    img: string;
    text: string;
    title: string
}


export const cards: Card[] = [
    { img: events, text: textEvents, title: textTitleEvents },
    { img: argentBank, text: textBank, title: textTitleArgentBank},
    { img: booki, text: textBooki, title: textTitleBooki},
    { img: kasa, text: textKasa, title: textTitleKasa},
    { img: ohmyfood, text: textOhmyfood, title: textTitleOhmyfood},
    { img: printit, text: textPrintIt, title: textTitlePrintit},
    { img: sophie, text: textSophie, title: textTitleSophie}
];

