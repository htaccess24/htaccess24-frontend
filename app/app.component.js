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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var AppComponent = (function () {
    function AppComponent(_router) {
        var _this = this;
        _router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.routeChanged(event.url);
        });
        console.log("App Component");
    }
    AppComponent.prototype.routeChanged = function (route) {
        console.log('Path changed: ' + route);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'htaccess24',
        templateUrl: './app/templates/app.component.html',
        styleUrls: ['./app/styles/app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map