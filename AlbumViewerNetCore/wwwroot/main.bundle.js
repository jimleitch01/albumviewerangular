webpackJsonp([2,5],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_entities__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return albumEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var albumEditorComponent = /** @class */ (function () {
    function albumEditorComponent(route, http) {
        this.route = route;
        this.http = http;
        this.album = new __WEBPACK_IMPORTED_MODULE_3__business_entities__["a" /* Album */]();
        this.errorMessage = "";
        this.baseUrl = "http://localhost:5000/api/";
    }
    albumEditorComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        if (id < 1)
            return;
        this.loadAlbum(id);
    };
    albumEditorComponent.prototype.loadAlbum = function (id) {
        var _this = this;
        this.errorMessage = "";
        this.http
            .get(this.baseUrl + "album/" + id)
            .subscribe(function (response) {
            _this.album = response.json();
            console.log(_this.album);
        }, function (response) {
            _this.errorMessage = "Unable to load album.";
        });
    };
    albumEditorComponent.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.http
            .post(this.baseUrl + "album", album)
            .subscribe(function (response) {
            _this.album = response.json();
            _this.errorMessage = album.Title + " has been saved.";
        }, function (response) {
            _this.errorMessage = "Unable to save album.";
        });
    };
    ;
    albumEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album-editor',
            template: __webpack_require__(538)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], albumEditorComponent);
    return albumEditorComponent;
    var _a, _b;
}());

//# sourceMappingURL=albumEditor.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return albumListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var albumListComponent = /** @class */ (function () {
    function albumListComponent(http) {
        this.http = http;
        this.albumList = [];
        this.errorMessage = null;
        this.busy = false;
        //baseUrl = "http://samples.west-wind.com/AlbumViewerCore/api/";
        this.baseUrl = "http://localhost:5000/api/";
        this.getAlbums();
    }
    albumListComponent.prototype.getAlbums = function () {
        var _this = this;
        this.busy = true;
        this.albumList = [];
        var url = this.baseUrl + "albums";
        console.log(url);
        this.http.get(url)
            .subscribe(function (response) {
            _this.albumList = response.json();
            _this.busy = false;
        }, function (error) {
            _this.errorMessage = "Request failed.";
        });
    };
    albumListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album-list',
            template: __webpack_require__(539)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], albumListComponent);
    return albumListComponent;
    var _a;
}());

//# sourceMappingURL=albumList.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Artist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Track; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Album = /** @class */ (function () {
    function Album() {
        this.Id = 0;
        this.ArtistId = 0;
        this.Title = null;
        this.Description = null;
        this.Year = 0;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.SpotifyUrl = null;
        this.Artist = new Artist();
        this.Tracks = [];
    }
    Album = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], Album);
    return Album;
}());

var Artist = /** @class */ (function () {
    function Artist() {
        this.Id = 0;
        this.ArtistName = null;
        this.Description = null;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.AlbumCount = 0;
        this.Albums = [];
    }
    Artist = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], Artist);
    return Artist;
}());

var Track = /** @class */ (function () {
    function Track() {
        this.Id = 0;
        this.AlbumId = 0;
        this.SongName = null;
        this.Length = null;
        this.Bytes = 0;
        this.UnitPrice = 0;
    }
    Track = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], Track);
    return Track;
}());

