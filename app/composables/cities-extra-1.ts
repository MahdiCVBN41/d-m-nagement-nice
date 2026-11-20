import type { CityData } from './types/city'

function mtd(cityName: string) {
  return [
    { title: `1. Visite technique gratuite`, desc: `Un expert se déplace à votre domicile à ${cityName} pour évaluer le volume, l'accès et les contraintes. Devis précis et sans engagement.` },
    { title: `2. Devis détaillé sous 24h`, desc: `Recevez un devis transparent incluant le volume estimé, le nombre de déménageurs, le matériel nécessaire et le détail des prestations.` },
    { title: `3. Emballage et préparation`, desc: `Nos équipes prennent en charge l'emballage de vos affaires avec du matériel professionnel : cartons renforcés, papier bulle, housses matelassées.` },
    { title: `4. Chargement et transport`, desc: `Le jour J, chargement de vos effets dans nos camions équipés (hayon, sangles, GPS). Transport sécurisé vers votre nouveau domicile.` },
    { title: `5. Déchargement et installation`, desc: `Déchargement, installation des meubles, démontage des emballages. Nous laissons votre nouveau logement impeccable.` }
  ]
}

export const EXTRA_CITIES_1: CityData[] = [
  {
    slug: 'marseille', name: 'Marseille', icon: '/assets/marseille.webp',
    title: `Déménagement Marseille | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Marseille avec Nice Déménagement. Particuliers, entreprises, bureaux. Monte-meubles, garde-meubles, camions Crit'Air 2 ZFE. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Marseille : Votre Expert de la Cité Phocéenne`,
    intro: `Deuxième ville de France, Marseille est une métropole méditerranéenne au relief accidenté où chaque quartier a ses contraintes. Déménager à Marseille exige une parfaite connaissance du terrain : ruelles du Panier, pentes du Roucas-Blanc et d'Endoume, immeubles haussmanniens du Prado, résidences récentes de la Joliette ou de l'Euroméditerranée. Depuis 2006, Nice Déménagement intervient sur toute la métropole Aix-Marseille-Provence, à seulement 2 heures de Nice par l'autoroute A50, avec des trajets réguliers et un délai de livraison garanti. Nos camions homologués Crit'Air 2 circulent dans la ZFE marseillaise 7j/7, et nos équipes maîtrisent les spécificités locales : stationnement sur les quais du Vieux-Port, accès au tunnel Prado-Carénage, escaliers étroits des immeubles anciens du Panier. Monte-meubles électrique, emballage professionnel, garde-meubles partenaire : nous proposons une prise en charge complète, du studio au T5, de la bastide aux bureaux d'entreprise.`,
    whyChoose: [
      `Expertise marseillaise depuis 2006 : connaissance des 20 quartiers (Panier, Joliette, Prado, Endoume)`,
      `Camions Crit'Air 2 homologués pour la ZFE de Marseille, 7j/7`,
      `Monte-meubles électrique pour les immeubles sans ascenseur`,
      `Garde-meubles sécurisé et surveillé, partenaire local`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`,
      `98% de clients satisfaits selon notre enquête 2025`
    ],
    services: `Déménagement de particuliers à Marseille;Déménagement d'entreprises et de bureaux à Marseille et Aix;Déménagement administratif et d'archives;Transport de meubles et d'objets fragiles;Monte-meubles électrique jusqu'au 8ème étage;Garde-meubles sécurisé à Marseille;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express en moins de 48h;Déménagement économique et clé en main;Déménagement haut de gamme sur la Côte Bleue;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Marseille'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions homologués Crit\'Air 2 ZFE'],
    assurance: `Tous nos déménagements à Marseille sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. Vos biens sont protégés du chargement jusqu'à la livraison finale, y compris pendant la traversée de la métropole. En cas de dommage, notre service sinistres traite votre dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. Une RC pro de 5 M€ protège également les tiers et les parties communes des copropriétés marseillaises.`,
    equipment: `Camions 12 à 35 m³ Crit'Air 2;Monte-meubles électrique jusqu'au 8ème;Diables et transpalettes;Sangles de serrage haute résistance;Couvertures matelassées et housses;Housses à vêtements penderie;Cartons renforcés double cannelure;Film bulle et papier calage;Rouleaux de protection pour sols et murs`.split(';'),
    trucks: `Notre flotte marseillaise se compose de camions récents de 12 à 35 m³, tous homologués Crit'Air 2 pour la ZFE de la métropole Aix-Marseille-Provence. Chaque véhicule est équipé d'un hayon élévateur, de sangles, de couvertures et d'un GPS temps réel. Des fourgons compacts 8-10 m³ sont disponibles pour le Panier, le Roucas-Blanc et les quartiers à ruelles étroites.`,
    zonesServed: `Le Panier;La Joliette;Euroméditerranée;Vieux-Port;Castellane;Prado;Roucas-Blanc;Endoume;Mazargues;Saint-Charles;La Plaine;Noailles;Le Merlan;La Rose;Saint-Barnabé;Les Calanques;Aix-en-Provence;Plan-de-Cuques;Septèmes-les-Vallons;Aubagne`.split(';'),
    tips: [
      { title: `Réservez votre monte-meubles à l'avance`, desc: `De nombreux immeubles marseillais, surtout au Panier et à Endoume, n'ont pas d'ascenseur. Le monte-meubles électrique est indispensable dès le 3ème étage.` },
      { title: `Vérifiez la ZFE avant de choisir votre camion`, desc: `Marseille impose une ZFE : seuls les véhicules Crit'Air 0, 1 et 2 circulent. Tous nos camions sont Crit'Air 2, conformes 7j/7.` },
      { title: `Réservez votre emplacement de stationnement`, desc: `Le stationnement est difficile, notamment autour du Vieux-Port et de la Joliette. La ville de Marseille réserve des emplacements pour déménagements : déposez votre demande en mairie de secteur.` },
      { title: `Évitez les heures de pointe sur l'A50`, desc: `Pour un déménagement vers Nice ou depuis Nice, privilégiez un départ tôt le matin : le trafic sur l'A50 et le contournement de Marseille est dense de 8h à 10h et de 17h à 19h.` },
      { title: `Prévoyez la chaleur estivale`, desc: `En été, les déménagements en plein soleil sont éprouvants. Nous planifions des créneaux matinaux et utilisons des protections pour vos meubles fragiles.` },
      { title: `Faites le tri avant l'emballage`, desc: `Marseille compte de nombreuses ressourceries et déchèteries. Un déménagement est l'occasion idéale de trier, donner ou vendre ce que vous n'utilisez plus.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Marseille ?`, a: `Comptez entre 700 et 1 700 € pour un T2, entre 1 200 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison ou un T5. Le devis est gratuit, précis et sans engagement.` },
      { q: `Vos camions peuvent-ils circuler dans la ZFE de Marseille ?`, a: `Oui, tous nos camions sont homologués Crit'Air 2, ce qui autorise la circulation dans la ZFE de la métropole Aix-Marseille-Provence, y compris le samedi.` },
      { q: `Desservez-vous tous les quartiers de Marseille ?`, a: `Oui : du Panier à Mazargues en passant par la Joliette, Castellane, le Prado, Endoume, le Roucas-Blanc, Saint-Charles et les quartiers nord, ainsi qu'Aix-en-Provence et Aubagne.` },
      { q: `Comment gérez-vous les immeubles sans ascenseur ?`, a: `Nous utilisons un monte-meubles électrique capable de monter vos meubles jusqu'au 8ème étage, idéal pour les immeubles anciens du Panier, d'Endoume et du Roucas-Blanc.` },
      { q: `Proposez-vous un garde-meubles à Marseille ?`, a: `Oui, nous travaillons avec un garde-meubles partenaire sécurisé de la métropole : vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, tous nos déménagements à Marseille sont couverts par une assurance dommages tous risques jusqu'à 75 000 € sans franchise, plus une RC pro de 5 M€.` },
      { q: `Travaillez-vous le week-end à Marseille ?`, a: `Oui, nous intervenons le samedi de 9h à 17h. Le dimanche est possible pour les déménagements express avec supplément tarifaire.` },
      { q: `Combien de temps à l'avance réserver ?`, a: `Nous recommandons 4 semaines minimum, et jusqu'à 2 mois en haute saison (juin à septembre) pour garantir votre date, surtout pour les trajets Marseille-Nice.` }
    ],
    conclusion: `Déménager à Marseille, c'est avant tout choisir un partenaire qui connaît la ville dans ses moindres recoins : du Panier aux Calanques, de la Joliette à Mazargues. Nice Déménagement met à votre service 10 ans d'expérience locale, des camions Crit'Air 2 conformes à la ZFE, un monte-meubles pour les immeubles anciens et une assurance tous risques jusqu'à 75 000 €. Devis gratuit sous 24h, délai garanti par contrat et équipes formées aux normes AFNOR : contactez-nous dès aujourd'hui pour votre déménagement à Marseille ou vers Nice.`,
    geo: { lat: 43.2965, lng: 5.3698 },
    postalCode: '13001', region: "Provence-Alpes-Côte d'Azur", population: '873 076', distanceFromNice: '199 km'
  },
  {
    slug: 'lyon', name: 'Lyon', icon: '/assets/lyon.webp',
    title: `Déménagement Lyon | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Lyon avec Nice Déménagement. Particuliers, entreprises, bureaux. Monte-meubles, camions Crit'Air 2 ZFE, garde-meubles. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Lyon : Votre Expert Déménageur Lyonnais`,
    intro: `Troisième ville de France, Lyon s'étend entre Rhône et Saône, avec une géographie unique qui complique les déménagements : pentes de la Croix-Rousse, Presqu'île étroite, tunnels, traboules et immeubles en pierre dorée sans ascenseur. Déménager à Lyon implique de connaître Presqu'île, Croix-Rousse, Part-Dieu, Confluence, Vaise, Villeurbanne, mais aussi les contraintes de la ZFE lyonnaise : seuls les camions Crit'Air 2 et plus peuvent circuler. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Lyon en 4h30 par les autoroutes A8 et A7, avec des départs réguliers chaque semaine. Nos équipes gèrent les spécificités locales : réservation des places de stationnement auprès de la mairie, autorisations pour les rues en zone piétonne de la Presqu'île, manipulation dans les escaliers en colimaçon des immeubles de la Croix-Rousse. Monte-meubles, emballage professionnel, garde-meubles sécurisé : chaque déménagement lyonnais est orchestré de A à Z.`,
    whyChoose: [
      `Expertise lyonnaise depuis 2006 : Presqu'île, Croix-Rousse, Part-Dieu, Confluence`,
      `Camions Crit'Air 2 homologués pour la ZFE du Grand Lyon`,
      `Maîtrise des traboules et immeubles anciens sans ascenseur`,
      `Transferts réguliers Nice-Lyon en 4h30 (A8/A7)`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Lyon;Déménagement d'entreprises et de bureaux à la Part-Dieu;Déménagement administratif et d'archives;Transport de meubles et d'objets fragiles;Monte-meubles électrique pour immeubles sans ascenseur;Garde-meubles sécurisé à Lyon;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Lyon-Nice;Déménagement économique et clé en main;Déménagement haut de gamme dans la Presqu'île;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Lyon'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions homologués Crit\'Air 2 ZFE'],
    assurance: `Tous nos déménagements à Lyon sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. La garantie s'applique du chargement à la livraison, y compris sur les longs trajets Lyon-Nice. Notre service sinistres traite chaque dossier sous 48 heures et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège les tiers et les parties communes des copropriétés lyonnaises, souvent fragiles (traboules, escaliers en pierre).`,
    equipment: `Camions 12 à 35 m³ Crit'Air 2;Monte-meubles électrique;Diables, sangles et transpalettes;Couvertures matelassées et housses;Housses à vêtements penderie;Cartons renforcés double cannelure;Film bulle et papier calage;Protections de sols et murs;Bâches de chargement`.split(';'),
    trucks: `Notre flotte lyonnaise est composée de camions récents de 12 à 35 m³, tous homologués Crit'Air 2 pour la ZFE du Grand Lyon. Les véhicules sont équipés de hayons élévateurs, de GPS temps réel et de sangles de serrage. Pour la Presqu'île et la Croix-Rousse, nous utilisons des fourgons compacts 8-10 m³ adaptés aux rues étroites et aux zones piétonnes.`,
    zonesServed: `Presqu'île;Croix-Rousse;Part-Dieu;Confluence;Vaise;Villeurbanne;Lyon 1er;Lyon 2e;Lyon 3e;Lyon 4e;Lyon 5e (Vieux Lyon);Lyon 6e;Lyon 7e;Lyon 8e;Lyon 9e;Caluire-et-Cuire;Oullins;Sainte-Foy-lès-Lyon;Bron;Vénissieux`.split(';'),
    tips: [
      { title: `Réservez tôt pour la Croix-Rousse`, desc: `Les immeubles de la Croix-Rousse sont souvent sans ascenseur et les rues en pente. Réservez votre monte-meubles et un emplacement de stationnement en mairie le plus tôt possible.` },
      { title: `Vérifiez la ZFE du Grand Lyon`, desc: `Seuls les camions Crit'Air 2 et plus circulent dans la ZFE lyonnaise. Tous nos véhicules sont conformes, mais anticipez si vous louez vous-même un véhicule.` },
      { title: `Évitez les heures de pointe`, desc: `La circulation lyonnaise est dense de 8h à 9h30 et de 17h à 19h. Prévoyez vos créneaux hors pointe, surtout pour traverser les ponts et les tunnels.` },
      { title: `Attention au tunnel de Fourvière`, desc: `Le tunnel de Fourvière est interdit aux véhicules de plus de 3,5 tonnes. Nos itinéraires passent par les quais du Rhône ou la rocade Est pour les camions.` },
      { title: `Pensez aux traboules du Vieux Lyon`, desc: `Certaines adresses du Vieux Lyon et de la Croix-Rousse s'atteignent par des traboules. Nos équipes sont formées à ces accès particuliers.` },
      { title: `Planifiez votre trajet Lyon-Nice`, desc: `Le trajet dure 4h30 par A8/A7. Nous planifions les départs tôt le matin pour une livraison dans l'après-midi, avec pause réglementaire des chauffeurs.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Lyon ?`, a: `Comptez entre 700 et 1 700 € pour un T2, entre 1 200 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h, prix fixe garanti.` },
      { q: `Vos camions sont-ils conformes à la ZFE lyonnaise ?`, a: `Oui, tous nos camions sont homologués Crit'Air 2, autorisés à circuler dans la ZFE du Grand Lyon 7j/7, y compris dans la Presqu'île et la Part-Dieu.` },
      { q: `Comment gérez-vous la Croix-Rousse sans ascenseur ?`, a: `Nous utilisons un monte-meubles électrique et des diables renforcés pour les escaliers en colimaçon. Nos équipes sont habituées aux pentes et aux ruelles de la Croix-Rousse.` },
      { q: `Proposez-vous des trajets Nice-Lyon ?`, a: `Oui, c'est l'un de nos axes privilégiés : départs réguliers chaque semaine, transport en 4h30 par A8/A7 avec livraison garantie par contrat.` },
      { q: `Avez-vous un garde-meubles à Lyon ?`, a: `Oui, via notre partenaire local : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès par badge et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€ protégeant tiers et parties communes.` },
      { q: `Travaillez-vous le week-end à Lyon ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous, et le dimanche pour les déménagements express avec supplément.` },
      { q: `Quels quartiers de Lyon desservez-vous ?`, a: `Tous : Presqu'île, Croix-Rousse, Part-Dieu, Confluence, Vaise, Vieux Lyon, ainsi que Villeurbanne, Caluire-et-Cuire, Bron, Oullins et Vénissieux.` }
    ],
    conclusion: `Déménager à Lyon avec Nice Déménagement, c'est s'assurer d'un service maîtrisé dans une ville exigeante : ZFE respectée, monte-meubles pour la Croix-Rousse, gestion des traboules du Vieux Lyon et transferts réguliers Nice-Lyon en 4h30. Délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et équipes formées aux normes AFNOR. Demandez votre devis gratuit sous 24 heures et laissez nos experts prendre en charge votre déménagement lyonnais.`,
    geo: { lat: 45.764, lng: 4.8357 },
    postalCode: '69001', region: 'Auvergne-Rhône-Alpes', population: '522 969', distanceFromNice: '468 km'
  },
  {
    slug: 'nantes', name: 'Nantes', icon: '/assets/Nantes.webp',
    title: `Déménagement Nantes | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Nantes avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, garde-meubles, emballage pro. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Nantes : Votre Expert Déménageur Nantais`,
    intro: `Métropole bretonne de l'Ouest, Nantes s'étend sur les deux rives de la Loire et combine îles, quais et quartiers historiques. Déménager à Nantes implique de connaître le Centre-Ville, l'Île de Nantes en pleine reconversion, Talensac, Malakoff, Bellevue, Orvault, Saint-Herblain et Rezé, mais aussi les contraintes propres à la ville : tramway omniprésent, ponts qui compliquent les itinéraires poids lourds et rues du Bouffay réservées aux piétons. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Nantes en 10 heures par les autoroutes A8, A10 et A11, avec des départs hebdomadaires. Nos équipes maîtrisent les spécificités nantaises : réservation d'emplacements de stationnement en mairie, contournement des zones de chantier de l'Île de Nantes, intervention dans les immeubles anciens du centre sans ascenseur. Du studio étudiant au bord de l'Erdre à la maison familiale de l'agglomération, nous proposons une prise en charge complète et assurée.`,
    whyChoose: [
      `Expertise nantaise depuis 2006 : Centre-Ville, Île de Nantes, Talensac, Rezé`,
      `Transferts réguliers Nice-Nantes en 10h (A8/A10/A11)`,
      `Maîtrise des contraintes : tramway, ponts, rues piétonnes du Bouffay`,
      `Monte-meubles pour les immeubles anciens du centre`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Nantes;Déménagement d'entreprises et de bureaux sur l'Île de Nantes;Déménagement d'étudiants et de studios;Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Nantes;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Nantes-Nice;Déménagement économique et clé en main;Déménagement haut de gamme;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Nantes'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions récents conformes aux normes ZFE'],
    assurance: `Tous nos déménagements à Nantes sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. La couverture s'applique du chargement à la livraison finale, y compris sur les longs trajets Nantes-Nice. En cas de dommage, notre service sinistres intervient sous 48 heures et l'indemnisation est versée sous 30 jours. Une RC pro de 5 M€ complète la protection pour les tiers et les parties communes des immeubles nantais.`,
    equipment: `Camions 12 à 35 m³ récents;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage haute résistance;Couvertures matelassées;Housses à vêtements penderie;Cartons renforcés double cannelure;Film bulle et papier calage;Protections de sols et murs`.split(';'),
    trucks: `Notre flotte dessert Nantes avec des camions récents de 12 à 35 m³, équipés de hayons élévateurs, de sangles et d'un GPS temps réel. Les itinéraires longue distance Nice-Nantes (A8, A10, A11) sont planifiés avec des pauses réglementaires et une livraison garantie sous 10 heures de route. Pour le centre-ville et le Bouffay, des fourgons compacts 8-10 m³ sont privilégiés.`,
    zonesServed: `Centre-Ville;Île de Nantes;Talensac;Malakoff;Bellevue;Orvault;Saint-Herblain;Rezé;Bouguenais;Carquefou;Nantes Nord;Nantes Sud;Doulon-Bottière;Chantenay;Le Bouffay;Vieux Nantes;Sainte-Anne;Hauts-Pavés`.split(';'),
    tips: [
      { title: `Réservez un emplacement en mairie`, desc: `Nantes exige une autorisation de stationnement pour les camions de déménagement. Déposez votre demande en mairie au moins 15 jours avant, surtout dans le centre et le Bouffay.` },
      { title: `Vérifiez les travaux du tramway`, desc: `Les lignes de tramway et leurs travaux de maintenance peuvent bloquer certaines rues. Vérifiez l'itinéraire conseillé pour votre quartier avant le jour J.` },
      { title: `Anticipez les ponts pour les camions`, desc: `Certains ponts de la Loire ont des restrictions de tonnage ou de hauteur. Nos chauffeurs connaissent les itinéraires poids lourds les plus directs.` },
      { title: `Planifiez votre trajet depuis Nice`, desc: `Le trajet Nice-Nantes dure 10 heures. Nous organisons des départs à l'aube pour une livraison le jour même, ou la veille au soir pour un chantier le matin.` },
      { title: `Pensez aux étudiants`, desc: `Nantes est une grande ville étudiante. Nous proposons des formules économiques pour les studios et colocations, avec emballage fourni.` },
      { title: `Faites le tri avant le jour J`, desc: `Profitez du déménagement pour trier : ressourceries et associations nantaises (Emmaüs, le Relais) récupèrent vos dons en bon état.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Nantes ?`, a: `Comptez entre 800 et 1 800 € pour un T2, entre 1 300 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit, précis et sans engagement.` },
      { q: `Proposez-vous des trajets Nice-Nantes ?`, a: `Oui, avec des départs hebdomadaires : transport en 10 heures par A8/A10/A11, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Comment se passe le stationnement du camion à Nantes ?`, a: `Nous réservons les emplacements de stationnement nécessaires en mairie et informons le syndic de copropriété. En centre-ville, un fourgon compact est utilisé si nécessaire.` },
      { q: `Avez-vous un garde-meubles à Nantes ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie, pour quelques jours comme plusieurs mois.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, tous nos déménagements sont couverts par une assurance dommages tous risques jusqu'à 75 000 € sans franchise, plus une RC pro de 5 M€.` },
      { q: `Travaillez-vous le week-end à Nantes ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous. Le dimanche est possible pour les déménagements express avec supplément tarifaire.` },
      { q: `Quels quartiers de Nantes desservez-vous ?`, a: `Toute la ville et l'agglomération : Centre-Ville, Île de Nantes, Talensac, Malakoff, Bellevue, Orvault, Saint-Herblain, Rezé, Bouguenais et Carquefou.` },
      { q: `Faut-il un monte-meubles à Nantes ?`, a: `Souvent, car de nombreux immeubles du centre et du Bouffay n'ont pas d'ascenseur. Notre monte-meubles électrique monte jusqu'au 8ème étage.` }
    ],
    conclusion: `Déménager à Nantes avec Nice Déménagement, c'est l'assurance d'un service professionnel adapté aux contraintes de la métropole ligérienne : tramway, ponts, rues piétonnes et immeubles anciens. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Nantes en 10h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous dès aujourd'hui pour votre déménagement à Nantes.`,
    geo: { lat: 47.2184, lng: -1.5536 },
    postalCode: '44000', region: 'Pays de la Loire', population: '320 732', distanceFromNice: '1000 km'
  },
  {
    slug: 'lille', name: 'Lille', icon: '/assets/lille.webp',
    title: `Déménagement Lille | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Lille avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, garde-meubles, emballage pro. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Lille : Votre Expert Déménageur Lillois`,
    intro: `Métropole flamande du Nord, Lille est au carrefour de l'Europe, à 30 minutes de Bruxelles et de Gand. Déménager à Lille implique de connaître le Vieux-Lille et ses ruelles pavées, le Lille-Centre, Lille-Sud, Wazemmes et son marché, Moulins, Croix-Labé, Fives et Lambersart, mais aussi les contraintes locales : pavés du Vieux-Lille, rues piétonnes autour de la Grand-Place, zone à faibles émissions (ZFE) de la métropole lilloise et stationnement compliqué. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Lille en 12 heures par les autoroutes A8 et A1, avec des départs programmés chaque semaine. Nos équipes maîtrisent les spécificités lilloises : autorisations de stationnement en mairie, fourgons compacts pour le Vieux-Lille, manipulation dans les immeubles haussmanniens du centre sans monte-charge. Que vous déménagiez un studio à Wazemmes ou des bureaux à Euratechnologies, nous orchestrons chaque étape avec rigueur.`,
    whyChoose: [
      `Expertise lilloise depuis 2006 : Vieux-Lille, Wazemmes, Fives, Lambersart`,
      `Transferts réguliers Nice-Lille en 12h (A8/A1)`,
      `Camions conformes à la ZFE de la métropole lilloise`,
      `Fourgons compacts pour les ruelles pavées du Vieux-Lille`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Lille;Déménagement d'entreprises à Euratechnologies et Euralille;Déménagement d'étudiants et de colocations;Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Lille;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Lille-Nice;Déménagement économique et clé en main;Déménagement haut de gamme dans le Vieux-Lille;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Lille'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions conformes ZFE métropole lilloise'],
    assurance: `Tous nos déménagements à Lille sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. La protection s'applique du chargement à la livraison finale, y compris sur les longs trajets Lille-Nice. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège tiers et parties communes, précieux dans les copropriétés du centre lillois.`,
    equipment: `Camions 12 à 35 m³ conformes ZFE;Fourgons compacts 8-10 m³;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Lille avec des camions récents de 12 à 35 m³, conformes à la ZFE de la Métropole Européenne de Lille, équipés de hayons et de GPS temps réel. Les trajets longue distance Nice-Lille (A8, A1) sont planifiés sur 12 heures avec pauses réglementaires. Pour le Vieux-Lille et ses pavés, des fourgons compacts 8-10 m³ garantissent un accès aisé.`,
    zonesServed: `Vieux-Lille;Lille-Centre;Lille-Sud;Wazemmes;Moulins;Croix-Labé;Fives;Lambersart;Hellemmes;Lomme;Euralille;Euratechnologies;Vauban-Esquermes;Wazemmes-Saint-Sauveur;Lille-Moulins;Roubaix;Tourcoing;Villeneuve-d'Ascq;Marcq-en-Baroeul;La Madeleine`.split(';'),
    tips: [
      { title: `Réservez votre stationnement en mairie`, desc: `Le stationnement est très contraint à Lille, surtout dans le Vieux-Lille et autour de la Grand-Place. La mairie réserve des emplacements pour déménagement : demandez-les 15 jours à l'avance.` },
      { title: `Anticipez les pavés du Vieux-Lille`, desc: `Les ruelles pavées du Vieux-Lille sont inadaptées aux gros camions. Un fourgon compact est systématiquement préconisé, avec diables renforcés.` },
      { title: `Vérifiez la ZFE lilloise`, desc: `La Métropole Européenne de Lille impose une ZFE. Tous nos camions y sont conformes, sans vignette complémentaire à prévoir.` },
      { title: `Planifiez votre long trajet`, desc: `Nice-Lille, c'est 12 heures de route. Nous organisons un départ la veille au soir avec nuit du chauffeur, ou un départ à l'aube pour livraison le soir même.` },
      { title: `Pensez aux étudiants et aux grandes écoles`, desc: `Lille est une grande ville étudiante (IÉSEG, EDHEC, Sciences Po). Nos formules étudiantes incluent l'emballage fourni et un tarif préférentiel.` },
      { title: `Transférez vos contrats à temps`, desc: `EDF, eau, internet, assurance : résiliez vos contrats lillois ou transférez-les 15 jours avant votre déménagement pour éviter les coupures.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Lille ?`, a: `Comptez entre 800 et 1 800 € pour un T2, entre 1 300 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Le devis est gratuit et sans engagement.` },
      { q: `Comment accédez-vous au Vieux-Lille ?`, a: `Nous utilisons des fourgons compacts 8-10 m³ adaptés aux ruelles pavées et des diables renforcés. Le stationnement est réservé en mairie au préalable.` },
      { q: `Proposez-vous des trajets Nice-Lille ?`, a: `Oui, avec des départs hebdomadaires : 12 heures de route par A8/A1, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Vos camions circulent-ils dans la ZFE lilloise ?`, a: `Oui, l'ensemble de notre flotte est conforme à la ZFE de la Métropole Européenne de Lille, y compris à Roubaix et Tourcoing.` },
      { q: `Avez-vous un garde-meubles à Lille ?`, a: `Oui, via notre partenaire régional : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance complète.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€ protégeant tiers et parties communes.` },
      { q: `Travaillez-vous le week-end à Lille ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous. Le dimanche pour les déménagements express avec supplément tarifaire.` },
      { q: `Quels quartiers desservez-vous ?`, a: `Toute la métropole : Vieux-Lille, Lille-Centre, Wazemmes, Moulins, Fives, Lambersart, Hellemmes, Lomme, ainsi que Roubaix, Tourcoing, Villeneuve-d'Ascq et Marcq-en-Baroeul.` }
    ],
    conclusion: `Déménager à Lille avec Nice Déménagement, c'est choisir un expert des contraintes de la métropole flamande : pavés du Vieux-Lille, ZFE, stationnement et immeubles anciens. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Lille : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous dès aujourd'hui pour votre devis de déménagement à Lille.`,
    geo: { lat: 50.6292, lng: 3.1468 },
    postalCode: '59000', region: 'Hauts-de-France', population: '233 098', distanceFromNice: '1200 km'
  }
]
