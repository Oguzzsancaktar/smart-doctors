export const selectAppRoute = (pageName: string): string => {
  switch (pageName) {
    case 'home':
      return '/';
    case 'login':
      return '/login';
    default:
      return '/';
  }
};
