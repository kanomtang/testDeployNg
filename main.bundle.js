webpackJsonp([1,4],{

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 226;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(246);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.authService.user.subscribe(function (auth) {
            if (auth == null) {
                // not logged in
                _this.isLoggedIn = false;
                _this.router.navigate(['login']);
            }
            else {
                // logged in
                _this.isLoggedIn = true;
                _this.router.navigate(['']);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(378),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_page_register_page_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_guard_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_component_user_component_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_product_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_qrcode3__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chart_chart_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_googlechart__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_googlechart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_googlechart__);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { ChartsModule } from 'ng2-charts/ng2-charts';
var firebaseConfig = {
    apiKey: 'AIzaSyCFXny8pflQwLu9AyQu8ve9xI6qA9KR7PM',
    authDomain: 'iotapplication-7cf10.firebaseapp.com',
    databaseURL: 'https://iotapplication-7cf10.firebaseio.com',
    projectId: 'iotapplication-7cf10',
    storageBucket: 'iotapplication-7cf10.appspot.com',
    messagingSenderId: '33890290341'
};
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__providers_auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_page_register_page_component__["a" /* RegisterPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_component_user_component_component__["a" /* UserComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_17__chart_chart_component__["a" /* ChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_qrcode3__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes),
            //ChartsModule
            __WEBPACK_IMPORTED_MODULE_18_ng2_googlechart__["Ng2GoogleChartModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__providers_auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_UsageItem__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartComponent = (function () {
    function ChartComponent(af) {
        var _this = this;
        this.af = af;
        this.columnTypes = [{
                'type': 'string',
                'value': 'subjectName'
            },
            {
                'type': 'number',
                'value': 'Amount'
            }];
        this.chartType = 'Bar';
        this.options = {
            'width': 900,
            'height': 400,
            'bars': 'vertical',
            'chartArea': { 'left': 150, 'bottom': 50, 'right': 170, 'top': 50 },
            hAxis: {
                title: 'Consumption rate'
            },
            vAxis: {
                title: 'Product name'
            }
        };
        this.OriginalArr = [];
        this.topicValue = 0;
        this.DataArr = [];
        this.LabelArr = [];
        this.Usagelist = [];
        this.UsageItem = af.list('/Usage');
        this.UsageItem.subscribe(function (snapshot) {
            _this.Usagelist = snapshot;
        });
    }
    ChartComponent.prototype.getList = function () {
        return this.Usagelist;
    };
    ChartComponent.prototype.extractValues = function () {
        var pk = [];
        var iniItem = new __WEBPACK_IMPORTED_MODULE_2__shared_UsageItem__["a" /* UsageItem */]();
        iniItem.AmountofUsageItem = 1;
        iniItem.itemName = this.Usagelist[0].name;
        iniItem.itemCheckin = this.Usagelist[0].Checkin;
        iniItem.itemCheckout = this.Usagelist[0].Checkout;
        var newdate = new Date(iniItem.itemCheckout);
        var newdate1 = new Date(iniItem.itemCheckin);
        iniItem.Shelflife = Number(Math.abs((newdate1.getTime() - newdate.getTime()) / 60000));
        pk.push(iniItem);
        for (var i = 1; i < this.Usagelist.length; i++) {
            var checkDup = false;
            for (var k = 0; k < pk.length; k++) {
                if (pk[k].itemName == this.Usagelist[i].name) {
                    pk[k].AmountofUsageItem += 1;
                    var newdate4 = new Date(this.Usagelist[i].Checkout);
                    var newdate5 = new Date(this.Usagelist[i].Checkin);
                    pk[k].Shelflife = Math.abs((newdate4.getTime() - newdate5.getTime()) / 60000);
                    pk[k].Shelflife += 1;
                    checkDup = true;
                    break;
                }
            }
            if (checkDup == false) {
                var newItem = new __WEBPACK_IMPORTED_MODULE_2__shared_UsageItem__["a" /* UsageItem */]();
                newItem.AmountofUsageItem = 1;
                newItem.itemName = this.Usagelist[i].name;
                newItem.itemCheckin = this.Usagelist[i].Checkin;
                newItem.itemCheckout = this.Usagelist[i].Checkout;
                var newdate2 = new Date(this.Usagelist[i].Checkout);
                var newdate3 = new Date(this.Usagelist[i].Checkin);
                newItem.Shelflife = Math.abs((newdate2.getTime() - newdate3.getTime()) / 60000);
                pk.push(newItem);
            }
        }
        this.OriginalArr = pk.sort(function (n1, n2) {
            if (n1.AmountofUsageItem > n2.AmountofUsageItem) {
                return -1;
            }
            if (n2.AmountofUsageItem > n1.AmountofUsageItem) {
                return 1;
            }
            return 0;
        });
        return this.OriginalArr;
    };
    ChartComponent.prototype.assignDataAmount = function () {
        var a = this.extractValues();
        var resultArr = [];
        for (var i = 0; i < a.length; i++) {
            resultArr.push(a[i].AmountofUsageItem);
        }
        this.DataArr = resultArr;
        return this.DataArr;
    };
    ChartComponent.prototype.assignLabel = function () {
        var a = this.extractValues();
        var resultArr = [];
        for (var i = 0; i < a.length; i++) {
            resultArr.push(a[i].itemName);
        }
        this.LabelArr = resultArr;
        return this.LabelArr;
    };
    ChartComponent.prototype.assignDataShelflife = function () {
        var a = this.extractValues();
        var resultArr = [];
        for (var i = 0; i < a.length; i++) {
            resultArr.push((a[i].Shelflife) / a[i].AmountofUsageItem);
        }
        this.DataArr = resultArr;
        return this.DataArr;
    };
    ChartComponent.prototype.ConsumptionRate = function () {
        this.topicValue = 1;
        this.assignLabel();
        this.assignDataAmount();
        this.options.hAxis.title = 'Consumption Rate';
        this.columnTypes[1].value = 'Consume item per year';
        return true;
    };
    ChartComponent.prototype.Shelflife = function () {
        this.topicValue = 2;
        this.assignLabel();
        this.assignDataShelflife();
        this.options.hAxis.title = 'Shelf Life';
        this.columnTypes[1].value = 'Item usage per minute';
        return true;
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(379),
        styles: [__webpack_require__(306)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



(__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]);
var HomePageComponent = (function () {
    function HomePageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'WELCOME TO ISR ';
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(380),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        console.log('email' + this.email);
    };
    LoginPageComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(381),
        styles: [__webpack_require__(308)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ProductItem__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Lot__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(af) {
        this.af = af;
        this._elementType = 'url';
        this._model = new __WEBPACK_IMPORTED_MODULE_2__shared_ProductItem__["a" /* ProductItem */]();
        this._currentDate = new Date();
        this._lotModel = new __WEBPACK_IMPORTED_MODULE_3__shared_Lot__["a" /* Lot */]();
        this._items = af.list('/ProductInfo');
        console.log(this._items);
        this._lots = af.list('/Lots');
        console.log(this._lots);
        this._date = this.getCurrentDate();
    }
    ProductComponent.prototype.getList = function () {
        return this._items;
    };
    ProductComponent.prototype.keyToDelete = function (keyparam) {
        this._deleteKey = keyparam;
        return keyparam;
    };
    ProductComponent.prototype.deleteItem = function () {
        // delete single item
        // the first slot is path or child
        // the second is key
        try {
            var pathFirebase = 'ProductInfo/' + this._deleteKey;
            this.af.object(pathFirebase)
                .remove()
                .then(function () { return alert('Successful for deleting product'); });
            return true;
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    };
    ProductComponent.prototype.keyToEdit = function (keyparam, item) {
        this._editKey = keyparam;
        this._model = Object.assign({}, item);
        console.log(this._model);
        return keyparam;
    };
    ProductComponent.prototype.updateItem = function () {
        // this.af.object('Item/{key}').update({'name': 'Jasmine' } );
        try {
            this._datetime = this._currentDate.getDate() + '/'
                + (this._currentDate.getMonth() + 1) + '/'
                + this._currentDate.getFullYear() + ' @ '
                + this._currentDate.getHours() + ':'
                + this._currentDate.getMinutes() + ':'
                + this._currentDate.getSeconds();
            var pathFirebase = 'ProductInfo/' + this._editKey;
            this.af.object(pathFirebase)
                .update({
                'Price': this._model.Price,
                'ProductName': this._model.ProductName,
                'LastUpdate': this._model.LastUpdate = this._datetime,
                'InUse': this._model.InUse
            })
                .then(function () { return alert('Successful for Updating '); });
            return this._model;
        }
        catch (err) {
            console.log(err.message);
            return null;
        }
    };
    ProductComponent.prototype.addItem = function () {
        var _this = this;
        //validate the correctness before adding item
        var notExist = true;
        if (this.isEmpty()) {
            console.log("empty field");
            alert("Please don't leave the field blank");
            return null;
        }
        else if (this.isNotPositivePrice()) {
            alert("Price must be a positive number");
            return null;
        }
        else {
            this.subscription = this._items.subscribe(function (items) {
                // items is an array
                items.forEach(function (item) {
                    //console.log('Item:', item);
                    if (_this._model.ProductName == item.ProductName) {
                        notExist = false;
                        console.log('name:', item.ProductName);
                        alert("This name is already exist");
                    }
                });
            });
            this.subscription.unsubscribe();
            if (notExist) {
                //   อาจจะรับมาเป็น Product type ในหน้า html คงเป็น item  จสกนนั้นใน method ก็เขียนว่า 'CreatedDate' : productparam.CreatedDate
                try {
                    this._datetime = this._currentDate.getDate() + '/'
                        + (this._currentDate.getMonth() + 1) + '/'
                        + this._currentDate.getFullYear() + ' @ '
                        + this._currentDate.getHours() + ':'
                        + this._currentDate.getMinutes() + ':'
                        + this._currentDate.getSeconds();
                    this._items.push({
                        'InUse': this._model.InUse = true,
                        'Price': this._model.Price,
                        'ProductName': this._model.ProductName,
                        'CreatedDate': this._model.CreatedDate = this._datetime,
                        'LastUpdate': this._model.LastUpdate = this._datetime
                    })
                        .then(function () { return alert('Successful for adding new item'); });
                    this.clearData();
                    return this._model;
                }
                catch (err) {
                    console.log(err.message);
                    return null;
                }
            }
        }
    };
    ProductComponent.prototype.isEmpty = function () {
        if (this._model.ProductName && this._model.Price) {
            return false;
        }
        else {
            return true;
        }
    };
    ProductComponent.prototype.clearData = function () {
        this._model = Object.assign({}, null);
        return this._model;
    };
    //Progress2
    ProductComponent.prototype.getLotList = function () {
        return this._lots;
    };
    ProductComponent.prototype.amountEmpty = function () {
        if (this._lotModel.amount) {
            return false;
        }
        else {
            return true;
        }
    };
    ProductComponent.prototype.isNotPositiveAmount = function () {
        return this._lotModel.amount <= 0;
    };
    ProductComponent.prototype.isNotPositivePrice = function () {
        return this._model.Price <= 0;
    };
    ProductComponent.prototype.keyToAddLot = function (keyparam, item) {
        this._lotModel.productID = keyparam;
        this._lotModel.qrCode = item.ProductName + ',' + item.Price + ',';
        return keyparam;
    };
    ProductComponent.prototype.addLot = function () {
        try {
            this._num = Number(this._date.slice(8, 10));
            this._datetime = this._num + '/';
            this._num = Number(this._date.slice(5, 7));
            this._datetime = this._datetime + this._num + '/';
            this._num = Number(this._date.slice(0, 4));
            this._datetime = this._datetime + this._num;
            this._lotModel.expiryDate = this._datetime;
            this._lots.push({
                'productID': this._lotModel.productID,
                'qrCode': this._lotModel.qrCode + this._datetime,
                'expiryDate': this._lotModel.expiryDate,
                'amount': this._lotModel.amount
            })
                .then(function () { return alert('Successful for adding new lot'); });
            this.clearLotData();
            return true;
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    };
    ProductComponent.prototype.updateLot = function () {
        var _this = this;
        var isExist = false;
        var lotKey = '';
        var lotAmount = 0;
        if (this.amountEmpty()) {
            console.log("empty field");
            alert("Please don't leave the field blank");
            return null;
        }
        else if (this.isNotPositiveAmount()) {
            alert("Amount must be a positive number");
            return null;
        }
        else {
            this._num = Number(this._date.slice(8, 10));
            this._datetime = this._num + '/';
            this._num = Number(this._date.slice(5, 7));
            this._datetime = this._datetime + this._num + '/';
            this._num = Number(this._date.slice(0, 4));
            this._datetime = this._datetime + this._num;
            this.subscription = this._lots.subscribe(function (lots) {
                // items is an array
                lots.forEach(function (lot) {
                    //console.log('Lot:', lot);
                    if (_this._datetime == lot.expiryDate) {
                        isExist = true;
                        lotKey = lot.$key;
                        lotAmount = lot.amount + _this._lotModel.amount;
                        console.log('key:', lotKey);
                    }
                });
            });
            this.subscription.unsubscribe();
            if (isExist) {
                this._lotModel.amount = lotAmount;
                try {
                    var pathFirebase = 'Lots/' + lotKey;
                    this.af.object(pathFirebase)
                        .update({ 'amount': this._lotModel.amount })
                        .then(function () { return alert('Successful for Updating Lot'); });
                    this.clearLotData();
                    return true;
                }
                catch (err) {
                    console.log(err.message);
                    return true;
                }
            }
            else {
                this.addLot();
                return false;
            }
        }
    };
    ProductComponent.prototype.keyToDeleteLot = function (keyparam) {
        this._deleteLotKey = keyparam;
        return keyparam;
    };
    ProductComponent.prototype.deleteLot = function () {
        // delete single item
        // the first slot is path or child
        // the second is key
        try {
            var pathFirebase = 'Lots/' + this._deleteLotKey;
            this.af.object(pathFirebase)
                .remove()
                .then(function () { return alert('Successful for deleting lot'); });
            return true;
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    };
    ProductComponent.prototype.clearLotData = function () {
        this._lotModel = Object.assign({}, null);
        return this._lotModel;
    };
    //   qenerateQRcode(lot: Lot): string {
    //   this._lotModel = Object.assign({}, lot);
    //   console.log(lot);
    //   this._value = this._lotModel.qrCode;
    //   this._value2 = this._lotModel.expiryDate;
    //
    //   console.log(this._value2);
    //   return this._value;
    // }
    ProductComponent.prototype.qenerateQRcode = function (lot) {
        this._lotModel = Object.assign({}, lot);
        return this._lotModel;
    };
    ProductComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\n          <script src=\"http://getbootstrap.com/dist/js/bootstrap.min.js\"></script>\n          <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.js\"></script>\n          <style>\n          //........Customized style.......\n          #col {\n\n          \n            }\n            .columns {\n          columns: 3;\n            }\n\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">\n    <div class=\"columns\">\n    " + printContents + "</div>\n    </body>\n      </html>");
        popupWin.document.close();
        return true;
    };
    ProductComponent.prototype.createRange = function (amountNum) {
        var items = [];
        var Max = amountNum;
        for (var i = 1; i < Max; i++) {
            var HexaNumber = i.toString(16);
            items.push(HexaNumber);
        }
        return items;
    };
    ProductComponent.prototype.getCurrentDate = function () {
        this._datetime = this._currentDate.getFullYear() + '-';
        if (this._currentDate.getMonth() + 1 < 10) {
            this._datetime = this._datetime + '0' + (this._currentDate.getMonth() + 1) + '-';
        }
        else {
            this._datetime = this._datetime + (this._currentDate.getMonth() + 1) + '-';
        }
        if (this._currentDate.getDate() < 10) {
            this._datetime = this._datetime + '0' + this._currentDate.getDate();
        }
        else {
            this._datetime = this._datetime + this._currentDate.getDate();
        }
        return this._datetime;
    };
    Object.defineProperty(ProductComponent.prototype, "elementType", {
        // getter setter
        get: function () {
            return this._elementType;
        },
        set: function (value) {
            this._elementType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "lots", {
        get: function () {
            return this._lots;
        },
        set: function (value) {
            this._lots = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (value) {
            this._currentDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "datetime", {
        get: function () {
            return this._datetime;
        },
        set: function (value) {
            this._datetime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "editKey", {
        get: function () {
            return this._editKey;
        },
        set: function (value) {
            this._editKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "deleteKey", {
        get: function () {
            return this._deleteKey;
        },
        set: function (value) {
            this._deleteKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "deleteLotKey", {
        get: function () {
            return this._deleteLotKey;
        },
        set: function (value) {
            this._deleteLotKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "lotModel", {
        get: function () {
            return this._lotModel;
        },
        set: function (value) {
            this._lotModel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (value) {
            this._num = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(382),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductComponent);

var _a;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['login']);
            }
        });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPageComponent = (function () {
    function RegisterPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent.prototype.isPasswordMatch = function () {
        return this.password === this.confirmPassword;
    };
    RegisterPageComponent.prototype.isEmpty = function () {
        if (this.email && this.password && this.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterPageComponent.prototype.signUp = function () {
        if (this.isPasswordMatch()) {
            this.authService.signup(this.email, this.password);
        }
        else {
            alert('password is not matched');
        }
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__(383),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterPageComponent);

var _a, _b;
//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lot; });
/**
 * Created by pariy on 9/3/2017.
 */
var Lot = (function () {
    function Lot() {
    }
    return Lot;
}());

//# sourceMappingURL=Lot.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItem; });
var ProductItem = (function () {
    function ProductItem() {
    }
    return ProductItem;
}());

//# sourceMappingURL=ProductItem.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageItem; });
var UsageItem = (function () {
    function UsageItem() {
    }
    return UsageItem;
}());

//# sourceMappingURL=UsageItem.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_User__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponentComponent = (function () {
    function UserComponentComponent(af) {
        this.af = af;
        this.title = 'Home User ';
        this.isEdit = true;
        this.isAdd = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_User__["a" /* User */]();
        this.currentDate = new Date();
        this.users = af.list('/CustomerInfo');
        console.log(this.users);
    }
    UserComponentComponent.prototype.getList = function () {
        return this.users;
    };
    UserComponentComponent.prototype.keyToDelete = function (keyparam) {
        this.deleteKey = keyparam;
        return keyparam;
    };
    UserComponentComponent.prototype.deleteItem = function () {
        // delete single item
        // the first slot is path or child
        // the second is key
        try {
            var pathFirbase = 'CustomerInfo/' + this.deleteKey;
            this.af.object(pathFirbase)
                .remove()
                .then(function () { return alert('Successful for deleting user'); });
            return true;
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    };
    UserComponentComponent.prototype.keyToEdit = function (keyparam, item) {
        this.editKey = keyparam;
        this.model = Object.assign({}, item);
        console.log(this.model);
        return keyparam;
    };
    UserComponentComponent.prototype.updateItem = function () {
        // this.af.object('Item/{key}').update({'name': 'Jasmine' } );
        try {
            this.datetime = this.currentDate.getDate() + '/'
                + (this.currentDate.getMonth() + 1) + '/'
                + this.currentDate.getFullYear() + ' @ '
                + this.currentDate.getHours() + ':'
                + this.currentDate.getMinutes() + ':'
                + this.currentDate.getSeconds();
            var pathFirebase = 'CustomerInfo/' + this.editKey;
            this.af.object(pathFirebase)
                .update({
                'city': this.model.city,
                'province': this.model.province,
                'customerFName': this.model.customerFName,
                'customerLName': this.model.customerLName,
                'lastUpdate': this.model.lastUpdate = this.datetime
            })
                .then(function () { return alert('Successful for updating home user'); });
            return this.model;
        }
        catch (err) {
            console.log(err.message);
            return null;
        }
    };
    UserComponentComponent.prototype.addItem = function () {
        //  อาจจะรับมาเป็น Product type ในหน้า html คงเป็น item  จสกนนั้นใน method ก็เขียนว่า 'CreatedDate' : productparam.CreatedDate
        try {
            this.datetime = this.currentDate.getDate() + '/'
                + (this.currentDate.getMonth() + 1) + '/'
                + this.currentDate.getFullYear() + ' @ '
                + this.currentDate.getHours() + ':'
                + this.currentDate.getMinutes() + ':'
                + this.currentDate.getSeconds();
            this.users.push({
                'city': this.model.city,
                'province': this.model.province,
                'customerFName': this.model.customerFName,
                'customerLName': this.model.customerLName,
                'createdDate': this.model.createdDate = this.datetime,
                'lastUpdate': this.model.lastUpdate = this.datetime
            })
                .then(function () { return alert('Successful for adding new home user'); });
            return this.model;
        }
        catch (err) {
            console.log(err.message);
            return null;
        }
    };
    UserComponentComponent.prototype.isEmpty = function () {
        if (this.model.customerFName && this.model.customerLName && this.model.city && this.model.province) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponentComponent.prototype.hasNumbers = function () {
        return /\d/.test(this.model.customerFName) || /\d/.test(this.model.customerLName)
            || /\d/.test(this.model.city) || /\d/.test(this.model.province);
    };
    UserComponentComponent.prototype.clearData = function () {
        this.model = Object.assign({}, null);
        return this.model;
    };
    return UserComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_User__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_User__["a" /* User */]) === "function" && _a || Object)
], UserComponentComponent.prototype, "User", void 0);
UserComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-component',
        template: __webpack_require__(384),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], UserComponentComponent);

var _a, _b;
//# sourceMappingURL=user-component.component.js.map

/***/ }),

/***/ 246:
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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "\r\n.chart{\r\n  width: 100%;\r\n  min-height: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "h1{\r\n  text-align: center;\r\n}\r\n\r\nbody {\r\n  padding-top: 30px;\r\n}\r\n\r\n\r\n.logoutButton{\r\n  float: right;\r\n  margin-top: 15px;\r\n  color: dimgrey;\r\n}\r\n\r\n.row{\r\npadding-left: 0;\r\n}\r\n\r\n.faq-cat-content {\r\n  margin-top: 25px;\r\n}\r\n\r\n.faq-cat-tabs li a {\r\n  padding: 15px 10px 15px 10px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  color: #777777;\r\n}\r\n\r\n.faq-cat-tabs li a:active {\r\n  color: black;\r\n}\r\n\r\n.nav-tabs li a:focus,\r\n.panel-heading a:focus {\r\n  outline: none;\r\n}\r\n\r\n.panel-heading a,\r\n.panel-heading a:hover,\r\n.panel-heading a:focus {\r\n  text-decoration: none;\r\n  color: #777777;\r\n}\r\n\r\n.faq-cat-content .panel-heading:hover {\r\n  background-color: #efefef;\r\n}\r\n\r\n.active-faq {\r\n  border-left: 5px solid #888888;\r\n}\r\n\r\n.panel-faq .panel-heading .panel-title span {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".addProduct{\r\n  text-align: center;\r\n}\r\n\r\nth{\r\n  font-size: small;\r\n  margin-left:10px; padding-left:10px;\r\n  margin-right:10px; padding-right:10px;\r\n\r\n}\r\n\r\nth p{\r\n  margin-top: 0.3cm;\r\n}\r\n\r\ntd{\r\n  margin-left:10px; padding-left:10px;\r\n  margin-right:10px; padding-right:10px;\r\n}\r\n\r\n.btn-toolbar .btn {\r\n  margin: 0px;\r\n}\r\n\r\n.productTable{\r\n  width: 100%;\r\n}\r\n\r\n.inform{\r\n  color: dimgrey;\r\n  font-size: xx-small;\r\n  margin-left: 3px;\r\n}\r\n\r\n.list-group{\r\n  width: 100%;\r\n}\r\n\r\n.toggle{\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.inUseInput{\r\n  margin-left: 20px;\r\n}\r\n\r\n/*.hover:hover {*/\r\n  /*background-color: yellow;*/\r\n/*}*/\r\n.hidden-table:hover {\r\n  background-color: #efefef !important;\r\n}\r\n\r\n.table-hover > tbody > tr.hidden-table:hover > td {\r\n  background-color:  #efefef;\r\n}\r\n\r\n.qrcode{\r\n  text-align: center;\r\n}\r\n\r\n/*date dropdown*/\r\n.container {\r\n\r\n  margin: 0 auto;\r\n}\r\nli {\r\n  padding-bottom: 20px;\r\n}\r\nselect {\r\n  width: 100%;\r\n}\r\n.day-container {\r\n  border: 2px solid red;\r\n  padding: 3px;\r\n}\r\n.day-selector {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.month-container {\r\n  border: 2px solid blue;\r\n  padding: 3px;\r\n}\r\n.month-selector {\r\n  background-color: orange;\r\n  color: blue;\r\n}\r\n.year-container {\r\n  border: 2px solid green;\r\n  padding: 3px;\r\n}\r\n.year-selector {\r\n  background-color: purple;\r\n  color: orange;\r\n}\r\n\r\n\r\n/*index table*/\r\n.lotTable table\r\n{\r\ncounter-reset: rowNumber;\r\n}\r\n\r\n.lotTable table tr > td:first-child\r\n{\r\ncounter-increment: rowNumber;\r\n}\r\n\r\n.lotTable table tr td:first-child::before\r\n{\r\ncontent: counter(rowNumber);\r\nmin-width: 1em;\r\nmargin-right: 0.5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".addProduct{\r\n  text-align: center;\r\n}\r\n\r\nth{\r\n  font-size: small;\r\n  margin:10px; padding:10px;\r\n}\r\n\r\nth p{\r\n  margin-top: 0.3cm;\r\n}\r\n\r\ntbody{\r\n  background-color: white;\r\n  font-size: x-small;\r\n}\r\n\r\n/*table*/\r\n/*{*/\r\n  /*counter-reset: rowNumber;*/\r\n/*}*/\r\n\r\n/*table tr > td:first-child*/\r\n/*{*/\r\n  /*counter-increment: rowNumber;*/\r\n/*}*/\r\n\r\n/*table tr td:first-child::before*/\r\n/*{*/\r\n  /*content: counter(rowNumber);*/\r\n  /*min-width: 1em;*/\r\n  /*margin-right: 0.5em;*/\r\n/*}*/\r\n\r\n.productTable{\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = " <tr>\r\n  <td>\r\n    <button (click)=\"ConsumptionRate()\">Consumption Rate</button>\r\n  </td>\r\n  <td>\r\n    <button (click)=\"Shelflife()\">Shelf Life</button>\r\n  </td>\r\n</tr>\r\n\r\n\r\n<div *ngIf=\"topicValue== '1'\">\r\n  <div class=\"chart\"\r\n       chart\r\n       [data]=\"DataArr\"\r\n       [options]=\"options\"\r\n       [labels]=\"LabelArr\"\r\n       [columnTypes]=\"columnTypes\"\r\n       [chartType]=\"chartType\">\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"topicValue== '2'\">\r\n  <div class=\"chart\"\r\n       chart\r\n       [data]=\"DataArr\"\r\n       [options]=\"options\"\r\n       [labels]=\"LabelArr\"\r\n       [columnTypes]=\"columnTypes\"\r\n       [chartType]=\"chartType\">\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<script>\r\n  $('a[data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\r\n    e.target // newly activated tab\r\n    e.relatedTarget // previous active tab\r\n  })\r\n</script>\r\n\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <div class=\"page-header\">\r\n\r\n      <h1> {{title}}</h1>\r\n    </div>\r\n\r\n\r\n    <!--<button (click)=\"onSelectTopic(1)\">Product</button>-->\r\n    <!--<button (click)=\"onSelectTopic(2)\">Home User</button>-->\r\n    <!--<app-product *ngIf=\"topicValue == '1'\">Preparing product information</app-product>-->\r\n\r\n    <!--<app-user-component *ngIf=\"topicValue =='2'\"></app-user-component>-->\r\n\r\n\r\n    <!--<button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>-->\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <!-- Nav tabs category -->\r\n        <ul class=\"nav nav-tabs faq-cat-tabs\">\r\n          <li class=\"active\"><a href=\"#faq-cat-1\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-th-list\"></i> Product</a></li>\r\n          <li><a href=\"#faq-cat-2\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-th-list\"></i> Home User</a></li>\r\n          <!-- final progress -->\r\n          <li><a href=\"#faq-cat-3\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-th-list\"></i> Data visualization</a></li>\r\n          <button type=\"button\" class=\"btn btn-default btn-sm logoutButton\" (click)=\"logout()\">\r\n            <span class=\"glyphicon glyphicon-log-out\"></span> Log out\r\n          </button>\r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content faq-cat-content\">\r\n          <div class=\"tab-pane active in fade\" id=\"faq-cat-1\">\r\n            <app-product>Preparing product information</app-product>\r\n          </div>\r\n          <div class=\"tab-pane fade\" id=\"faq-cat-2\">\r\n\r\n          <app-user-component></app-user-component>\r\n\r\n        </div>\r\n\r\n          <div class=\"tab-pane fade\" id=\"faq-cat-3\">\r\n\r\n            <app-chart></app-chart>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-signin\">\r\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Login</button>\r\n    <a routerLink=\"/register\" class=\"alc\">Register</a>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<html xmlns=\"http://www.w3.org/1999/xhtml\" data-ng-app=\"app\">\r\n\r\n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\r\n<script src=\"http://getbootstrap.com/dist/js/bootstrap.min.js\"></script>\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.js\"></script>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"productTable\">\r\n      <!--<h4>Bootstrap Snipp for Datatable</h4>-->\r\n      <div class=\"table-responsive\">\r\n        <table id=\"mytable\" class=\"table table-bordred table-striped table-hover\">\r\n          <thead>\r\n          <th>#</th>\r\n          <th style=\"padding-left: 10px\">Name</th>\r\n          <th>Price</th>\r\n          <th>InUse</th>\r\n          <th>Created</th>\r\n          <th>Last Update</th>\r\n          <th>Edit</th>\r\n          <th>Delete</th>\r\n          <th  style=\"text-align: center\">\r\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add new product\"><button class=\"btn btn-default btn-xs\" data-title=\"Add\" data-toggle=\"modal\" data-target=\"#addProduct\" (click)=\"clearData()\"><span class=\"glyphicon glyphicon-plus\"></span></button></p>\r\n          </th>\r\n          </thead>\r\n\r\n          <tbody *ngFor=\"let item of items | async; let i = index\" data-id=\"1\" data-parent=\"\">\r\n          <tr>\r\n            <td>{{i+1}}</td>\r\n            <td class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+item.ProductName\">{{item.ProductName}}</td>\r\n            <td class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+item.ProductName\">{{item.Price}}</td>\r\n            <td class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+item.ProductName\">{{item.InUse}}</td>\r\n            <td class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+item.ProductName\">{{item.CreatedDate}}</td>\r\n            <td class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+item.ProductName\">{{item.LastUpdate}}</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#editProduct\" (click)=\"keyToEdit(item.$key,item)\"><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#deleteProduct\" (click)=\"keyToDelete(item.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n          <tr  id=\"{{item.ProductName}}\" class=\"collapse hidden-table\">\r\n            <td></td>\r\n            <td colspan=\"6\">\r\n              <div class=\"lotTable\">\r\n                <table class=\"table-bordred\">\r\n                  <thead>\r\n                    <th>#</th>\r\n                    <th>Expiry Date</th>\r\n                    <th>Amount</th>\r\n                    <th></th>\r\n                    <th  style=\"text-align: center\">\r\n                      <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add new lot\"><button class=\"btn btn-default btn-xs\" data-title=\"Add\" data-toggle=\"modal\" data-target=\"#addLot\" (click)=\"clearLotData() ; keyToAddLot(item.$key,item) \"><span class=\"glyphicon glyphicon-plus\"></span></button></p>\r\n                    </th>\r\n                  </thead>\r\n                  <tbody *ngFor=\"let lot of lots | async\">\r\n                    <tr *ngIf=\"item.$key==lot.productID\">\r\n                      <td></td>\r\n                      <td>{{lot.expiryDate}}</td>\r\n                      <td>{{lot.amount}}</td>\r\n                      <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"QR code\"><button class=\"btn btn-xs\" data-title=\"QR code\" data-toggle=\"modal\" data-target=\"#qrcode\" (click)=\"qenerateQRcode(lot)\"><span class=\"glyphicon glyphicon-qrcode\"></span></button></p></td>\r\n\r\n                      <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#deleteLot\" (click)=\"keyToDeleteLot(lot.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Edit Product-->\r\n<div class=\"modal fade\" id=\"editProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"EditHeading\">Edit Product Detail</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"editName\">Name</label>\r\n          <input id=\"editName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.ProductName\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"editPrice\">Price</label>\r\n          <input id=\"editPrice\" class=\"form-control \" type=\"number\" min=\"0\" step=\"1\"  [(ngModel)]=\"model.Price\">\r\n          <p class=\"inform\">Must be a number and not negative</p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inUse\">In use status</label>\r\n          <input id=\"inUse\" class=\"toggle inUseInput form-control\" type=\"checkbox\" data-toggle=\"toggle\" data-on=\"Enabled\" data-off=\"Disabled\" [checked]=\"model.InUse\" [(ngModel)]=\"model.InUse\">\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\" data-dismiss=\"modal\" (click)=\"updateItem()\"  [disabled]=\"isEmpty() || isNotPositivePrice()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<!--Delete Product-->\r\n<div class=\"modal fade\" id=\"deleteProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"DeleteHeading\">Delete this entry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"deleteItem()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<!--Add Product-->\r\n<div class=\"modal fade\" id=\"addProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"AddHeading\">Add new product</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"addName\">Name</label>\r\n          <input id=\"addName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.ProductName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addPrice\">Price</label>\r\n          <input id=\"addPrice\" class=\"form-control \" type=\"number\" min=\"0\" step=\"1\" [(ngModel)]=\"model.Price\">\r\n          <p class=\"inform\">Must be a number and not negative</p>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addItem()\" ><span class=\"glyphicon glyphicon-ok-sign\"></span> Add</button>\r\n        <!--style=\"width: 100%;\"  [disabled]=\"isEmpty() || isNotPositivePrice()\"-->\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<!--Add Lot-->\r\n<div class=\"modal fade\" id=\"addLot\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"AddLotHeading\">Add new lot</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"expiryDate\" class=\"col-2 col-form-label\">Expiry Date</label>\r\n          <div class=\"col-10\">\r\n            <input class=\"form-control\" type=\"date\" value=\"\" min=\"{{getCurrentDate()}}\" id=\"expiryDate\" [(ngModel)]=\"date\">\r\n          </div>\r\n        </div>\r\n\r\n        <div layout-gt-xs=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input id=\"amount\" class=\"form-control\" type=\"number\" min=\"0\" step=\"1\" max=\"1000\" [(ngModel)]=\"lotModel.amount\">\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateLot()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Add</button>\r\n        <!-- style=\"width: 100%;\" data-dismiss=\"modal\" [disabled]=\"amountEmpty() || isNotPositiveAmount()\"-->\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n\r\n<!--Delete Lot-->\r\n<div class=\"modal fade\" id=\"deleteLot\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"DeleteLotHeading\">Delete this entry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"deleteLot()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<!--QR code-->\r\n<div class=\"modal fade\" id=\"qrcode\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"qrcodeHeading\">QR Code</h4>\r\n      </div>\r\n      <div class=\"modal-body qrcode \">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"print()\"><span class=\"glyphicon glyphicon-print\"></span> Print QR Code</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> Close</button>\r\n        <div  id=\"print-section\">\r\n        <!--your html stuff that you want to print-->\r\n\r\n          <!-- -->\r\n\r\n        <div class=\"col-md-4\" *ngFor=\"let  item of createRange(lotModel.amount)\">\r\n\r\n\r\n                <ngx-qrcode  [qrc-value]=\"lotModel.qrCode+','+item\" [qrc-version]=5 [qrc-correction-level]=\"'H'\"></ngx-qrcode>\r\n\r\n<div style=\"font-size: 26px\">\r\n               {{lotModel.expiryDate+','+item}}</div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"modal-footer \">\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<form autocomplete=\"off\" novalidate class=\"form-signin\">\r\n\r\n  <fieldset>\r\n    <h2 class=\"form-signin-heading\">Register</h2>\r\n    <div class=\"form-field\">\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input type=\"email\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <label for=\"inputPassword\" class=\"sr-only\">Confirm password</label>\r\n      <input type=\"password\" id=\"confirmPassword\" name=\"password\" [(ngModel)]=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" required>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"signUp()\" [disabled]=\"!isEmpty()\">Create User</button>\r\n\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>\r\n<script src=\"http://getbootstrap.com/dist/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"productTable\">\r\n      <!--<h4>Bootstrap Snipp for Datatable</h4>-->\r\n      <div class=\"table-responsive\">\r\n        <table id=\"mytable\" class=\"table\">\r\n\r\n          <thead>\r\n          <th>#</th>\r\n          <th style=\"padding-left: 10px\" >Name</th>\r\n          <th>City</th>\r\n          <th>Province</th>\r\n          <th>Created</th>\r\n          <th>Last Update</th>\r\n          <th>Edit</th>\r\n          <th>Delete</th>\r\n          <th  style=\"text-align: center\">\r\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add new product\"><button class=\"btn btn-default btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#add\" (click)=\"clearData()\"><span class=\"glyphicon glyphicon-plus\"></span></button></p>\r\n          </th>\r\n          </thead>\r\n\r\n          <tbody>\r\n          <tr *ngFor=\"let homeUser of users| async ; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{homeUser.customerFName}} {{homeUser.customerLName}}</td>\r\n            <td>{{homeUser.city}}</td>\r\n            <td>{{homeUser.province}}</td>\r\n            <td>{{homeUser.createdDate}}</td>\r\n            <td>{{homeUser.lastUpdate}}</td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"keyToEdit(homeUser.$key,homeUser)\"><span class=\"glyphicon glyphicon-pencil\"></span></button></p></td>\r\n            <td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" (click)=\"keyToDelete(homeUser.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></button></p></td>\r\n          </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"EditHeading\">Edit Your Detail</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"editFName\">Firstname</label>\r\n          <input id=\"editFName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.customerFName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"editLName\">Lastname</label>\r\n          <input id=\"editLName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.customerLName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"editCity\">City</label>\r\n          <input id=\"editCity\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.city\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"editProvince\">Province</label>\r\n          <input id=\"editProvince\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.province\">\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\" data-dismiss=\"modal\" (click)=\"updateItem()\" [disabled]=\"isEmpty() || hasNumbers()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"DeleteHeading\">Delete this entry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Are you sure you want to delete this Record?</div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"deleteItem()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Yes</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n        <h4 class=\"modal-title custom_align\" id=\"AddHeading\">Add new product</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"addFName\">Firstname</label>\r\n          <input id=\"addFName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.customerFName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addLName\">Lastname</label>\r\n          <input id=\"addLName\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.customerLName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addCity\">City</label>\r\n          <input id=\"addCity\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.city\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addProvince\">Province</label>\r\n          <input id=\"addProvince\" class=\"form-control \" type=\"text\" [(ngModel)]=\"model.province\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer \">\r\n        <button type=\"button\" class=\"btn btn-success\" style=\"width: 100%;\" data-dismiss=\"modal\" (click)=\"addItem()\" [disabled]=\"isEmpty() || hasNumbers()\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Add</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n\r\n<!--<h1>{{title}} <button type=\"button\" class=\"btn btn-success\" (click)=\"onAdding()\">Create new product</button></h1>-->\r\n<!--<div [hidden]=\"!isAdd\" class=\"container\">-->\r\n  <!--<div class=\"row\">-->\r\n    <!--<div class=\"col-md-12\">-->\r\n      <!--<h1>Adding new customer</h1>-->\r\n      <!--<form #addForm=\"ngForm\" >-->\r\n\r\n\r\n\r\n\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"CustomerFName\">First Name</label>-->\r\n          <!--<input type=\"text\"  id=\"CustomerFName\" name=\"CustomerFName\"-->\r\n                 <!--[(ngModel)]=\"model.customerFName\" class=\"form-group\">-->\r\n\r\n        <!--</div>-->\r\n\r\n\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"CustomerFName\">Last Name</label>-->\r\n          <!--<input type=\"text\"  id=\"CustomerLName\" name=\"CustomerLName\"-->\r\n                 <!--[(ngModel)]=\"model.customerLName\" class=\"form-group\">-->\r\n\r\n        <!--</div>-->\r\n        <!--<label >Address</label>-->\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"City\">City</label>-->\r\n          <!--<input type=\"text\"  id=\"City\" name=\"City\"-->\r\n                 <!--[(ngModel)]=\"model.city\" class=\"form-group\">-->\r\n\r\n\r\n          <!--<label for=\"Province\">Province</label>-->\r\n          <!--<input type=\"text\"  id=\"Province\" name=\"Province\"-->\r\n                 <!--[(ngModel)]=\"model.province\" class=\"form-group\">-->\r\n\r\n\r\n\r\n        <!--</div>-->\r\n\r\n        <!--<div>-->\r\n          <!--<button class=\"btn btn-success\" (click)=\"addItem()\"-->\r\n                  <!--[disabled]=\"!addForm.form.valid\"> Add </button>-->\r\n\r\n        <!--</div>-->\r\n      <!--</form>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n<!--</div>-->\r\n<!--<label >First name</label>-->\r\n<!--<label > Last name</label>-->\r\n<!--<label >City</label>-->\r\n<!--<label >Province</label>-->\r\n<!--<ul *ngFor=\"let SingleUser of users | async\">-->\r\n  <!--<div>-->\r\n    <!--<label >{{ SingleUser.customerFName}}</label>-->\r\n    <!--<label >{{ SingleUser.customerLName }}</label>-->\r\n    <!--<label >{{ SingleUser.city }}</label>-->\r\n    <!--<label >{{ SingleUser.province }}</label>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <!--<button [disabled]=\"!isEdit\" type=\"button\" class=\"btn btn-warning\" (click)=\"openToEdit(SingleUser.$key)\">Edit</button>-->\r\n  <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(SingleUser.$key)\">Delete</button>-->\r\n  <!--<div *ngIf=\"editKey == SingleUser.$key\">-->\r\n\r\n\r\n\r\n    <!--<div class=\"container\">-->\r\n      <!--<div class=\"row\">-->\r\n        <!--<div class=\"col-md-12\">-->\r\n          <!--<h1>Adding new customer</h1>-->\r\n          <!--<form #editForm=\"ngForm\">-->\r\n\r\n\r\n\r\n\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<label for=\"CustomerFNamee\">First Name</label>-->\r\n              <!--<input type=\"text\"  id=\"CustomerFNamee\" name=\"CustomerFNamee\"-->\r\n                     <!--[(ngModel)]=\"model.customerFName\" class=\"form-group\">-->\r\n\r\n            <!--</div>-->\r\n\r\n\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<label for=\"CustomerFNamee\">Last Name</label>-->\r\n              <!--<input type=\"text\"  id=\"CustomerLNamee\" name=\"CustomerLNamee\"-->\r\n                     <!--[(ngModel)]=\"model.customerLName\" class=\"form-group\">-->\r\n\r\n            <!--</div>-->\r\n            <!--<label >Address</label>-->\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<label for=\"Cityy\">City</label>-->\r\n              <!--<input type=\"text\"  id=\"Cityy\" name=\"Cityy\"-->\r\n                     <!--[(ngModel)]=\"model.city\" class=\"form-group\">-->\r\n\r\n\r\n              <!--<label for=\"Provincee\">Province</label>-->\r\n              <!--<input type=\"text\"  id=\"Provincee\" name=\"Provincee\"-->\r\n                     <!--[(ngModel)]=\"model.province\" class=\"form-group\">-->\r\n\r\n\r\n\r\n            <!--</div>-->\r\n\r\n            <!--<div>-->\r\n              <!--<button class=\"btn btn-success\" (click)=\"addItem()\"-->\r\n                      <!--[disabled]=\"!editForm.form.valid\"> Add </button>-->\r\n\r\n            <!--</div>-->\r\n          <!--</form>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n\r\n<!--</ul>-->\r\n\r\n\r\n"

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(db, firebaseAuth, router, firebase) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.firebase = firebase;
        this.user = firebaseAuth.authState;
        this.items = db.list('items');
    }
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            console.log('user:', _this.user);
            alert('Registration is successful');
            _this.logout();
            _this.router.navigate(['login']);
            return true;
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            if (err.message) {
                alert(err.message);
            }
            return false;
        });
        return false;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        if (email && password) {
            this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(function (value) {
                console.log('Nice, it worked!');
                console.log(_this.user);
                _this.router.navigate(['home']);
                return true;
            })
                .catch(function (err) {
                console.log('Something went wrong:', err.message);
                if (err.message) {
                    alert('email or password is invalid');
                }
                return false;
            });
        }
        else {
            alert('Email or Password is missing.');
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ })

},[651]);
//# sourceMappingURL=main.bundle.js.map