//# sourceMappingURL=entities.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 341;


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_albumList__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_albumEditor__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: "albums", pathMatch: 'full' },
    { path: "albums", component: __WEBPACK_IMPORTED_MODULE_2__albums_albumList__["a" /* albumListComponent */] },
    { path: 'album/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__albums_albumEditor__["a" /* albumEditorComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: [
                // make sure you use this for Hash Urls rather than HTML 5 routing
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* HashLocationStrategy */]
                }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app works!';
        this.time = new Date();
        this.name = 'Rick';
        this.interval = setInterval(function () { return _this.time = new Date(); }, 1000);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(540),
            styles: [__webpack_require__(528)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_entities__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__albums_albumList__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__albums_albumEditor__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__albums_albumList__["a" /* albumListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__albums_albumEditor__["a" /* albumEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__business_entities__["a" /* Album */],
                __WEBPACK_IMPORTED_MODULE_6__business_entities__["b" /* Artist */],
                __WEBPACK_IMPORTED_MODULE_6__business_entities__["c" /* Track */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\n\n    <div *ngIf=\"album.Id !== 0\" class=\"btn-group\" style=\"margin-bottom: 10px;\">\n        <a [routerLink]=\"['/albums']\"           \n            class=\"btn btn-sm btn-default\"><i class=\"fa fa-list\"></i> List</a>\n        <a href=\"#/album/{{album.Id}}\" class=\"btn btn-sm btn-default\" disabled=\"true\"><i class=\"fa fa-eye\"></i> View</a>\n        <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-dollar\"></i> Buy</a>\n    </div>\n\n    <div class=\"separator\"></div>\n\n\n    <div class=\"alert alert-warning\" *ngIf=\"errorMessage\">\n        <strong>{{ errorMessage }}</strong>\n    </div>\n\n\n    <div class=\"row\" >\n\n        <div class=\"col-sm-5\">\n            <form name=\"form1\" action=\"javascript:{}\" #form1=\"ngForm\" novalidate>\n                <div class=\"form-group\">\n                    <label for=\"AlbumName\">Album Name:</label>\n                    <input id=\"AlbumName\" type=\"text\" class=\"form-control input-sm\"\n                            placeholder=\"Album Name\"\n                            name=\"Title\" required\n                            [(ngModel)]=\"album.Title\" autofocus />\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"BandName\">Band Name:</label>\n                    <input type=\"text\" class=\"form-control input-sm typeahead\" id=\"BandName\"\n                            required\n                            autocomplete=\"off\"\n                            data-provide=\"typeahead\"\n                            placeholder=\"Band Name\"\n                            name=\"ArtistName\"\n                            [(ngModel)]=\"album.Artist.ArtistName\" />\n\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Description\">Album Description:</label>\n                    <textarea class=\"form-control input-sm\" id=\"Description\"\n                                placeholder=\"Album description or review\"\n                                required\n                                [(ngModel)]=\"album.Description\"\n                                name=\"Description\"\n                                style=\"height: 115px\"></textarea>\n\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\" title=\"Image Url\"><i class=\"fa fa-image fa-fw\"></i></span>\n                        <input type=\"text\" class=\"form-control input-sm\" id=\"ImageUrl\"\n                                required\n                                name=\"ImageUrl\"\n                                placeholder=\"Image Url\" [(ngModel)]=\"album.ImageUrl\" />\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-dollar fa-fw\"></i></span>\n                        <input type=\"text\" class=\"form-control input-sm\" id=\"AmazonUrl\"\n                                placeholder=\"Purchase Url\"\n                                name=\"AmazonUrl\"\n                                [(ngModel)]=\"album.AmazonUrl\"/>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-spotify fa-fw\"></i></span>\n                        <input type=\"text\" class=\"form-control input-sm\" id=\"SpotifyUrl\"\n                                placeholder=\"Listen Url\"\n                                name=\"SpotifyUrl\"\n                                [(ngModel)]=\"album.SpotifyUrl\" />\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"YearReleased\">Year released:</label>\n                    <input type=\"number\" class=\"form-control input-sm\" id=\"YearReleased\"\n                            required\n                            name=\"Year\"\n                            placeholder=\"Year of album release\"\n                            [(ngModel)]=\"album.Year\"/>\n                </div>\n\n                <hr/>\n\n\n                <!--<album-songlist [tracks]=\"album.Tracks\" [allowEditing]=\"true\"></album-songlist>-->\n\n                <div class=\"well well-sm\">\n                    <button type=\"submit\" (click)=\"saveAlbum(album)\"\n                            class=\"btn btn-success\"\n                            [disabled]=\"form1.invalid\" accesskey=\"S\">\n                        <i class=\"fa fa-check\"></i> Save\n                    </button>\n                    <a [routerLink]=\"['/albums']\" class=\"btn btn-default\">\n                        <i class=\"fa fa-remove\"></i> Cancel\n                    </a>\n                </div>\n\n                <div class=\"separator\"></div>\n\n            </form>\n        </div>\n\n        <div class=\"col-sm-7\">\n            <h3>Preview</h3>\n            <img [src]=\"album.ImageUrl\" onerror=\"this.src=''\" class=\"album-image-big\"/>\n            <div style=\"margin-top: 10px;\">\n                <h2 class=\"album-title-big\">{{album.Title}}</h2>            \n                <div class=\"album-descript line-breaks\" [innerHTML]=\"album.Description\"></div>\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\" >\n\n<div class=\"alert alert-warning\" *ngIf=\"errorMessage\">\n    <button type=\"button\" class=\"close\" \n            data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    <strong>{{errorMessage}}</strong>\n</div>\n    \n<!--<a href=\"#/album/edit/0\" class=\"btn btn-sm btn-success pull-right\" \n    (click)=\"addAlbum()\"><i class=\"fa fa-plus\"></i> Add Album</a>-->\n<div class=\"page-header-text\">\n    <i class=\"fa fa-list\">\n    </i> Albums <span class=\"badge\">{{albumList.length}}</span>\n</div>\n\n<div class=\"container\" *ngIf=\"busy\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-5x\"\n        style=\"display: block; text-align: center; margin-top: 70px;\"></i>\n</div>\n\n<a class=\"album\" role=\"button\" style=\"text-decoration: none\"\n   [routerLink]=\"['/album/edit',album.Id]\"\n    *ngFor=\"let album of albumList\">\n\n    <img [src]=\"album.ImageUrl\" class=\"album-image\" />\n    <div style=\"padding-left: 80px;\">\n        <div class=\"album-title\">{{album.Title}}</div>\n        <div class=\"album-artist\">\n            by {{album.Artist.ArtistName}} \n            {{(album.Year ? 'in ' + album.Year : '')}}\n        </div>\n        <div class=\"album-descript\">{{album.Description}}</div>\n    </div>\n\n</a>\n\n</div>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<header id=\"TitleBar\" class=\"statusbar-push\" >\n  <a href=\"#/albums\">\n    <img src=\"images/headphone-head.png\"\n         style=\"height: 35px; float: left\" />\n    <div style=\"float: left; margin-left: 5px; line-height: 1.2\">\n      <i class=\"banner-header-top\">West Wind</i><br />\n      <i class=\"banner-header-bottom\">AlbumViewer</i>\n    </div>\n  </a>\n</header>\n\n<div style=\"margin: 0; padding: 0; border: none;\">\n  <div class=\"banner statusbar-push\">\n    <nav id=\"Toolbar-Top\" class=\"pull-right\">\n\n      <a href=\"#/albums\" >\n        <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\n      </a>\n      <a href=\"#/artists\" >\n        <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n<div id=\"MainView\">\n  <router-outlet></router-outlet>\n\n  <footer>\n    <hr/>\n    &copy; West Wind Technologies\n  </footer>\n</div>\n  "

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);


/***/ })

},[580]);
//# sourceMappingURL=main.bundle.js.map