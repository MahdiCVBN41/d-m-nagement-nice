import type { CityData } from './types/city'
import { EXTRA_CITIES_1 } from './cities-extra-1'
import { EXTRA_CITIES_2 } from './cities-extra-2'
import { EXTRA_CITIES_3 } from './cities-extra-3'


export const SITE = {
  name: 'Nice Déménagement',
  phone: '+33650222278',
  phoneDisplay: '06 50 22 22 78',
  whatsapp: '33650222278',
  email: 'secretariat@nice-demenagement.fr',
  address: 'Nice Boulevard 6200, 06000 Nice, France',
  siret: '123 456 789 00012',
  hours: 'Lun-Sam : 7h - 20h, Dim : 8h - 18h',
  devisUrl: 'https://www.nice-demenagement.fr/devis',
  ML_URL: 'https://www.nice-demenagement.fr/legal/mentions-legales.html',
  PC_URL: 'https://www.nice-demenagement.fr/legal/politique-confidentialite.html',
  GVC_URL: 'https://www.nice-demenagement.fr/legal/CGV.html',
  yearsExperience: 10,
  teamMembers: 32,
  trucks: 18,
  satisfactionRate: 98,
  support: '24/7'
}

function mtd(cityName: string) {
  return [
    { title: `1. Visite technique gratuite`, desc: `Un expert se déplace à votre domicile à ${cityName} pour évaluer le volume et les contraintes d'accès. Devis précis et sans engagement.` },
    { title: `2. Devis détaillé sous 24h`, desc: `Recevez un devis transparent incluant le volume estimé, le nombre de déménageurs, le matériel nécessaire et le détail des prestations.` },
    { title: `3. Emballage et préparation`, desc: `Nos équipes peuvent prendre en charge l'emballage de vos affaires avec du matériel professionnel : cartons renforcés, papier bulle, housses matelassées.` },
    { title: `4. Chargement et transport`, desc: `Le jour J, nos équipes chargent vos effets dans nos camions équipés. Transport sécurisé vers votre nouveau domicile.` },
    { title: `5. Déchargement et installation`, desc: `Déchargement, installation des meubles, démontage des emballages. Nous laissons votre nouveau logement impeccable.` }
  ]
}

