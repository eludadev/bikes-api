import Image from 'next/image'

import CyclicLogo from "components/cyclic-logo"
import CyclicDeploy from 'components/cyclic-deploy'

const AppHero = () => {
    return (
        <section className="grid place-items-center py-12 px-8 md:py-24 xl:py-32 bg-cogs">
            <div>
                <h2 className="text-2xl font-bold">Welcome to the <span className="text-primary-500">Bikes API</span>.</h2>
                <p>A demonstrative API built to teach you all about the RESTful standard.</p>
                <dl className="grid grid-auto-rows grid-cols-[auto_1fr] grid-rows-2 gap-x-4 gap-y-.5">
                    <dt className="after:content-[':'] font-bold">Hosting</dt>
                    <dd><a className="flex items-center gap-1 underline hover:text-primary-500" href="https://www.cyclic.sh/"><span className="block w-5 h-5">
                        <CyclicLogo />
                    </span>Cyclic.</a></dd>
                    <dt className="after:content-[':'] font-bold">Database</dt>
                    <dd>AWS DynamoDB.</dd>
                </dl>

                <a className="block h-8 mt-1" href="https://deploy.cyclic.sh/eludadev/bikes-api" title="Deploy to Cyclic"><CyclicDeploy /></a>
            </div>
        </section>
    )
}

export default AppHero