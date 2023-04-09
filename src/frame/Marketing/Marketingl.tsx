import { BodyMarketingl, HeaderMarketingl, LogoHeaderMarketingl, WrapperMarketingl } from "./MarketingStyle"

export const Marketingl = () => {
  const list = [
    ["КОНТЕКСТНАЯ РЕКЛАМА", "Быстрое продвижение Ваших товаров или услуг в Яндекс и Гугл с возможностью получения первых клиентов уже через несколько часов."],
    ["ТАРГЕТИРОВАННАЯ РЕКЛАМА", "Эффективный способ рекламы в социальных сетях ВК, Фейсбук и Инстаграм, позволяющий с высокой точностью подобрать аудиторию и взаимодействовать с ней."],
    ["SEO", "Повышение конверсии сайта и рост Вашей прибыли за счет постоянного улучшения сайта с целью достижения топовых позиций в поисковых системах по нужным Вам запросам."]
  ]

  return (
    <WrapperMarketingl>
      <HeaderMarketingl>
        <LogoHeaderMarketingl />
        <p>Маркетинг</p>
      </HeaderMarketingl>
      <BodyMarketingl>
        {
          list.map((element: string[], index: number) => {
            return (
              <div></div>
            )
          })
        }
      </BodyMarketingl>
    </WrapperMarketingl>
  )
}