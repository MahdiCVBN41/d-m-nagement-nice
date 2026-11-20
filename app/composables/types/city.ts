export interface CityData {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  whyChoose: string[]
  services: string[]
  method: { title: string; desc: string }[]
  guarantees: string[]
  assurance: string
  equipment: string[]
  trucks: string
  zonesServed: string[]
  tips: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  conclusion: string
  geo: { lat: number; lng: number }
  postalCode: string
  region: string
  population?: string
  distanceFromNice?: string
  icon?: string
  image?: string
}

export interface CountryData {
  slug: string
  name: string
  countryCode: string
  flag: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  whyChoose: string[]
  services: string[]
  method: { title: string; desc: string }[]
  guarantees: string[]
  assurance: string
  equipment: string[]
  trucks: string
  customs: string
  zonesServed: string[]
  tips: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  conclusion: string
  image?: string
}
