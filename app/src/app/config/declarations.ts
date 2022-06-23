import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-nicotin_statusComponent
import { nicotin_statusComponent } from '../components/nicotin_status.component';
//CORE_REFERENCE_IMPORT-government_emplyeeComponent
import { government_emplyeeComponent } from '../components/government_emplyee.component';
//CORE_REFERENCE_IMPORT-incomeComponent
import { incomeComponent } from '../components/income.component';
//CORE_REFERENCE_IMPORT-employment_statusComponent
import { employment_statusComponent } from '../components/employment_status.component';
//CORE_REFERENCE_IMPORT-ocupationComponent
import { ocupationComponent } from '../components/ocupation.component';
//CORE_REFERENCE_IMPORT-residing_stateComponent
import { residing_stateComponent } from '../components/residing_state.component';
//CORE_REFERENCE_IMPORT-GenderComponent
import { GenderComponent } from '../components/Gender.component';
//CORE_REFERENCE_IMPORT-date_of_birthComponent
import { date_of_birthComponent } from '../components/date_of_birth.component';
//CORE_REFERENCE_IMPORT-select_PlanComponent
import { select_PlanComponent } from '../components/select_Plan.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footer.component';
//CORE_REFERENCE_IMPORT-toolaarComponent
import { toolaarComponent } from '../components/toolaar.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-nicotin_statusComponent
  nicotin_statusComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-government_emplyeeComponent
  government_emplyeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incomeComponent
  incomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employment_statusComponent
  employment_statusComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ocupationComponent
  ocupationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-residing_stateComponent
  residing_stateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-GenderComponent
  GenderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-date_of_birthComponent
  date_of_birthComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-select_PlanComponent
  select_PlanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolaarComponent
  toolaarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
