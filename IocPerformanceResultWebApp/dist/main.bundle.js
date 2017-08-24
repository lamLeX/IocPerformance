webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n  <!-- <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\"> -->\r\n</div>\r\n<!-- <h2>Here are some links to help you start: </h2> -->\r\n<!-- <ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<app-benchmarks>Loading app...</app-benchmarks>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'IoC Performance Benchmark';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__benchmarks_benchmarks_module__ = __webpack_require__("../../../../../src/app/benchmarks/benchmarks.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__benchmarks_benchmarks_module__["a" /* BenchmarksModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/benchmark.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenchmarkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BenchmarkService = (function () {
    function BenchmarkService(http) {
        this.http = http;
        this.benchmarkResultUrl = "./assets/result/result.json";
    }
    BenchmarkService.prototype.getBenchmarkResults = function () {
        //debugger;
        return this.http.get(this.benchmarkResultUrl)
            .retry(3);
    };
    return BenchmarkService;
}());
BenchmarkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BenchmarkService);

var _a;
//# sourceMappingURL=benchmark.service.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/benchmarks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/benchmarks/benchmarks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n  <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n</div>\r\n\r\n<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <span class=\"ui-widget\">Choose benchmark feature(s):</span>\r\n  <p-multiSelect [options]=\"this.benchmarkFilters\" styleClass=\"ui-column-filter\" (onChange)=\"onFeatureChosen($event)\"></p-multiSelect>\r\n</div>\r\n\r\n<p-dataTable scrollable=\"true\" scrollWidth=\"100%\" scrollHeight=\"100%\" [value]=\"this.benchmarkGroups\" [rows]=\"10\" [paginator]=\"true\"\r\n  paginatorPosition=\"both\" [globalFilter]=\"gb\" #dt>\r\n\r\n  <p-column field=\"containerInfo.Name\" [filter]=\"true\" [style]=\"{'width':'200px'}\">\r\n    <ng-template pTemplate=\"body\" let-ioc=\"rowData.containerInfo\">\r\n      <benchmark-ioc [container]=\"ioc\"></benchmark-ioc>\r\n    </ng-template>\r\n  </p-column>\r\n\r\n  <p-headerColumnGroup>\r\n    <p-row>\r\n      <p-column [style]=\"{'width':'200px'}\" header=\"IoC\" rowspan=\"2\" filterMatchMode=\"in\" field=\"containerInfo.Name\">\r\n        <ng-template pTemplate=\"filter\" let-col>\r\n          <p-multiSelect appendTo=\"body\" [options]=\"this.iocFilters\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\"\r\n            defaultLabel=\"All\" styleClass=\"ui-column-filter\"></p-multiSelect>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column [style]=\"{'width':'200px'}\" *ngFor=\"let feature of this.selectedFeatures\" [header]=\"feature.Name\" colspan=\"2\"></p-column>\r\n    </p-row>\r\n    <p-row>\r\n      <ng-container *ngFor=\"let feature of this.selectedFeatures;let i=index\">\r\n        <p-column [style]=\"{'width':'100px'}\" header=\"Single Thread\" [field]=\"i+'.Single'\" sortable=\"custom\" (sortFunction)=\"dtOnSort($event,dt)\"></p-column>\r\n        <p-column [style]=\"{'width':'100px'}\" header=\"Multi Thread\" [field]=\"i+'.Multi'\" sortable=\"custom\" (sortFunction)=\"dtOnSort($event,dt)\"></p-column>\r\n      </ng-container>\r\n    </p-row>\r\n  </p-headerColumnGroup>\r\n\r\n  <ng-container *ngFor=\"let feature of this.selectedFeatures; let i=index;\">\r\n\r\n    <p-column [style]=\"{'width':'100px'}\" field=\"benchmarks[i].singleThreadedResult.Time\">\r\n      <ng-template pTemplate=\"body\" let-bench=\"rowData\">\r\n        <benchmark-measurement [measurement]=\"bench.benchmarks[i].singleThreadedResult\" [maxTime]=\"bench.benchmarks[i].maxTimeInSingleThread\"\r\n          [rank]=\"bench.benchmarks[i].rankInSingleThread\"></benchmark-measurement>\r\n      </ng-template>\r\n    </p-column>\r\n\r\n    <p-column [style]=\"{'width':'100px'}\" field=\"benchmarks[i].multiThreadedResult.Time\">\r\n      <ng-template pTemplate=\"body\" let-bench=\"rowData\">\r\n        <benchmark-measurement [measurement]=\"bench.benchmarks[i].multiThreadedResult\" [maxTime]=\"bench.benchmarks[i].maxTimeInMultiThread\"\r\n          [rank]=\"bench.benchmarks[i].rankInMultiThread\"></benchmark-measurement>\r\n      </ng-template>\r\n    </p-column>\r\n\r\n  </ng-container>\r\n\r\n</p-dataTable>\r\n\r\n<!-- <button type=\"button\" (click)=\"testOrder()\">dsfds</button>\r\n<p-dataTable [value]=\"this.testdata\">\r\n  <p-column field=\"IOC\" header=\"IoC\"></p-column>\r\n  <p-column header=\"Feature\">\r\n    <ng-template let-benches=\"rowData.benches\">\r\n      <div>{{benches.single}}</div>\r\n      <div>{{benches.multi}}</div>\r\n    </ng-template>\r\n  </p-column>\r\n</p-dataTable> -->"

/***/ }),

