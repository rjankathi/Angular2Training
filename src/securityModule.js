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
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require('@angular/http');
const defaultPage_1 = require("./defaultPage");
const securityRoutes_1 = require("./securityRoutes");
const users_1 = require("./users");
const userQuickEdit_1 = require("./userQuickEdit");
const page_1 = require('./page');
const userService_1 = require('./userService');
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, securityRoutes_1.SecurityRoutes],
        declarations: [defaultPage_1.DefaultPage, users_1.Users, userQuickEdit_1.UserQuickEdit, page_1.Page],
        bootstrap: [defaultPage_1.DefaultPage],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [userService_1.UserService]
    }), 
    __metadata('design:paramtypes', [])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map