export const CITIES: CityData[] = [
  {
    slug: 'nice', name: 'Nice', icon: '/assets/nice.webp',
    title: 'Déménagement Nice | Nice Déménagement – Devis Gratuit en 24h',
    metaDescription: `Déménagement à Nice avec Nice Déménagement. Particuliers, entreprises, bureaux. Monte-meubles, garde-meubles, emballage pro. Devis gratuit en 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Nice : Votre Expert Local depuis 10 ans`,
    intro: `Au cœur de la Côte d'Azur, Nice Déménagement vous accompagne dans tous vos projets de déménagement à Nice et ses environs. Forts de plus de 10 ans d'expérience, nous connaissons parfaitement chaque quartier de la capitale azuréenne, du Vieux-Nice à Cimiez en passant par le Mont Boron et la Promenade des Anglais. Notre équipe de professionnels formés vous garantit un service de qualité supérieure, adapté aux contraintes spécifiques de la cité niçoise : ruelles étroites du centre historique, immeubles anciens sans ascenseur, accès difficiles en bord de mer. Nous mettons à votre disposition une flotte de camions modernes équipés de monte-meubles, un service d'emballage professionnel et un garde-meubles sécurisé pour stocker vos effets personnels en toute sérénité.`,
    whyChoose: [
      `Entreprise locale basée à Nice depuis 2000 — connaissance parfaite du terrain`,
      `Équipe formée et assurée de 32 déménageurs professionnels`,
      `Flotte de 18 camions modernes équipés de monte-meubles électriques`,
      `Garde-meubles sécurisé et surveillé 24h/24 à Nice`,
      `Devis gratuit et transparent en moins de 24 heures`,
      `Assurance dommages tous risques incluse jusqu'à 75 000 €`,
      `98% de clients satisfaits selon notre enquête de satisfaction 2025`
    ],
    services: `Déménagement de particuliers à Nice;Déménagement d'entreprises et de bureaux;Déménagement administratif et d'archives;Transport de meubles et d'objets fragiles;Monte-meubles électrique pour étages élevés;Garde-meubles sécurisé à Nice;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express en moins de 48h;Déménagement économique et clé en main;Déménagement haut de gamme sur la Côte d'Azur;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Nice'),
    guarantees: ['Délai garanti par contrat','Remboursement en cas de retard','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées normes AFNOR NF S85.100','Matériel conforme CE'],
    assurance: `Tous nos déménagements à Nice sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. Cette garantie protège vos biens de la prise en charge jusqu'à la livraison finale. En cas de dommage, notre service sinistres traite votre dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours.`,
    equipment: `Camions de 12 à 35 m³;Monte-meubles électriques jusqu'au 8ème;Diables à roulettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Papier bulle et papier calage;Rouleaux de protection pour les sols`.split(';'),
    trucks: `Notre flotte niçoise se compose de 18 camions récents (moins de 3 ans) de 12 à 35 m³ équipés de hayons, GPS temps réel, sangles, conformes Crit'Air 1 ZFE. Fourgons 8-10 m³ pour le Vieux-Nice.`,
    zonesServed: `Vieux-Nice;Cimiez;Mont Boron;Le Port;Libération;Lanson;Saint-Roch;Buffa;Musiciens;Gare;Ariane;Caucade;Carras;Fabron;Saint-Philippe;Colline du Château;Port Lympia;Riquier;Saint-Antoine;Bellet`.split(';'),
    tips: [
      { title: `Préparez votre déménagement 2 mois à l'avance`, desc: `Réservez tôt votre date pendant la haute saison (juin à septembre) car les déménageurs sont très sollicités.` },
      { title: `Vérifiez l'accès à votre nouvel immeuble`, desc: `Renseignez-vous sur les horaires autorisés pour le démêagement et la réservation de l'ascenseur.` },
      { title: `Anticipez le stationnement à Nice`, desc: `Le stationnement à Nice est compliqué. Demandez une autorisation de stationnement temporaire à la mairie.` },
      { title: `Prévoyez un monte-meubles pour les vieux immeubles`, desc: `De nombreux immeubles niçois n'ont pas d'ascenseur. Le monte-meubles électrique est la solution idéale.` },
      { title: `Transférez vos contrats`, desc: `Pensez à informer EDF, votre fournisseur d'eau, d'internet et l'assurance de votre changement d'adresse 15 jours avant.` },
      { title: `Profitez pour trier`, desc: `Un déménagement est l'occasion idéale pour faire le tri. Donnez ou vendez ce que vous n'utilisez plus.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Nice ?`, a: `Comptez en moyenne entre 600 et 1 500 pour un appartement T2, entre 1 000 et 2 500 pour un T3-T4, et entre 2 500 et 5 000 pour une maison. Le devis est toujours gratuit et sans engagement.` },
      { q: `Combien de temps à l'avance dois-je réserver ?`, a: `Nous recommandons de réserver au moins 4 semaines à l'avance, et jusqu'à 2 mois en haute saison (juin à septembre).` },
      { q: `Proposez-vous un service de garde-meubles ?`, a: `Oui, nous disposons d'un entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès par badge et assurance anti vol et incendie.` },
      { q: `Faut-il un monte-meubles pour mon déménagement ?`, a: `Le monte-meubles est fortement recommandé pour les logements au 3ème étage ou plus, surtout dans le Vieux-Nice et Cimiez. Nous proposons un monte-meubles électrique jusqu'au 8ème étage.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, tous nos déménagements sont couverts par une assurance dommages tous risques jusqu'à 75 000 € sans franchise, en plus de notre responsabilité civile professionnelle de 5 M€.` },
      { q: `Pouvez-vous démonter et remonter mes meubles ?`, a: `Oui, nos déménageurs démonent et remontent vos meubles (lits, armoires, bureaux) sans frais supplémentaires quand c'est nécessaire.` },
      { q: `Travaillez-vous le week-end ?`, a: `Nous travaillons le samedi de 9h à 17h sur rendez-vous. Le dimanche et jours fériés pour les déménagements express avec supplément tarifaire.` },
      { q: `Quels quartiers de Nice desservez-vous ?`, a: `Nous desservons tous les quartiers : Vieux-Nice, Cimiez, Mont Boron, Libération, Pasteur, Saint-Roch, Buffa, Musiciens, Ariane, Lingotière, Caucade, Fabron, Port Lympia et Riquier.` }
    ],
    conclusion: `Déménager à Nice ne doit pas être une source de stress. En confiant votre projet à Nice Déménagement, vous choisissez une entreprise locale reconnue pour son sérieux et son professionnalisme. Devis gratuit, assurance complète, garde-meubles sécurisé et service client réactif : tout est réuni pour faire de votre déménagement une expérience réussie. Contactez-nous dès aujourd'hui pour obtenir votre devis personnalisé sous 24 heures.`,
    geo: { lat: 43.7102, lng: 7.2621 },
    postalCode: '06000', region: "Provence-Alpes-Côte d'Azur", population: '342 669', distanceFromNice: '0 km'
  },
  {
    slug: 'paris', name: 'Paris', icon: '/assets/paris.webp',
    title: `Déménagement Paris | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Paris avec Nice Déménagement. Particuliers, entreprises, bureaux. Monte-meubles, garde-meubles, emballage pro. Devis gratuit. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Paris : Votre Expert avec Monte-Meubles dans toute la Capitale`,
    intro: `Déménager à Paris représente un véritable défi : circulation dense, stationnement complexe, immeubles anciens sans ascenseur, escaliers étroits et ZFE stricte. Nos équipes interviennent dans tous les 20 arrondissements, du 1er au 20e, avec connaissance fine des contraintes : autorisations de stationnement Préfecture de Police, horaires de déménagement imposés par les syndics, accès aux étages élevés des immeubles haussmanniens via notre monte-meubles électrique. Nos camions Crit'Air 1 sont homologués pour la ZFE. Que vous quittiez un studio à Montmartre, un appartement familial dans le Marais ou un bureau à La Défense, nous adaptons notre organisation logistique pour garantir un déménagement fluide et sécurisé.`,
    whyChoose: [
      `Expérience éprouvée sur Paris et toute l'Île-de-France depuis 2005`,
      `Connaissance fine des 20 arrondissements et de leurs contraintes d'accès`,
      `Camions Crit'Air 1 homologués pour la ZFE de Paris`,
      `Monte-meubles électrique pour les immeubles haussmanniens`,
      `Gestion des autorisations de stationnement auprès de la Préfecture de Police`,
      `Devis gratuit et détaillé sous 24 heures`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers dans tous les arrondissements parisiens;Déménagement d'entreprises et de bureaux à Paris et La Défense;Déménagement administratif et d'archives;Transport de meubles et d'œuvres d'art;Monte-meubles électrique pour les étages élevés;Garde-meubles sécurisé partenaire à Paris;Emballage professionnel et déballage complet;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Paris-Nice et Nice-Paris;Déménagement économique pour les petits budgets;Déménagement haut de gamme pour les beaux logements parisiens;Livraison et installation de meubles neufs à Paris`.split(';'),
    method: mtd('Paris'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance dommages tous risques 75 000 €','RC professionnelle de 5 M€','Déménageurs formés aux techniques NF S85.100','Camions homologués Crit\'Air 1 pour la ZFE Paris'],
    assurance: `Tous nos déménagements à Paris sont protégés par une assurance dommages tous risques jusqu'à 75 000 €, souscrite auprès de MMA Assurance, sans franchise. Service 48h pour sinistres, indemnisation sous 30 jours. RC pro 5 M€ protège vos biens tiers et parties communes d'immeubles parisiens souvent sensibles.`,
    equipment: `Camions 12 à 35 m³ CritAir 1;Monte-meubles électrique;Diables, transpalettes et chariots;Sangles de serrage haute résistance;Couvertures matelassées et housses;Housses à vêtements pour le transport;Cartons renforcés double cannelure;Film bulle et papier de soie;Bâches pour protection des sols et murs`.split(';'),
    trucks: `Flotte de camions Crit'Air 1 récents (moins de 3 ans) capacité 12-35 m³ pour ZFE Paris. Hayon, GPS, sangles, attaches. Fourgons compacts 8-10 m³ pour le Marais et Montmartre.`,
    zonesServed: `1er;2e;3e;4e;5e;6e;7e;8e;9e;10e;11e;12e;13e;14e;15e;16e;17e;18e;19e;20e;La Défense;Neuilly-sur-Seine;Boulogne-Billancourt;Levallois-Perret;Issy-les-Moulineaux;Vincennes;Saint-Mandé;Charenton;Montreuil;Saint-Denis`.split(';'),
    tips: [
      { title: `Demandez l'autorisation de stationnement`, desc: `Pour déménager à Paris, une autorisation de stationnement est obligatoire. Faites la demande au moins 15 jours avant auprès de la Préfecture de Police.` },
      { title: `Réservez l'ascenseur du nouvel immeuble`, desc: `Dans les immeubles parisiens, l'ascenseur de service doit être réservé. Contactez le syndic ou le gardien/concierge.` },
      { title: `Choisissez un camion Crit'Air 1 pour Paris`, desc: `Paris impose une Zone à Faibles Émissions. Seuls Crit'Air 0, 1 et 2 y circulent. Nos camions homologués Crit'Air 1.` },
      { title: `Anticipez les horaires de déménagement`, desc: `Les syndics imposent souvent 8h-12h et 14h-18h. Renseignez-vous en amont auprès du syndic de copropriété.` },
      { title: `Utilisez le monte-meubles pour les haussmanniens`, desc: `Les immeubles haussmanniens n'ont pas d'ascenseur adapté aux meubles. Le monte-meubles évite d'abîmer les parties communes.` },
      { title: `Mettez à jour votre dossier d'inscription électorale`, desc: `Pour voter après votre déménagement, inscrivez-vous sur les listes électorales de votre nouvelle commune avant le 6 mars.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Paris ?`, a: `Le prix d'un déménagement à Paris varie selon le volume, l'arrondissement et l'accès. Comptez entre 700 et 1 800 € pour un studio, entre 1 200 et 3 000 € pour un appartement T3-T4, et 2 500 à 6 000 € pour une maison ou un bureau.` },
      { q: `Vos camions peuvent-ils circuler dans la ZFE ?`, a: `Oui, tous nos camions sont homologués Crit'Air 1, autorisant la circulation dans la ZFE de Paris métropole 7j/7.` },
      { q: `Comment obtenir une autorisation de stationnement ?`, a: `Pour réserver une place devant votre immeuble, déposez votre dossier à la Préfecture de Police au moins 15 jours avant le déménagement.` },
      { q: `Travaillez-vous le samedi et le dimanche à Paris ?`, a: `Nous travaillons le samedi sur Paris et l'Île-de-France de 8h à 18h. Le dimanche, nous proposons un service d'urgence pour les déménagements express.` },
      { q: `Mes affaires sont-elles assurées pendant le déménagement ?`, a: `Oui, tous nos déménagements sont couverts par une assurance dommages tous risques jusqu'à 75 000 € sans franchise, plus RC pro 5 M€ pour protéger les tiers et parties communes.` },
      { q: `Avez-vous un garde-meubles à Paris ?`, a: `Nous travaillons avec des partenaires parisiens : vidéosurveillance 24/7, contrôle d'accès, assurance complète. Stockage de quelques jours à plusieurs mois.` },
      { q: `Combien de temps à l'avance réserver un déménagement à Paris ?`, a: `Nous recommandons de réserver 6 semaines à 2 mois en avance, surtout entre juin et septembre où la demande est très forte.` },
      { q: `Quels arrondissements de Paris desservez-vous ?`, a: `Nous desservons les 20 arrondissements de Paris, du 1er au 20e, ainsi que La Défense, Neuilly, Boulogne, Levallois, Issy-les-Moulineaux, Vincennes, Montreuil et Saint-Denis.` }
    ],
    conclusion: `Déménager dans la capitale française exige un partenaire qui connaît Paris sur le bout des doigts. Nice Déménagement met son expertise à votre service : camions Crit'Air 1, gestion des autorisations, monte-meubles et assurance tous risques. Que vous déménagiez un studio, un appartement familial ou des bureaux à La Défense, nous nous engageons sur un délai de livraison et un devis transparent sous 24 heures. Contactez-nous pour votre projet de déménagement à Paris.`,
    geo: { lat: 48.8566, lng: 2.3522 },
    postalCode: '75001', region: 'Île-de-France', population: '2 102 650', distanceFromNice: '929 km'
  },
  ...EXTRA_CITIES_1,
  ...EXTRA_CITIES_2,
  ...EXTRA_CITIES_3,
]

export function getCity(slug: string): CityData | undefined {
  return CITIES.find(c => c.slug === slug)
}
