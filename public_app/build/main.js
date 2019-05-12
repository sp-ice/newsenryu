webpackJsonp([4],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenryuServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(42);
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

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(42);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LikedPage);
    return LikedPage;
}());

//# sourceMappingURL=liked.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yomu_yomu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(42);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MinePage);
    return MinePage;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as firebase from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginWithTwitter = function () {
        this.authService.signInWithTwitter().then(function (result) {
            console.log(result);
            if (result.credential) {
                var tw_credential = result;
                var token = tw_credential.accessToken;
                var secret = tw_credential.secret;
                console.log(token, secret);
            }
            var user = result.user;
            console.log(user);
        }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button icon-left block clear (click)="loginWithTwitter()">\n    <ion-icon name="logo-twitter"></ion-icon>\n    Log in with Twitter\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/liked/liked.module": [
		697,
		3
	],
	"../pages/login/login.module": [
		699,
		2
	],
	"../pages/mine/mine.module": [
		698,
		1
	],
	"../pages/yomu/yomu.module": [
		700,
		0
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(42);
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
    WordServiceProvider.prototype.getWords = function (_len) {
        var senddata = { len: _len };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].getApiEndPoint() + 'word', { params: senddata });
    };
    WordServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WordServiceProvider);
    return WordServiceProvider;
}());

//# sourceMappingURL=word-service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
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
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, afAuth) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        console.log('Hello AuthServiceProvider Provider');
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthServiceProvider.prototype.signInWithTwitter = function () {
        console.log('Sign in with twitter');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthServiceProvider.prototype.oauthSignIn = function (provider) {
        if (!window.cordova) {
            console.log('signin with popup');
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            console.log('signin with redirect');
            // return this.afAuth.auth.signInWithRedirect(provider)
            // .then(() => {
            //   return this.afAuth.auth.getRedirectResult().then( result => {
            //     console.log(result);
            //     if (result.credential){
            //       // let token = result.credential.token;
            //       // let secret = result.credential.secret;
            //       // console.log(token,secret);
            //       console.log(result.credential);
            //     }
            //     let user = result.user;
            //     console.log(user);
            //   }).catch(function(error) {
            //     // Handle Errors here.
            //     alert(error.message);
            //   });
            // });
        }
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yomu_yomu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_settings__ = __webpack_require__(42);
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
    function ListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ListPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        //ログインチェック
        return new Promise(function (resolve, reject) {
            var _url = __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].API_ENDPOINT_LOGINED + 'check';
            console.log("cehckLogin:" + _url);
            _this.http.get(_url, { observe: 'response' }).subscribe(function (res) {
                console.log("res.status:" + res.status);
                if (res.status == 200) {
                    __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].setLogin(true);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].setLogin(false);
                }
                resolve(true);
            }, function (err) {
                console.log(err);
                __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* AppSettings */].setLogin(false);
                resolve(true);
            }, function () { });
        });
    };
    ListPage.prototype.yomuTapped = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__yomu_yomu__["a" /* YomuPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>最新の川柳</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <senryu-list></senryu-list>\n\n  <button right bottom ion-fab (click)="yomuTapped($event)" class="yomuBtn"><ion-icon name="brush"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_yomu_yomu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_liked_liked__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_senryu_service_senryu_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_word_service_word_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_settings__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(217);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_yomu_yomu__["a" /* YomuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_liked_liked__["a" /* LikedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/liked/liked.module#LikedPageModule', name: 'LikedPage', segment: 'liked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mine/mine.module#MinePageModule', name: 'MinePage', segment: 'mine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yomu/yomu.module#YomuPageModule', name: 'YomuPage', segment: 'yomu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_yomu_yomu__["a" /* YomuPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_liked_liked__["a" /* LikedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__providers_word_service_word_service__["a" /* WordServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.getApiEndPoint = function () {
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
    //URL
    AppSettings.HOST = "http://localhost:8100";
    // public static HOST="http://newsenryu.spicy-space.xyz";
    AppSettings.API_ENDPOINT_UNLOGINED = AppSettings.HOST + "/api/";
    AppSettings.API_ENDPOINT_LOGINED = AppSettings.HOST + "/apis/";
    //LOGIN
    AppSettings.flg_login = false;
    //川柳取得モード
    AppSettings.MODE_GET_SENRYU_NORMAL = 0;
    AppSettings.MODE_GET_SENRYU_MINE = 1; //自分が投稿した川柳
    AppSettings.MODE_GET_SENRYU_LIKED = 2; //自分がいいねした川柳
    //firebase
    AppSettings.FIREBASE_CONFIG = {
        apiKey: "AIzaSyBD2oEkV_xAIKWoJZP-UZtIlWX9HODxxRU",
        authDomain: "newsenryu.firebaseapp.com",
        databaseURL: "https://newsenryu.firebaseio.com",
        projectId: "newsenryu",
        storageBucket: "newsenryu.appspot.com",
        messagingSenderId: "949758136787"
    };
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YomuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_word_service_word_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_senryu_service_senryu_service__ = __webpack_require__(119);
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
    function YomuPage(navCtrl, navParams, wordService, senryuService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordService = wordService;
        this.senryuService = senryuService;
        this.loadingCtrl = loadingCtrl;
        this.senryu = {};
    }
    YomuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YomuPage');
    };
    YomuPage.prototype.inputFocused = function (event, idx) {
        var _this = this;
        this.focus_idx = idx;
        console.log(idx);
        var len = (this.focus_idx == 2) ? '7' : '5';
        this.wordService.getWords(len).subscribe(function (pagingObj) {
            _this.words = pagingObj.data;
            console.log(_this.words);
        }, function (err) { return console.log(err); }, function () { });
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
            selector: 'page-yomu',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/pages/yomu/yomu.html"*/'<!--\n  Generated template for the YomuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>一句詠む</ion-title>\n    <button ion-button right (click)="yomuTapped($event)">詠む</button>\n  </ion-toolbar>\n\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="上の句(5)" length=5 value={{senryu.kami_ku}} (focus)="inputFocused($event, \'1\')"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="中の句(7)" length=7 value={{senryu.naka_ku}} (focus)="inputFocused($event, \'2\')"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="下の句(5)" length=5 value={{senryu.simo_ku}} (focus)="inputFocused($event, \'3\')"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-col *ngFor="let word of words">\n    <span (click)="wordTapped($event, word)">{{word.word}}</span>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/pages/yomu/yomu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_word_service_word_service__["a" /* WordServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], YomuPage);
    return YomuPage;
}());