/***/ "../../../../../src/app/benchmarks/benchmarks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__benchmark_service__ = __webpack_require__("../../../../../src/app/benchmarks/benchmark.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_benchmark_display_model__ = __webpack_require__("../../../../../src/app/benchmarks/shared/benchmark-display.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenchmarksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BenchmarksComponent = (function () {
    // testdata = [{
    //   IOC: "C", benches: [{ testName: "CA", single: 12, multi: 22 },
    //   { testName: "Va", single: 12, multi: 42 }]
    // },
    // {
    //   IOC: "A", benches: [{ testName: "CA", single: 12, multi: 22 },
    //   { testName: "Va", single: 12, multi: 42 }]
    // }];
    // private testOrder() {
    //   debugger;
    //   this.testdata.sort((a, b) => { return a.IOC.charCodeAt(0) - b.IOC.charCodeAt(0) });
    // }
    function BenchmarksComponent(benchmarkSerice) {
        this.benchmarkSerice = benchmarkSerice;
        this.selectedFeatures = [];
    }
    BenchmarksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.benchmarkSerice.getBenchmarkResults().subscribe(function (data) {
            _this.benchmarks = data;
            _this.benchmarkFeatures = _this.getFeatures(_this.benchmarks);
            _this.benchmarkFilters = _this.benchmarkFeatures.map(function (feature) { return { label: feature.Name, value: feature }; });
            _this.iocAdapters = _this.getIocAdapters(_this.benchmarks);
            _this.iocFilters = _this.iocAdapters.map(function (ioc) { return { label: ioc.Name, value: ioc.Name }; });
            _this.benchmarkGroups = _this.createBenchmarkDisplayFromListOfContainers(_this.iocAdapters);
        });
    };
    Object.defineProperty(BenchmarksComponent.prototype, "benchmarkString", {
        get: function () {
            return JSON.stringify(this.benchmarks);
        },
        enumerable: true,
        configurable: true
    });
    BenchmarksComponent.prototype.reset = function (dt) {
        dt.reset();
    };
    BenchmarksComponent.prototype.onFeatureChosen = function (event) {
        var _this = this;
        this.selectedFeatures = event.value;
        this.benchmarkGroups.forEach(function (group) {
            group.benchmarks = [];
            event.value.forEach(function (feature) {
                var benchmark = _this.benchmarks
                    .find(function (b) { return b.BenchmarkInfo.FullName == feature.FullName
                    && b.ContainerInfo.Name == group.containerInfo.Name; });
                var single = _this.getMaxValueForTime(_this.benchmarks, feature, function (br) { return br.SingleThreadedResult; });
                var rankInSingle = _this.getRank(_this.benchmarks, feature, function (br) { return br.SingleThreadedResult; }, benchmark.SingleThreadedResult.Time);
                var multi = _this.getMaxValueForTime(_this.benchmarks, feature, function (br) { return br.MultiThreadedResult; });
                var rankInMulti = _this.getRank(_this.benchmarks, feature, function (br) { return br.MultiThreadedResult; }, benchmark.MultiThreadedResult.Time);
                group.benchmarks.push({
                    benchInfo: feature,
                    singleThreadedResult: benchmark.SingleThreadedResult,
                    maxTimeInSingleThread: single,
                    rankInSingleThread: rankInSingle,
                    multiThreadedResult: benchmark.MultiThreadedResult,
                    maxTimeInMultiThread: multi,
                    rankInMultiThread: rankInMulti
                });
            });
        });
    };
    BenchmarksComponent.prototype.dtOnSort = function (event, dt) {
        var _a = event.field.split("."), i = _a[0], thread = _a[1];
        dt.value.sort(function (a, b) {
            var index = parseInt(i);
            var compare = (thread == "Single") ?
                a.benchmarks[i].singleThreadedResult.Time - b.benchmarks[i].singleThreadedResult.Time :
                a.benchmarks[i].multiThreadedResult.Time - b.benchmarks[i].multiThreadedResult.Time;
            return event.order * compare;
        });
    };
    BenchmarksComponent.prototype.getFeatures = function (b) {
        var results = [];
        var temp = b.map(function (el) { return el.BenchmarkInfo; });
        temp.forEach(function (value) {
            if (results.findIndex(function (r) { return r.FullName == value.FullName; }) == -1) {
                results.push(value);
            }
        });
        return results;
    };
    BenchmarksComponent.prototype.getIocAdapters = function (b) {
        var results = [];
        var temp = b.map(function (el) { return el.ContainerInfo; });
        temp.forEach(function (value) {
            if (results.findIndex(function (r) { return r.Name == value.Name; }) == -1) {
                results.push(value);
            }
        });
        return results;
    };
    BenchmarksComponent.prototype.createBenchmarkDisplayFromListOfContainers = function (ioc) {
        var result = [];
        ioc.forEach(function (container) {
            result.push(new __WEBPACK_IMPORTED_MODULE_2__shared_benchmark_display_model__["a" /* BenchmarkDisplay */]({ containerInfo: container }));
        });
        return result;
    };
    BenchmarksComponent.prototype.getMaxValueForTime = function (b, feature, getMeasurementFunc) {
        var filteredValue = b.filter(function (r) { return getMeasurementFunc(r).Successful && r.BenchmarkInfo.Name == feature.Name; });
        var maxVal = filteredValue.length == 0 ? 0 : Math.max.apply(Math, filteredValue.map(function (r) { return getMeasurementFunc(r).Time; }));
        return maxVal;
    };
    BenchmarksComponent.prototype.getRank = function (b, feature, getMeasurementFunc, valueToRank) {
        var filteredValue = b.filter(function (r) { return getMeasurementFunc(r).Successful && r.BenchmarkInfo.Name == feature.Name; });
        var rank = filteredValue.length == 0 ? 0 :
            filteredValue.map(function (r) { return getMeasurementFunc(r).Time; })
                .reduce(function (prev, curr) {
                return (curr < valueToRank) ? prev + 1 : prev;
            }, 1);
        return rank;
    };
    return BenchmarksComponent;
}());
BenchmarksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-benchmarks',
        template: __webpack_require__("../../../../../src/app/benchmarks/benchmarks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/benchmarks/benchmarks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__benchmark_service__["a" /* BenchmarkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__benchmark_service__["a" /* BenchmarkService */]) === "function" && _a || Object])
], BenchmarksComponent);

