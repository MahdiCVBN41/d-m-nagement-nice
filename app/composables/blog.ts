export interface BlogSection {
  h2: string
  paras: string[]
  list?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  metaDescription: string
  datePublished: string
  dateModified: string
  readingTime: string
  image: string
  imageAlt: string
  keywords: string[]
  sections: BlogSection[]
  faq: { q: string; a: string }[]
  relatedPosts: string[]
  relatedLinks: { label: string; url: string }[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'checklist-demenagement',
    title: 'Checklist déménagement : la liste complète de J-90 au jour J',
    metaDescription: 'La checklist déménagement complète : démarches administratives, réservation, tri, cartons, jour J et après. 90 à 0 jours avant votre déménagement à Nice, Paris ou ailleurs.',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    readingTime: '7 min',
    image: '/assets/blog-checklist.webp',
    imageAlt: 'Checklist déménagement : cartons, planning et démarches',
    keywords: ['checklist déménagement', 'planning déménagement', 'préparer son déménagement', 'liste déménagement'],
    sections: [
      {
        h2: 'J-90 à J-60 : poser les fondations',
        paras: [
          `Le secret d'un déménagement réussi, c'est l'anticipation. Entre 3 et 2 mois avant la date, commencez par chiffrer votre projet : le volume de vos affaires (comptez environ 1 m³ par pièce principale), le nombre de cartons, la distance entre votre ancien et votre nouveau logement. C'est le moment de demander vos [devis gratuits|https://www.nice-demenagement.fr/devis] aux déménageurs : en haute saison (juin à septembre), les entreprises sérieuses sont réservées plusieurs semaines à l'avance, à [Nice|/ville/nice], [Paris|/ville/paris] comme à [Lyon|/ville/lyon].`,
          `C'est aussi le bon moment pour informer votre bailleur (préavis de 1 à 3 mois selon la loi) et pour planifier la réservation de l'ascenseur ou d'un monte-meubles si votre immeuble en a besoin.`
        ]
      },
      {
        h2: 'J-45 à J-30 : les démarches administratives',
        paras: [
          `- Résiliez ou transférez vos contrats : électricité (EDF, Engie), gaz, eau, internet, assurance habitation. Prévenez vos fournisseurs au moins 3 semaines avant pour éviter les coupures.`,
          `- Changez de médecin traitant uniquement après déménagement, mais prévoyez déjà votre nouvelle carte vitale (via ameli).`,
          `- Informez votre banque, votre employeur, les impôts et la CAF de votre changement d'adresse.`,
          `- Faites suivre votre courrier à La Poste (service « réexpédition », à partir de 10 €/mois).`
        ],
        list: ['Réexpédition du courrier : à activer dès J-30', 'Résiliation internet : 30 jours de préavis obligatoires chez la plupart des opérateurs']
      },
      {
        h2: 'J-15 à J-7 : la préparation logistique',
        paras: [
          `Vérifiez les accès de votre nouveau logement : largeur de l'ascenseur, escalier, contraintes de stationnement. À [Nice|/ville/nice], [Marseille|/ville/marseille] ou [Bordeaux|/ville/bordeaux], le stationnement est souvent difficile : demandez une autorisation d'occupation temporaire en mairie 15 jours à l'avance.`,
          `Commandez votre matériel : cartons renforcés double cannelure, papier bulle, scotch, marqueurs, housses à vêtements. Désintégrez vos meubles encombrants (lits, armoires) et étiquetez chaque carton par pièce et par priorité de déballage.`
        ]
      },
      {
        h2: 'J-7 à J-1 : les derniers détails',
        paras: [
          `- Préparez un « carton de survie » : documents, médicaments, chargeurs, trousse de toilette, quelques vêtements, de l'eau et de quoi grignoter le jour J.`,
          `- Congelez ou videz votre réfrigérateur 48h avant.`,
          `- Confirmez l'heure d'arrivée des déménageurs et prévenez vos voisins.`,
          `- Récupérez les clés et badge d'accès de votre nouveau logement.`
        ],
        list: ['Carton de survie : prêt dès J-2', 'Zone de stationnement : réservée et signalée']
      },
      {
        h2: 'Le jour J et après',
        paras: [
          `Le jour J, soyez présent pour guider l'équipe, vérifier chaque pièce au chargement et tenir l'inventaire des cartons. Nos déménageurs s'occupent de la manutention, du [monte-meubles|/services/monte-meubles] et de l'installation des meubles à destination.`,
          `Après le déménagement : vérifiez les compteurs (relevés d'électricité, de gaz et d'eau), signalez à votre assurance les éventuels dommages, et récupérez le récépissé de votre résiliation. Enfin, ouvrez les cartons pièce par pièce, en commençant par la cuisine et la chambre.`
        ]
      }
    ],
    faq: [
      { q: 'Quand réserver son déménageur ?', a: 'Idéalement 6 à 8 semaines à l\'avance, et jusqu\'à 3 mois en haute saison (juin à septembre) à Nice, Paris, Lyon et Marseille. Un service express reste possible en moins de 48h.' },
      { q: 'Quels documents pour un changement d\'adresse ?', a: 'Préavis au bailleur, résiliations énergie et internet, réexpédition du courrier, changement d\'adresse auprès de la banque, des impôts, de la CAF et de l\'assurance.' },
      { q: 'Combien de cartons pour un T3 ?', a: 'Comptez 40 à 60 cartons pour un appartement T3, plus 5 à 10 cartons de livres et 3 à 5 housses à vêtements. Une visite technique gratuite permet un chiffrage précis.' },
      { q: 'Que mettre dans le carton de survie ?', a: 'Documents d\'identité, ordonnances, médicaments, chargeurs, vêtements de rechange, produits de première nécessité et de quoi vous restaurer le jour J.' }
    ],
    relatedPosts: ['estimer-volume-demenagement-m3', 'bien-emballer-demenagement'],
    relatedLinks: [
      { label: 'Estimer le volume de votre déménagement', url: '/blog/estimer-volume-demenagement-m3' },
      { label: 'Emballage professionnel', url: '/services/emballage' },
      { label: 'Déménagement de particuliers', url: '/services/particuliers' }
    ]
  },
  {
    slug: 'zfe-camions-demenagement-2026',
    title: 'ZFE 2026 : quels camions de déménagement peuvent circuler dans votre ville ?',
    metaDescription: 'ZFE 2026 : Paris, Lyon, Marseille, Grenoble, Montpellier, Strasbourg, Bordeaux… quelles vignettes Crit\'Air pour les camions de déménagement ? Explications et solutions.',
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    readingTime: '6 min',
    image: '/assets/cote-azur.webp',
    imageAlt: 'Camions de déménagement et Zones à Faibles Émissions en 2026',
    keywords: ['ZFE 2026', 'vignette Crit\'Air camion', 'ZFE déménagement', 'zone à faibles émissions'],
    sections: [
      {
        h2: 'Qu\'est-ce qu\'une ZFE ?',
        paras: [
          `Une Zone à Faibles Émissions (ZFE) restreint la circulation des véhicules les plus polluants dans le périmètre et aux horaires définis par la métropole. Les contrevenants risquent une amende pouvant atteindre 135 € pour un camion, et c'est la zone qui détermine la vignette Crit'Air minimale exigée.`,
          `Pour un [déménagement à Paris|/ville/paris], à [Lyon|/ville/lyon] ou à [Marseille|/ville/marseille], le choix du camion est donc stratégique : un véhicule non conforme ne peut pas accéder à votre adresse le jour J.`
        ]
      },
      {
        h2: 'La carte des ZFE en 2026',
        paras: [
          `Les métropoles les plus strictes exigent désormais les vignettes suivantes pour les poids lourds :`
        ],
        list: [
          'Paris et petite couronne : Crit\'Air 1 minimum (essence EURO 5+, diesel EURO 6 exclu progressivement)',
          'Lyon (Grand Lyon) : Crit\'Air 2 minimum',
          'Marseille (Aix-Marseille-Provence) : Crit\'Air 2 minimum',
          'Grenoble : Crit\'Air 2 minimum en semaine',
          'Strasbourg (Eurométropole) : Crit\'Air 2 minimum',
          'Montpellier : Crit\'Air 2 minimum en semaine',
          'Bordeaux : Crit\'Air 2 minimum',
          'Lille (MEL) : Crit\'Air 2 minimum',
          'Toulouse : calendrier progressif convergant vers Crit\'Air 2'
        ]
      },
      {
        h2: 'Ce que cela change pour votre déménagement',
        paras: [
          `Si vous louez un utilitaire vous-même ou faites appel à un déménageur, vérifiez toujours la vignette Crit'Air du camion AVANT la réservation. Un camion non conforme bloque la livraison, reporte le déménagement et génère des frais supplémentaires.`,
          `Chez Nice Déménagement, notre [flotte de camions|/services/entreprises] est entièrement conforme : camions Crit'Air 2 pour la [Marseille|/ville/marseille], [Lyon|/ville/lyon], [Grenoble|/ville/grenoble], [Montpellier|/ville/montpellier], [Strasbourg|/ville/strasbourg], [Bordeaux|/ville/bordeaux] et [Lille|/ville/lille], et camions Crit'Air 1 pour la ZFE de [Paris|/ville/paris]. Cette conformité est garantie par contrat pour éviter toute mauvaise surprise le jour J.`
        ]
      },
      {
        h2: 'Les solutions si votre déménagement touche une ZFE',
        paras: [
          `- Vérifiez la vignette du véhicule dès la demande de devis.`,
          `- Privilégiez le chargement le week-end là où la ZFE ne s'applique pas ou moins (comme à Grenoble ou Montpellier).`,
          `- Envisagez un monte-meubles en façade si le stationnement conforme est loin de votre porte.`
        ],
        list: ['Conformité ZFE incluse dans tous nos devis', 'Itinéraires alternatifs préparés par nos chauffeurs']
      }
    ],
    faq: [
      { q: 'Quelle vignette pour un camion à Paris en 2026 ?', a: 'La ZFE de Paris exige au minimum la vignette Crit\'Air 1 pour les camions. Nos véhicules parisiens sont tous homologués Crit\'Air 1, utilisables 7j/7.' },
      { q: 'Un camion Crit\'Air 3 peut-il rouler à Lyon ?', a: 'Non, le Grand Lyon exige au minimum Crit\'Air 2 pour les poids lourds depuis 2023, avec un contrôle renforcé depuis 2024.' },
      { q: 'Que risque-t-on sans vignette conforme ?', a: 'Une amende jusqu\'à 135 € pour un camion (68 € en PV minoré) et surtout le blocage du jour J : le véhicule peut être refusé à l\'accès de la zone.' },
      { q: 'Les week-ends sont-ils concernés par les ZFE ?', a: 'Certaines métropoles (Grenoble, Montpellier) suspendent la ZFE le week-end et les jours fériés. D\'autres (Paris, Lyon) l\'appliquent 7j/7. Renseignez-vous ou confiez la gestion à votre déménageur.' }
    ],
    relatedPosts: ['checklist-demenagement', 'estimer-volume-demenagement-m3'],
    relatedLinks: [
      { label: 'Déménagement à Paris', url: '/ville/paris' },
      { label: 'Déménagement à Lyon', url: '/ville/lyon' },
      { label: 'Déménagement à Marseille', url: '/ville/marseille' }
    ]
  },
  {
    slug: 'estimer-volume-demenagement-m3',
    title: 'Comment estimer le volume de son déménagement en m³ ? (méthode simple)',
    metaDescription: 'Estimer le volume de son déménagement en m³ : méthode pièce par pièce, ratio de cartons, exemples pour studio, T2, T3, T4 et maison. Tableau et astuces.',
    datePublished: '2026-07-12',
    dateModified: '2026-07-25',
    readingTime: '5 min',
    image: '/assets/calcul-volume.webp',
    imageAlt: 'Estimation du volume de déménagement en mètres cubes',
    keywords: ['estimer volume déménagement', 'm3 déménagement', 'calcul volume meubles', 'taille camion déménagement'],
    sections: [
      {
        h2: 'Pourquoi le volume est-il la clé du devis ?',
        paras: [
          `Le volume de vos affaires (en m³) détermine la taille du camion, le nombre de déménageurs, le temps de manutention et donc le prix. Une estimation juste évite deux écueils : un camion trop petit (deux allers-retours facturés en supplément) ou un devis surdimensionné.`
        ]
      },
      {
        h2: 'La méthode simple : 1 m³ par pièce, pondéré par la charge',
        paras: [
          `Règle de base : une pièce principale meublée représente 1 à 1,5 m³. Affinez avec la grille suivante :`
        ],
        list: [
          'Studio meublé : 8 à 12 m³',
          'T2 (45 m²) : 12 à 20 m³',
          'T3 (65 m²) : 20 à 30 m³',
          'T4-T5 (85-100 m²) : 30 à 45 m³',
          'Maison 4 pièces : 45 à 60 m³',
          'Maison 5 pièces et plus : 60 à 90 m³',
          '1 m³ ≈ 5 à 6 cartons moyens ou 3 grandes boîtes de déménagement'
        ]
      },
      {
        h2: 'Astuces pour affiner votre estimation',
        paras: [
          `Comptez 0,5 m³ par grosse charge : canapé, armoire, frigo, machine à laver, piano numérique. Une bibliothèque pleine pèse très lourd en m³ : un carton de livre complet, c'est environ 0,25 m³ pour 25 kg.`,
          `Pensez aux espaces oubliés : grenier, cave, garage, remise, balcon. Ils représentent souvent 10 à 20 % du volume total !`,
          `Si le doute persiste, notre visite technique gratuite reste la méthode la plus fiable : un expert se déplace, mesure réellement et vous remet un [devis en 24h|https://www.nice-demenagement.fr/devis] sans engagement, à [Nice|/ville/nice] comme partout en France.`
        ]
      },
      {
        h2: 'Quel camion pour quel volume ?',
        paras: [
          `Nos camions de 12, 20, 25 et 35 m³ couvrent tous les projets : utilitaire 12 m³ pour un studio, camion 20 m³ pour un T2-T3, 25 à 35 m³ pour les grands appartements et maisons. Au-delà, nous planifions deux passages ou une semi-remorque.`
        ]
      }
    ],
    faq: [
      { q: 'Quel volume pour un T2 ?', a: 'Un T2 meublé représente environ 12 à 20 m³, soit un camion de 20 m³ conseillé, 2 déménageurs et une demi-journée de manutention.' },
      { q: 'Combien de cartons dans 1 m³ ?', a: 'Un mètre cube correspond à environ 5 à 6 cartons moyens (60 x 40 x 40 cm) ou à 3 grands cartons penderie/vêtements.' },
      { q: 'Comment mesurer le volume d\'un meuble ?', a: 'Multipliez longueur x largeur x hauteur en mètres. Un canapé de 2 x 0,9 x 0,8 m = 1,44 m³. Arrondissez toujours au demi-m³ supérieur.' },
      { q: 'L\'estimation en ligne est-elle fiable ?', a: 'Elle donne un ordre de grandeur correct si vous restez honnête sur le remplissage. La visite technique gratuite reste la garantie d\'un devis précis.' }
    ],
    relatedPosts: ['checklist-demenagement', 'bien-emballer-demenagement'],
    relatedLinks: [
      { label: 'Déménagement de particuliers', url: '/services/particuliers' },
      { label: 'Devis gratuit en 24h', url: 'https://www.nice-demenagement.fr/devis' }
    ]
  },
  {
    slug: 'bien-emballer-demenagement',
    title: 'Emballer sans casse : le guide complet de l\'emballage professionnel',
    metaDescription: 'Guide emballage déménagement : protéger la vaisselle, les vêtements, l\'électroménager, les meubles et les objets fragiles. Matériel, méthodes et erreurs à éviter.',
    datePublished: '2026-06-28',
    dateModified: '2026-07-10',
    readingTime: '6 min',
    image: '/assets/cote-azur2.webp',
    imageAlt: 'Emballage professionnel pour déménagement sans casse',
    keywords: ['emballage déménagement', 'protéger vaisselle déménagement', 'emballer cartons', 'matériel emballage'],
    sections: [
      {
        h2: 'Le bon matériel, la moitié de la bataille',
        paras: [
          `Les cartons de supermarché ne suffisent pas. Un emballage professionnel repose sur : cartons renforcés double cannelure (40-60 cm pour les livres, 60 x 40 x 40 pour le standard), papier bulle à grosses bulles, papier de soie, scotch large à renfort, marqueurs, et housses matelassées pour les meubles.`,
          `Nos équipes utilisent ce matériel dans le cadre du service [emballage professionnel|/services/emballage], disponible à [Nice|/ville/nice], [Paris|/ville/paris], [Lyon|/ville/lyon], [Marseille|/ville/marseille], [Cannes|/ville/cannes] et [Monaco|/ville/monaco].`
        ]
      },
      {
        h2: 'Vaisselle et verres : la méthode du nid',
        paras: [
          `Enveloppez chaque assiette dans du papier de soie, puis du papier bulle. Empilez-les verticalement (comme des disques) et non à plat : la charge est mieux répartie. Remplissez toujours les espaces vides avec du papier froissé pour éviter tout mouvement. Un carton de vaisselle ne doit jamais dépasser 15 kg.`
        ],
        list: ['Assiettes : debout, enveloppées individuellement', 'Verres : enveloppés, tête en bas, dans un carton cellulaire', 'Carton limité à 15 kg pour la vaisselle']
      },
      {
        h2: 'Vêtements, électroménager et meubles',
        paras: [
          `Les vêtements partent sur penderie dans des housses spécifiques : ils arrivent sans un pli et se posent directement dans les armoires. L'électroménager (frigo, machine à laver) doit être vidé, dégivré et séché 48h avant : les équipes le stabilisent avec des sangles dans le camion.`,
          `Les meubles fragiles (marbre, verre, miroirs) sont protégés par des housses matelassées renforcées ; les pieds et les tiroirs sont démontés si nécessaire. Pour un piano, un coffre-fort ou des œuvres d'art, un [transport spécialisé|/services/piano] avec caisses sur mesure et assurance renforcée est recommandé.`
        ]
      },
      {
        h2: 'Les erreurs qui coûtent cher',
        paras: [
          `Surcharger un carton (au-delà de 30 kg), ne pas étiqueter les cartons par pièce, oublier de protéger les sols pendant les allers-retours, ou laisser les objets lourds au-dessus des fragiles dans le camion : voici les causes les plus fréquentes de casse. Nos déménageurs sont formés aux normes AFNOR NF S85.100 pour les éviter systématiquement.`
        ]
      }
    ],
    faq: [
      { q: 'Combien coûte un service d\'emballage professionnel ?', a: 'Comptez 30 à 60 € par m³ emballé ou un forfait dès 350 € pour un T2, matériel et étiquetage inclus. Le déballage à destination est proposé en option.' },
      { q: 'Faut-il emballer son frigo avant le déménagement ?', a: 'Oui : videz-le, dégivrez-le et séchez-le 48h à l\'avance. Nos équipes le stabilisent ensuite avec des sangles dans le camion.' },
      { q: 'Comment protéger un miroir ou un tableau ?', a: 'Emballage papier bulle puis carton sur mesure, position verticale et calage systématique. Pour les œuvres de valeur, une caisse bois sur mesure est recommandée.' },
      { q: 'Puis-je transporter mes vêtements sur cintres ?', a: 'Oui, c\'est la méthode professionnelle : housses à vêtements penderie directement suspendues dans le camion, sans pli ni casse.' }
    ],
    relatedPosts: ['checklist-demenagement', 'choisir-garde-meubles'],
    relatedLinks: [
      { label: 'Emballage professionnel', url: '/services/emballage' },
      { label: 'Transport de piano et objets de valeur', url: '/services/piano' }
    ]
  },
  {
    slug: 'choisir-garde-meubles',
    title: 'Garde-meubles : comment choisir son entrepôt de stockage et quels tarifs en 2026 ?',
    metaDescription: 'Choisir un garde-meubles : entrepôt sécurisé, box, conteneur. Critères (sécurité, assurance, climatisation), tarifs 2026 au m² et conseils pour bien stocker.',
    datePublished: '2026-06-10',
    dateModified: '2026-07-05',
    readingTime: '6 min',
    image: '/assets/grasse.webp',
    imageAlt: 'Garde-meubles sécurisé : entrepôt de stockage surveillé',
    keywords: ['garde-meubles', 'tarif garde-meubles 2026', 'entrepôt sécurisé', 'stockage meubles'],
    sections: [
      {
        h2: 'Quand utiliser un garde-meubles ?',
        paras: [
          `Mutation professionnelle, période entre deux logements, départ à l'étranger, travaux de longue durée ou simplement appartement trop petit : le garde-meubles répond à tous ces cas. Il permet de stocker quelques jours comme plusieurs mois, en toute sécurité.`,
          `Notre service de [garde-meubles|/garde-meubles] est disponible à Nice et dans toute la France, en complément d'un [déménagement|/services/particuliers] : nous transportons vos affaires, les stockons, puis les livrons à votre nouvelle adresse quand vous êtes prêt.`
        ]
      },
      {
        h2: 'Les questions à poser avant de signer',
        paras: [
          `Sécurité : vidéosurveillance 24h/24, alarme intrusion, contrôle d'accès par badge, présence humaine ? Assurance : la garantie couvre-t-elle le vol, l'incendie et le dégât des eaux ? Combien d'indemnités par m³ ou par carton ?`,
          `Accessibilité : un accès libre aux heures qui vous conviennent ou des horaires restreints ? Quel délai pour sortir un carton en urgence ? Climatisation : indispensable pour les œuvres d'art, les instruments de musique et l'électronique.`
        ],
        list: ['Vidéosurveillance 24h/24 et alarme : exigence de base', 'Assurance vol + incendie + dégât des eaux incluse', 'Accès aux horaires qui vous conviennent']
      },
      {
        h2: 'Les tarifs du garde-meubles en 2026',
        paras: [
          `Les prix se calculent au m² (ou au m³ à Paris) : comptez 15 à 35 €/m² par mois pour un box en libre accès, et 5 à 12 €/m³ par mois pour un garde-meubles classique géré par un déménageur, selon la ville et la sécurité. Les frais de dossier (entrée, sortie) et le transport vers l'entrepôt sont généralement facturés en plus.`,
          `À volume égal (4 m² ≈ 20 m³), le garde-meubles conventionné par un [déménageur professionnel|/services/particuliers] inclut souvent l'assurance, l'inventaire et la flexibilité de sortie, ce qui le rend plus intéressant qu'un box à gérer soi-même.`
        ]
      },
      {
        h2: 'Bien préparer ses affaires avant le stockage',
        paras: [
          `Nettoyez vos meubles, videz les cartons de leur air (attention aux cartons trop remplis qui s'écrasent), traitez les textiles contre les mites et placez des sachets de silice contre l'humidité. N'entreposez jamais de produits inflammables (peintures, aérosols) ni de denrées périssables.`
        ]
      }
    ],
    faq: [
      { q: 'Combien coûte un garde-meubles en 2026 ?', a: 'Entre 5 et 12 €/m³ par mois pour un garde-meubles géré par un professionnel, et 15 à 35 €/m² pour un box en libre accès. Le devis est gratuit et sans engagement.' },
      { q: 'Le garde-meubles est-il assuré ?', a: 'Oui chez nous : assurance vol, incendie et dégât des eaux incluse, avec inventaire détaillé à l\'entrée et à la sortie. Demandez toujours la fiche de garantie avant de signer.' },
      { q: 'Peut-on sortir un carton en cours de contrat ?', a: 'Oui, nos contrats permettent une sortie partielle ou totale avec un délai de 24 à 48h, selon les horaires d\'accès de l\'entrepôt.' },
      { q: 'Comment estimer la surface de stockage nécessaire ?', a: 'Un studio = 3 à 4 m², un T3 = 6 à 8 m², un T5 = 10 à 12 m². Au-delà, nos conseillers vous orientent vers un chiffrage précis lors de la visite.' }
    ],
    relatedPosts: ['checklist-demenagement', 'bien-emballer-demenagement'],
    relatedLinks: [
      { label: 'Garde-meubles sécurisé', url: '/garde-meubles' },
      { label: 'Déménagement international', url: '/pays' }
    ]
  }
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find(p => p.slug === slug)
}