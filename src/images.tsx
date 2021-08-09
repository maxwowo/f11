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
    filename:
      'https://images.unsplash.com/photo-1626556766281-f98af58f9bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    tags: [Tag.LANDSCAPE],
    width: 634,
    height: 951,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    tags: [Tag.LANDSCAPE],
    width: 1050,
    height: 700,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626937571481-51353f0c5735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    tags: [Tag.LANDSCAPE],
    width: 500,
    height: 333,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626895451283-c31a11ddbb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    tags: [Tag.LANDSCAPE],
    width: 634,
    height: 951,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626931609469-383e0f6b3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
    tags: [Tag.LANDSCAPE],
    width: 1052,
    height: 700,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626931015481-cf5e36d827b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
    tags: [Tag.LANDSCAPE],
    width: 675,
    height: 900,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626914471881-b5bae767b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    tags: [Tag.LANDSCAPE],
    width: 1050,
    height: 700,
  },
  {
    filename:
      'https://images.unsplash.com/photo-1626930088787-3b4a71109c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    tags: [Tag.LANDSCAPE],
    width: 634,
    height: 951,
  },
]

export default images
