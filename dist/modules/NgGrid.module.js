"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var main_1 = require('../main');
var NgGridModule = (function () {
    function NgGridModule() {
    }
    NgGridModule = __decorate([
        core_1.NgModule({
            declarations: [main_1.NgGrid, main_1.NgGridItem, main_1.NgGridPlaceholder],
            entryComponents: [main_1.NgGridPlaceholder],
            exports: [main_1.NgGrid, main_1.NgGridItem]
        }), 
        __metadata('design:paramtypes', [])
    ], NgGridModule);
    return NgGridModule;
}());
exports.NgGridModule = NgGridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvTmdHcmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHFCQUF5RixTQUFTLENBQUMsQ0FBQTtBQU9uRztJQUFBO0lBQTJCLENBQUM7SUFMNUI7UUFBQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQU0sQ0FBRSxhQUFNLEVBQUUsaUJBQVUsRUFBRSx3QkFBaUIsQ0FBRTtZQUMzRCxlQUFlLEVBQUcsQ0FBRSx3QkFBaUIsQ0FBRTtZQUN2QyxPQUFPLEVBQVcsQ0FBRSxhQUFNLEVBQUUsaUJBQVUsQ0FBRTtTQUN6QyxDQUFDOztvQkFBQTtJQUN5QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoibW9kdWxlcy9OZ0dyaWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nR3JpZCwgTmdHcmlkSXRlbSwgTmdHcmlkSXRlbUNvbmZpZywgTmdHcmlkSXRlbUV2ZW50LCBOZ0dyaWRQbGFjZWhvbGRlciB9IGZyb20gJy4uL21haW4nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6ICAgICBbIE5nR3JpZCwgTmdHcmlkSXRlbSwgTmdHcmlkUGxhY2Vob2xkZXIgXSxcbiAgZW50cnlDb21wb25lbnRzOiAgWyBOZ0dyaWRQbGFjZWhvbGRlciBdLFxuICBleHBvcnRzOiAgICAgICAgICBbIE5nR3JpZCwgTmdHcmlkSXRlbSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nR3JpZE1vZHVsZSB7fSJdfQ==
