import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images from '../images'

const Index = () => (
  <Fragment>
    <NextSeo canonical="https://studio.maxwowo.com" title="TT" />
    <Navbar />
    <Masonry images={images} />
  </Fragment>
)

export default Index
