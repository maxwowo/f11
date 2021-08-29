export enum Tag {
  LANDSCAPE,
  URBAN,
  RURAL,
  PORTRAIT,
}

export interface Image {
  filename: string
  tags: Tag[]
}

const images: Image[] = [
  {
    filename: '27e302fd627b456aa775f5127152ba22',
    tags: [Tag.URBAN],
  },
  {
    filename: '49e2644dcc754319a47847ab9009c0ad',
    tags: [Tag.URBAN],
  },
  {
    filename: '241d0d38bdd94f21b67f6ea46086219a',
    tags: [Tag.URBAN],
  },
]

export default images
