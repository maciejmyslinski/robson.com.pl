import React from 'react'
import styled from 'styled-components'
import { Root } from 'components'
import { fontSize } from 'utils/fontSize'
import { space } from 'utils/space'
import SEO from 'components/seo'

const Wrapper = styled.div`
  max-width: ${space(14)};
  padding: ${space(1)};
  margin: ${space(4)} auto ${space(7)};
  display: flex;
  flex-flow: column nowrap;
`

const H1 = styled.h1`
  font-size: ${fontSize(5)};
  margin: 0 auto ${space(4)};
`

const H2 = styled.h2`
  font-size: ${fontSize(4)};
  margin: ${space(7)} 0 ${space(0)};
`

const H3 = styled.h3`
  font-size: ${fontSize(2)};
  margin: ${space(5)} 0 ${space(0)};
`

const Price = styled.p`
  font-style: italic;
`

const Item = ({ name, price, description }) => (
  <>
    <H3>{name}</H3>
    <Price>{price}</Price>
    {description && <p>{description}</p>}
  </>
)

const Info = ({ name, description }) => (
  <>
    <H3>{name}</H3>
    {description.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </>
)

const items = [
  {
    name: 'Dokodowanie pilota',
    price: '80zł netto',
    description: `Cena dotyczy usługi wykonanej w odległości do 25 km od siedziby firmy. Cena usługi jest niezależna od ilości pilotów dokodowywanych do tej samej bramy podczas jednej wizyty.`,
  },
  {
    name: 'Pierwsza roboczogodzina',
    price: '180zł netto',
    description: `Bez względu na ilość poświęconego czasu stawka za pierwszą roboczogodzinę zawsze liczona jest w całości.`,
  },
  {
    name: 'Następne roboczogodziny',
    price: '100zł netto',
    description: `Za każdą godzinę jeżeli dotyczy tej samej naprawy co pierwsza roboczogodzina.`,
  },
  {
    name: 'Dojazd powyżej 25km od siedziby firmy',
    price: '1,80zł netto za kilometr w dwie strony',
    description: `Dojazd liczony jest tylko raz do jednej i tej samej naprawy, chyba że naprawa jest wykonywana w kilku etapach na życzenie klienta.`,
  },
  {
    name: 'Materiały pomocnicze drobne',
    price: '10zł netto',
    description: `Mogą być doliczone przy serwisach liczonych z roboczogodzin.`,
  },
  {
    name:
      'Przegląd i konserwacja bramy garażowej lub przesuwnej lub skrzydłowej w domach jednorodzinnych',
    price: '180zł netto',
    description: `Podczas przeglądów i konserwacji kilku bram w jednym miejscu i w tym samym dniu, cena może być naliczana z roboczogodzin, jeżeli dla klienta będzie to korzystniejsze. Cena nie dotyczy siłowników podziemnych.`,
  },
  {
    name:
      'Przegląd i konserwacja bramy jednoskrzydłowej z siłownikiem podziemnym w domach jednorodzinnych',
    price: '320zł netto',
    description: ``,
  },
  {
    name:
      'Przegląd i konserwacja bramy dwuskrzydłowej z siłownikami podziemnymi w domach jednorodzinnych',
    price: '400zł netto',
    description: ``,
  },
  {
    name:
      'Przegląd bramy przemysłowej automatycznej (wszelkiego typu bramy we wspólnotach mieszkaniowych i firmach)',
    price: '350-450zł netto',
    description: `Przy bramach o całkowitej wysokości przekraczającej 3 metry należy doliczyć 80 zł netto. Przy większej ilości bram w jednym miejscu możliwy rabat.`,
  },
  {
    name: 'Przegląd szlabanu',
    price: '250zł netto',
    description: `Przy większej ilości szlabanów możliwy rabat.`,
  },
]

const additionalInfo = [
  {
    name: 'Części zamienne',
    description: [
      'Do kosztów naprawy zostanie doliczony koszt części zamiennych.',
      'Ich ceny będą zgodne z cennikiem detalicznym producenta. Jeżeli taki nie występuje, będą one zgodne z detaliczną ceną rynkową powiększoną o koszt zakupu. W wypadku braku na rynku polskim oryginalnych części zamiennych lub zamienników, wycena ich dorobienia będzie dokonywana indywidualnie.',
    ],
  },
  {
    name: 'Wycena serwisu',
    description: [
      'Na życzenie klienta, dokładny koszt części zamiennych oraz przewidywany czas naprawy może zostać podany przed przystąpieniem do naprawy, ale po zrobieniu przeglądu lub oględzin przez serwisanta.',
      'W wypadku odstąpienia przez klienta od naprawy, po zrobieniu wyceny części zamiennych i szacowanego kosztu naprawy, zostanie pobrana opłata za przegląd danego typu bramy lub za oględziny zgodnie ze stawkami z tego cennika.',
    ],
  },
  {
    name: 'Drobne naprawy podczas przeglądu',
    description: [
      'Jeżeli w trakcie przeglądu, za zgodą klienta zostanie dokonana drobna naprawa i wymienione zostaną zużyte części w przewidzianym czasie przeglądu, to klient poniesie tylko koszty przeglądu i zużytych części zamiennych, a nie poniesie kosztu naprawy.',
    ],
  },
  {
    name: 'Prace w dni wolne',
    description: [
      'Przy pracy w nagłych awariach w soboty, niedziele, dni świąteczne oraz w dniach roboczych po godzinie 18, do stawek za usługi doliczamy 50%.',
    ],
  },
  {
    name: 'Kilka przeglądów w jednym miejscu',
    description: [
      'Przy kilku przeglądach w jednym miejscu i przy jednym dojeździe, u jednego klienta policzymy stawkę za roboczogodziny zamiast stawek za przeglądy, jeżeli dla klienta będzie to korzystniejsze.',
    ],
  },
  {
    name: 'Kilku serwisantów',
    description: [
      'Jeżeli do wykonania prac serwisowych wymaganych jest więcej osób, roboczogodziny liczone będą za każdą z nich. W szczególności może to mieć miejsce przy pracach na wysokości, przy dużym ciężarze bram lub niektórych pracach elektrycznych.',
    ],
  },
  {
    name: 'Uwagi końcowe',
    description: [
      'W wypadkach nie objętych cennikiem stawki będą ustalane indywidualnie.',
      'Jeżeli klient nie zdecyduje się na przegląd, nie wykonujemy szczegółowych wycen naprawy bram i automatyki.',
      'Ceny mogą być indywidualnie przez Państwa negocjowane tylko przed wykonaniem usługi. Zapraszamy do negocjacji.',
    ],
  },
]

export default () => {
  return (
    <Root>
      <SEO title='Ile kosztuje serwis bramy' />
      <Wrapper>
        <H1>Cennik usług ROBSON Robert Myśliński</H1>
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
        <H2>Uwagi dodatkowe</H2>
        {additionalInfo.map((info, index) => (
          <Info key={index} {...info} />
        ))}
      </Wrapper>
    </Root>
  )
}
