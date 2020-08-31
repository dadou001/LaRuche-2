"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DropDirective = void 0;
var core_1 = require("@angular/core");
var DropDirective = /** @class */ (function () {
    function DropDirective() {
        this.ItemDropped = new core_1.EventEmitter();
    }
    //DropOver listener
    DropDirective.prototype.onDropOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    // Drop listener
    DropDirective.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('dropped');
        var items = evt.dataTransfer.item;
        if (items.length > 0) {
            this.ItemDropped.emit(items);
        }
    };
    __decorate([
        core_1.Output()
    ], DropDirective.prototype, "ItemDropped");
    __decorate([
        core_1.HostListener('dropover', ['$event'])
    ], DropDirective.prototype, "onDropOver");
    __decorate([
        core_1.HostListener('drop', ['$event'])
    ], DropDirective.prototype, "ondrop");
    DropDirective = __decorate([
        core_1.Directive({
            selector: '[uiSoftEditorDrop]'
        })
    ], DropDirective);
    return DropDirective;
}());
exports.DropDirective = DropDirective;
