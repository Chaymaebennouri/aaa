window.addEventListener('load',init)
const testwrapper = document.querySelector('.Input');
const testarea = document.querySelector('#textArea');
const origintext = document.querySelector('.Display');
const resetbutton = document.querySelector('.reset');
const thetimer = document.querySelector('.time');


let timer=[0,0,0,0];


function zero(time){
  if (time<=9){
    time="0" + time;
  }
  return time;
  
}
function runTimer(){
  let currentTime = zero(timer[0])+":"+zero(timer[1])+":"+zero(timer[2]);
  thetimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
  timer[2] = Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));



}

function reset(){
  console.log('reset button was pressed');
}

function spellcheck(){
  let textentered = testarea.value;
  console.log(textentered);
}

function start(){

  let textenteredlenghth = testarea.value.length;
  if(textenteredlenghth === 0){
    setInterval(runTimer,10);
  }
}

testarea.addEventListener('keypress',start, false);
testarea.addEventListener('keyup',spellcheck,false);
resetbutton.addEventListener('click',reset, false);


const para = [
  'JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web.', ' À chaque fois qu’une page web fait plus que simplement afficher du contenu statique — afficher du contenu mis à jour à des temps déterminés, des cartes interactives, des animations 2D/3D, des menus vidéo défilants.', 'JavaScript a de bonnes chances d’être impliqué. C’est la troisième couche des technologies standards du web, les deux premières (HTML et CSS) étant couvertes bien plus en détail dans d’autres tutoriels sur MDN.','HTML est un langage de balises utilisé pour structurer et donner du sens au contenu web.', 'CSS est un langage de règles de style utilisé pour mettre en forme le contenu HTML.', 'Quand la page se charge, les codes HTML, CSS et JavaScript s\'exécutent dans un environnement (l\'onglet du navigateur). C\'est un peu comme une usine qui prend des matières premières (le code) et sort un produit (la page web).', 'Le JavaScript est exécuté par le moteur JavaScript du navigateur, après que le HTML et le CSS ont été assemblés et combinés en une page web.', 'Le JavaScript est appliqué à votre page HTML un peu comme le CSS.', 'JavaScript désigne un langage de développement informatique, et plus précisément un langage de script orienté objet.', 'Le Javascript est un langage informatique qui est utilisé sur de très nombreux sites web.', 'L\'HTML est un langage informatique utilisé sur l\'internet. Ce langage est utilisé pour créer des pages web.', 'L\'HTML est ce qui permet à un créateur de sites Web de gérer la manière dont le contenu de ses pages Web va s\'afficher sur un écran, via le navigateur.','L\'Hypertext Markup Language, plus communément désigné sous son acronyme HTML, est employé pour faire référence à un langage informatique qui permet de mettre sur internet des données rédigées.','Les feuilles de styles (CSS) sont un langage qui permet de gérer la présentation d\'une page Web. ','Le langage CSS est une recommandation du World Wide Web Consortium (W3C), au même titre que HTML ou XML','Le but de CSS est séparer la structure d\'un document HTML et sa présentation. En effet, avec HTML, on peut définir à la fois la structure et la présentation.'
];

function init() {
  show(para);
}
function show(para){
  const randIndex =Math.floor(Math.random()* para.length);
  origintext.innerHTML = para[randIndex];
 
}