var _a;
//# sourceMappingURL=benchmarks.component.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/benchmarks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__benchmarks_component__ = __webpack_require__("../../../../../src/app/benchmarks/benchmarks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__benchmark_service__ = __webpack_require__("../../../../../src/app/benchmarks/benchmark.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prime_ng_prime_ng_module__ = __webpack_require__("../../../../../src/app/prime-ng/prime-ng.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ioc_ioc_component__ = __webpack_require__("../../../../../src/app/benchmarks/ioc/ioc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measurement_measurement_component__ = __webpack_require__("../../../../../src/app/benchmarks/measurement/measurement.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenchmarksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { BenchmarkItemComponent } from './benchmark-item/benchmark-item.component';
var BenchmarksModule = (function () {
    function BenchmarksModule() {
    }
    return BenchmarksModule;
}());
BenchmarksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__prime_ng_prime_ng_module__["a" /* PrimeNgModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__benchmarks_component__["a" /* BenchmarksComponent */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__benchmarks_component__["a" /* BenchmarksComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ioc_ioc_component__["a" /* IocComponent */],
            __WEBPACK_IMPORTED_MODULE_6__measurement_measurement_component__["a" /* MeasurementComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__benchmark_service__["a" /* BenchmarkService */]
        ]
    })
], BenchmarksModule);

