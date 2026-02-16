import cretaceImage from '../assets/cretace.svg';
import florenceImage from '../assets/florence.svg';
import parisImage from '../assets/paris.svg';
import type { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    epoch: 'Exposition Universelle',
    tags: ['Culture', 'Luxe'],
    description:
      "Assistez à l'inauguration de la Tour Eiffel, séjournez dans des salons feutrés et vivez l'apogée de la Belle Époque.",
    highlights: ['Inauguration de la Tour Eiffel', 'Soirée opéra privée', 'Dîner signé Escoffier'],
    preparationTips: ['Tenue élégante recommandée', 'Guide de courtoisie fourni', 'Évitez les anachronismes technologiques'],
    price: 'À partir de 8 900 crédits temporels',
    imageUrl: parisImage,
  },
  {
    id: 'cretace-65m',
    title: 'Crétacé (-65M)',
    epoch: 'Derniers jours des dinosaures',
    tags: ['Nature'],
    description:
      "Traversez des jungles primordiales et observez les géants préhistoriques dans un couloir temporel sécurisé.",
    highlights: ['Safari dinosaure blindé', 'Observation volcanique', 'Camp base anti-météorite'],
    preparationTips: ['Vaccin chrono-bio obligatoire', 'Casque audio anti-rugissements inclus', 'Restez strictement dans le périmètre'],
    price: 'À partir de 12 400 crédits temporels',
    imageUrl: cretaceImage,
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    epoch: 'Renaissance italienne',
    tags: ['Culture', 'Luxe'],
    description:
      "Explorez Florence à l'époque de Michel-Ange, ateliers d'artistes, mécènes et palais illuminés aux chandelles.",
    highlights: ['Rencontre atelier de Michel-Ange', 'Accès privé galerie Médicis', 'Banquet toscan aristocratique'],
    preparationTips: ['Prévoyez chaussures pavées', 'Séances linguistiques en latin incluses', 'Respectez les protocoles de guilde'],
    price: 'À partir de 9 700 crédits temporels',
    imageUrl: florenceImage,
  },
];

export const destinationTags = ['Culture', 'Nature', 'Luxe'] as const;
