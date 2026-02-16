import cretaceImage from '../assets/cretace.svg';
import florenceImage from '../assets/florence.svg';
import parisImage from '../assets/paris.svg';

export type TripInterest = 'Culture' | 'Nature' | 'Luxe';
export type RiskLevel = 'low' | 'med' | 'high';

export interface Destination {
  id: string;
  title: string;
  era: string;
  shortDescription: string;
  highlights: string[];
  risks: string[];
  tips: string[];
  basePrice: number;
  imageUrl: string;
  interests: TripInterest[];
  recommendedRisk: RiskLevel;
}

export const destinations: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    era: 'Exposition Universelle',
    shortDescription:
      "Assistez à l'inauguration de la Tour Eiffel et plongez dans la Belle Époque entre opéra, salons et gastronomie.",
    highlights: ['Inauguration de la Tour Eiffel', 'Soirée opéra privée', 'Dîner signé Escoffier'],
    risks: ['Foule dense', 'Étiquette sociale stricte', 'Fatigue liée aux déplacements urbains'],
    tips: ['Tenue élégante recommandée', 'Guide de courtoisie fourni', 'Évitez les anachronismes technologiques'],
    basePrice: 8900,
    imageUrl: parisImage,
    interests: ['Culture', 'Luxe'],
    recommendedRisk: 'low',
  },
  {
    id: 'cretace-65m',
    title: 'Crétacé',
    era: '-65 millions d’années',
    shortDescription:
      'Explorez les jungles primordiales et observez les derniers dinosaures depuis un couloir temporel hautement sécurisé.',
    highlights: ['Safari dinosaure blindé', 'Observation volcanique', 'Camp base anti-météorite'],
    risks: ['Faune extrêmement dangereuse', 'Conditions climatiques instables', 'Protocoles de sécurité stricts'],
    tips: ['Vaccin chrono-bio obligatoire', 'Casque anti-rugissements inclus', 'Restez strictement dans le périmètre'],
    basePrice: 12400,
    imageUrl: cretaceImage,
    interests: ['Nature'],
    recommendedRisk: 'high',
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    era: 'Renaissance italienne',
    shortDescription:
      'Rencontrez artistes et mécènes de la Renaissance dans une Florence flamboyante entre palais, ateliers et banquets.',
    highlights: ['Rencontre atelier de Michel-Ange', 'Accès privé galerie Médicis', 'Banquet toscan aristocratique'],
    risks: ['Normes sociales rigides', 'Réseaux politiques sensibles', 'Rues encombrées et irrégulières'],
    tips: ['Prévoyez des chaussures adaptées', 'Initiation linguistique incluse', 'Respectez les protocoles de guilde'],
    basePrice: 9700,
    imageUrl: florenceImage,
    interests: ['Culture', 'Luxe'],
    recommendedRisk: 'med',
  },
];

export const destinationInterests: TripInterest[] = ['Culture', 'Nature', 'Luxe'];
