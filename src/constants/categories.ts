export enum Category {
  Enterprise = 'Enterprise',
  // eslint-disable-next-line no-unused-vars
  Hardware_Wallet = 'Hardware Wallet',
  // eslint-disable-next-line no-unused-vars
  Crypto_Security = 'Crypto Security',
  // eslint-disable-next-line no-unused-vars
  Partnerships = 'Partnerships',
  // eslint-disable-next-line no-unused-vars
  Bitcoin = 'Bitcoin',
  // eslint-disable-next-line no-unused-vars
  Other = 'Other',
}
export const CATEGORY_COLOR_MAPPER = {
  [Category.Enterprise]: {
    fontColor: '#E03F5F',
    bgColor: 'rgba(224, 81, 110, 0.12)'
  },
  [Category.Hardware_Wallet]: {
    fontColor: '#1F5AFF',
    bgColor: 'rgba(31, 90, 255, 0.12)'
  },
  [Category.Crypto_Security]: {
    fontColor: '#14A37D',
    bgColor: 'rgba(20, 163, 125, 0.12)'
  },
  [Category.Partnerships]: {
    fontColor: '#8256F8',
    bgColor: 'rgba(144, 108, 245, 0.12)'
  },
  [Category.Bitcoin]: {
    fontColor: '#F55831',
    bgColor: 'rgba(245, 127, 49, 0.12)'
  },
  [Category.Other]: {
    fontColor: '#09AEEB',
    bgColor: 'rgba(29, 187, 245, 0.12)'
  },

}
