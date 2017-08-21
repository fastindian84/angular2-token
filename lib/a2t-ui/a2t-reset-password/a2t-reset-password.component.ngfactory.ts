/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../a2t-shared/a2t-headline/a2t-headline.component.ngfactory';
import * as i2 from '../a2t-shared/a2t-headline/a2t-headline.component';
import * as i3 from '../a2t-shared/a2t-form/a2t-form.component.ngfactory';
import * as i4 from '../a2t-shared/a2t-form/a2t-form.component';
import * as i5 from '../a2t-shared/a2t-form/a2t-form.service';
import * as i6 from '../a2t-shared/a2t-links/a2t-links.component.ngfactory';
import * as i7 from '../a2t-shared/a2t-links/a2t-links.component';
import * as i8 from '@angular/common';
import * as i9 from './a2t-reset-password.component';
import * as i10 from '../../angular2-token.service';
const styles_A2tResetPasswordComponent:any[] = ['.email-send-text[_ngcontent-%COMP%] {\n            background-color: #72c380;\n            color: white;\n            font-size: 16pt;\n            text-align: center;\n            padding: 20px;\n            border-radius: 3px;\n        }'];
export const RenderType_A2tResetPasswordComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_A2tResetPasswordComponent,data:{}});
function View_A2tResetPasswordComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a2t-headline',
      ([] as any[]),(null as any),(null as any),(null as any),i1.View_A2tHeadlineComponent_0,
      i1.RenderType_A2tHeadlineComponent)),i0.ɵdid(49152,(null as any),0,i2.A2tHeadlineComponent,
      ([] as any[]),(null as any),(null as any)),(_l()(),i0.ɵted(0,['Reset your Password']))],
      (null as any),(null as any));
}
function View_A2tResetPasswordComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a2t-form',([] as any[]),
      (null as any),(null as any),(null as any),i3.View_A2tFormComponent_0,i3.RenderType_A2tFormComponent)),
      i0.ɵdid(49152,(null as any),0,i4.A2tFormComponent,[i5.A2tFormService],(null as any),
          (null as any)),(_l()(),i0.ɵted(0,['Reset Password']))],(null as any),(null as any));
}
function View_A2tResetPasswordComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',[['class',
      'email-send-text']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n            If the entered email is registered we will send instruction on how to reset your password.\n        ']))],
      (null as any),(null as any));
}
function View_A2tResetPasswordComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a2t-links',[['case',
      'reset-password']],(null as any),(null as any),(null as any),i6.View_A2tLinksComponent_0,
      i6.RenderType_A2tLinksComponent)),i0.ɵdid(49152,(null as any),0,i7.A2tLinksComponent,
      ([] as any[]),{case:[0,'case']},(null as any))],(_ck,_v) => {
    const currVal_0:any = 'reset-password';
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_A2tResetPasswordComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_A2tResetPasswordComponent_1)),
      i0.ɵdid(16384,(null as any),0,i8.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tResetPasswordComponent_2)),
      i0.ɵdid(16384,(null as any),0,i8.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tResetPasswordComponent_3)),
      i0.ɵdid(16384,(null as any),0,i8.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tResetPasswordComponent_4)),
      i0.ɵdid(16384,(null as any),0,i8.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,
      _v) => {
    var _co:i9.A2tResetPasswordComponent = _v.component;
    const currVal_0:boolean = !_co._emailSend;
    _ck(_v,2,0,currVal_0);
    const currVal_1:boolean = !_co._emailSend;
    _ck(_v,5,0,currVal_1);
    const currVal_2:any = _co._emailSend;
    _ck(_v,8,0,currVal_2);
    const currVal_3:boolean = !_co._emailSend;
    _ck(_v,11,0,currVal_3);
  },(null as any));
}
export function View_A2tResetPasswordComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a2t-reset-password',
      ([] as any[]),(null as any),(null as any),(null as any),View_A2tResetPasswordComponent_0,
      RenderType_A2tResetPasswordComponent)),i0.ɵprd(512,(null as any),i5.A2tFormService,
      i5.A2tFormService,([] as any[])),i0.ɵdid(49152,(null as any),0,i9.A2tResetPasswordComponent,
      [i5.A2tFormService,i10.Angular2TokenService],(null as any),(null as any))],(null as any),
      (null as any));
}
export const A2tResetPasswordComponentNgFactory:i0.ComponentFactory<i9.A2tResetPasswordComponent> = i0.ɵccf('a2t-reset-password',
    i9.A2tResetPasswordComponent,View_A2tResetPasswordComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2Zhc3RpbmRpYW4vd29yay9yYWRlbWFkZS9hbmd1bGFyMi10b2tlbi9zcmMvYTJ0LXVpL2EydC1yZXNldC1wYXNzd29yZC9hMnQtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2Zhc3RpbmRpYW4vd29yay9yYWRlbWFkZS9hbmd1bGFyMi10b2tlbi9zcmMvYTJ0LXVpL2EydC1yZXNldC1wYXNzd29yZC9hMnQtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvZmFzdGluZGlhbi93b3JrL3JhZGVtYWRlL2FuZ3VsYXIyLXRva2VuL3NyYy9hMnQtdWkvYTJ0LXJlc2V0LXBhc3N3b3JkL2EydC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMuQTJ0UmVzZXRQYXNzd29yZENvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvZmFzdGluZGlhbi93b3JrL3JhZGVtYWRlL2FuZ3VsYXIyLXRva2VuL3NyYy9hMnQtdWkvYTJ0LXJlc2V0LXBhc3N3b3JkL2EydC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMuQTJ0UmVzZXRQYXNzd29yZENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8YTJ0LWhlYWRsaW5lICpuZ0lmPVwiIV9lbWFpbFNlbmRcIj5SZXNldCB5b3VyIFBhc3N3b3JkPC9hMnQtaGVhZGxpbmU+XG4gICAgICAgIDxhMnQtZm9ybSAqbmdJZj1cIiFfZW1haWxTZW5kXCI+UmVzZXQgUGFzc3dvcmQ8L2EydC1mb3JtPlxuICAgICAgICA8cCBjbGFzcz1cImVtYWlsLXNlbmQtdGV4dFwiICpuZ0lmPVwiX2VtYWlsU2VuZFwiPlxuICAgICAgICAgICAgSWYgdGhlIGVudGVyZWQgZW1haWwgaXMgcmVnaXN0ZXJlZCB3ZSB3aWxsIHNlbmQgaW5zdHJ1Y3Rpb24gb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEydC1saW5rcyAqbmdJZj1cIiFfZW1haWxTZW5kXCIgY2FzZT1cInJlc2V0LXBhc3N3b3JkXCI+PC9hMnQtbGlua3M+XG4gICAgIiwiPGEydC1yZXNldC1wYXNzd29yZD48L2EydC1yZXNldC1wYXNzd29yZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNDUTtNQUFBO3dDQUFBLFVBQUE7TUFBQSwyQ0FBa0M7Ozs7b0JBQ2xDO01BQUE7YUFBQTtVQUFBLGVBQThCOzs7b0JBQzlCO01BQUE7TUFBQSxnQkFBOEM7Ozs7b0JBRzlDO01BQUE7cUNBQUEsVUFBQTtNQUFBO0lBQStCO0lBQS9CLFdBQStCLFNBQS9COzs7O29CQU5SLCtDQUNRO01BQUE7YUFBQTtVQUFBLHdCQUFvRSwrQ0FDcEU7aUJBQUE7YUFBQTtVQUFBLHdCQUF1RCwrQ0FDdkQ7aUJBQUE7YUFBQTtVQUFBLHdCQUVJLCtDQUNKO2lCQUFBO2FBQUE7VUFBQSx3QkFBaUU7OztJQUxuRDtJQUFkLFdBQWMsU0FBZDtJQUNVO0lBQVYsV0FBVSxTQUFWO0lBQzJCO0lBQTNCLFdBQTJCLFNBQTNCO0lBR1c7SUFBWCxZQUFXLFNBQVg7Ozs7b0JDTlI7TUFBQTswQ0FBQTt3QkFBQSxzQkFBQTtNQUFBOzs7OyJ9
