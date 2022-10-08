import CyclicLogo from "components/cyclic-logo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const AppHeader = () => {
    return (
        <header className="px-4 py-3 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="font-bold"><span className="text-primary-500">Bikes API</span> ✕ Cyclic</h1>
                <ul className="flex items-center gap-3">
                    <li><a className="block w-6 h-6 hover:text-primary-500" title="Cyclic Docs" href="https://docs.cyclic.sh/tutorials/rest-api-and-dynamodb/part-1"><CyclicLogo /></a></li>
                    <li><a className="block w-6 h-6 hover:text-primary-500" title="Github Repo" href="https://github.com/eludadev/bikes-api"><FontAwesomeIcon icon={brands('github')} /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader