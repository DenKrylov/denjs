import { ListElementHeader, LinkListHeader, WrapperHeader, LinkElementHeader } from "./HeaderStyle"

export const Header = () => {
  return (
    <WrapperHeader>
      <p>Logo</p>
      <LinkListHeader>
        <ListElementHeader><LinkElementHeader href={"https://t.me/@denkrylov"}>T</LinkElementHeader></ListElementHeader>
        <ListElementHeader><LinkElementHeader href={"https://t.me/@denkrylov"}>W</LinkElementHeader></ListElementHeader>
        <ListElementHeader><LinkElementHeader href={"https://t.me/@denkrylov"}>I</LinkElementHeader></ListElementHeader>
        <ListElementHeader><LinkElementHeader href={"https://t.me/@denkrylov"}>K</LinkElementHeader></ListElementHeader>
      </LinkListHeader>
    </WrapperHeader>
  )
}