webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LikedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LikedPage = /** @class */ (function () {
    function LikedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modeGetSenryu = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_LIKED;
    }
    LikedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LikedPage');
    };
    LikedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-liked',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/liked/liked.html"*/'<!--\n  Generated template for the LikedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>イイネした川柳</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <senryu-list [mode]="modeGetSenryu"></senryu-list>\n  \n  <button right bottom ion-fab (click)="yomuTapped($event)" class="yomuBtn"><ion-icon name="brush"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/liked/liked.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LikedPage);
    return LikedPage;
}());

//# sourceMappingURL=liked.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yomu_yomu__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinePage = /** @class */ (function () {
    function MinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('minePage constructor');
        this.modeGetSenryu = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_MINE;
    }
    MinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinePage');
    };
    MinePage.prototype.yomuTapped = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__yomu_yomu__["a" /* YomuPage */]);
    };
    MinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mine',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/mine/mine.html"*/'<!--\n  Generated template for the MinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>自分が詠んだ川柳</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <senryu-list [mode]="modeGetSenryu"></senryu-list>\n\n  <button right bottom ion-fab (click)="yomuTapped($event)" class="yomuBtn"><ion-icon name="brush"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/mine/mine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MinePage);
    return MinePage;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/liked/liked.module": [
		286,
		3
	],
	"../pages/login/login.module": [
		285,
		0
	],
	"../pages/mine/mine.module": [
		287,
		2
	],
	"../pages/yomu/yomu.module": [
		288,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WordServiceProvider = /** @class */ (function () {
    function WordServiceProvider(http) {
        this.http = http;
        console.log('Hello WordServiceProvider Provider');
    }
    WordServiceProvider.prototype.getWords = function (_len, _url, _since_id) {
        if (_url === void 0) { _url = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].getApiEndPoint() + 'word'; }
        if (_since_id === void 0) { _since_id = null; }
        var senddata = { len: _len };
        if (_since_id != null) {
            _url = this.addParam2URL(_url, 'since_id', _since_id);
        }
        return this.http.get(_url, { params: senddata });
    };
    WordServiceProvider.prototype.addParam2URL = function (_url, _key, _value) {
        var resurl = _url;
        resurl += (resurl.indexOf('?') == -1) ? '?' : '&';
        resurl += _key + '=' + String(_value);
        return resurl;
    };
    WordServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WordServiceProvider);
    return WordServiceProvider;
}());

