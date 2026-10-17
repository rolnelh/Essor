/** Navigation between implemented sections. */
export const navigation = [
  { label: 'Pourquoi créer ?', href: '#pourquoi-creer', available: true },
  { label: 'Les bénéfices', href: '#benefices', available: true },
  { label: 'Par où commencer ?', href: '#planifier', available: true },
] as const;
export const heroContent = {
  description: 'Pour partager votre passion, faire connaître votre activité ou transmettre votre savoir : votre contenu peut faire la différence.',
  cards: [
    { key: 'visibility', title: 'Visibilité', description: 'Faites-vous connaître', icon: 'eye' },
    { key: 'community', title: 'Communauté', description: 'Créez des échanges', icon: 'users' },
    { key: 'opportunities', title: 'Opportunités', description: 'De nouvelles collaborations', icon: 'handshake' },
    { key: 'knowledge', title: 'Votre savoir', description: 'Partagez ce qui vous anime', icon: 'play' },
  ],
} as const;

export const ideas = [
  { title: 'Partager un conseil', description: 'Une astuce simple qui facilite la vie.', icon: 0 },
  { title: 'Raconter votre parcours', description: 'Une leçon apprise ou un défi surmonté.', icon: 1 },
  { title: 'Montrer les coulisses', description: 'Votre méthode, vos outils, votre quotidien.', icon: 2 },
  { title: 'Expliquer comment faire', description: 'Un tutoriel court, étape par étape.', icon: 3 },
  { title: 'Répondre à une question', description: 'Une réponse utile à une vraie difficulté.', icon: 4 },
  { title: 'Partager une réalisation', description: 'Un projet, un résultat, ce que vous avez appris.', icon: 5 },
] as const;
export const benefits = [
  { title: 'Gagnez en visibilité', description: 'Faites découvrir vos idées et votre travail.', icon: 'megaphone', color: 'peach' },
  { title: 'Inspirez confiance', description: 'Montrez votre savoir-faire avec des contenus utiles.', icon: 'shield', color: 'lavender' },
  { title: 'Créez des liens', description: 'Échangez avec des personnes qui partagent vos intérêts.', icon: 'messages', color: 'blue' },
  { title: 'Ouvrez des portes', description: 'Votre contenu peut susciter des collaborations et de nouvelles opportunités.', icon: 'door', color: 'peach' },
  { title: 'Développez vos talents', description: 'En créant régulièrement, vous apprenez à mieux exprimer vos idées.', icon: 'sparkles', color: 'lavender' },
] as const;
export const channels = [
  { name: 'Instagram', description: 'Photos, carrousels et vidéos.', key: 'instagram' },
  { name: 'Facebook', description: 'Photos, vidéos, carrousels et échanges.', key: 'facebook' },
  { name: 'Votre site ou votre blog', description: 'Articles, projets et portfolio.', key: 'website' },
  { name: 'YouTube', description: 'Tutoriels et récits en vidéo.', key: 'youtube' },
  { name: 'LinkedIn', description: 'Expériences et projets professionnels.', key: 'linkedin' },
] as const;
export const planningSteps = [
  { title: 'Fixe ton objectif', description: 'Que veux-tu partager, avec qui et dans quel but ? Choisis une direction claire.' },
  { title: 'Note tes idées', description: 'Rassemble les questions, conseils et expériences que tu pourrais partager.' },
  { title: 'Choisis tes formats', description: 'Photo, vidéo, carrousel ou article : adapte le format à chaque idée.' },
  { title: 'Organise ton calendrier', description: 'Associe chaque sujet à une date. Prévois un rythme que tu peux tenir.' },
  { title: 'Prépare à l’avance', description: 'Rédige tes textes et crée tes visuels. Regroupe la préparation de plusieurs contenus.' },
  { title: 'Publie et ajuste', description: 'Observe les réactions et les questions. Utilise-les pour préparer la suite.' },
] as const;
