import { ElementListNav, ListNav, WrapperNav } from "./NavStyle"

export const Nav = () => {
  return (
    <WrapperNav>
      <ListNav>
        <ElementListNav>Develop</ElementListNav>
        <ElementListNav>Design</ElementListNav>
        <ElementListNav>Service</ElementListNav>
      </ListNav>
    </WrapperNav>
  )
}