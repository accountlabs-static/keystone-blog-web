export enum Category {
  // eslint-disable-next-line no-unused-vars
  HardwareWallet = 'Hardware Wallet',
  // eslint-disable-next-line no-unused-vars
  CryptoSecurity = 'Crypto Security',
  // eslint-disable-next-line no-unused-vars
  Bitcoin = 'Bitcoin',
  // eslint-disable-next-line no-unused-vars
  Partnerships = 'Partnerships',
  // eslint-disable-next-line no-unused-vars
  Enterprise = 'Enterprise',
  // eslint-disable-next-line no-unused-vars
  Other = 'Other',
  // Hardware Wallet 、Crypto Security 、Bitcoin 、Partnerships、 Enterprise 、Other
}

export const CATEGORY_COLOR_MAPPER = {
  [Category.HardwareWallet]: {
    fontColor: '#1F5AFF',
    bgColor: 'rgba(31, 90, 255, 0.12)',
    fontColorInDarkBg: 'linear-gradient(90deg, #3D71FF 0%, #93CEF5 100%)',
  },
  [Category.CryptoSecurity]: {
    fontColor: '#14A37D',
    bgColor: 'rgba(20, 163, 125, 0.12)',
    fontColorInDarkBg: 'linear-gradient(90deg, #1BE0C6 0%, #1DBBF5 100%)',
  },
  [Category.Bitcoin]: {
    fontColor: '#F55831',
    bgColor: 'rgba(245, 127, 49, 0.12)',
    fontColorInDarkBg: 'linear-gradient(270deg, #F5C793 0%, #E5772E 100%)',
  },
  [Category.Partnerships]: {
    fontColor: '#8256F8',
    bgColor: 'rgba(144, 108, 245, 0.12)',
    fontColorInDarkBg: 'linear-gradient(270deg, #AE91FE 0%, #8237F2 100%)',
  },
  [Category.Enterprise]: {
    fontColor: '#E03F5F',
    bgColor: 'rgba(224, 81, 110, 0.12)',
    fontColorInDarkBg: 'linear-gradient(90deg, #E1526E 0%, #FFADBE 100%)',
  },
  [Category.Other]: {
    fontColor: '#09AEEB',
    bgColor: 'rgba(29, 187, 245, 0.12)',
    fontColorInDarkBg: '#09AEEB',
  },
};
