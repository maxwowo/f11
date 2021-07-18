import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Navbar from '../components/Navbar'

const Landscape: NextPage = () => (
  <Fragment>
    <NextSeo canonical="https://studio.maxwowo.com/landscape" title="TT" />
    <Navbar />
  </Fragment>
)

export default Landscape
