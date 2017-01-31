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
// Standard module imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
// Application component
var NgGrid_module_1 = require('./modules/NgGrid.module');
var app_component_1 = require('./app.component');
var MyAppModule = (function () {
    function MyAppModule() {
    }
    MyAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, NgGrid_module_1.NgGridModule],
            declarations: [app_component_1.MyAppComponent],
            providers: [],
            bootstrap: [app_component_1.MyAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppModule);
    return MyAppModule;
}());
exports.MyAppModule = MyAppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBCQUEwQjtBQUMxQixxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0Msd0JBQXdCO0FBQ3hCLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBUWxEO0lBQUE7SUFBMkIsQ0FBQztJQU41QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFFLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSw0QkFBWSxDQUFFO1lBQ3JELFlBQVksRUFBRSxDQUFFLDhCQUFjLENBQUU7WUFDaEMsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBRSw4QkFBYyxDQUFFO1NBQzlCLENBQUM7O21CQUFBO0lBQ3lCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3RhbmRhcmQgbW9kdWxlIGltcG9ydHNcbmltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBBcHBsaWNhdGlvbiBjb21wb25lbnRcbmltcG9ydCB7IE5nR3JpZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9OZ0dyaWQubW9kdWxlJztcbmltcG9ydCB7IE15QXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nR3JpZE1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTXlBcHBDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbIE15QXBwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTXlBcHBNb2R1bGUgeyB9Il19
