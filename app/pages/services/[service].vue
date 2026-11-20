<script setup lang="ts">
interface ServiceData {
  title: string
  desc: string
  intro: string
  whyChoose: string[]
  included: string[]
  steps: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  conclusion: string
}

const servicesMap: Record<string, ServiceData> = {
  particuliers: {
    title: 'Déménagement de particuliers',
    desc: 'Déménagement de maisons, appartements et studios. Service complet, économique ou clé en main, adapté à votre budget et à vos besoins. Devis gratuit sous 24h.',
    intro: `Déménager sa résidence principale ou secondaire est un moment important qui mérite un accompagnement professionnel. Nice Déménagement prend en charge tous vos projets de déménagement de particuliers : studio, T2, T3, appartement familial, maison individuelle, résidence secondaire sur la Côte d'Azur. Nos équipes interviennent à Nice et dans toute la France : Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille, Nantes, Strasbourg, Grenoble, ainsi que sur toute la Côte d'Azur (Cannes, Antibes, Monaco, Grasse). Du simple transport de meubles au déménagement clé en main avec emballage complet, nous adaptons chaque prestation à votre volume, votre budget et vos contraintes. Délai garanti par contrat, assurance tous risques jusqu'à 75 000 € et équipes formées aux normes AFNOR NF S85.100 : déménagez l'esprit tranquille.`,
    whyChoose: [
      `Devis gratuit et sans engagement sous 24h, prix fixe garanti`,
      `Assurance dommages tous risques jusqu'à 75 000 € sans franchise`,
      `Déménageurs formés aux normes AFNOR NF S85.100`,
      `Monte-meubles électrique jusqu'au 8ème étage`,
      `Camions équipés : hayon, sangles, couvertures, GPS temps réel`,
      `Intervention 6j/7 avec possibilité le week-end`
    ],
    included: [
      `Déménagement complet de votre logement (studio, appartement, maison)`,
      `Emballage professionnel : cartons renforcés, papier bulle, housses`,
      `Protection des sols, murs et parties communes`,
      `Démontage et remontage de vos meubles (lits, armoires, bureaux)`,
      `Transport en camion équipé avec chargement et déchargement`,
      `Installation des meubles à la livraison`,
      `Assurance tous risques incluse`,
      `Option garde-meubles sécurisé si nécessaire`
    ],
    steps: [
      { title: '1. Demande de devis gratuite', desc: 'Décrivez votre projet en ligne ou par téléphone au 06 50 22 22 78 : volume estimé, étage, accès, distance. Un expert vous recontacte sous 24h.' },
      { title: '2. Visite technique et chiffrage', desc: 'Nous évaluons le volume réel, les contraintes d\'accès (ascenseur, escalier, monte-meubles) et vous remettons un devis détaillé sans engagement.' },
      { title: '3. Emballage et préparation', desc: 'Nos équipes emballent vos affaires avec du matériel professionnel et protègent vos meubles, sols et murs. Option emballage intégral disponible.' },
      { title: '4. Jour J : chargement et transport', desc: 'Chargement soigné dans nos camions équipés de hayons et sangles, transport sécurisé avec suivi GPS temps réel.' },
      { title: '5. Livraison et installation', desc: 'Déchargement, remontage des meubles, démontage des emballages. Vérification finale avec le client et constat de satisfaction.' }
    ],
    faq: [
      { q: 'Combien coûte un déménagement de particuliers ?', a: 'Pour un appartement, comptez 600 à 1 800 € (T2), 1 000 à 2 800 € (T3-T4) selon la ville et l\'accès. Pour une maison, 2 500 à 5 000 €. Le devis est gratuit et le prix est garanti.' },
      { q: 'Quel délai de réservation ?', a: 'Nous recommandons 4 semaines à 2 mois à l\'avance en haute saison (juin à septembre). Pour les urgences, un service express en moins de 48h existe.' },
      { q: 'Mes biens sont-ils assurés ?', a: 'Oui, assurance dommages tous risques jusqu\'à 75 000 € sans franchise, complétée par une RC pro de 5 M€.' },
      { q: 'Démontez-vous les meubles ?', a: 'Oui, démontage et remontage des lits, armoires, bureaux et canapés sont inclus dans nos formules clé en main.' },
      { q: 'Travaillez-vous le week-end ?', a: 'Oui, le samedi de 9h à 17h et le dimanche pour les déménagements express avec supplément.' },
      { q: 'Puis-je changer la date ?', a: 'Oui, votre date peut être modifiée gratuitement jusqu\'à 48h avant le jour J, sous réserve de disponibilité.' }
    ],
    conclusion: `Que vous déménagiez un studio à Nice, un appartement à Paris ou une maison à Lyon, Nice Déménagement vous garantit un service complet, assuré et au prix convenu. Demandez votre devis gratuit sous 24h et laissez nos professionnels s'occuper de tout.`
  },
  entreprises: {
    title: 'Déménagement d\'entreprises et de bureaux',
    desc: 'Transfert de bureaux, archives et matériel informatique. Travail en horaires décalés pour limiter l\'impact sur votre activité. Devis gratuit sous 24h.',
    intro: `Le transfert de vos locaux est un enjeu stratégique : chaque jour d'immobilisation coûte cher à votre activité. Nice Déménagement accompagne les entreprises de toutes tailles, des TPE aux grands groupes, dans leurs déménagements de bureaux à Nice, Paris, Lyon, Marseille, Toulouse, Bordeaux, Sophia-Antipolis, Monaco et partout en France. Notre savoir-faire couvre le transfert de mobilier de bureau, postes de travail, matériel informatique, serveurs, archives et documents sensibles. Nous intervenons en horaires décalés (soir, nuit, week-end) pour limiter l'impact sur votre activité, avec une confidentialité totale. Un chef de projet dédié pilote l'opération de A à Z : plan de déménagement, étiquetage du mobilier, cartographie des nouveaux espaces, coordination des équipes et assurance tous risques jusqu'à 75 000 €.`,
    whyChoose: [
      `Chef de projet dédié et plan de déménagement détaillé`,
      `Intervention en horaires décalés : soir, nuit, week-end`,
      `Emballage et transport du matériel informatique et serveurs`,
      `Gestion des archives et documents confidentiels`,
      `Assurance tous risques jusqu'à 75 000 € et RC pro de 5 M€`,
      `Déménagement de Sophia-Antipolis et des parcs d'activités`
    ],
    included: [
      `Plan de déménagement et étiquetage du mobilier`,
      `Cartographie des nouveaux espaces de travail`,
      `Emballage professionnel du matériel informatique`,
      `Transport de mobilier, archives et serveurs`,
      `Manutention avec transpalettes et monte-meubles`,
      `Remontage et repositionnement du mobilier`,
      `Coordination avec les prestataires (télécoms, informatique)`,
      `Nettoyage et restitution des locaux libérés`
    ],
    steps: [
      { title: '1. Audit des locaux', desc: 'Visite de vos locaux, inventaire du mobilier et du matériel, identification des contraintes (ascenseur, accès, étages, parking).' },
      { title: '2. Plan de déménagement', desc: 'Nous établissons un plan détaillé : phasage des équipes, étiquetage par zone, calendrier, points de vigilance et solution de repli si nécessaire.' },
      { title: '3. Préparation et emballage', desc: 'Emballage du matériel informatique, des archives et du mobilier avec du matériel professionnel, étiquetage de chaque caisse par destination.' },
      { title: '4. Transfert en horaires décalés', desc: 'Le déménagement s\'effectue en soirée, de nuit ou le week-end pour garantir une reprise d\'activité normale dès le lundi matin.' },
      { title: '5. Installation et vérification', desc: 'Remontage du mobilier, repositionnement selon le plan, vérification du matériel informatique et inventaire de réception avec votre référent.' }
    ],
    faq: [
      { q: 'Combien coûte un déménagement de bureaux ?', a: 'Cela dépend du volume, du nombre de postes et des prestations. Pour 10 à 20 postes, comptez 1 500 à 4 000 €; pour un étage complet (50+ postes), 5 000 à 15 000 €. Devis gratuit sous 24h.' },
      { q: 'Intervenez-vous la nuit ou le week-end ?', a: 'Oui, c\'est notre spécialité : nous travaillons en soirée, de nuit et le week-end pour ne pas perturber votre activité.' },
      { q: 'Gérez-vous le matériel informatique ?', a: 'Oui : emballage spécifique, transport des postes, écrans et serveurs, et coordination avec votre prestataire IT pour la remise en service.' },
      { q: 'Les archives confidentielles sont-elles protégées ?', a: 'Oui, confidentialité garantie : personnel dédié, caisses scellées numérotées et procédure d\'inventaire stricte.' },
      { q: 'Proposez-vous le garde-meubles pour entreprises ?', a: 'Oui, nous stockons archives et mobiliers en garde-meubles sécurisé pendant votre transition, quelques jours ou plusieurs mois.' },
      { q: 'Quel est le délai pour organiser un transfert ?', a: 'Comptez 2 à 6 semaines de préparation selon la taille des locaux. Pour les urgences, un transfert peut être organisé en 72h.' }
    ],
    conclusion: `Un déménagement d'entreprise réussi est un projet piloté. Avec un chef de projet dédié, une intervention en horaires décalés et une assurance tous risques, Nice Déménagement sécurise votre transfert de bureaux à Nice, Paris, Lyon, Sophia-Antipolis ou Monaco. Demandez votre devis gratuit sous 24h.`
  },
  'monte-meubles': {
    title: 'Monte-meubles électrique',
    desc: 'Monte-meubles électrique pouvant atteindre le 8ème étage. Idéal pour les immeubles anciens sans ascenseur. Devis gratuit sous 24h.',
    intro: `Immeuble haussmannien sans ascenseur, escalier en colimaçon, meuble trop large pour la cage d'escalier, étage élevé : le monte-meubles est la solution idéale pour acheminer vos meubles et cartons sans effort ni risque. Nice Déménagement met à votre disposition des monte-meubles électriques professionnels capables d'atteindre le 8ème étage, avec une charge utile allant jusqu'à 800 kg. Cet équipement préserve vos meubles, vos sols, vos murs et les parties communes : fini les rayures dans les escaliers et les portes de force. Nos techniciens certifiés installent et sécurisent l'appareil en quelques minutes, avec le respect des normes de sécurité en vigueur (déclaration préalable en mairie si nécessaire). Idéal à Nice, dans le Vieux-Nice, à Paris (immeubles haussmanniens), Lyon, Marseille, Cannes, Antibes et Monaco, notre service monte-meubles s'ajoute à toutes nos prestations de déménagement.`,
    whyChoose: [
      `Monte-meubles électrique jusqu'au 8ème étage`,
      `Charge utile jusqu'à 800 kg par cycle`,
      `Installation sécurisée par des techniciens certifiés`,
      `Préservation des escaliers, sols, murs et parties communes`,
      `Déclaration préalable en mairie gérée par nos équipes`,
      `Compatible avec tous types de bâtiments anciens`
    ],
    included: [
      `Mise à disposition du monte-meubles et de son opérateur`,
      `Installation et vérification de sécurité de l'appareil`,
      `Manutention complète des meubles et cartons`,
      `Déclaration d'occupation du domaine public si requise`,
      `Protection des zones de passage (sols, murs, rampes)`,
      `Coordination avec le syndic et les parties communes`,
      `Système de sécurité anti-chute certifié`,
      `Intervention en binôme avec guidage radio`
    ],
    steps: [
      { title: '1. Évaluation de l\'accès', desc: 'Visite technique pour vérifier la faisabilité : hauteur, environnement, alimentation, largeur des accès et présence d\'une façade adaptée.' },
      { title: '2. Déclaration et autorisation', desc: 'Si nécessaire, nous déposons la déclaration préalable en mairie et informons le syndic de copropriété. Une place de stationnement peut être réservée.' },
      { title: '3. Installation de l\'appareil', desc: 'Le monte-meubles est installé et solidement arrimé en quelques minutes, puis testé par notre technicien certifié.' },
      { title: '4. Manutention par l\'appareil', desc: 'Meubles volumineux, cartons et électroménager montent en toute sécurité, avec un guidage précis par radio.' },
      { title: '5. Démontage et départ', desc: 'L\'appareil est démonté, le matériel replié et la zone laissée propre après votre déménagement.' }
    ],
    faq: [
      { q: 'Faut-il une autorisation pour installer un monte-meubles ?', a: 'Selon la commune, une déclaration préalable d\'occupation du domaine public peut être exigée. Nous la gérons pour vous et réservons l\'emplacement si besoin.' },
      { q: 'Jusqu\'à quelle hauteur monte-t-il ?', a: 'Nos monte-meubles électriques atteignent le 8ème étage, soit environ 24 mètres, avec une charge utile jusqu\'à 800 kg.' },
      { q: 'Peut-il passer dans un immeuble haussmannien ?', a: 'Oui, c\'est l\'usage le plus courant à Paris et à Nice : l\'appareil s\'installe en façade et dessert chaque étage par les fenêtres ou balcons.' },
      { q: 'Combien coûte un monte-meubles ?', a: 'Comptez 250 à 600 € selon la hauteur, l\'accès et la commune. Inclus dans nos formules complètes de déménagement sur demande.' },
      { q: 'Vaut-il mieux le monte-meubles ou la cage d\'escalier ?', a: 'Au-delà du 2ème étage ou sans ascenseur, le monte-meubles évite 80% des risques de détérioration des meubles, sols et murs.' },
      { q: 'Le monte-meubles est-il assuré ?', a: 'Oui, l\'appareil est couvert par notre assurance et l\'opération est intégrée à votre contrat de déménagement tous risques.' }
    ],
    conclusion: `Immeubles anciens, étages élevés, escaliers étroits : le monte-meubles électrique de Nice Déménagement résout les accès les plus difficiles, à Nice, Paris, Lyon, Marseille, Cannes, Antibes et Monaco. Sécurisé, assuré et géré de A à Z, il transforme votre déménagement en opération fluide. Devis gratuit sous 24h.`
  },
  emballage: {
    title: 'Emballage professionnel',
    desc: 'Emballage de vos affaires avec matériel professionnel : cartons renforcés, papier bulle, housses matelassées pour meubles. Devis gratuit sous 24h.',
    intro: `Un déménagement réussi commence par un emballage soigné. Nice Déménagement propose un service d'emballage professionnel intégral ou partiel : nous emballons vos affaires avec du matériel professionnel de qualité — cartons renforcés double cannelure, papier bulle, papier de soie, housses matelassées, caisses en bois sur mesure pour les objets fragiles ou de valeur. Nos emballeurs certifiés protègent chaque bien selon sa nature : vaisselle, verres, tableaux, électroménager, vêtements sur penderie, objets de collection, piano et œuvres d'art. L'emballage professionnel vous fait gagner un temps précieux (2 à 3 jours de travail par un particulier) et vous garantit que vos biens arrivent intacts, dans des cartons étiquetés par pièce et par priorité de déballage. Disponible à Nice, Paris, Lyon, Marseille, Cannes, Antibes, Monaco et dans toute la France.`,
    whyChoose: [
      `Emballage intégral ou partiel selon vos besoins`,
      `Matériel professionnel : cartons double cannelure, papier bulle, housses`,
      `Caisses bois sur mesure pour objets fragiles et de valeur`,
      `Étiquetage par pièce et par priorité de déballage`,
      `Inventaire photographique des biens emballés`,
      `Emballeurs certifiés et formés aux normes AFNOR`
    ],
    included: [
      `Fourniture de tous les matériaux d'emballage`,
      `Emballage de la vaisselle et des objets fragiles`,
      `Protection des meubles avec housses matelassées`,
      `Caisses bois sur mesure pour objets de valeur`,
      `Housses à vêtements pour le transport sur penderie`,
      `Étiquetage et liste de contenu par carton`,
      `Déballage et évacuation des déchets à destination`,
      `Inventaire détaillé remis au client`
    ],
    steps: [
      { title: '1. Estimation du volume', desc: 'Lors de la visite technique, nous chiffrons le volume à emballer et le matériel nécessaire, selon vos besoins (partiel ou intégral).' },
      { title: '2. Livraison du matériel', desc: 'Cartons, papier bulle, housses, caisses bois et protections sont livrés sur place avant le jour du déménagement.' },
      { title: '3. Emballage méthodique', desc: 'Nos emballeurs protègent chaque pièce pièce par pièce, en respectant les priorités de déballage et l\'étiquetage couleur.' },
      { title: '4. Protection des meubles', desc: 'Meubles, tableaux et électroménager sont couverts de housses matelassées et protégés pour le transport.' },
      { title: '5. Déballage à destination', desc: 'À l\'arrivée, nous déballons, évacuons les cartons et déchets, et remettons votre intérieur en ordre.' }
    ],
    faq: [
      { q: 'Combien coûte l\'emballage professionnel ?', a: 'Comptez 30 à 60 € par m³ emballé, ou un forfait global dès 350 € pour un T2. Le matériel et l\'étiquetage sont inclus.' },
      { q: 'Quels matériaux utilisez-vous ?', a: 'Cartons renforcés double cannelure, papier bulle, papier de soie, housses matelassées, caisses bois sur mesure et films de protection.' },
      { q: 'Puis-je n\'emballer qu\'une partie ?', a: 'Oui, formule partielle : vaisselle et fragiles uniquement, ou protection des meubles seuls. Nous adaptons la prestation à votre budget.' },
      { q: 'Gérez-vous les objets de valeur ?', a: 'Oui : œuvres d\'art, tableaux, antiquités et piano bénéficient d\'un emballage spécifique avec caisses sur mesure et assurance renforcée.' },
      { q: 'Emballez-vous les vêtements ?', a: 'Oui, avec des housses à vêtements professionnelles qui arrivent directement sur penderie dans le camion et au nouveau domicile.' },
      { q: 'Que faites-vous des cartons après le déballage ?', a: 'Nous évacuons cartons et déchets d\'emballage et les recyclons. Aucune corvée de cartons après votre déménagement.' }
    ],
    conclusion: `Gagnez 2 à 3 jours de travail et protégez vos biens avec l'emballage professionnel Nice Déménagement : matériel premium, étiquetage méthodique et déballage à destination. Disponible à Nice, Paris, Lyon, Marseille, Cannes, Antibes et Monaco. Devis gratuit sous 24h.`
  },
  piano: {
    title: 'Transport de piano et objets de valeur',
    desc: 'Piano droit, piano queue, coffre-fort, œuvres d\'art, antiquités. Emballage spécifique et assurance sur mesure. Devis gratuit sous 24h.',
    intro: `Un piano, une œuvre d'art, un coffre-fort ou une antiquité ne se déménagent pas comme des meubles ordinaires : ces biens précieux exigent un savoir-faire spécifique, un matériel adapté et une assurance sur mesure. Nice Déménagement transporte pianos droits et pianos à queue (demi-queue, quart de queue), claviers, coffres-forts, sculptures, tableaux, miroirs anciens et antiquités à Nice, Paris, Lyon, Marseille, Cannes, Antibes, Monaco et dans toute la France, ainsi qu'à l'international (Italie, Suisse, Allemagne, Belgique, Espagne). Nos déménageurs spécialisés utilisent des chariots à piano, des sangles de levage, des caisses en bois sur mesure et des protections climatiques pour le transport. Chaque transport de valeur fait l'objet d'un contrat dédié avec assurance renforcée, convoyage accompagné et inventaire photographique avant départ.`,
    whyChoose: [
      `Déménageurs spécialisés biens précieux`,
      `Caisses bois sur mesure et chariots à piano professionnels`,
      `Assurance renforcée : extension jusqu'à 150 000 € possible`,
      `Convoyage accompagné avec inventaire photographique`,
      `Expérience du transport vers l'Italie, la Suisse et l'Europe`,
      `Manipulation sans décordage du piano, accord préservé`
    ],
    included: [
      `Transport de piano droit et piano à queue`,
      `Caisses bois sur mesure et protections climatiques`,
      `Chariots à piano et sangles de levage spécialisées`,
      `Démontage des pieds et pédalier si nécessaire`,
      `Transport de coffres-forts et caisses fortes`,
      `Emballage des œuvres d'art et tableaux`,
      `Assurance renforcée jusqu'à 150 000 € sur demande`,
      `Convoyage accompagné et inventaire photographique`
    ],
    steps: [
      { title: '1. Visite technique spécialisée', desc: 'Un spécialiste évalue le piano ou l\'objet (poids, dimensions, type), les accès (escalier, ascenseur, fenêtre) et les conditions de transport.' },
      { title: '2. Protection et caisse sur mesure', desc: 'Le piano est emballé dans des protections spécifiques ou une caisse bois sur mesure, garantissant stabilité et protection climatique.' },
      { title: '3. Manutention experte', desc: 'Chariots à piano, sangles de levage et équipe de 3 à 5 spécialistes pour une manipulation en douceur, sans heurt ni décordage.' },
      { title: '4. Transport sécurisé', desc: 'Transport en camion équipé, arrimage renforcé, convoyage accompagné et suivi GPS pour les trajets longue distance.' },
      { title: '5. Installation et vérification', desc: 'Déplacement jusqu\'à la pièce finale, remontage des pieds, remise en place et contrôle d\'état avec le client.' }
    ],
    faq: [
      { q: 'Combien coûte le transport d\'un piano ?', a: 'Comptez 350 à 800 € pour un piano droit en ville, 800 à 2 000 € pour un piano à queue selon le volume, les accès et la distance. Devis précis après visite.' },
      { q: 'Un piano peut-il être transporté sans être accordé après ?', a: 'Tout transport entraîne un micro-désaccordage : nous vous conseillons de prévoir un accordage 2 à 4 semaines après l\'installation pour laisser le bois se stabiliser.' },
      { q: 'Transportez-vous les coffres-forts ?', a: 'Oui, jusqu\'à 2 tonnes avec du matériel spécifique (diables à roues renforcées, palans, transpalettes) et une équipe adaptée au poids.' },
      { q: 'Mes œuvres d\'art sont-elles assurées ?', a: 'Oui, au-delà de l\'assurance tous risques standard (75 000 €), nous souscrivons des extensions jusqu\'à 150 000 € avec estimation préalable.' },
      { q: 'Transportez-vous des pianos à l\'étranger ?', a: 'Oui : Italie, Suisse, Allemagne, Belgique, Espagne et Europe du Nord, avec formalités douanières et assurance internationale.' },
      { q: 'Combien de personnes pour un piano à queue ?', a: 'Un piano à queue mobilise 3 à 5 spécialistes selon le poids (jusqu\'à 500 kg) et l\'accès, avec chariot à piano et protections.' }
    ],
    conclusion: `Piano à queue, coffre-fort, œuvre d'art ou antiquité : Nice Déménagement protège vos biens précieux avec un matériel spécialisé, une équipe experte et une assurance renforcée. À Nice, Paris, Lyon, Marseille, Monaco et à l'international, votre patrimoine voyage en toute sécurité. Devis gratuit sous 24h.`
  }
}

