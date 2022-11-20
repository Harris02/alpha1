import dynamic from "next/dynamic"

const MyAwesomeMap = dynamic(() => import("./map"), { ssr:false })

export default function Inicio() {
return(
 <>
  <p>Example Map</p>
  <MyAwesomeMap />
 </>
 )
}