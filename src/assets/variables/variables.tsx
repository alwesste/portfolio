export const presentation : string = `Après avoir passé quatre années à l'étranger. J'ai decide de me reconvertir dans un domaine qui me passionne "le developpement web".
Pour cela j'ai passer une certification RNCP de niveau 5 chez openclassrooms. Au cours de ma formation, j'ai acquis une solide expertise dans un éventail
de technologies essentielles pour le développement front-end. J'ai développé des compétences en JavaScript, TypeScript, React, Vue, Redux, HTML5, CSS3, Sass et l'optimisation web. 
Ma connaissance du référencement (SEO) et mon expérience dans l'optimisation de sites web garantissent que les projets que je touche sont non seulement visuellement attrayants, 
mais aussi performants sur les moteurs de recherche.Je suis adepte des méthodes agiles, ce qui signifie que je suis flexible, réactif et axé sur la collaboration. Je suis à l'aise dans 
l'environnement Node.js et je peux intégrer des fonctionnalités côté serveur dans mes applications front-end. Cela me permet de créer des applications web robustes et évolutives.
`

import events from "../../assets/images/77events.png";
import argentBank from "../../assets/images/argentBank.png";
import booki from "../../assets/images/booki.png";
import kasa from "../../assets/images/kasa.png";
import ohmyfood from "../../assets/images/ohmyfood.png";
import printit from "../../assets/images/printit.png";
import sophie from "../../assets/images/sophie.png";
import nina from  "../../assets/images/ninaCarducci.png";

const textTitleEvents: string = 'Events';
const textTitleArgentBank: string = 'ArgentBank';
const textTitleBooki: string = 'Bookie';
const textTitleKasa: string = 'Kasa';
const textTitleOhmyfood: string = 'Ohmyfood';
const textTitlePrintit: string = 'PrintIt';
const textTitleSophie: string = 'Sophie Bluel';
const textTitleNina: string = "Nina Carducci"


const textEvents: string = "Prise de connaissance de la codebase du site web de 77Events en vue de la gestion des problèmes d'affichage présents sur le site, ainsi que la création de tests unitaires visant à renforcer la robustesse du site.";
const textBank: string = "Transformation d'un projet statique basé sur HTML et CSS en un projet React.JS. Conception de la page d'accueil, d'une page de connexion et d'une fonctionnalité de déconnexion. Création de la page des transactions, offrant aux utilisateurs un accès à leurs différents comptes bancaires et à leurs transactions.";
const textBooki: string = "Intégration de l'interface utilisateur avec le code HTML et CSS existant.";
const textKasa: string = "Lancement du projet React et développement complet de l'application, y compris les composants React, les routes React Router, en suivant les maquettes Figma, avec une attention particulière à la réactivité de l'interface.";
const textOhmyfood: string = "Conception d'un site \"mobile first\" répertoriant les menus de restaurants gastronomiques.";
const textPrintIt: string = "Implémentation de la dynamique du site initialement statique à l'aide de JavaScript.";
const textSophie: string = "Présentation des travaux de l'architecte, création de la page de connexion de l'administrateur du site, et développement de la modale gérant le téléchargement de nouveaux médias.";
const textNina: string = "Optimisation d'un site de photographie, incluant l'implémentation d'un référencement global, l'ajout de métadonnées pour les réseaux sociaux, des améliorations liées à l'accessibilité du site, ainsi que la production d'un rapport d'optimisation exposant les actions entreprises et leur impact.";


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
    { img: sophie, text: textSophie, title: textTitleSophie},
    { img: nina, text: textNina, title: textTitleNina},
];

