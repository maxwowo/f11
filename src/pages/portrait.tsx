import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images, { Tag } from '../images'

const Portrait: NextPage = () => (
  <Fragment>
    <NextSeo canonical="https://f11.maxwowo.com/portrait" title="f/11" />
    <Navbar />
    <Masonry images={images.filter((image) => Tag.PORTRAIT in image.tags)} />
  </Fragment>
)

export default Portrait
