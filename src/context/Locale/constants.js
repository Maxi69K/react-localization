import enStrings from '../../locales/en.json'
import esStrings from '../../locales/es.json'
import ruStrings from '../../locales/ru.json'
import srStrings from '../../locales/sr.json'

export const REGIONS = {
  RU: 'RU',
  ES: 'ES',
  EN: 'EN',
  SR: 'SR'
}

export const LOCALE_STRINGS = {
  [REGIONS.EN]: enStrings,
  [REGIONS.ES]: esStrings,
  [REGIONS.RU]: ruStrings,
  [REGIONS.SR]: srStrings
}

export const COUNTRY_CONSTANTS = {
  [REGIONS.EN]: {
    phoneCode: '+1',
  },
  [REGIONS.ES]: {
    phoneCode: '+34',
  },
  [REGIONS.RU]: {
    phoneCode: '+7',
  },
  [REGIONS.SR]: {
    phoneCode: '+381',
  }
}
