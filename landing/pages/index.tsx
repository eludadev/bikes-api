import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import AppHeader from 'components/app-header'
import ApiRouteComponent from 'components/api-route'
import AppHero from 'components/app-hero'
import NavMenu from 'components/nav-menu'

import { getApiRoutesData } from 'lib/api-routes'
import type { ApiRoute } from 'lib/api-routes'


const Home: NextPage = ({ apiRoutes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Bikes API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />

      <main className="mt-1 mb-8">
        <AppHero />
        <section className="md:grid md:grid-cols-[18rem_auto] pt-8">
          <div className="md:px-8 sticky top-0 pt-4 md:pt-8 bg-white self-start">
            <NavMenu />
          </div>
          <div className="mt-8 px-2 md:mt-0 overflow-x-auto">
            <h2 className="font-bold text-2xl">Documentation</h2>
            <table className="table-auto  border-separate border-spacing-4 w-full">
              <thead>
                <tr>
                  <th className="text-start">Method</th>
                  <th className="text-start">Route</th>
                  <th className="text-start">Description</th>
                </tr>
              </thead>
              <tbody>
                {apiRoutes.map(({ method, route, description }: ApiRoute) => <tr key={method + route} className="ring-0 hover:ring-2 ring-offset-2 rounded-md ring-black/5">
                  <ApiRouteComponent method={method} route={route} description={description} />
                </tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const apiRoutesData: ApiRoute[] = getApiRoutesData()

  return {
    props: { apiRoutes: apiRoutesData }
  }
}

export default Home
