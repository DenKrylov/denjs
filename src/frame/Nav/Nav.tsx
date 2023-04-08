import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { ElementListNav, LineNav, ListNav, WrapperNav } from "./NavStyle"

export const Nav = () => {

  const [activeElement, setActiveElement] = useState<number>(0);

  const list = ["Main", "Develop", "Design", "Service"];

  return (
    <WrapperNav>
      <LineNav></LineNav>
      <ListNav>
        { list.map((list: string, index: number) => {
          return (
            <ElementListNav onClick={() => setActiveElement(index)}><Button active={activeElement === index} onTouch={() => null}><p>{list}</p></Button></ElementListNav>
          )
        }) }
      </ListNav>
    </WrapperNav>
  )
}