//# sourceMappingURL=word-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pages_service_pages_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, http, pagesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.pagesService = pagesService;
    }
    ListPage.prototype.ionViewCanEnter = function () {
        //ログインチェック
        return this.pagesService.checkLoginAndUpdateMenu();
    };
    ListPage.prototype.yomuTapped = function (event) {
        this.navCtrl.push('yomu');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>最新の川柳</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <senryu-list></senryu-list>\n</ion-content>\n\n<button right bottom ion-fab (click)="yomuTapped($event)" class="yomuBtn"><ion-icon name="brush"></ion-icon></button>'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pages_service_pages_service__["a" /* PagesServiceProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YomuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_word_service_word_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_senryu_service_senryu_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_settings__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pages_service_pages_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the YomuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YomuPage = /** @class */ (function () {
    function YomuPage(navCtrl, navParams, wordService, senryuService, loadingCtrl, http, pagesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordService = wordService;
        this.senryuService = senryuService;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.pagesService = pagesService;
        this.senryu = {};
    }
    YomuPage.prototype.ionViewCanEnter = function () {
        //ログインチェック
        var promise = this.pagesService.checkLoginAndUpdateMenu();
        if (!__WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].isLogin()) {
            location.href = __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].AUTH_ENDPOINT_TWITTER;
        }
        return promise;
    };
    YomuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YomuPage');
    };
    YomuPage.prototype.inputFocused = function (event, idx) {
        var _this = this;
        this.focus_idx = idx;
        console.log(idx);
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var len = (this.focus_idx == 2) ? '7' : '5';
        this.wordService.getWords(len).subscribe(function (pagingObj) {
            _this.words = pagingObj.data;
            _this.since_id = _this.words[0].id;
            _this.next_page_url = pagingObj.next_page_url;
            _this.hasNextData = (_this.next_page_url != null);
            console.log(pagingObj);
        }, function (err) { return console.log(err); }, function () {
            loader.dismiss();
        });
    };
    YomuPage.prototype.loadingNext = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url_next = _this.next_page_url;
            if (__WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].FLG_DEBUG) {
                url_next = url_next.replace('http://133.130.91.251', 'http://localhost:8100');
            }
            var len = (_this.focus_idx == 2) ? '7' : '5';
            console.log(url_next);
            _this.wordService.getWords(len, url_next, _this.since_id).subscribe(function (pagingObj) {
                _this.words = _this.words.concat(pagingObj.data);
                _this.next_page_url = pagingObj.next_page_url;
                _this.hasNextData = (_this.next_page_url != null);
                console.log(pagingObj);
                resolve();
            }, function (err) { return console.log(err); }, function () { });
        });
    };
    YomuPage.prototype.wordTapped = function (event, word) {
        console.log(word);
        if (this.focus_idx == 1) {
            this.senryu.kami_id = word.id;
            this.senryu.kami_ku = word.word;
        }
        else if (this.focus_idx == 2) {
            this.senryu.naka_id = word.id;
            this.senryu.naka_ku = word.word;
        }
        else if (this.focus_idx == 3) {
            this.senryu.simo_id = word.id;
            this.senryu.simo_ku = word.word;
        }
    };
    YomuPage.prototype.yomuTapped = function (event) {
        var _this = this;
        this.loadingCtrl;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        console.log(this.senryu);
        this.senryuService.postSenryu(this.senryu).subscribe(function (storedSenryu) {
            loading.dismiss();
            console.log(storedSenryu);
            _this.navCtrl.pop();
        }, function (err) { return console.log(err); }, function () { });
    };
    YomuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yomu',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/yomu/yomu.html"*/'<!--\n  Generated template for the YomuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-toolbar>\n    <ion-title>一句詠む</ion-title>\n    <button ion-button right (click)="yomuTapped($event)">詠む</button>\n  </ion-toolbar> -->\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>一句詠む</ion-title>\n    </ion-navbar>\n\n    <button ion-button right (click)="yomuTapped($event)">詠む</button>\n\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" readonly placeholder="上の句(5)" length=5 value={{senryu.kami_ku}} (focus)="inputFocused($event, \'1\')"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" readonly placeholder="中の句(7)" length=7 value={{senryu.naka_ku}} (focus)="inputFocused($event, \'2\')"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" readonly placeholder="下の句(5)" length=5 value={{senryu.simo_ku}} (focus)="inputFocused($event, \'3\')"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <!-- <hr>\n  <ion-item>\n   <ion-label>絞り込み</ion-label>\n   <ion-input type="search" name="filterWord"></ion-input>\n  </ion-item>\n  <hr> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-col *ngFor="let word of words">\n      <button ion-button round outline (click)="wordTapped($event, word)">{{word.word}}</button>\n  </ion-col>\n\n  <ion-infinite-scroll *ngIf="hasNextData" (ionInfinite)="$event.waitFor(loadingNext())">\n      <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="Loading more data...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/yomu/yomu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_word_service_word_service__["a" /* WordServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_word_service_word_service__["a" /* WordServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_pages_service_pages_service__["a" /* PagesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_pages_service_pages_service__["a" /* PagesServiceProvider */]) === "function" && _g || Object])
    ], YomuPage);
    return YomuPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=yomu.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mine_mine__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_liked_liked__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_senryu_service_senryu_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_word_service_word_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pages_service_pages_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                // YomuPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_liked_liked__["a" /* LikedPage */]
                // LoginPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liked/liked.module#LikedPageModule', name: 'LikedPage', segment: 'liked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mine/mine.module#MinePageModule', name: 'mine', segment: 'mine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yomu/yomu.module#YomuPageModule', name: 'yomu', segment: 'yomu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                // YomuPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_liked_liked__["a" /* LikedPage */]
                // LoginPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__providers_word_service_word_service__["a" /* WordServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_pages_service_pages_service__["a" /* PagesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.getApiEndPoint = function () {
        if (AppSettings.FLG_DEBUG) {
            //ローカルでは認証通せないので、常に非ログイン時のURLを返す
            return AppSettings.API_ENDPOINT_UNLOGINED;
        }
        if (AppSettings.flg_login) {
            return AppSettings.API_ENDPOINT_LOGINED;
        }
        else {
            return AppSettings.API_ENDPOINT_UNLOGINED;
        }
    };
    AppSettings.isLogin = function () {
        return AppSettings.flg_login;
    };
    AppSettings.setLogin = function (_flg_login) {
        AppSettings.flg_login = _flg_login;
    };
    //DEBUG
    AppSettings.FLG_DEBUG = false; //###
    //URL
    AppSettings.HOST = (AppSettings.FLG_DEBUG) ? "http://localhost:8100" : "http://newsenryu.spicy-space.xyz";
    AppSettings.API_ENDPOINT_UNLOGINED = AppSettings.HOST + "/api/";
    AppSettings.API_ENDPOINT_LOGINED = AppSettings.HOST + "/apis/";
    AppSettings.AUTH_ENDPOINT_TWITTER = AppSettings.HOST + "/auth/twitter";
    //LOGIN
    AppSettings.flg_login = false;
    //川柳取得モード
    AppSettings.MODE_GET_SENRYU_NORMAL = 0;
    AppSettings.MODE_GET_SENRYU_MINE = 1; //自分が投稿した川柳
    AppSettings.MODE_GET_SENRYU_LIKED = 2; //自分がいいねした川柳
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pages_service_pages_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, pagesService, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.pagesService = pagesService;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        events.subscribe('updateMenu', function (pages) {
            console.log("###updateMenu", pages);
            _this.pages = pages;
        });
        pagesService.eanableDefaultMenu();
        pagesService.changePage('list');
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [attr.disabled]="p.isSelected ? true : null" [class.active-item]="p.isSelected">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_pages_service_pages_service__["a" /* PagesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__senryu_list_senryu_list__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__senryu_list_senryu_list__["a" /* SenryuListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__senryu_list_senryu_list__["a" /* SenryuListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenryuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_senryu_service_senryu_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SenryuListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SenryuListComponent = /** @class */ (function () {
    function SenryuListComponent(senryuService, loadingCtrl) {
        this.senryuService = senryuService;
        this.loadingCtrl = loadingCtrl;
        this.mode = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_NORMAL;
    }
    SenryuListComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit SenryuList');
        console.log(this.mode);
        this.loadingFirst();
    };
    SenryuListComponent.prototype.loadingFirst = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.senryuService.getSenryus(this.mode).subscribe(function (pagingObj) {
            _this.senryus = pagingObj.data;
            _this.since_id = _this.senryus[0].id;
            _this.next_page_url = pagingObj.next_page_url;
            _this.hasNextData = (_this.next_page_url != null);
            console.log(pagingObj);
        }, function (err) { return console.log(err); }, function () {
            loader.dismiss();
        });
    };
    SenryuListComponent.prototype.loadingNext = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url_next = _this.next_page_url;
            url_next = url_next.replace('http://133.130.91.251', 'http://localhost:8100'); //todo 環境変数で切り分け
            _this.senryuService.getSenryus(_this.mode, url_next, _this.since_id).subscribe(function (pagingObj) {
                _this.senryus = _this.senryus.concat(pagingObj.data);
                _this.next_page_url = pagingObj.next_page_url;
                _this.hasNextData = (_this.next_page_url != null);
                console.log(pagingObj);
                resolve();
            }, function (err) { return console.log(err); }, function () { });
        });
    };
    SenryuListComponent.prototype.likeTapped = function (event, senryu) {
        this.senryuService.likeSenryu(senryu).subscribe(function (like) {
            console.log(like);
            senryu.like_count++;
            senryu.is_liked = 1;
        }, function (err) { return console.log(err); }, function () { });
    };
    SenryuListComponent.prototype.unLikeTapped = function (event, senryu) {
        this.senryuService.likeSenryu(senryu, true).subscribe(function (like) {
            console.log(like);
            senryu.like_count--;
            senryu.is_liked = 0;
        }, function (err) { return console.log(err); }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SenryuListComponent.prototype, "mode", void 0);
    SenryuListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'senryu-list',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/components/senryu-list/senryu-list.html"*/'<ion-card *ngFor="let senryu of senryus">\n  <ion-row class="card-row">\n    <ion-col>\n        <ion-icon name="person"></ion-icon>  {{ senryu.user_name }} \n    </ion-col>\n    <ion-col>\n        <ion-icon name="calendar"></ion-icon>  {{ senryu.created_at }} \n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <ion-card-content>\n      <a class="midashi" href="{{senryu.kami_url}}" target="_blank">{{senryu.kami_ku}}</a>\n      <a class="midashi" href="{{senryu.naka_url}}" target="_blank">{{senryu.naka_ku}}</a>\n      <a class="midashi" href="{{senryu.simo_url}}" target="_blank">{{senryu.simo_ku}}</a>\n  </ion-card-content>\n\n  <!-- <ion-item>\n      <p class="item-date">{{ senryu.user_name }} <ion-icon name="calendar"></ion-icon> {{ senryu.created_at }} </p>\n    </ion-item> -->\n\n  <ion-row class="card-row">\n    <ion-col (click)="likeTapped($event, senryu)" *ngIf="senryu.is_liked!==1">\n      <div>\n        <ion-icon name="heart-outline"></ion-icon>  {{ senryu.like_count }}\n      </div>\n    </ion-col>\n    <ion-col (click)="unLikeTapped($event, senryu)" *ngIf="senryu.is_liked===1">\n        <div>\n          <ion-icon name="heart"></ion-icon>  {{ senryu.like_count }}\n        </div>\n      </ion-col>\n    <!-- <ion-col (click)="itemTapped($event, item)">\n      <div><ion-icon name="chatboxes"></ion-icon> {{ senryu.comments_count }}</div>\n    </ion-col> -->\n  </ion-row>\n</ion-card>\n\n<ion-infinite-scroll *ngIf="hasNextData" (ionInfinite)="$event.waitFor(loadingNext())">\n  <ion-infinite-scroll-content\n    loadingSpinner="bubbles"\n    loadingText="Loading more data...">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/components/senryu-list/senryu-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], SenryuListComponent);
    return SenryuListComponent;
}());

