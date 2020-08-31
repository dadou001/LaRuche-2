"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SoftEditorModule = void 0;
// ANGULAR
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// LIBS
var vendors_1 = require("@laruche/shared/vendors");
// SOFT-EDITOR
var soft_editor_component_1 = require("./soft-editor.component");
var soft_editor_border_directive_1 = require("./soft-editor-border.directive");
var soft_editor_keyboard_directive_1 = require("./soft-editor-keyboard.directive");
// DRAG-DROP
var soft_editor_drop_directive_1 = require("./soft-editor-drop.directive");
var soft_editor_drag_directive_1 = require("./soft-editor-drag.directive");
var API = [
    soft_editor_component_1.SoftEditorComponent,
    soft_editor_drop_directive_1.DropDirective,
    soft_editor_drag_directive_1.DragDirective,
];
var SoftEditorModule = /** @class */ (function () {
    function SoftEditorModule() {
    }
    SoftEditorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                vendors_1.MaterialModule,
            ],
            declarations: __spreadArrays([
                soft_editor_border_directive_1.BorderCardDirective,
                soft_editor_keyboard_directive_1.KeyboardDirective
            ], API),
            bootstrap: [soft_editor_component_1.SoftEditorComponent],
            exports: API
        })
    ], SoftEditorModule);
    return SoftEditorModule;
}());
exports.SoftEditorModule = SoftEditorModule;
