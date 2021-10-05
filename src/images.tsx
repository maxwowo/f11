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
    filename: 'd50c81a44ca347bf8f8907a490faa6b0',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'a5ce7756f4314ca8accf1e05437b125c',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '33c1b51df4154f258e5b7027986dc37f',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '9eb04e2ea8ba45b18b21c8e89377ddec',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '011ddc6f697d4311ba2c4af67b9a6ba5',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 408,
    },
  },
  {
    filename: '8ea49258946a4f3b89b3f3d21670878c',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'ea6b670269ef454d8b73eefbd3f9033d',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '25845eee76fd49e3bb5cb8eff4f5b067',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 754,
    },
  },
  {
    filename: 'e1855f32d3ce488fa72a9d3d5e8b9239',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'c87efc88315d43d88958eb38221832d3',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '68a1d06a5aec4235b56820703c1952d8',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '717b367f1ed14276a3eade27cffca594',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 754,
    },
  },
  {
    filename: '92c78410c3604c90aa4f4d089f9045c1',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '8e2da9643f4148a89f4b236665429a54',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'aaa5cda065dd41bc9b1ada607fb41d6d',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '629226712deb4ff98f1cedda2f69a3ab',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '9a97628d1d924d08852a6af56f6beaf4',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 754,
    },
  },
  {
    filename: '74d64a65d2b54162accc7232a9b68ebc',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 754,
    },
  },
  {
    filename: '5c541e5707954d4a8b656ca027ae2b60',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '4113c433bd424f16b42433393fb0dc1d',
    tags: [Tag.URBAN],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: '6258f9497c6c4bd5b41d207790411219',
    tags: [Tag.URBAN],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'a2fba61a6a934ca8bd7e668d3e802961',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 754,
    },
  },
  {
    filename: '92402d90ebb2482487da541450f70d04',
    tags: [Tag.LANDSCAPE],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
  {
    filename: 'e7ab49e9472b40289ac062c1de28a83a',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 332,
    },
  },
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
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 750,
    },
  },
  {
    filename: '241d0d38bdd94f21b67f6ea46086219a',
    tags: [Tag.RURAL],
    thumbnail: {
      width: 500,
      height: 750,
    },
  },
  {
    filename: 'd94077c1954a4af0b56928ae548a4cc4',
    tags: [Tag.PORTRAIT],
    thumbnail: {
      width: 500,
      height: 750,
    },
  },
]

export default images
