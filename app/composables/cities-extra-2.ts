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

export const EXTRA_CITIES_2: CityData[] = [
  {
    slug: 'bordeaux', name: 'Bordeaux', icon: '/assets/Bordeaux.webp',
    title: `Déménagement Bordeaux | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Bordeaux avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, camions Crit'Air 2 ZFE, garde-meubles. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Bordeaux : Votre Expert Déménageur Bordelais`,
    intro: `Métropole aquitaine classée à l'UNESCO, Bordeaux s'étend sur la Garonne avec un patrimoine remarquable : pierre blonde du XVIIIe siècle, quais réhabilités et ruelles du Vieux Bordeaux. Déménager à Bordeaux implique de connaître le Centre-Ville, les Chartrons, Saint-Michel, la Bastide, Saint-Seurin, Caudéran, Mérignac et Pessac, mais aussi les contraintes locales : rues piétonnes du Triangle d'Or, tramway omniprésent, ZFE de la métropole bordelaise et immeubles anciens sans ascenseur. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Bordeaux en 9 heures par les autoroutes A8, A9 et A62, avec des départs réguliers. Nos équipes maîtrisent les spécificités bordelaises : réservation des places de stationnement en mairie, fourgons compacts pour les ruelles du Vieux Bordeaux, manipulation soignée des meubles dans les immeubles haussmanniens de la période XVIIIe. Du studio des Chartrons à la maison de Caudéran, chaque déménagement est orchestré avec le même niveau d'exigence.`,
    whyChoose: [
      `Expertise bordelaise depuis 2006 : Chartrons, Saint-Michel, Caudéran`,
      `Transferts réguliers Nice-Bordeaux en 9h (A8/A9/A62)`,
      `Camions Crit'Air 2 homologués pour la ZFE bordelaise`,
      `Fourgons compacts pour le Vieux Bordeaux et la Bastide`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Bordeaux;Déménagement d'entreprises et de bureaux aux Bassins à flot;Déménagement administratif et d'archives;Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Bordeaux;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Bordeaux-Nice;Déménagement économique et clé en main;Déménagement haut de gamme dans le Triangle d'Or;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Bordeaux'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions homologués Crit\'Air 2 ZFE'],
    assurance: `Tous nos déménagements à Bordeaux sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. Vos biens sont protégés du chargement à la livraison finale, y compris sur les longs trajets Bordeaux-Nice. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège tiers et parties communes des immeubles classés du centre-ville.`,
    equipment: `Camions 12 à 35 m³ Crit'Air 2;Fourgons compacts 8-10 m³;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Bordeaux avec des camions récents de 12 à 35 m³, tous homologués Crit'Air 2 pour la ZFE de la métropole bordelaise, équipés de hayons élévateurs et de GPS temps réel. Les trajets Nice-Bordeaux (A8, A9, A62) sont planifiés en 9 heures avec pauses réglementaires. Pour le Vieux Bordeaux, Saint-Michel et la Bastide, des fourgons compacts garantissent un accès aux ruelles étroites.`,
    zonesServed: `Centre-Ville;Chartrons;Saint-Michel;Bastide;Saint-Seurin;Caudéran;Mérignac;Pessac;Talence;Bègles;Les Bassins à flot;Le Triangle d'Or;Les Quinconces;Saint-Augustin;Ginko;Villenave-d'Ornon;Gradignan;Bruges;Le Bouscat;Lormont`.split(';'),
    tips: [
      { title: `Réservez votre stationnement en mairie`, desc: `Le stationnement est difficile dans le centre, les Chartrons et Saint-Michel. Réservez votre emplacement de déménagement en mairie au moins 15 jours à l'avance.` },
      { title: `Vérifiez la ZFE bordelaise`, desc: `La métropole bordelaise impose une ZFE : seuls Crit'Air 2 et plus circulent. Tous nos camions sont conformes 7j/7.` },
      { title: `Prévoyez le tramway et les quais`, desc: `Le tramway borde borduriers et quais. Nos itinéraires évitent les voies réservées et les zones piétonnes du Triangle d'Or.` },
      { title: `Protégez les immeubles classés`, desc: `Le centre-ville est classé UNESCO : nous utilisons des protections de sols et murs pour préserver les parties communes en pierre blonde et les escaliers en bois.` },
      { title: `Planifiez votre long trajet`, desc: `Nice-Bordeaux dure 9 heures. Nous organisons les départs à l'aube pour une livraison le soir même, ou la veille avec nuit du chauffeur.` },
      { title: `Pensez aux vendanges et à l'été`, desc: `En période de vendanges (septembre-octobre) et en été, la circulation bordelaise est dense : réservez votre créneau tôt le matin.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Bordeaux ?`, a: `Comptez entre 800 et 1 800 € pour un T2, entre 1 300 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h, prix fixe garanti.` },
      { q: `Vos camions circulent-ils dans la ZFE bordelaise ?`, a: `Oui, tous nos camions sont homologués Crit'Air 2, autorisés dans la ZFE de la métropole bordelaise, y compris dans le centre et aux Bassins à flot.` },
      { q: `Comment gérez-vous le Vieux Bordeaux ?`, a: `Nous utilisons des fourgons compacts 8-10 m³ et des protections adaptées aux immeubles classés. Le stationnement est réservé en mairie à l'avance.` },
      { q: `Proposez-vous des trajets Nice-Bordeaux ?`, a: `Oui, avec des départs réguliers : 9 heures par A8/A9/A62, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Avez-vous un garde-meubles à Bordeaux ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€ protégeant tiers et parties communes.` },
      { q: `Travaillez-vous le week-end à Bordeaux ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous. Le dimanche pour les déménagements express avec supplément tarifaire.` },
      { q: `Quels quartiers de Bordeaux desservez-vous ?`, a: `Toute la ville : Centre-Ville, Chartrons, Saint-Michel, Bastide, Saint-Seurin, Caudéran, ainsi que Mérignac, Pessac, Talence, Bègles et les Bassins à flot.` }
    ],
    conclusion: `Déménager à Bordeaux avec Nice Déménagement, c'est s'appuyer sur un expert des contraintes de la métropole girondine : patrimoine UNESCO, ZFE, tramway et immeubles anciens. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Bordeaux en 9h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous pour votre devis de déménagement à Bordeaux.`,
    geo: { lat: 44.8378, lng: -0.5792 },
    postalCode: '33000', region: 'Nouvelle-Aquitaine', population: '261 804', distanceFromNice: '870 km'
  },
  {
    slug: 'toulouse', name: 'Toulouse', icon: '/assets/toulouse.webp',
    title: `Déménagement Toulouse | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Toulouse avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, garde-meubles, emballage pro. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Toulouse : Votre Expert Déménageur Toulousain`,
    intro: `Métropole occitane de l'aérospatial, la Ville Rose s'étend sur la Garonne et le canal du Midi, classé à l'UNESCO. Déménager à Toulouse implique de connaître le Capitole, Saint-Cyprien, Les Chalets, les Minimes, Saint-Sernin, Rangueil, Purpan et le quartier de la Cartoucherie, mais aussi les contraintes locales : centre-ville historique piétonnier, ZFE toulousaine, tramway et métro, rues étroites du quartier des Carmes. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Toulouse en 7 heures par les autoroutes A8 et A9, avec des départs réguliers. Nos équipes maîtrisent les spécificités toulousaines : réservation des emplacements en mairie, fourgons compacts pour les ruelles du Capitole et des Carmes, intervention dans les immeubles briques roses sans ascenseur. Que vous déménagiez un studio près de l'université ou une villa du quartier des Astronautes, nous adaptons notre organisation à votre projet.`,
    whyChoose: [
      `Expertise toulousaine depuis 2006 : Capitole, Saint-Cyprien, Les Minimes`,
      `Transferts réguliers Nice-Toulouse en 7h (A8/A9)`,
      `Camions conformes à la ZFE de Toulouse`,
      `Fourgons compacts pour le centre historique du Capitole`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Toulouse;Déménagement d'entreprises et de bureaux à La Cartoucherie;Déménagement d'étudiants (4 universités);Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Toulouse;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Toulouse-Nice;Déménagement économique et clé en main;Déménagement haut de gamme;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Toulouse'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions conformes ZFE'],
    assurance: `Tous nos déménagements à Toulouse sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. Vos biens sont protégés du chargement à la livraison finale, y compris sur les trajets Toulouse-Nice. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège tiers et parties communes des copropriétés toulousaines.`,
    equipment: `Camions 12 à 35 m³ conformes ZFE;Fourgons compacts 8-10 m³;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Toulouse avec des camions récents de 12 à 35 m³, conformes à la ZFE toulousaine, équipés de hayons élévateurs et de GPS temps réel. Les trajets Nice-Toulouse (A8, A9) sont planifiés en 7 heures avec pauses réglementaires. Pour le Capitole, les Carmes et Saint-Cyprien, des fourgons compacts 8-10 m³ sont systématiquement privilégiés.`,
    zonesServed: `Capitole;Saint-Cyprien;Les Chalets;Les Minimes;Saint-Sernin;Busca;Rangueil;Purpan;La Cartoucherie;Carmes;Esquirol;Compans-Caffarelli;Jolimont;Bonhoure;Empalot;Saint-Michel;Blagnac;Tournefeuille;Colomiers;Balma`.split(';'),
    tips: [
      { title: `Réservez votre emplacement en mairie`, desc: `Le centre de Toulouse est très contraint : réservez votre emplacement de stationnement en mairie 15 jours avant, en particulier pour le Capitole et les Carmes.` },
      { title: `Vérifiez la ZFE toulousaine`, desc: `Toulouse impose une ZFE progressivement. Tous nos camions sont conformes, mais anticipez si vous louez un véhicule de déménagement vous-même.` },
      { title: `Prévoyez le canal du Midi`, desc: `Classé UNESCO, le canal du Midi et ses quais limitent la circulation : nos itinéraires poids lourds contournent les zones protégées.` },
      { title: `Pensez aux étudiants`, desc: `Toulouse compte plus de 130 000 étudiants. Nos formules étudiantes (studio, colocation) incluent l'emballage fourni et des tarifs préférentiels.` },
      { title: `Évitez les heures de pointe`, desc: `La circulation est dense de 8h à 9h30 et de 17h30 à 19h, notamment sur le périphérique. Privilégiez des créneaux matinaux.` },
      { title: `Planifiez votre trajet depuis Nice`, desc: `Le trajet dure 7 heures par A8/A9. Un départ à 6h permet une livraison à Toulouse en début d'après-midi, pause réglementaire comprise.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Toulouse ?`, a: `Comptez entre 700 et 1 700 € pour un T2, entre 1 200 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h, prix fixe garanti.` },
      { q: `Comment gérez-vous le centre historique ?`, a: `Le Capitole et les Carmes sont en zone piétonne : nous utilisons des fourgons compacts et réservons les accès auprès de la mairie et des syndics.` },
      { q: `Proposez-vous des trajets Nice-Toulouse ?`, a: `Oui, avec des départs réguliers : 7 heures par A8/A9, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Avez-vous un garde-meubles à Toulouse ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€.` },
      { q: `Travaillez-vous le week-end à Toulouse ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous. Le dimanche pour les déménagements express avec supplément tarifaire.` },
      { q: `Déménagez-vous les entreprises du secteur aéronautique ?`, a: `Oui, nous intervenons régulièrement pour des bureaux à Blagnac, La Cartoucherie et Rangueil : mobilier de bureau, matériel informatique et archives en horaires décalés.` },
      { q: `Quels quartiers de Toulouse desservez-vous ?`, a: `Toute la ville : Capitole, Saint-Cyprien, Les Chalets, Minimes, Rangueil, Purpan, ainsi que Blagnac, Colomiers, Tournefeuille et Balma.` }
    ],
    conclusion: `Déménager à Toulouse avec Nice Déménagement, c'est choisir un partenaire qui maîtrise la Ville Rose : centre historique piétonnier, ZFE, canal du Midi et quartiers en pleine mutation. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Toulouse en 7h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous dès aujourd'hui pour votre déménagement à Toulouse.`,
    geo: { lat: 43.6047, lng: 1.4442 },
    postalCode: '31000', region: 'Occitanie', population: '493 465', distanceFromNice: '560 km'
  },
  {
    slug: 'montpellier', name: 'Montpellier', icon: '/assets/montpellier.webp',
    title: `Déménagement Montpellier | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Montpellier avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, garde-meubles, emballage pro. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Montpellier : Votre Expert Déménageur Montpelliérain`,
    intro: `Métropole languedocienne en pleine expansion, Montpellier mêle un cœur historique médiéval — l'Écusson — et des quartiers modernes au bord de la Méditerranée. Déménager à Montpellier implique de connaître l'Écusson et ses ruelles piétonnes, Antigone, Port-Marianne, Richter, Les Arceaux, les Beaux-Arts, les Aubes, Saint-Cléophas et Odysseum, mais aussi les contraintes locales : centre piétonnier, tramway, zone à faibles émissions et stationnement contraint. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Montpellier en 4 heures par les autoroutes A8 et A9, avec des départs réguliers chaque semaine. Proches géographiquement, nous intervenons aussi bien pour des déménagements complets que pour des transports de meubles. Nos équipes maîtrisent les spécificités montpelliéraines : fourgons compacts pour l'Écusson, réservation des emplacements en mairie, intervention dans les immeubles anciens du Peyrou sans ascenseur. Du studio étudiant de la rue Foch à la villa de Port-Marianne, chaque déménagement est pris en charge de A à Z.`,
    whyChoose: [
      `Expertise montpelliéraine depuis 2006 : Écusson, Antigone, Port-Marianne`,
      `Proximité : transferts Nice-Montpellier en 4h (A8/A9)`,
      `Fourgons compacts pour l'Écusson piétonnier`,
      `Maîtrise de la ZFE et du stationnement montpelliérain`,
      `Garde-meubles sécurisé partenaire`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Montpellier;Déménagement d'entreprises et de bureaux à Port-Marianne;Déménagement d'étudiants (universités et écoles);Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Montpellier;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Montpellier-Nice;Déménagement économique et clé en main;Déménagement haut de gamme;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Montpellier'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions conformes ZFE'],
    assurance: `Tous nos déménagements à Montpellier sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. La protection s'applique du chargement à la livraison finale, y compris sur les trajets Montpellier-Nice. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ complète la protection pour les tiers et les parties communes.`,
    equipment: `Camions 12 à 35 m³ conformes ZFE;Fourgons compacts 8-10 m³;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Montpellier avec des camions récents de 12 à 35 m³, équipés de hayons élévateurs et de GPS temps réel, conformes à la ZFE montpelliéraine. Les trajets Nice-Montpellier (A8, A9) se réalisent en 4 heures. Pour l'Écusson et le centre médiéval, des fourgons compacts 8-10 m³ assurent l'accès aux ruelles piétonnes.`,
    zonesServed: `Écusson;Antigone;Port-Marianne;Richter;Les Arceaux;Les Beaux-Arts;Les Aubes;Saint-Cléophas;Odysseum;Le Millénaire;Hôpitaux-Facultés;Aiguelongue;Croix d'Argent;Peyrou;Clemenceau;Lattes;Pérols;Castelnau-le-Lez;Saint-Jean-de-Védas;Jacou`.split(';'),
    tips: [
      { title: `Réservez l'accès à l'Écusson`, desc: `L'Écusson est piétonnier : les accès camion sont réglementés et horaires. Nous réservons les autorisations d'accès auprès de la mairie avant le jour J.` },
      { title: `Vérifiez la ZFE montpelliéraine`, desc: `Montpellier Méditerranée Métropole impose une ZFE. Tous nos camions sont conformes et circulent librement dans la zone.` },
      { title: `Anticipez le tramway`, desc: `Le tramway traverse toute la ville : nos itinéraires évitent les voies réservées et les zones de travaux du réseau.` },
      { title: `Pensez aux étudiants`, desc: `Montpellier accueille près de 80 000 étudiants. Nos formules économiques studios et colocations incluent l'emballage fourni.` },
      { title: `Profitez de la proximité avec Nice`, desc: `À seulement 4 heures de Nice, nous proposons des trajets quotidiens : idéal pour un déménagement groupé ou un transport express de meubles.` },
      { title: `Évitez les mois d'août`, desc: `La haute saison estivale et le festival rendent la circulation dense : réservez tôt votre date de déménagement entre juin et septembre.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Montpellier ?`, a: `Comptez entre 700 et 1 700 € pour un T2, entre 1 200 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h.` },
      { q: `Comment accédez-vous à l'Écusson piétonnier ?`, a: `Nous réservons les autorisations d'accès en mairie et utilisons des fourgons compacts adaptés aux ruelles médiévales du centre historique.` },
      { q: `Proposez-vous des trajets Nice-Montpellier ?`, a: `Oui, c'est l'un de nos axes les plus rapides : 4 heures par A8/A9 avec des départs réguliers et une livraison garantie par contrat.` },
      { q: `Avez-vous un garde-meubles à Montpellier ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€.` },
      { q: `Travaillez-vous le week-end à Montpellier ?`, a: `Oui, le samedi de 9h à 17h sur rendez-vous. Le dimanche pour les déménagements express avec supplément tarifaire.` },
      { q: `Quels quartiers de Montpellier desservez-vous ?`, a: `Toute la métropole : Écusson, Antigone, Port-Marianne, Richter, Les Arceaux, Odysseum, ainsi que Lattes, Pérols, Castelnau-le-Lez et Saint-Jean-de-Védas.` },
      { q: `Déménagez-vous des entreprises ?`, a: `Oui, notamment à Port-Marianne, Richter et au Millénaire : bureaux, matériel informatique et archives, en horaires décalés pour limiter l'impact sur votre activité.` }
    ],
    conclusion: `Déménager à Montpellier avec Nice Déménagement, c'est s'appuyer sur un expert local de la métropole languedocienne : Écusson piétonnier, ZFE, tramway et quartiers en pleine expansion. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Montpellier en 4h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous dès aujourd'hui pour votre déménagement à Montpellier.`,
    geo: { lat: 43.6108, lng: 3.8767 },
    postalCode: '34000', region: 'Occitanie', population: '292 151', distanceFromNice: '330 km'
  },
  {
    slug: 'strasbourg', name: 'Strasbourg', icon: '/assets/Strasbourg.webp',
    title: `Déménagement Strasbourg | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Strasbourg avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, camions Crit'Air 2 ZFE, garde-meubles. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Strasbourg : Votre Expert Déménageur Strasbourgeois`,
    intro: `Métropole alsacienne et capitale européenne, Strasbourg s'étend sur l'Ill et son réseau de canaux, entre quartiers historiques classés UNESCO et quartiers d'affaires. Déménager à Strasbourg implique de connaître la Petite France et ses maisons à colombages, le Centre-Ville, la Neustadt, Neudorf, Cronenbourg, Meinau, Koenigshoffen, Hautepierre et la Robertsau, mais aussi les contraintes locales : ZFE de l'Eurométropole, tramway, ponts et rues piétonnes du centre médiéval. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Strasbourg en 10 heures par les autoroutes A8, A7 et A4, avec des départs hebdomadaires. Nos équipes maîtrisent les spécificités strasbourgeoises : autorisations de stationnement en mairie, fourgons compacts pour la Petite France, intervention dans les immeubles alsaciens anciens aux escaliers raides. Fonctionnaires européens, étudiants ou familles, nous accompagnons tous les profils, y compris les déménagements vers Kehl et l'Allemagne toute proche.`,
    whyChoose: [
      `Expertise strasbourgeoise depuis 2006 : Petite France, Neudorf, Robertsau`,
      `Transferts réguliers Nice-Strasbourg en 10h (A8/A7/A4)`,
      `Camions Crit'Air 2 homologués pour la ZFE de l'Eurométropole`,
      `Fourgons compacts pour la Petite France UNESCO`,
      `Expérience du déménagement frontalier vers l'Allemagne (Kehl)`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Strasbourg;Déménagement d'entreprises et d'institutions (Parlement européen);Déménagement d'étudiants et fonctionnaires;Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Strasbourg;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Strasbourg-Nice;Déménagement frontalier vers l'Allemagne;Déménagement économique et clé en main;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Strasbourg'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions homologués Crit\'Air 2 ZFE'],
    assurance: `Tous nos déménagements à Strasbourg sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. Vos biens sont protégés du chargement à la livraison finale, y compris sur les longs trajets Strasbourg-Nice. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège tiers et parties communes des copropriétés alsaciennes.`,
    equipment: `Camions 12 à 35 m³ Crit'Air 2;Fourgons compacts 8-10 m³;Monte-meubles électrique;Diables et transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Strasbourg avec des camions récents de 12 à 35 m³, homologués Crit'Air 2 pour la ZFE de l'Eurométropole, équipés de hayons élévateurs et de GPS temps réel. Les trajets Nice-Strasbourg (A8, A7, A4) sont planifiés en 10 heures avec pauses réglementaires. Pour la Petite France et le centre médiéval, des fourgons compacts garantissent l'accès aux ruelles pavées.`,
    zonesServed: `Petite France;Centre-Ville;Neustadt;Neudorf;Cronenbourg;Meinau;Koenigshoffen;Hautepierre;Robertsau;Winston Churchill;Esplanade;Orangerie;Krutenau;Bourse;Gare centrale;Kehl (Allemagne);Schiltigheim;Bischheim;Lingolsheim;Illkirch-Graffenstaden`.split(';'),
    tips: [
      { title: `Réservez votre stationnement en mairie`, desc: `Le stationnement est contraint en centre-ville et dans la Petite France : réservez votre emplacement de déménagement en mairie au moins 15 jours à l'avance.` },
      { title: `Vérifiez la ZFE de l'Eurométropole`, desc: `L'Eurométropole de Strasbourg impose une ZFE : seuls les Crit'Air 2 et plus circulent. Tous nos camions sont conformes 7j/7.` },
      { title: `Protégez les maisons à colombages`, desc: `La Petite France est classée UNESCO : nous utilisons des protections spécifiques pour les escaliers raides et les parties communes en bois.` },
      { title: `Anticipez les ponts et canaux`, desc: `Les ponts de l'Ill limitent le gabarit des camions : nos itinéraires empruntent les axes adaptés aux poids lourds.` },
      { title: `Pensez au déménagement frontalier`, desc: `Depuis Strasbourg, nous assurons aussi vos déménagements vers Kehl et les villes allemandes voisines avec gestion des formalités UE.` },
      { title: `Planifiez le grand trajet Nice-Strasbourg`, desc: `10 heures de route : nous organisons un départ la veille au soir avec nuit du chauffeur, ou un départ à l'aube pour une livraison le soir même.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Strasbourg ?`, a: `Comptez entre 800 et 1 800 € pour un T2, entre 1 300 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h.` },
      { q: `Vos camions circulent-ils dans la ZFE strasbourgeoise ?`, a: `Oui, tous nos camions sont homologués Crit'Air 2, autorisés dans la ZFE de l'Eurométropole, y compris en centre-ville et à la Robertsau.` },
      { q: `Comment accédez-vous à la Petite France ?`, a: `La Petite France est piétonne et classée UNESCO : nous utilisons des fourgons compacts, des protections spéciales et des autorisations d'accès réservées en mairie.` },
      { q: `Déménagez-vous vers l'Allemagne depuis Strasbourg ?`, a: `Oui, Kehl est à 5 minutes : nous gérons les déménagements frontaliers avec formalités UE simplifiées et coordination avec nos partenaires allemands.` },
      { q: `Proposez-vous des trajets Nice-Strasbourg ?`, a: `Oui, avec des départs hebdomadaires : 10 heures par A8/A7/A4, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Avez-vous un garde-meubles à Strasbourg ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€.` },
      { q: `Quels quartiers desservez-vous ?`, a: `Toute l'Eurométropole : Petite France, Centre-Ville, Neudorf, Cronenbourg, Meinau, Robertsau, ainsi que Schiltigheim, Bischheim, Lingolsheim et Illkirch-Graffenstaden.` }
    ],
    conclusion: `Déménager à Strasbourg avec Nice Déménagement, c'est s'appuyer sur un expert des contraintes de la capitale européenne : Petite France UNESCO, ZFE, canaux et immeubles alsaciens anciens. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Strasbourg en 10h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z, y compris vers l'Allemagne. Contactez-nous dès aujourd'hui pour votre déménagement à Strasbourg.`,
    geo: { lat: 48.5734, lng: 7.7521 },
    postalCode: '67000', region: 'Grand Est', population: '290 576', distanceFromNice: '1040 km'
  },
  {
    slug: 'grenoble', name: 'Grenoble', icon: '/assets/grenoble.webp',
    title: `Déménagement Grenoble | Nice Déménagement – Devis Gratuit en 24h`,
    metaDescription: `Déménagement à Grenoble avec Nice Déménagement. Particuliers, entreprises. Monte-meubles, camions Crit'Air 2 ZFE, garde-meubles. Devis gratuit sous 24h. ☎ 06 50 22 22 78`,
    h1: `Déménagement à Grenoble : Votre Expert Déménageur Grenoblois`,
    intro: `Métropole alpine nichée dans sa cuvette entre Chartreuse et Belledonne, Grenoble combine exigence technique et cadre montagnard. Déménager à Grenoble implique de connaître l'Hyper-centre, la Bastille, l'Île Verte, Saint-Bruno, le quartier Bonne, l'Exposition-Bajatière, Hoche et Mermoz, mais aussi les contraintes locales : forte pente sur les contreforts, ZFE de la métropole grenobloise, tramway, circulation en cuvette qui emprisonne les polluants, et hivers rigoureux. Depuis 2006, Nice Déménagement assure vos transferts depuis Nice vers Grenoble en 6 heures par les autoroutes A8 et A51, avec des départs réguliers. Nos équipes maîtrisent les spécificités grenobloises : réservation des emplacements de stationnement en mairie, monte-meubles pour les immeubles de l'Hyper-centre, diables renforcés pour les quartiers en pente, gestion de la neige et du verglas en hiver. Du studio étudiant à la maison de l'Île Verte, chaque projet est orchestré avec précision.`,
    whyChoose: [
      `Expertise grenobloise depuis 2006 : Hyper-centre, Île Verte, Bonne`,
      `Transferts réguliers Nice-Grenoble en 6h (A8/A51)`,
      `Camions Crit'Air 2 homologués pour la ZFE grenobloise`,
      `Monte-meubles et diables renforcés pour les quartiers en pente`,
      `Gestion des conditions hivernales (neige, verglas)`,
      `Devis gratuit et détaillé sous 24h`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`
    ],
    services: `Déménagement de particuliers à Grenoble;Déménagement d'entreprises et de bureaux (pôle scientifique);Déménagement d'étudiants et universitaires;Transport de meubles et d'objets fragiles;Monte-meubles électrique;Garde-meubles sécurisé à Grenoble;Emballage professionnel et déballage;Transport de piano, d'œuvres d'art et de coffre-fort;Déménagement express Grenoble-Nice;Déménagement économique et clé en main;Déménagement haut de gamme;Livraison de meubles et d'électroménager`.split(';'),
    method: mtd('Grenoble'),
    guarantees: ['Délai de livraison garanti par écrit','Remboursement en cas de retard non justifié','Assurance tous risques 75 000 €','RC professionnelle de 5 M€','Équipes formées aux normes NF S85.100','Camions homologués Crit\'Air 2 ZFE'],
    assurance: `Tous nos déménagements à Grenoble sont couverts par une assurance dommages tous risques souscrite auprès de MMA Assurance, jusqu'à 75 000 € sans franchise. La protection s'applique du chargement à la livraison finale, y compris sur les trajets Grenoble-Nice et les conditions hivernales. Notre service sinistres traite chaque dossier sous 48 heures ouvrées et l'indemnisation est versée sous 30 jours. La RC pro de 5 M€ protège tiers et parties communes des copropriétés grenobloises.`,
    equipment: `Camions 12 à 35 m³ Crit'Air 2;Monte-meubles électrique;Diables renforcés pentes;Transpalettes;Sangles de serrage;Couvertures matelassées;Housses à vêtements;Cartons renforcés double cannelure;Film bulle et protections de sols`.split(';'),
    trucks: `Notre flotte dessert Grenoble avec des camions récents de 12 à 35 m³, homologués Crit'Air 2 pour la ZFE de la métropole grenobloise, équipés de hayons élévateurs et de GPS temps réel. Les trajets Nice-Grenoble (A8, A51) sont planifiés en 6 heures. En hiver, nos véhicules sont équipés de chaînes ou de pneus hiver selon les conditions.`,
    zonesServed: `Hyper-centre;Île Verte;Saint-Bruno;Quartier Bonne;Exposition-Bajatière;Hoche;Mermoz;Alliés;Championnet;Foch;Grenoble Centre;La Villeneuve;Eybens;Meylan;Gières;Saint-Martin-d'Hères;Fontaine;Seyssinet-Pariset;Sassenage;Le Versoud`.split(';'),
    tips: [
      { title: `Réservez votre stationnement en mairie`, desc: `Le stationnement est difficile dans l'Hyper-centre et la Bastille : réservez votre emplacement de déménagement en mairie au moins 15 jours à l'avance.` },
      { title: `Vérifiez la ZFE grenobloise`, desc: `La métropole grenobloise impose une ZFE très suivie : seuls les Crit'Air 2 et plus circulent en semaine. Tous nos camions sont conformes.` },
      { title: `Anticipez les quartiers en pente`, desc: `Les contreforts (Bastille, Saint-Bruno) présentent de fortes pentes : nos diables renforcés et nos équipes entraînées garantissent une manutention sûre.` },
      { title: `Préparez l'hiver`, desc: `La neige et le verglas sont fréquents de décembre à mars : nos camions sont équipés en conséquence et les créneaux sont adaptés aux conditions routières.` },
      { title: `Évitez les pics de pollution`, desc: `En épisodes de pollution, la circulation peut être restreinte en cuvette. Nous anticipons ces jours et adaptons nos itinéraires.` },
      { title: `Planifiez votre trajet depuis Nice`, desc: `Le trajet Nice-Grenoble dure 6 heures par A8/A51, avec un col d'altitude : un départ tôt le matin est recommandé pour éviter les conditions de l'après-midi.` }
    ],
    faq: [
      { q: `Combien coûte un déménagement à Grenoble ?`, a: `Comptez entre 700 et 1 700 € pour un T2, entre 1 200 et 2 800 € pour un T3-T4 et entre 2 500 et 5 000 € pour une maison. Devis gratuit sous 24h.` },
      { q: `Vos camions circulent-ils dans la ZFE grenobloise ?`, a: `Oui, tous nos camions sont homologués Crit'Air 2, autorisés dans la ZFE de la métropole grenobloise en semaine comme le week-end.` },
      { q: `Comment gérez-vous les quartiers en pente ?`, a: `Nous utilisons des diables renforcés et un monte-meubles pour les étages. Nos équipes sont formées à la manutention en pente, notamment vers la Bastille et Saint-Bruno.` },
      { q: `Travaillez-vous en hiver à Grenoble ?`, a: `Oui, nos camions sont équipés de pneus hiver ou de chaînes selon les conditions, et nous adaptons les créneaux aux prévisions météo.` },
      { q: `Proposez-vous des trajets Nice-Grenoble ?`, a: `Oui, avec des départs réguliers : 6 heures par A8/A51, livraison garantie par contrat et suivi GPS temps réel.` },
      { q: `Avez-vous un garde-meubles à Grenoble ?`, a: `Oui, via notre partenaire : entrepôt sécurisé avec vidéosurveillance 24h/24, contrôle d'accès et assurance anti vol et incendie.` },
      { q: `Mon déménagement est-il assuré ?`, a: `Oui, assurance dommages tous risques jusqu'à 75 000 € sans franchise, complétée par une RC pro de 5 M€.` },
      { q: `Quels quartiers de Grenoble desservez-vous ?`, a: `Toute la métropole : Hyper-centre, Île Verte, Bonne, Bastille, ainsi que Meylan, Gières, Saint-Martin-d'Hères, Eybens, Fontaine et Seyssinet-Pariset.` }
    ],
    conclusion: `Déménager à Grenoble avec Nice Déménagement, c'est choisir un expert des contraintes de la capitale des Alpes : ZFE, pentes, hiver et circulation en cuvette. Devis gratuit sous 24h, délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et transferts réguliers Nice-Grenoble en 6h : nos équipes formées aux normes AFNOR prennent en charge votre projet de A à Z. Contactez-nous dès aujourd'hui pour votre déménagement à Grenoble.`,
    geo: { lat: 45.1885, lng: 5.7245 },
    postalCode: '38000', region: 'Auvergne-Rhône-Alpes', population: '158 198', distanceFromNice: '460 km'
  }
]