//# sourceMappingURL=senryu-list.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mine_mine__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_liked_liked__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { LoginPage } from '../../pages/login/login';

var PagesServiceProvider = /** @class */ (function () {
    function PagesServiceProvider(events, http) {
        this.events = events;
        this.http = http;
        this.pages = [];
        this.eanableDefaultMenu();
    }
    PagesServiceProvider.prototype.getPages = function () {
        return this.pages;
    };
    PagesServiceProvider.prototype.eanableDefaultMenu = function () {
        this.pages = [
            { title: '最新の川柳', component: 'list', isSelected: true },
            { title: ' 一句詠む', component: 'yomu', isSelected: false },
            { title: 'ログイン', component: 'login', isSelected: false },
        ];
        this.events.publish('updateMenu', this.pages);
    };
    PagesServiceProvider.prototype.enableLoginedMenu = function () {
        this.pages = [
            { title: '最新の川柳', component: 'list', isSelected: true },
            { title: ' 一句詠む', component: 'yomu', isSelected: false },
            { title: '自分が詠んだ川柳', component: __WEBPACK_IMPORTED_MODULE_3__pages_mine_mine__["a" /* MinePage */], isSelected: false },
            { title: 'イイネした川柳', component: __WEBPACK_IMPORTED_MODULE_4__pages_liked_liked__["a" /* LikedPage */], isSelected: false }
        ];
        this.events.publish('updateMenu', this.pages);
    };
    PagesServiceProvider.prototype.changePage = function (component) {
        this.pages.map(function (p) {
            p['isSelected'] = (component === p.component);
        });
    };
    PagesServiceProvider.prototype.checkLoginAndUpdateMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].isLogin())
                resolve(true);
            var _url = __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].API_ENDPOINT_LOGINED + 'check';
            console.log("cehckLogin:" + _url);
            _this.http.get(_url, { observe: 'response' }).subscribe(function (res) {
                console.log("res.status:" + res.status);
                if (res.status == 200) {
                    __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].setLogin(true);
                    _this.enableLoginedMenu();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].setLogin(false);
                }
                resolve(true);
            }, function (err) {
                console.log(err);
                if (__WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].FLG_DEBUG) {
                    //無理やりログイン状態で表示
                    __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].setLogin(true);
                    _this.enableLoginedMenu();
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].setLogin(false);
                    _this.eanableDefaultMenu();
                }
                resolve(true);
            }, function () { });
        });
    };
    PagesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PagesServiceProvider);
    return PagesServiceProvider;
}());

