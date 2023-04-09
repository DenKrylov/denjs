import { BodyDevelopment, HeaderDevelopment, LogoHeaderDevelopment, WrapperDevelopment } from "./DevelopmentStyle"

export const Development = () => {
  const list = [
    ["ЛЕНДИНГ", "Одностраничный сайт, с высокой конверсией и максимальным фокусом на привлечение внимания клиентов к рекламируемому товару или услуге."],
    ["САЙТ-ВИЗИТКА", "Небольшой, но информативный и презентабельный сайт, предоставляющий основную информацию о компании, товарах или услугах, а также контактные данные."],
    ["САЙТ-КАТАЛОГ", "Электронная витрина с полным перечнем и подробным описанием товаров, предназначенная для ознакомления потенциальных клиентов с ассортиментом компании."],
    ["ИНТЕРНЕТ-МАГАЗИН", "Расширенная версия сайта-каталога с возможностью выбора и оплаты товара через сайт. Отличное решение для компаний, которые решили заняться интернет коммерцией."],
  ]
  
  return (
    <WrapperDevelopment>
      <HeaderDevelopment>
        <LogoHeaderDevelopment />
        <p>Разработка</p>
      </HeaderDevelopment>
      <BodyDevelopment>
        {
          list.map((element: string[], index: number) => {
            return (
              <div></div>
            )
          })
        }
      </BodyDevelopment>
    </WrapperDevelopment>
  )
}