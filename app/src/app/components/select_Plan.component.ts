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
  selector: 'bh-select_Plan',
  templateUrl: './select_Plan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class select_PlanComponent {
  @Input('select_plan')
  public select_plan: any = undefined;
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
      this.sd_91IIoE5qx1YYlLFC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_91IIoE5qx1YYlLFC(bh) {
    try {
      bh = this.sd_I4RCkUx6FyWknDMf(bh);
      //appendnew_next_sd_91IIoE5qx1YYlLFC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_91IIoE5qx1YYlLFC');
    }
  }

  //appendnew_flow_select_PlanComponent_start

  sd_I4RCkUx6FyWknDMf(bh) {
    try {
      this.page.data = [];
      bh = this.sd_OgI8DThRDeu6E2bU(bh);
      //appendnew_next_sd_I4RCkUx6FyWknDMf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I4RCkUx6FyWknDMf');
    }
  }

  sd_OgI8DThRDeu6E2bU(bh) {
    try {
      const page = this.page;
      console.log('data', this.select_plan);
      //appendnew_next_sd_OgI8DThRDeu6E2bU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OgI8DThRDeu6E2bU');
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
  //appendnew_flow_select_PlanComponent_Catch
}
