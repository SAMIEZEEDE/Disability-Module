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
//append_imports_end

@Component({
  selector: 'bh-residing_state',
  templateUrl: './residing_state.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class residing_stateComponent {
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
      this.sd_mUPdsJWjR5ZYS2G3(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mUPdsJWjR5ZYS2G3(bh) {
    try {
      bh = this.sd_MVl84QnxjVVoFivP(bh);
      //appendnew_next_sd_mUPdsJWjR5ZYS2G3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mUPdsJWjR5ZYS2G3');
    }
  }

  //appendnew_flow_residing_stateComponent_start

  sd_MVl84QnxjVVoFivP(bh) {
    try {
      this.page.selected = undefined;
      //appendnew_next_sd_MVl84QnxjVVoFivP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVl84QnxjVVoFivP');
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
  //appendnew_flow_residing_stateComponent_Catch
}
