import { Design } from "../Design/Design"
import { Development } from "../Development/Development"
import { Main } from "../Main/Main"
import { WrapperSection } from "./SectionStyle"

export const Section = () => {
  return (
    <WrapperSection>
      <Main />
      <Development />
      <Design />
    </WrapperSection>
  )
}