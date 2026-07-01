
const ROOTS = {
  AUTH: '/(auth)',
  TABS: '/(tabs)',
} as const;

export const paths = {
  auth: {
    jwt: {
      logIn: `${ROOTS.AUTH}/login`,
      signUp: `${ROOTS.AUTH}/register`,
    },
  },
  tabs: {
    home: `${ROOTS.TABS}/home`,
  }
} as const;