//# sourceMappingURL=yomu.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_yomu_yomu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_liked_liked__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(157);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '最新の川柳', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] },
            { title: ' 一句詠む', component: __WEBPACK_IMPORTED_MODULE_5__pages_yomu_yomu__["a" /* YomuPage */] },
            { title: '自分が詠んだ川柳', component: __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__["a" /* MinePage */] },
            { title: 'イイネした川柳', component: __WEBPACK_IMPORTED_MODULE_7__pages_liked_liked__["a" /* LikedPage */] },
            { title: 'ログイン', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */] },
        ];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__senryu_list_senryu_list__ = __webpack_require__(696);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__senryu_list_senryu_list__["a" /* SenryuListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenryuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_senryu_service_senryu_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(42);
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
    function SenryuListComponent(senryuService) {
        this.senryuService = senryuService;
        this.mode = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */].MODE_GET_SENRYU_NORMAL;
    }
    SenryuListComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit SenryuList');
        console.log(this.mode);
        this.loadingFirst();
    };
    SenryuListComponent.prototype.loadingFirst = function () {
        var _this = this;
        this.senryuService.getSenryus(this.mode).subscribe(function (pagingObj) {
            _this.senryus = pagingObj.data;
            _this.since_id = _this.senryus[0].id;
            _this.next_page_url = pagingObj.next_page_url;
            _this.hasNextData = (_this.next_page_url != null);
            console.log(pagingObj);
        }, function (err) { return console.log(err); }, function () { });
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
            selector: 'senryu-list',template:/*ion-inline-start:"/Users/unod/workspace/repos/newsenryuapp/src/components/senryu-list/senryu-list.html"*/'<ion-card *ngFor="let senryu of senryus">\n  <ion-item>\n    <p class="item-date">{{ senryu.user_name }} <ion-icon name="calendar"></ion-icon> {{ senryu.created_at }} </p>\n  </ion-item>\n\n  <ion-card-content>\n      <a href="{{senryu.kami_url}}" target="_blank">{{senryu.kami_ku}}</a>\n      <a href="{{senryu.naka_url}}" target="_blank">{{senryu.naka_ku}}</a>\n      <a href="{{senryu.simo_url}}" target="_blank">{{senryu.simo_ku}}</a>\n  </ion-card-content>\n\n  <ion-row class="card-row">\n    <ion-col (click)="likeTapped($event, senryu)" *ngIf="senryu.is_liked!==1">\n      <div>\n        <ion-icon name="heart-outline"></ion-icon>{{ senryu.like_count }}\n      </div>\n    </ion-col>\n    <ion-col (click)="unLikeTapped($event, senryu)" *ngIf="senryu.is_liked===1">\n        <div>\n          <ion-icon name="heart"></ion-icon>{{ senryu.like_count }}\n        </div>\n      </ion-col>\n    <!-- <ion-col (click)="itemTapped($event, item)">\n      <div><ion-icon name="chatboxes"></ion-icon> {{ senryu.comments_count }}</div>\n    </ion-col> -->\n  </ion-row>\n</ion-card>\n\n<ion-infinite-scroll *ngIf="hasNextData" (ionInfinite)="$event.waitFor(loadingNext())">\n  <ion-infinite-scroll-content\n    loadingSpinner="bubbles"\n    loadingText="Loading more data...">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n'/*ion-inline-end:"/Users/unod/workspace/repos/newsenryuapp/src/components/senryu-list/senryu-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_senryu_service_senryu_service__["a" /* SenryuServiceProvider */]])
    ], SenryuListComponent);
    return SenryuListComponent;
}());

//# sourceMappingURL=senryu-list.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map