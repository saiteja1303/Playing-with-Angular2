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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    /*ngOnInit(){
        let id = this.route.snapshot.params['id'];
            this.departmentID = id;
    }*/
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.departmentID = id;
        });
    };
    DepartmentDetailComponent.prototype.goPrevious = function () {
        var previousId = this.departmentID - 1;
        this.router.navigate(['/departments', previousId]);
    };
    DepartmentDetailComponent.prototype.goNext = function () {
        var nextId = this.departmentID + 1;
        this.router.navigate(['/departments', nextId]);
    };
    DepartmentDetailComponent.prototype.goBack = function () {
        var SelectedId = this.departmentID ? this.departmentID : null;
        this.router.navigate(['/departments', { id: SelectedId }]);
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            interpolation: ["!!", "!!"],
            template: "<h3>You Selected with id = !!departmentID!!</h3>\n                <a (click)=\"goPrevious()\"> Previous   </a>\n                <a (click)=\"goNext()\" >Next </a> <br><br>\n                <a (click)=\"goBack()\"> Back</a>\n        "
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map