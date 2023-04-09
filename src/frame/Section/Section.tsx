import { useRecoilValue } from "recoil"
import { sectionState } from "../../states/section/section"
import { Design } from "../Design/Design"
import { Development } from "../Development/Development"
import { Main } from "../Main/Main"
import { Marketingl } from "../Marketing/Marketingl"
import { WrapperSection } from "./SectionStyle"

export const Section = () => {

  const section = useRecoilValue(sectionState);

  return (
    <WrapperSection>
      { section === 0 && <Main /> }
      { section === 1 && <Development /> }
      { section === 2 && <Design /> }
      { section === 3 && <Marketingl /> }
    </WrapperSection>
  )
}