import { useRouteError, useLocation } from "react-router-dom"

export default function Nope() {
  const error = useRouteError()
  const location = useLocation()
  console.error(error)
  return (
    <h2>Huh? You're at {location.pathname}, but you really shouldn't be.</h2>
  )
}
