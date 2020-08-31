"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NumberFragmentModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var vendors_1 = require("@laruche/shared/vendors");
var ui_1 = require("@laruche/shared/ui");
var number_fragment_component_1 = require("./number-fragment.component");
var NumberFragmentModule = /** @class */ (function () {
    function NumberFragmentModule() {
    }
    NumberFragmentModule = __decorate([
        core_1.NgModule({
            declarations: [number_fragment_component_1.NumberFragmentComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                vendors_1.MaterialModule,
                ui_1.SoftEditorModule,
            ],
            exports: [number_fragment_component_1.NumberFragmentComponent]
        })
    ], NumberFragmentModule);
    return NumberFragmentModule;
}());
exports.NumberFragmentModule = NumberFragmentModule;
