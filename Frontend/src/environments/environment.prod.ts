// NB: Github pages builds should not build to production!
export const environment = {
  production: true,
  serviceFetcherModes: 0      // 0 = fetch from actual server, 1 = fetch from github, 2 = use static dummy data
};