const route = useRoute()
const slug = route.params.service as string
const service = servicesMap[slug]

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service introuvable', fatal: true })
}

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Services', url: '/services' },
  { name: service.title, url: `/services/${slug}` }
]

const cities = [
  { slug: 'nice', name: 'Nice' },
  { slug: 'paris', name: 'Paris' },
  { slug: 'lyon', name: 'Lyon' },
  { slug: 'marseille', name: 'Marseille' },
  { slug: 'cannes', name: 'Cannes' },
  { slug: 'monaco', name: 'Monaco' }
]

const { getServiceSchema, getFaqSchema, getWebPageSchema, getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: `${service.title} | Nice Déménagement`,
  description: service.desc,
  path: `/services/${slug}`
})

injectSchemas([
  getServiceSchema(service.title, ['Nice', 'Paris', 'Marseille', 'Lyon', 'Nantes', 'Lille', 'Bordeaux', 'Toulouse', 'Montpellier', 'Strasbourg', 'Grenoble', 'Cannes', 'Antibes', 'Grasse', 'Monaco'], `/services/${slug}`),
  getWebPageSchema(`${service.title} | Nice Déménagement`, service.desc, breadcrumb),
  getFaqSchema(service.faq),
  getFullBreadcrumbSchema(breadcrumb)
])
</script>

