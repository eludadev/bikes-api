import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import CyclicLogo from "components/cyclic-logo"

const NavMenu = () => {
    return (
        <nav>
            <ul className="flex items-center gap-2 overflow-x-auto px-3 md:block md:space-y-2">
                <li className="flex items-center md:gap-2 font-bold md:text-primary-500 md:rounded-none md:bg-transparent md:p-0 md:border-none  rounded-full gap-1 bg-primary-500 text-white px-4 py-1"><span className="md:w-10 md:h-10 md:rounded-md md:p-2.5 md:bg-primary-500 md:text-white md:grid md:place-items-center block w-4 h-4 p-0 bg-transparent"><FontAwesomeIcon icon={solid('book')} /></span>Documentation</li>
                <li><a className="flex items-center md:gap-2 underline hover:text-primary-500 md:rounded-none md:bg-transparent md:p-0  md:border-none rounded-full gap-1 border-1 border-black/10 px-4 py-1" href="https://docs.cyclic.sh/tutorials/rest-api-and-dynamodb/part-1"><span className="md:w-10 md:h-10 md:rounded-md md:p-2 md:border-1 md:border-black/20 md:grid md:place-items-center block w-4 h-4 p-0 border-transparent bg-transparent"><CyclicLogo /></span>Tutorial</a></li>
                <li><a className="flex items-center md:gap-2 underline hover:text-primary-500 md:rounded-none md:bg-transparent md:p-0  md:border-none rounded-full gap-1 border-1 border-black/10 px-4 py-1" href="https://github.com/eludadev/bikes-api"><span className="md:w-10 md:h-10 md:rounded-md md:p-2 md:border-1 md:border-black/20 md:grid md:place-items-center block w-4 h-4 p-0 border-transparent bg-transparent"><FontAwesomeIcon icon={brands('github')} /></span>Github</a></li>
            </ul>
        </nav>
    )
}

export default NavMenu