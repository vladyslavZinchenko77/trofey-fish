const ROOTS = {
  AUTH: '/auth',
  HOME: '/',
};

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
      forgotPassword: `${ROOTS.AUTH}/jwt/forgot-password`,
      verify: `${ROOTS.AUTH}/jwt/verify`,
    },
  },
  // HOME
  home: {
    root: ROOTS.HOME,
    trophy: `${ROOTS.HOME}trophy`,
    fishermen: `${ROOTS.HOME}fishermen`,
    fishingBloggers: `${ROOTS.HOME}fishing_bloggers`,
    typesOfFish: `${ROOTS.HOME}types_of_fish`,
    fishingLocations: `${ROOTS.HOME}fishing_locations`,
  },
};