//# sourceMappingURL=pages-service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenryuServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SenryuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SenryuServiceProvider = /** @class */ (function () {
    function SenryuServiceProvider(http) {
        this.http = http;
        console.log('Hello SenryuServiceProvider Provider');
    }
    SenryuServiceProvider.prototype.getSenryus = function (_mode, _url, _since_id) {
        if (_mode === void 0) { _mode = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_NORMAL; }
        if (_url === void 0) { _url = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].getApiEndPoint() + 'senryu'; }
        if (_since_id === void 0) { _since_id = null; }
        switch (_mode) {
            case __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_MINE:
                _url = this.addParam2URL(_url, 'mode', 'mine');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_LIKED:
                _url = this.addParam2URL(_url, 'mode', 'liked');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_NORMAL:
                break;
            default:
                break;
        }
        if (_since_id != null) {
            _url = this.addParam2URL(_url, 'since_id', _since_id);
        }
        console.log("getSenryu:" + _url);
        return this.http.get(_url);
    };
    SenryuServiceProvider.prototype.postSenryu = function (_senryu) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].getApiEndPoint() + 'senryu';
        var senddata = {
            word_kami_id: _senryu.kami_id,
            word_naka_id: _senryu.naka_id,
            word_simo_id: _senryu.simo_id,
        };
        return this.http.post(url, senddata);
    };
    SenryuServiceProvider.prototype.likeSenryu = function (_senryu, _flg_delete) {
        if (_flg_delete === void 0) { _flg_delete = false; }
        var url = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */].getApiEndPoint() + 'like';
        var senddata = {
            senryu_id: _senryu.id,
            flg_delete: _flg_delete
        };
        return this.http.post(url, senddata);
    };
    SenryuServiceProvider.prototype.addParam2URL = function (_url, _key, _value) {
        var resurl = _url;
        resurl += (resurl.indexOf('?') == -1) ? '?' : '&';
        resurl += _key + '=' + String(_value);
        return resurl;
    };
    SenryuServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SenryuServiceProvider);
    return SenryuServiceProvider;
}());

//# sourceMappingURL=senryu-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map