//# sourceMappingURL=benchmarks.module.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/ioc/ioc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/benchmarks/ioc/ioc.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"container.Url==''; else iocHasDetail\">None</ng-container>\n<ng-template #iocHasDetail>\n  <a [href]=\"container.Url\">{{container.Name}}</a>\n  <span *ngIf=\"container.Version\"> ({{container.Version}})</span>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/benchmarks/ioc/ioc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_container_adapter_info_model__ = __webpack_require__("../../../../../src/app/benchmarks/shared/container-adapter-info.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IocComponent = (function () {
    function IocComponent() {
    }
    IocComponent.prototype.ngOnInit = function () {
    };
    return IocComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_container_adapter_info_model__["a" /* ContainerAdapterInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_container_adapter_info_model__["a" /* ContainerAdapterInfo */]) === "function" && _a || Object)
], IocComponent.prototype, "container", void 0);
IocComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'benchmark-ioc',
        template: __webpack_require__("../../../../../src/app/benchmarks/ioc/ioc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/benchmarks/ioc/ioc.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IocComponent);

var _a;
//# sourceMappingURL=ioc.component.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/measurement/measurement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .element {\r\n    height: 50px;\r\n    width: 100%;\r\n    border: 1px solid #fff;\r\n    position: relative;\r\n  }\r\n  \r\n  .element__value {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 3%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n  }\r\n  \r\n  .element__chart {\r\n    display: block;\r\n    width: 100%;\r\n    height: 20px;\r\n    background-color: #008AEF;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/benchmarks/measurement/measurement.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"measurement.Successful; then success else failed\"></ng-container>\n\n<ng-template #success>\n  <div [pTooltip]=\"'Ranked ' +rank+translateToString(rank)+' for lowest value in this category'\">\n    <span class=\"element__chart\" [ngStyle]=\"{'width.%':percent}\"></span>\n    <span>{{measurement.Time}}</span>\n  </div>\n</ng-template>\n\n<ng-template #failed>\n  <ng-container *ngIf=\"measurement.ExtraPolated; then extpol else error\"></ng-container>\n  <ng-template #extpol>{{measurement.Time}} <i pTooltip=\"This value is extrapolated\" class=\"fa fa-asterisk\"></i></ng-template>\n  <ng-template #error><i class=\"fa fa-exclamation-circle\" [pTooltip]=\"'Error:'+measurement.Error\"></i></ng-template>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/benchmarks/measurement/measurement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_measurement_model__ = __webpack_require__("../../../../../src/app/benchmarks/shared/measurement.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasurementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeasurementComponent = (function () {
    function MeasurementComponent() {
    }
    MeasurementComponent.prototype.ngOnInit = function () {
        this.percent = (this.measurement.Time / this.maxTime) * 100;
    };
    MeasurementComponent.prototype.translateToString = function (value) {
        switch (value % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    return MeasurementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_measurement_model__["a" /* Measurement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_measurement_model__["a" /* Measurement */]) === "function" && _a || Object)
], MeasurementComponent.prototype, "measurement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MeasurementComponent.prototype, "maxTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MeasurementComponent.prototype, "rank", void 0);
MeasurementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'benchmark-measurement',
        template: __webpack_require__("../../../../../src/app/benchmarks/measurement/measurement.component.html"),
        styles: [__webpack_require__("../../../../../src/app/benchmarks/measurement/measurement.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MeasurementComponent);

var _a;
//# sourceMappingURL=measurement.component.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/shared/benchmark-display.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenchmarkDisplay; });
var BenchmarkDisplay = (function () {
    function BenchmarkDisplay(init) {
        this.benchmarks = [];
        Object.assign(this, init);
    }
    return BenchmarkDisplay;
}());

//# sourceMappingURL=benchmark-display.model.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/shared/container-adapter-info.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerAdapterInfo; });
var ContainerAdapterInfo = (function () {
    function ContainerAdapterInfo() {
    }
    return ContainerAdapterInfo;
}());

//# sourceMappingURL=container-adapter-info.model.js.map

/***/ }),

/***/ "../../../../../src/app/benchmarks/shared/measurement.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measurement; });
var Measurement = (function () {
    function Measurement() {
    }
    return Measurement;
}());

//# sourceMappingURL=measurement.model.js.map

/***/ }),

/***/ "../../../../../src/app/prime-ng/prime-ng.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeNgModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PrimeNgModule = (function () {
    function PrimeNgModule() {
    }
    return PrimeNgModule;
}());
PrimeNgModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["TooltipModule"]
        ]
    })
], PrimeNgModule);

//# sourceMappingURL=prime-ng.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map