import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'

const Index = () => (
  <Fragment>
    <NextSeo canonical="https://studio.maxwowo.com" title="ㅜㅜ" />
    <Masonry images={[]} />
  </Fragment>
)

export default Index
