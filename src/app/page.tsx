import Div01 from '../components/boxes/Div01'
import { TechSkills } from '@/components/TechSkills/TechSkills'
import { NavSocial } from '@/components/navbarsocial/NavSocial'

export default function Home() {
  return (

   <div className='bg-background'>
    <Div01/>
    <NavSocial/>
    <TechSkills/>
   </div>

  )
}
