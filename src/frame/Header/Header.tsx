import { ReactComponent as Theme } from "../../img/svg/theme.svg";
import { ReactComponent as Telegram } from "../../img/svg/telegram.svg";
import { ReactComponent as Whatsapp } from "../../img/svg/whatsapp.svg";
import { ReactComponent as Gmail } from "../../img/svg/gmail.svg";
import { ReactComponent as Facebook } from "../../img/svg/facebook.svg";
import { ReactComponent as Vk } from "../../img/svg/vk.svg";

import {
  ListElementHeader,
  LinkListHeader,
  WrapperHeader,
  LinkElementHeader,
  LogoHeader,
} from "./HeaderStyle";
import { useRecoilState } from "recoil";
import { themeState } from "../../states/theme/atom";

export const Header = () => {
  const [changeTheme, setChangeTheme] = useRecoilState(themeState);

  return (
    <WrapperHeader>
      <LogoHeader>Denjs</LogoHeader>
      <LinkListHeader>
        <ListElementHeader>
          <LinkElementHeader
            onClick={() => {
              changeTheme
                ? localStorage.setItem("theme", "dark")
                : localStorage.setItem("theme", "dark");
              setChangeTheme(!changeTheme);
            }}
          >
            <Theme />
          </LinkElementHeader>
        </ListElementHeader>
        <ListElementHeader>
          <LinkElementHeader href={"https://t.me/@denkrylov"}>
            <Telegram />
          </LinkElementHeader>
        </ListElementHeader>
        <ListElementHeader>
          <LinkElementHeader href={"http://ttttt.me/andrei_afreeca"}>
            <Whatsapp />
          </LinkElementHeader>
        </ListElementHeader>
        <ListElementHeader>
          <LinkElementHeader href={"https://t.me/@denkrylov"}>
            <Gmail />
          </LinkElementHeader>
        </ListElementHeader>
        <ListElementHeader>
          <LinkElementHeader href={"https://t.me/@denkrylov"}>
            <Facebook />
          </LinkElementHeader>
        </ListElementHeader>
        <ListElementHeader>
          <LinkElementHeader href={"https://t.me/@denkrylov"}>
            <Vk />
          </LinkElementHeader>
        </ListElementHeader>
      </LinkListHeader>
    </WrapperHeader>
  );
};
