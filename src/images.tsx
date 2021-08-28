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
  {
    filename: '2021_08_18_petrol_station_pokeno',
    tags: [Tag.URBAN],
    width: 2359,
    height: 3538,
  },
  {
    filename: '2021_08_18_sky_tower_cbd',
    tags: [Tag.URBAN],
    width: 2353,
    height: 3530,
  },
  {
    filename: '2021_08_18_sky_tower_new_world_cbd',
    tags: [Tag.URBAN],
    width: 3485,
    height: 2323,
  },
]

export default images
