export enum Tag {
  LANDSCAPE,
  URBAN,
  RURAL,
  PORTRAIT,
}

export interface Image {
  filename: string
  tags: Tag[]
  width: number
  height: number
}

const images: Image[] = [
  {
    filename: '2021_08_18_sky_tower_new_world_cbd',
    tags: [Tag.URBAN],
    width: 3485,
    height: 2323,
  },
  {
    filename: '2021_08_18_beach_takapuna',
    tags: [Tag.URBAN],
    width: 2425,
    height: 3637,
  },
  {
    filename: '2021_08_18_palm_trees_takapuna',
    tags: [Tag.URBAN],
    width: 2425,
    height: 3637,
  },
]

export default images
