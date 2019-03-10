import { css } from 'styled-components'
import { remToEm } from './remToEm'

const lockFormula = (from, to) => {
  const diff = (aSelector, bSelector) => theme => {
    const toUnitless = x => (x.endsWith('rem') ? x.slice(0, x.length - 3) : x)
    const toNumber = x => {
      const result = Number(x)
      if (Number.isNaN(result)) {
        return x
      }
      return result
    }
    const a = aSelector(theme)
    const b = bSelector(theme)
    const aUnitless = toUnitless(a)
    const bUnitless = toUnitless(b)
    const aNumber = toNumber(aUnitless)
    const bNumber = toNumber(bUnitless)
    return aNumber - bNumber
  }

  return css`calc(${from[1]} + ${diff(to[1], from[1])} * (100vw - ${
    from[0]
  }rem) / (${to[0]} - ${from[0]}))`
}

export const lock = (property, from, to) => {
  const mobile = css`
    ${property}: ${from[1]};
  `

  const inBetween = css`
    @media (min-width: ${remToEm(from[0])}) {
      ${property}: ${lockFormula(from, to)};
    }
  `

  const desktop = css`
    @media (min-width: ${remToEm(to[0])}) {
      ${property}: ${to[1]}
    }
  `

  return css`${mobile}${inBetween}${desktop}`
}
