import {
  BodyDesign,
  HeaderDesign,
  LogoHeaderDesign,
  WrapperDesign,
} from "./DesignStyle";

export const Design = () => {
  const list = [
    [
      "ЛОГОТИП",
      "Одностраничный сайт, с высокой конверсией и максимальным фокусом на привлечение внимания клиентов к рекламируемому товару или услуге.",
    ],
    [
      "ДИЗАЙН САЙТОВ",
      "Небольшой, но информативный и презентабельный сайт, предоставляющий основную информацию о компании, товарах или услугах, а также контактные данные.",
    ],
  ];

  return (
    <WrapperDesign>
      <HeaderDesign>
        <LogoHeaderDesign />
        <p>Дизайн</p>
      </HeaderDesign>
      <BodyDesign>
        {list.map((element: string[], index: number) => {
          return <div></div>;
        })}
      </BodyDesign>
    </WrapperDesign>
  );
};
