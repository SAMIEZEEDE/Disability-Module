/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class HomeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_whlhJ8hbcrcowbly(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_whlhJ8hbcrcowbly(bh) {
    try {
      bh = this.sd_DkSzWRF4yV8tbwrR(bh);
      //appendnew_next_sd_whlhJ8hbcrcowbly
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_whlhJ8hbcrcowbly');
    }
  }

  changeTitle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_m6PFeLqPW2iBpSsu(bh);
      //appendnew_next_changeTitle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G4pmxluWOe0j4OPk');
    }
  }

  move_to_next(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_R968JyX64NGK3xjU(bh);
      //appendnew_next_move_to_next
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lNbjJFvTeVgzTPOv');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_DkSzWRF4yV8tbwrR(bh) {
    try {
      this.page.title_text = { title: 'disability', subtitle: 'selected plan' };
      this.page.stage = 'type_of_insurance';
      //appendnew_next_sd_DkSzWRF4yV8tbwrR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DkSzWRF4yV8tbwrR');
    }
  }

  sd_m6PFeLqPW2iBpSsu(bh) {
    try {
      this.page.title_text = { title: 'disability', subtitle: 'choose type' };
      bh = this.sd_ohh4xl2Xs842IeaG(bh);
      //appendnew_next_sd_m6PFeLqPW2iBpSsu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m6PFeLqPW2iBpSsu');
    }
  }

  sd_ohh4xl2Xs842IeaG(bh) {
    try {
      //appendnew_next_sd_ohh4xl2Xs842IeaG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ohh4xl2Xs842IeaG');
    }
  }

  sd_R968JyX64NGK3xjU(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.stage,
          'type_of_insurance',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_z2Yx62CvnIYLAqpV(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.stage,
          'choose_date',
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R968JyX64NGK3xjU');
    }
  }

  sd_z2Yx62CvnIYLAqpV(bh) {
    try {
      this.page.title_text = { title: 'disability', subtitle: 'choose type' };
      bh = this.sd_n8RCmwCopsMU0Fcj(bh);
      //appendnew_next_sd_z2Yx62CvnIYLAqpV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z2Yx62CvnIYLAqpV');
    }
  }

  sd_n8RCmwCopsMU0Fcj(bh) {
    try {
      //appendnew_next_sd_n8RCmwCopsMU0Fcj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8RCmwCopsMU0Fcj');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_HomeComponent_Catch
}