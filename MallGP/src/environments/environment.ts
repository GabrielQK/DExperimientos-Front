// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverJSON:"http://localhost:8080",
  resourceSugerencias:"/api/suggestions",
  resourceNovedades:"/api/news",
  resourceTiendas:"/api/stores",
  resourceAdmins:"/api/admins",
  resourceOffers:"/api/offers",
  resourceMalls:"/api/malls",
  resourceProducts:"/api/products",
  resourceProductStore:"/api/product/stores",
  resourceStoreMall:"api/store/mall",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
