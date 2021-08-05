import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images from '../images'

const Index = () => (
  <Fragment>
    <NextSeo canonical="https://f11.maxwowo.com" title="f/11" />
    <Navbar />
    <Masonry images={images} />
  </Fragment>
)

export default Index
