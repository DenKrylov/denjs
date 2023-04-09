import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { ElementListNav, LineNav, ListNav, WrapperNav } from "./NavStyle"
import { useRecoilState } from "recoil";
import { sectionState } from "../../states/section/section";

export const Nav = () => {

  const [section, setSection] = useRecoilState(sectionState);

  const list = ["Начало", "Разработка", "Дизайн", "Service"];

  return (
    <WrapperNav>
      <LineNav></LineNav>
      <ListNav>
        { list.map((list: string, index: number) => {
          return (
            <ElementListNav
              key={index}
              onClick={() => setSection(index)}
            >
              <Button active={section === index} onTouch={() => null}><p>{list}</p>
            </Button></ElementListNav>
          )
        }) }
      </ListNav>
    </WrapperNav>
  )
}