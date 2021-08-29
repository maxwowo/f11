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
    filename: '2021_08_18_sky_tower_new_world_cbd',
    tags: [Tag.URBAN],
  },
  {
    filename: '2021_08_18_beach_takapuna',
    tags: [Tag.URBAN],
  },
  {
    filename: '2021_08_18_palm_trees_takapuna',
    tags: [Tag.URBAN],
  },
]

export default images
