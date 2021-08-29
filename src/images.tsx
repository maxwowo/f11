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
    filename: '9M8XydnQYLRJL4Lv3NcdRi',
    tags: [Tag.URBAN],
  },
  {
    filename: 'qgP5fbFb3ew4foj45x5PtE',
    tags: [Tag.URBAN],
  },
  {
    filename: 'f9PXcQLUKHNGtiY5pTaCZi',
    tags: [Tag.URBAN],
  },
]

export default images
