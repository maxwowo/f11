export enum Tag {
  LANDSCAPE,
  URBAN,
  RURAL,
  PORTRAIT,
}

export interface Image {
  filename: string
  tags: Tag[]
  thumbnail: {
    width: number
    height: number
  }
}

const images: Image[] = [
  {
    filename: 'a741b1acd4f74ec5b8807030750ec8a9',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 333,
    },
  },
  {
    filename: '62e3b837e850437eb404797a506dd08d',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 334,
    },
  },
  {
    filename: '47e73121778846359ec02ab5bdc0bc58',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 333,
    },
  },
  {
    filename: '6f67d7df80a34dcfa5694a6d822f649c',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 333,
    },
  },
  {
    filename: '0d135737424f48cb91b1cf7a7b5eac1e',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 281,
    },
  },
  {
    filename: '27e302fd627b456aa775f5127152ba22',
    tags: [Tag.URBAN],
    thumbnail: {
      width: 500,
      height: 333,
    },
  },
  {
    filename: '49e2644dcc754319a47847ab9009c0ad',
    tags: [Tag.URBAN],
    thumbnail: {
      width: 500,
      height: 750,
    },
  },
  {
    filename: '241d0d38bdd94f21b67f6ea46086219a',
    tags: [Tag.URBAN],
    thumbnail: {
      width: 500,
      height: 750,
    },
  },
  {
    filename: 'ec349c1f7c4b4e2092bb1d92d6819277',
    tags: [Tag.PORTRAIT],
    thumbnail: {
      width: 500,
      height: 886,
    },
  },
]

export default images
