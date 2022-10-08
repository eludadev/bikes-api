import { useMemo } from "react"
import type { ApiMethod } from "lib/api-routes"

type ApiRouteProps = {
    method: ApiMethod
    route: string
    description: string
}

const ApiRoute = ({ method, route, description }: ApiRouteProps) => {
    const methodColor = useMemo(() => {
        switch (method) {
            case 'GET':
                return '#2563eb'
            case 'POST':
                return '#22c55e'
            case 'PUT':
                return '#ea580c'
            case 'PATCH':
                return '#ea580c'
            case 'DELETE':
                return '#dc2626'
        }
    }, [method])

    // Splits /bikes/<ID> into /bikes/ and <ID>, for example.
    // ASSUMING: placeholder, if it exists, is the FINAL part of url.
    const routeParts: {
        fixed: string // /bikes/
        placeholder: string // <ID>
    } = useMemo(() => {
        const matches = route.match(/(.*)(\<.*\>)/)
        return matches && matches.length == 3 ? {
            fixed: matches[1],
            placeholder: matches[2]
        } : {
            fixed: route,
            placeholder: ''
        }
    }, [route])

    return (
        <>
            <td className="text-white font-bold"><span className="block w-fit rounded-md px-2 py-.5" style={{ backgroundColor: methodColor }}>{method}</span></td>
            <td className="">{routeParts.fixed}{routeParts.placeholder && <span className="text-red-500 font-bold">{routeParts.placeholder}</span>}</td>
            <td className="">{description}</td>
        </>
    )
}

export default ApiRoute