<template>
  <div v-if="service">
    <BreadcrumbBar :items="breadcrumb" />
    <HeroSection :title="service.title" :subtitle="service.desc" />

    <section class="section">
      <div class="container narrow">
        <h2>Pourquoi choisir Nice Déménagement ?</h2>
        <p class="lead">{{ service.intro }}</p>
        <ul class="check-list">
          <li v-for="item in service.whyChoose" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container narrow">
        <h2>Ce que comprend notre service</h2>
        <ul class="check-list">
          <li v-for="item in service.included" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <h2>Comment se déroule la prestation ?</h2>
        <div class="method-steps">
          <div v-for="step in service.steps" :key="step.title" class="method-step">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container narrow">
        <h2>Questions fréquentes</h2>
        <details v-for="item in service.faq" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <h2>Intervention dans toute la France</h2>
        <p class="lead">Ce service est disponible à Nice et partout en France. Découvrez nos zones d'intervention principales :</p>
        <div class="city-links">
          <NuxtLink v-for="c in cities" :key="c.slug" :to="`/ville/${c.slug}`" class="city-link">{{ c.name }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <p class="lead">{{ service.conclusion }}</p>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.section { padding: 3rem 0; }
.section--alt { background: #f6f8fc; }
.container.narrow { max-width: 860px; margin: 0 auto; }
.lead { font-size: 1.05rem; line-height: 1.75; color: #334155; }
.check-list { list-style: none; padding: 0; display: grid; gap: 0.6rem; }
.check-list li { position: relative; padding-left: 1.6rem; line-height: 1.6; color: #1e293b; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #16a34a; font-weight: 700; }
.method-steps { display: grid; gap: 1.2rem; }
.method-step { background: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #1e40af; border-radius: 8px; padding: 1rem 1.2rem; }
.method-step h3 { margin: 0 0 0.4rem; font-size: 1.02rem; color: #1e40af; }
.method-step p { margin: 0; color: #475569; line-height: 1.6; }
.faq-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.8rem 1rem; margin-bottom: 0.6rem; background: #fff; }
.faq-item summary { cursor: pointer; font-weight: 600; color: #1e293b; }
.faq-item p { margin: 0.6rem 0 0; color: #475569; line-height: 1.6; }
.city-links { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.city-link { background: #1e40af; color: #fff; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; }
.city-link:hover { background: #1e3a8a; }
</style>
