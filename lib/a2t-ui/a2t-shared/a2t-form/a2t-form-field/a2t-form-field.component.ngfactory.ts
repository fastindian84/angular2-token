/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from './a2t-form-field.component';
const styles_A2tFormFieldComponent:any[] = ['.a2t-input-group[_ngcontent-%COMP%] {\n            padding-bottom: 40px;\n            padding-right: 20px;\n            padding-left: 20px;\n            font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;\n        }\n\n        .a2t-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            outline: none;\n            border: none;\n            background-color: #eee;\n            line-height: 40px;\n\n            padding-left: 10px;\n            padding-right: 10px;\n        }\n\n        .a2t-input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n            color: #666;\n            font-weight: 600;\n            font-size: 13px;\n            margin-bottom: 0;\n        }\n\n        .a2t-error[_ngcontent-%COMP%] {\n            color: #df6564 !important;\n        }\n\n        .a2t-valid[_ngcontent-%COMP%] {\n            color: #72c380 !important;\n        }'];
export const RenderType_A2tFormFieldComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_A2tFormFieldComponent,data:{}});
function View_A2tFormFieldComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),
      [[1,'for',0],[4,'color',(null as any)]],(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                ','\n            ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.question.key;
        const currVal_1:any = _co.labelColor;
        _ck(_v,0,0,currVal_0,currVal_1);
        const currVal_2:any = _co.question.label;
        _ck(_v,1,0,currVal_2);
      });
}
function View_A2tFormFieldComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',[['class',
      'a2t-error']],[[1,'for',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                ',' is required\n            ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.question.key;
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = _co.question.label;
        _ck(_v,1,0,currVal_1);
      });
}
function View_A2tFormFieldComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',[['class',
      'a2t-error']],[[1,'for',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                ',' is too short\n            ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.question.key;
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = _co.question.label;
        _ck(_v,1,0,currVal_1);
      });
}
function View_A2tFormFieldComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',[['class',
      'a2t-error']],[[1,'for',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                ',' is too long\n            ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.question.key;
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = _co.question.label;
        _ck(_v,1,0,currVal_1);
      });
}
function View_A2tFormFieldComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',[['class',
      'a2t-valid']],[[1,'for',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                ','\n            ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.question.key;
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = _co.question.label;
        _ck(_v,1,0,currVal_1);
      });
}
export function View_A2tFormFieldComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),26,'div',[['class','a2t-input-group']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'submit'],
          [(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(540672,(null as any),0,i1.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},(null as any)),i0.ɵprd(2048,
      (null as any),i1.ControlContainer,(null as any),[i1.FormGroupDirective]),i0.ɵdid(16384,
      (null as any),0,i1.NgControlStatusGroup,[i1.ControlContainer],(null as any),
      (null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormFieldComponent_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormFieldComponent_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormFieldComponent_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormFieldComponent_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_A2tFormFieldComponent_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'input',([] as any[]),[[8,'id',
          0],[8,'type',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,22)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,22).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,22)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,22)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i1.NgControl,
          (null as any),[i1.FormControlName]),i0.ɵdid(16384,(null as any),0,i1.NgControlStatus,
          [i1.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i3.A2tFormFieldComponent = _v.component;
    const currVal_7:any = _co.form;
    _ck(_v,2,0,currVal_7);
    const currVal_8:any = _co._control.pristine;
    _ck(_v,7,0,currVal_8);
    const currVal_9:any = (_co._control.hasError('required') && !_co._control.pristine);
    _ck(_v,10,0,currVal_9);
    const currVal_10:any = _co._control.hasError('minlength');
    _ck(_v,13,0,currVal_10);
    const currVal_11:any = _co._control.hasError('maxlength');
    _ck(_v,16,0,currVal_11);
    const currVal_12:any = (_co._control.valid && !_co._control.pristine);
    _ck(_v,19,0,currVal_12);
    const currVal_22:any = _co.question.key;
    _ck(_v,24,0,currVal_22);
  },(_ck,_v) => {
    var _co:i3.A2tFormFieldComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_13:any = _co.question.key;
    const currVal_14:any = _co.question.type;
    const currVal_15:any = i0.ɵnov(_v,26).ngClassUntouched;
    const currVal_16:any = i0.ɵnov(_v,26).ngClassTouched;
    const currVal_17:any = i0.ɵnov(_v,26).ngClassPristine;
    const currVal_18:any = i0.ɵnov(_v,26).ngClassDirty;
    const currVal_19:any = i0.ɵnov(_v,26).ngClassValid;
    const currVal_20:any = i0.ɵnov(_v,26).ngClassInvalid;
    const currVal_21:any = i0.ɵnov(_v,26).ngClassPending;
    _ck(_v,21,0,currVal_13,currVal_14,currVal_15,currVal_16,currVal_17,currVal_18,
        currVal_19,currVal_20,currVal_21);
  });
}
export function View_A2tFormFieldComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a2t-form-field',
      ([] as any[]),(null as any),(null as any),(null as any),View_A2tFormFieldComponent_0,
      RenderType_A2tFormFieldComponent)),i0.ɵdid(114688,(null as any),0,i3.A2tFormFieldComponent,
      ([] as any[]),(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const A2tFormFieldComponentNgFactory:i0.ComponentFactory<i3.A2tFormFieldComponent> = i0.ɵccf('a2t-form-field',
    i3.A2tFormFieldComponent,View_A2tFormFieldComponent_Host_0,{question:'question',
        form:'form'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2Zhc3RpbmRpYW4vd29yay9yYWRlbWFkZS9hbmd1bGFyMi10b2tlbi9zcmMvYTJ0LXVpL2EydC1zaGFyZWQvYTJ0LWZvcm0vYTJ0LWZvcm0tZmllbGQvYTJ0LWZvcm0tZmllbGQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2Zhc3RpbmRpYW4vd29yay9yYWRlbWFkZS9hbmd1bGFyMi10b2tlbi9zcmMvYTJ0LXVpL2EydC1zaGFyZWQvYTJ0LWZvcm0vYTJ0LWZvcm0tZmllbGQvYTJ0LWZvcm0tZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvZmFzdGluZGlhbi93b3JrL3JhZGVtYWRlL2FuZ3VsYXIyLXRva2VuL3NyYy9hMnQtdWkvYTJ0LXNoYXJlZC9hMnQtZm9ybS9hMnQtZm9ybS1maWVsZC9hMnQtZm9ybS1maWVsZC5jb21wb25lbnQudHMuQTJ0Rm9ybUZpZWxkQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9mYXN0aW5kaWFuL3dvcmsvcmFkZW1hZGUvYW5ndWxhcjItdG9rZW4vc3JjL2EydC11aS9hMnQtc2hhcmVkL2EydC1mb3JtL2EydC1mb3JtLWZpZWxkL2EydC1mb3JtLWZpZWxkLmNvbXBvbmVudC50cy5BMnRGb3JtRmllbGRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBjbGFzcz1cImEydC1pbnB1dC1ncm91cFwiXG4gICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cInF1ZXN0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImxhYmVsQ29sb3JcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiX2NvbnRyb2wucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICB7e3F1ZXN0aW9uLmxhYmVsfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImEydC1lcnJvclwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cInF1ZXN0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJfY29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiAhX2NvbnRyb2wucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICB7e3F1ZXN0aW9uLmxhYmVsfX0gaXMgcmVxdWlyZWRcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImEydC1lcnJvclwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cInF1ZXN0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJfY29udHJvbC5oYXNFcnJvcignbWlubGVuZ3RoJylcIj5cbiAgICAgICAgICAgICAgICB7e3F1ZXN0aW9uLmxhYmVsfX0gaXMgdG9vIHNob3J0XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJhMnQtZXJyb3JcIlxuICAgICAgICAgICAgICAgIFthdHRyLmZvcl09XCJxdWVzdGlvbi5rZXlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiX2NvbnRyb2wuaGFzRXJyb3IoJ21heGxlbmd0aCcpXCI+XG4gICAgICAgICAgICAgICAge3txdWVzdGlvbi5sYWJlbH19IGlzIHRvbyBsb25nXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJhMnQtdmFsaWRcIlxuICAgICAgICAgICAgICAgIFthdHRyLmZvcl09XCJxdWVzdGlvbi5rZXlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiX2NvbnRyb2wudmFsaWQgJiYgIV9jb250cm9sLnByaXN0aW5lXCI+XG4gICAgICAgICAgICAgICAge3txdWVzdGlvbi5sYWJlbH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cInF1ZXN0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgW2lkXT1cInF1ZXN0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgW3R5cGVdPVwicXVlc3Rpb24udHlwZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8YTJ0LWZvcm0tZmllbGQ+PC9hMnQtZm9ybS1maWVsZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0lZO01BQUE7TUFBQSxnQkFHOEI7OztRQUYxQjtRQUNBO1FBRkosV0FDSSxVQUNBLFNBRko7UUFHOEI7UUFBQTs7OztvQkFJOUI7TUFBQTtNQUVnRTs7O1FBRDVEO1FBREosV0FDSSxTQURKO1FBRWdFO1FBQUE7Ozs7b0JBSWhFO01BQUE7TUFFMkM7OztRQUR2QztRQURKLFdBQ0ksU0FESjtRQUUyQztRQUFBOzs7O29CQUkzQztNQUFBO01BRTJDOzs7UUFEdkM7UUFESixXQUNJLFNBREo7UUFFMkM7UUFBQTs7OztvQkFJM0M7TUFBQTtNQUVpRDs7O1FBRDdDO1FBREosV0FDSSxTQURKO1FBRWlEO1FBQUE7Ozs7b0JBL0I3RCwrQ0FDUTtNQUFBO1VBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO01BQUEsOEVBQUE7TUFBQSxnRkFBQTtNQUFBO01BQUEsZUFDdUIscURBRW5CO2FBQUE7YUFBQTtVQUFBLHdCQUtRO01BRVI7YUFBQTtVQUFBLHdCQUlRO01BRVI7YUFBQTtVQUFBLHdCQUlRO01BRVI7YUFBQTtVQUFBLHdCQUlRO01BRVI7YUFBQTtVQUFBLHdCQUlRO01BRVI7VUFBQTtVQUFBO2NBQUE7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUcyQjtVQUFBLGlCQUN6Qjs7SUFyQ0Y7SUFESixXQUNJLFNBREo7SUFNUTtJQUhKLFdBR0ksU0FISjtJQVNJO0lBRkosWUFFSSxTQUZKO0lBUUk7SUFGSixZQUVJLFVBRko7SUFRSTtJQUZKLFlBRUksVUFGSjtJQVFJO0lBRkosWUFFSSxVQUZKO0lBT0k7SUFESixZQUNJLFVBREo7OztJQWxDSjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEscUVBQUE7SUFvQ1E7SUFDQTtJQUhKO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFFSSxXQUNBLFdBSEo7UUFBQSxnQ0FBQTs7OztvQkNuQ1o7TUFBQTtzQ0FBQSxVQUFBO01BQUE7SUFBQTs7Ozs7In0=
