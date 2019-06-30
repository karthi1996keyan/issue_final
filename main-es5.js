(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n            <div class=\"container\">\n                  <nav class=\"navbar navbar-light \">\n                          <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n                        </nav>\n             </div>\n          </nav>\n\n<div class=\"container\">\n        <div class=\"row\">\n          <div style=\"margin-top: 8vh;\" class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\n            <div class=\"card border-info\">\n        \n              <div class=\"card-body text-center\">\n                <div class=\"text-center\">\n                  \n                    <div >\n                        <h5> <span style=\"color:Tomato\">Oops! </span></h5>\n                        <h3>Page not found</h3>\n                    </div>\n                    \n                      <div >\n                          <h1> <span style=\"color:red \"> 404 :(   </span> </h1>\n                        </div>\n    \n                        <div >\n                            <h5>You are looking for something that doesn't actually exist.\n                              </h5>\n                               </div>\n                          \n                      \n                  \n                  <div>\n                      \n                  </div>\n           \n                </div>\n              </div>\n        \n              <div class=\"card-footer text-center\">\n                <div class=\"col-md-12 control\">\n                    <button type=\"button\" class=\"btn\" (click)=\"goBack()\">\n                        Go back \n                      </button>\n                    \n                </div>\n              </div>\n        \n            </div>\n        \n          </div>\n        \n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issue/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issue/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n        <div class=\"container\">\n              <nav class=\"navbar navbar-light \">\n                      <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n                    </nav>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n             \n                <li class=\"nav-item ml-5 mt-1\">\n                  \n                    <div class=\"btn-group\" >\n                        <button class=\"btn btn-sm dropdown-toggle\" style=\"color: white!important\" type=\"button\" (click)=\"notifyCount()\" data-toggle=\"dropdown\"\n                          aria-haspopup=\"true\" aria-expanded=\"false\">\n                          Notifications <span class=\"badge badge-light\" *ngIf=\"!notifyToggler\">{{count.length}}</span>\n                        </button>\n                        <div class=\"dropdown-menu\" >\n                          <a class=\"dropdown-item\" *ngFor=\"let des of notifyData.slice().reverse()\" [routerLink]=\"['/issue/view/',des.issueId]\">{{des.description}}</a>\n                        </div>\n                      </div>\n                </li>\n              <li class=\"nav-item ml-5 custom-link\">\n                <a class=\"nav-link\" style=\"color:white\" data-toggle=\"modal\"  data-target=\".bd-example-modal-lg\" ><b>Create</b></a>\n              </li>\n              <li class=\"nav-item ml-5\">\n               \n              <form class=\"form-inline my-2 my-lg-0\">\n                  <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"searchData\"\n                    name=\"searchData\">\n                  <button class=\"btn btn-outline-light my-2 my-sm-0\" data-toggle=\"modal\"  data-target=\"#searchModel\" type=\"submit\" (click)=\"searchIssue()\">Search</button>\n                </form>\n             </li>\n              <li class=\"nav-item dropdown ml-5\">\n                <a class=\"nav-link dropdown-toggle\" style=\"color:white\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                    Profile\n                  </a>\n                  <div class=\"dropdown-menu\">\n                      <p style=\"text-align:center\">Profile Name</p>\n                    <b>{{userName}}</b>\n                    <a class=\"dropdown-item\" (click)=\"logoutFunction()\">Logout</a>\n                  </div>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </nav>\n\n\n\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Create Issue </h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                            <form >\n                                    <div class=\"form-group\">\n                                        <label for=\"title\"><b>Title</b></label>\n                                        <input type=\"text\" class=\"form-control \" id=\"title\" name=\"title\" [(ngModel)]=\"title\" #tit='ngModel' placeholder=\"Enter title\" required=true>\n                                        <div [hidden]=\"tit.pristine || tit.valid\" class=\"alert alert-info\">\n                                            <div *ngIf=\"tit.errors?.required\">\n                                              Please enter title of the issue\n                                            </div>\n                                        </div>                                       \n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"description\"><b>Description</b></label>\n                                        <input type=\"text\" class=\"form-control \" id=\"description\" name=\"description\" [(ngModel)]=\"description\" #descrip='ngModel' placeholder=\"Enter LastName\" required=true>\n                                        <div [hidden]=\"descrip.pristine || descrip.valid\" class=\"alert alert-info\">\n                                          <div *ngIf=\"descrip.errors?.required\">\n                                            Please enter description of the issue\n                                          </div>\n                                      </div>  \n                                    </div>\n                                    \n                                    <div class=\"form-group\">\n                                        <label for=\"status\"><b>Status</b></label>\n                                        <select  class=\"form-control \" name=\"status\" [(ngModel)]=\"status\" #stat='ngModel' required=true>\n                                          <option *ngFor=\"let data of allStatus\" [value]=\"data\">{{data}}</option>\n                                        </select>\n                                       \n                                        <div [hidden]=\"stat.pristine || stat.valid\" class=\"alert alert-info\">\n                                          <div *ngIf=\"stat.errors?.required\">\n                                            Please enter status of the issue\n                                          </div>\n                                      </div>  \n                                     </div>\n                                  <div class=\"form-group\">\n                                    <label for=\"assignedto\"><b>Assigned TO</b></label>\n                                    <select  class=\"form-control \" name=\"assignedTo\" [(ngModel)]=\"assignedTo\" #assign='ngModel' required=true>\n                                      <option *ngFor=\"let user of allUsers\" [value]=\"user.userId\">{{user.firstName}} {{user.lastName}}</option>\n                                    </select>\n                                   <div [hidden]=\"assign.pristine || assign.valid\" class=\"alert alert-info\">\n                                      <div *ngIf=\"assign.errors?.required\">\n                                        Please assign to someone\n                                      </div>\n                                  </div>  \n                                  </div>\n                                \n                                  <div class=\"form-group\" action=\"\" method=\"POST\" enctype=\"multipart/form-data\" style=\"margin-bottom: 20px; height: auto;\">\n                                    <label style=\"font-size: 25px; font-style: bold\">Attachments</label>\n                                    <div class=\"custom-file mb-3\">\n                                      <input type=\"file\" name=\"file\" id=\"file\" class=\"custom-file-input\" multiple ng2FileSelect [uploader]=\"uploader\">\n                                      <label for=\"file\" class=\"custom-file-label\">Choose File</label>\n                                      <div class=\"uploadList\" *ngFor=\"let item of uploader.queue\">\n                                        <div class=\"col\" style=\"padding: 5px\">{{item.file.name}}</div>\n                                        <div class=\"col-sm-4\" style=\"padding: 5px\">\n                                          <div class=\"progress\">\n                                            <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width': item.progress+'%'}\"></div>\n                                          </div>\n                                        </div>\n                                        <div>\n                                          <button style=\"margin:20px\" type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                          <button  type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                    \n                          </form>\n                    \n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" (click)=\"createIssue()\" class=\"btn btn-primary\">create</button>\n                            \n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                          </div>\n          </div>\n        </div>\n      </div>      \n    \n<div class=\"container d-flex flex-wrap mt-5\">\n         \n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Start searching for a user   \">\n          \n                  <div class=\"card text-center m-3 mt-5\" *ngFor=\"let issue of assignedIssue | filter:searchText | paginate:{currentPage:p,itemsPerPage:6}\">\n                    <div class=\"card-header\" style=\"background: black;opacity:0.8;color: white\">\n                      {{issue.title}}\n                      \n                    </div>\n                    <div class=\"card-body\">\n                            \n                        <h6 class=\"card-title \"  > <b>Status : </b><span style=\"color:dodgerblue\"><b>{{issue.status}}</b> </span> </h6>\n                       <h6 class=\"card-title\" ><b>Reported By :</b> <span  > {{issue.reporter}}</span> </h6>\n                      <p class=\"card-text\" style=\"color:grey\">{{issue.description}}</p>\n                      <a href=\"#\" class=\"btn btn-danger\" [routerLink]=\"['/issue/view/',issue.issueId]\">View</a>\n                    </div>\n                    <div class=\"card-footer text-muted\" style=\"background: black;opacity:0.9;color: white!important\">\n                      Created At : {{issue.createdOn | date:'short'}}\n                    </div>\n\n                  </div>\n                  <br>\n               \n</div>\n\n<div class=\"container mt-5\">\n    <pagination-controls (pageChange)=\"p=$event\" class=\"my-pagination\"></pagination-controls>\n\n</div>\n\n    \n\n\n<div *ngIf=\"noModel\">\n    <div class=\"modal fade bd-example-modal-lg\" id=\"searchModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                        <h3 class=\"modal-title\">Search for :  {{searchHeading}}</h3>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                          <div class=\"container d-flex flex-wrap mt-5\">\n             \n                              <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\" Start searching for a user   \">\n                                    \n                                            <div class=\"card text-center m-3 mt-5\" *ngFor=\"let issue of allSearchData | filter:searchText | paginate:{currentPage:p,itemsPerPage:6}\">\n                                              <div class=\"card-header\" style=\"background: black;opacity:0.8;color: white\">\n                                                {{issue.title}}\n                                                \n                                              </div>\n                                              <div class=\"card-body\">\n                                                      \n                                                  <h6 class=\"card-title \"  > <b>Status : </b><span style=\"color:dodgerblue\"><b>{{issue.status}}</b> </span> </h6>\n                                                 <h6 class=\"card-title\" ><b>Reported By :</b> <span  > {{issue.reporter}}</span> </h6>\n                                                <p class=\"card-text\" style=\"color:grey\">{{issue.description}}</p>\n                                                <a href=\"#\" class=\"btn btn-danger\" [routerLink]=\"['/issue/view/',issue.issueId]\">View</a>\n                                              </div>\n                                              <div class=\"card-footer text-muted\" style=\"background: black;opacity:0.9;color: white!important\">\n                                                Created At : {{issue.createdOn | date:'short'}}\n                                              </div>\n                          \n                                            </div>\n                                            <br>\n                                         \n                          </div>\n                          \n                          <div class=\"container mt-5\">\n                              <pagination-controls (pageChange)=\"p=$event\" class=\"my-pagination\"></pagination-controls>\n                          \n                          </div>\n                          \n                    \n                          </div>\n                          <div class=\"modal-footer\">\n                         \n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                          </div>\n          </div>\n        </div>\n      </div>      \n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issue/issue-view/issue-view.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issue/issue-view/issue-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n            <div class=\"container\">\n                  <nav class=\"navbar navbar-light \">\n                          <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n                        </nav>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                  </button>\n              <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item ml-5 custom-link\">\n                    <a class=\"nav-link\" style=\"color:white\" [routerLink]=\"['/Dashboard']\" ><b>Dashboard</b></a>\n                  </li>\n                  <li class=\"nav-item dropdown ml-5\">\n                    <a class=\"nav-link dropdown-toggle\" style=\"color:white\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                        Profile\n                      </a>\n                      <div class=\"dropdown-menu\">\n                          <p style=\"text-align:center\">Profile Name</p>\n                        <b>{{userName}}</b>\n                        <a class=\"dropdown-item\" (click)=\"logoutFunction()\">Logout</a>\n                      </div>\n                  </li>\n                  \n                </ul>\n              </div>\n            </div>\n          </nav>\n    <div class=\"container mt-4\">\n          <div class=\"card text-center \">\n                <div class=\"card-header\" style=\"background: black;opacity:0.8;color: white\" >\n                  {{title}}\n                </div>\n\n                <div class=\"card-body\">\n                        \n                    <h6 class=\"card-title \"  > <b>Status : </b><span style=\"color:dodgerblue\"><b>{{status}}</b> </span> </h6>\n                   <h6 class=\"card-title\" ><b> Assigned To :</b> <span  > {{assignedTo}}</span> </h6>\n                 \n                   <p class=\"card-text\" style=\"color:grey\">{{description}}.</p>\n                   \n                   <h6>Attachments -</h6>\n                   <a *ngFor=\"let name of fileName; let i = index\" (click)=\"download(i)\" style=\"cursor: pointer; color: blue\"><i class=\"fas fa-paperclip\" ></i> {{name}}\n                     <br></a>\n                  \n                        <a class=\"btn btn-warning m-2 \" (click)=\"goBack()\"  >Go Back</a>\n                      \n                        <a class=\"btn btn-danger m-2\" (click)=\"deleteIssue()\">Delete</a>\n                   \n                        <a class=\"btn btn-info m-2\" data-toggle=\"modal\"  data-target=\".bd-example-modal-lg\" >Edit</a>\n                    \n                        <a class=\"btn btn-success m-2 \" (click)=\"addWatch()\"  >Watch</a>\n                    \n                     \n                \n              \n                </div>\n                <div class=\"card-footer text-muted\" style=\"background: black;opacity:0.9;color: white!important\">\n                  Created  by <b style=\"color:skyblue\">{{reporterId}}</b> on 2 days ago\n                </div>\n              </div>    \n            </div>\n\n            <div class=\"container mt-5\" >\n                \n                    \n                    <div class=\"card text-center m-4 \" style=\"box-shadow: 0px 2px 25px slategray\">\n                          <div class=\"card-header\" style=\"border:1px solid black;;color: white;background:black;opacity: 0.8;\">\n                            Comments\n                          </div>\n                          \n                          <div class=\"card-body\">\n\n                                <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"comment\" style=\"border: 2px solid slategray;\" aria-label=\"With textarea\" placeholder=\"Enter Comment here....\"></textarea>\n                                <button class=\"btn mt-4\" (click)=\"addComment()\" style=\"background: gray;color: white;margin-left: 90%;\" >comment</button>\n                               \n                              <span *ngIf=\"commnetData\">\n                                <span *ngFor=\"let comments of commnetData.slice().reverse()\">\n                                <div class=\"card mt-4\">\n                                        <div class=\"card-header\" style=\"text-align: left;background:lightslategray;\" >\n                                            @{{comments.createdOn | date:\"short\"}} by <b>{{comments.reporter}}</b>\n                                        </div>\n                                        <div class=\"card-body\">\n                                          <p class=\"card-text\" style=\"text-align: left!important\">{{comments.description}}</p>\n                                        </div>\n                                      </div>\n                                    </span>\n                                  </span>\n                                \n\n                          </div>\n                      \n\n\n                        </div>    \n            </div>\n\n\n     <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                          <h5 class=\"modal-title\">Edit Issue </h5>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <form >\n                                <div class=\"form-group\">\n                                    <label for=\"title\"><b>Title</b></label>\n                                    <input type=\"text\" class=\"form-control \" id=\"title\" name=\"title\" [(ngModel)]=\"title\" #tit='ngModel' placeholder=\"Enter title\" required=true>\n                                    <div [hidden]=\"tit.pristine || tit.valid\" class=\"alert alert-info\">\n                                        <div *ngIf=\"tit.errors?.required\">\n                                          Please enter title of the issue\n                                        </div>\n                                    </div>                                       \n                                </div>\n\n                                \n                                <div class=\"form-group\">\n                                    <label for=\"description\"><b>Description</b></label>\n                                    <input type=\"text\" class=\"form-control \" id=\"description\" name=\"description\" [(ngModel)]=\"description\" #descrip='ngModel' placeholder=\"Enter LastName\" required=true>\n                                    <div [hidden]=\"descrip.pristine || descrip.valid\" class=\"alert alert-info\">\n                                      <div *ngIf=\"descrip.errors?.required\">\n                                        Please enter description of the issue\n                                      </div>\n                                  </div>  \n                                </div>\n\n                                \n                                <div class=\"form-group\">\n                                    <label for=\"status\"><b>Status</b></label>\n                                    <select  class=\"form-control \" name=\"status\" [(ngModel)]=\"status\" #stat='ngModel' required=true>\n                                      <option *ngFor=\"let data of allStatus\" [value]=\"data\">{{data}}</option>\n                                    </select>\n                                   \n                                    <div [hidden]=\"stat.pristine || stat.valid\" class=\"alert alert-info\">\n                                      <div *ngIf=\"stat.errors?.required\">\n                                        Please enter status of the issue\n                                      </div>\n                                  </div>  \n                                 </div>\n\n                                 \n                                 <div class=\"form-group\">\n                                    <label for=\"assignedto\"><b>Assigned TO</b></label>\n                                    <select  class=\"form-control \" name=\"assignedToId\" [(ngModel)]=\"assignedToId\" #assign='ngModel' required=true>\n                                      <option *ngFor=\"let user of allUsers\" [value]=\"user.userId\">{{user.firstName}} {{user.lastName}}</option>\n                                    </select>\n                                   <div [hidden]=\"assign.pristine || assign.valid\" class=\"alert alert-info\">\n                                      <div *ngIf=\"assign.errors?.required\">\n                                        Please assign to someone\n                                      </div>\n                                  </div>  \n                                  </div>\n\n          <div class=\"form-group\" action=\"/api/upload\" method=\"POST\" enctype=\"multipart/form-data\" style=\"margin-bottom: 20px; height: auto;\">\n            <label style=\"font-size: 25px; font-style: bold\">Attachments</label>\n            <br>\n            <a *ngFor=\"let name of fileName; let i = index\" (click)=\"download(i)\" style=\"cursor: pointer; color: blue\"><i class=\"fas fa-paperclip\" ></i> {{name}}\n              <br></a>\n              <hr>\n            <div class=\"custom-file mb-3\">\n              <input type=\"file\" name=\"file\" id=\"file\" class=\"custom-file-input\" multiple ng2FileSelect [uploader]=\"uploader\">\n              <label for=\"file\" class=\"custom-file-label\">Choose File</label>\n              <div class=\"uploadList\" *ngFor=\"let item of uploader.queue\">\n                <div class=\"col\" style=\"padding: 5px\">{{item.file.name}}</div>\n                <div class=\"col-sm-4\" style=\"padding: 5px\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width': item.progress+'%'}\"></div>\n                  </div>\n                </div>\n                <div>\n                  <button style=\"margin:20px\" type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                  <button  type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n                                </form>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\"  class=\"btn btn-primary\" (click)=\"editIssue()\" >upload</button>\n                            </div>\n            </div>\n          </div>\n        </div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n            <div class=\"container\">\n                  <nav class=\"navbar navbar-light \">\n                          <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n                        </nav>\n             </div>\n          </nav>\n\n\n<div class=\"container\">\n        <div class=\"row\">\n          <div style=\"margin-top: 8vh;\" class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\n            <div class=\"card border-info\">\n        \n              <div class=\"card-body text-center\">\n                <div class=\"text-center\">\n                  \n                    <div >\n                        <h5> <span style=\"color:Tomato\">Oops! </span></h5>\n                        <h3>Internal Server Error</h3>\n                    </div>\n                    \n                      <div >\n                          <h1> <span style=\"color:red \"> 500 :(   </span> </h1>\n                        </div>\n    \n                        <div >\n                               </div>\n                          \n                      \n                  \n                  <div>\n                      \n                  </div>\n           \n                </div>\n              </div>\n        \n              <div class=\"card-footer text-center\">\n                <div class=\"col-md-12 control\">\n                    <button type=\"button\" class=\"btn\" (click)=\"goToLogin()\">\n                        Redirect to Login Page\n                      </button>\n                    \n                </div>\n              </div>\n        \n            </div>\n        \n          </div>\n        \n        </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n  <div class=\"container\">\n        <nav class=\"navbar navbar-light \">\n                <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n              </nav>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active ml-5\">\n          <a class=\"nav-link\" ><b>Login</b>\n                <span class=\"sr-only\">(current)</span>\n              </a>\n        </li>\n        <li class=\"nav-item ml-5\">\n          <a class=\"nav-link\" [routerLink]=\"['/signup']\"><b>Sign up</b></a>\n        </li>\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n\n       \n         \n                <div class=\"card text-center\">\n                        <div class=\"card-header\" style=\"background:lavender\">\n                               <b> Now , tracking issues is easy task !!!</b>\n                        </div>\n                        <div class=\"card-body align-self-center w-50\" >\n                          <p class=\"card-text\">With advanced tracking system , issue will be handled in very good manner with supporting screenshots upload ,watchlist ,comments and notification</p>\n                          <a href=\"#\" class=\"btn btn-tomato\">Want to explore more</a>\n                        </div>\n                </div>\n       \n\n        <div style=\"display:flex;align-items: center;justify-content: center;\" class=\"inputCard\" >\n            \n                      <form class=\"mt-3\" style=\"box-shadow: 2px 1px 5px grey;padding:30px;\" >\n                                <div class=\"form-group\">\n                                  <label for=\"email\"><b>Email</b></label>\n                                  <input type=\"email\" class=\"form-control\" id=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"email\" #mail='ngModel' aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required=true>\n                                  <div [hidden]=\"mail.pristine || mail.valid\" class=\"alert alert-info\" style=\"font-size: 12px\" >\n                                      <div *ngIf=\"mail.errors?.required\">\n                                        Please enter email\n                                      </div>\n                                      <div *ngIf=\"mail.errors?.pattern\">\n                                        Please enter valid email\n                                      </div>\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label for=\"password\"><b>Password</b></label>\n                                  <input type=\"password\" class=\"form-control \" id=\"password\" minlength=8 pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" name=\"password\" [(ngModel)]=\"password\" #pass='ngModel' placeholder=\"Password\" required=true>\n                                  <div [hidden]=\"pass.pristine || pass.valid\" class=\"alert alert-info\" style=\"font-size: 12px\">\n                                      <div *ngIf=\"pass.errors?.required\">\n                                        Please enter password\n                                      </div>\n                                      <div *ngIf=\"pass.errors?.pattern\" >\n                                        Please enter valid password\n                                      </div>\n                                  </div>\n\n\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-black w-100\" (click)=\"loginFunction()\">Login</button>\n                                <button class=\"btn btn-danger mt-2 w-100 \" type=\"button\" (click)=\"googleLogin()\">Login with google</button>\n\n                        </form>\n             \n            </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark  static-top\" style=\"background:black\">\n        <div class=\"container\">\n              <nav class=\"navbar navbar-light \">\n                      <span class=\"navbar-brand mb-0 h1\">Issue Tracking Tool</span>\n                    </nav>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item ml-5\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\" ><b>Login</b>\n                      <span class=\"sr-only\">(current)</span>\n                    </a>\n              </li>\n              <li class=\"nav-item active ml-5\">\n                <a class=\"nav-link\" ><b>Sign up</b></a>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </nav>\n      \n\n<div class=\"inputCard container\">\n            \n    <form class=\"mt-3 \" style=\"box-shadow: 1px 1px 20px grey;padding:30px;\" >\n                <div class=\"form-group\">\n                    <label for=\"firstName\"><b>Firstname</b></label>\n                    <input type=\"text\" class=\"form-control \" id=\"firstName\" [(ngModel)]='firstName' name='firstName' #firstname='ngModel' placeholder=\"Enter firstname\" required=true>\n                    <div [hidden]='firstname.pristine || firstname.valid' class=\"alert alert-info\">\n                      <div *ngIf=\"firstname.errors?.required\">\n                          Please enter firstname\n                      </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"lastName\"><b>Lastname</b></label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]='lastName' #lastname='ngModel' placeholder=\"Enter LastName\" required=true>\n                    <div [hidden]='lastname.pristine || lastname.valid' class=\"alert alert-info\">\n                      <div *ngIf=\"lastname.errors?.required\">\n                        please enter lastname\n                      </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"mobileNumber\"><b>Mobile Number</b></label>\n                    <input type=\"text\" class=\"form-control \" id=\"mobileNumber\" pattern='^\\d{10}$' name=\"mobileNumber\" [(ngModel)]='mobileNumber' #mobilenumber='ngModel'  placeholder=\"Enter mobile number\" required=true>\n                    <div [hidden]='mobilenumber.pristine || mobilenumber.valid' class=\"alert alert-info\">\n                      <div *ngIf=\"mobilenumber.errors?.required\">\n                        please enter mobile number\n                      </div>\n                      <div *ngIf=\"mobilenumber.errors?.pattern\">\n                        please enter valid mobile number\n                      </div>\n                    </div>\n                </div>\n              <div class=\"form-group\">\n                <label for=\"email\"><b>Email</b></label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]='email' pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name='email' #mail='ngModel' aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required=true>\n                <div [hidden]=\"mail.pristine || mail.valid\" class=\"alert alert-info\">\n                  <div *ngIf=\"mail.errors?.required\">\n                      Please enter email\n                  </div>\n                  <div *ngIf=\"mail.errors?.pattern\">\n                    please enter valid mail address\n                  </div>\n\n              </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\"><b>Password</b></label>\n                <input type=\"password\" class=\"form-control \" [(ngModel)]='password'  pattern=\"^[A-Za-z0-9@#^&?$!%]{8,14}$\" name=\"password\" minlength=\"8\" #pass='ngModel' placeholder=\"Password\" required=true>\n                <div [hidden]='pass.pristine || pass.valid' class=\"alert alert-info\">\n                  <div *ngIf='pass.errors?.required'>\n                    please enter password\n                  </div>\n                  <div *ngIf=\"pass.errors?.pattern\">\n                      please enter valid password \n                  </div>\n                  <div *ngIf=\"pass.errors?.minlength\">\n                      password must have 8 characters\n                  </div>\n                </div>\n              </div>\n              <button type=\"submit\" (click)=\"signUpFunction()\" class=\"btn btn-tomato \">Signup</button>\n\n      </form>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'issueTrackingSystem';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/issue/issue.module */ "./src/app/issue/issue.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");








//import custom modules here









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
                _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__["IssueModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(Location) {
        this.Location = Location;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.goBack = function () {
        this.Location.back();
    };
    ErrorComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var IssueService = /** @class */ (function () {
    function IssueService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = 'http://api.meetinplanner.xyz/api/v1.0.0/issue';
        this.attachmentUrl = 'http://api.meetinplanner.xyz';
        /**
         * create watchlist
         */
        this.createWatch = function (data, authToken) {
            console.log(data);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('issueId', data.issueId)
                .set('watcherId', data.watcherId);
            return _this.http.post(_this.baseUrl + "/watch?authToken=" + authToken, params);
        };
        /**
         * add comment
         */
        this.addComment = function (commentData, authToken) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('issueId', commentData.issueId)
                .set('description', commentData.description)
                .set('reporter', commentData.reporter)
                .set('reporterId', commentData.reporterId);
            return _this.http.post(_this.baseUrl + "/add/comment?authToken=" + authToken, params);
        };
        /**get all attachments */
        this.getAllAttachments = function () {
            return _this.http.get(_this.attachmentUrl + "/api/file");
        };
        /**
         * get single attachments detais
         */
        this.getSingleAttachments = function (attachmentId) {
            console.log(attachmentId);
            return _this.http.get(_this.attachmentUrl + "/api/image/" + attachmentId);
        };
        /**download attachemnts */
        this.downloadAttachemnts = function (attachemntsId) {
            return _this.http.get(_this.attachmentUrl + "/api/download/" + attachemntsId, { responseType: 'blob',
                headers: { 'Content-type': 'text/xml' }
            });
        };
        this.searchIssue = function (arg, skip) {
            if (skip === void 0) { skip = 0; }
            return _this.http.get(_this.baseUrl + "/search?arg=" + arg + "&skip=" + skip);
        };
    }
    //api's
    /**
     * createIssue
     */
    IssueService.prototype.createIssue = function (data, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('reporter', data.reporter)
            .set('title', data.title)
            .set('description', data.description)
            .set('reporterId', data.reporterId)
            .set('status', data.status)
            .set('assignedToId', data.assignedToId)
            .set('assignedTo', data.assignedTo)
            .set('images', data.images);
        return this.http.post(this.baseUrl + "/create?authToken=" + authToken, params);
    }; //end create Issue
    /**
     * editIssue
     */
    IssueService.prototype.editIssue = function (data, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('reporter', data.reporter)
            .set('title', data.title)
            .set('description', data.description)
            .set('reporterId', data.reporterId)
            .set('status', data.status)
            .set('assignedToId', data.assignedToId)
            .set('assignedTo', data.assignedTo)
            .set('images', data.images);
        return this.http.post(this.baseUrl + "/edit/" + data.issueId + "/?authToken=" + authToken, params);
    }; //end edit Issue
    /**
     * get all issue
     */
    IssueService.prototype.getAllIssues = function (authToken) {
        return this.http.get(this.baseUrl + "/view/all?authToken=" + authToken);
    };
    /**
     * get single issue details
     */
    IssueService.prototype.getSingleIssue = function (issueId, authToken) {
        return this.http.get(this.baseUrl + "/view/" + issueId + "?authToken=" + authToken);
    };
    /**
     *
     * delete issues
     */
    IssueService.prototype.deleteIssue = function (issueId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', authToken);
        return this.http.post(this.baseUrl + "/delete/" + issueId, params);
    };
    /**
     * get watchlist
     */
    IssueService.prototype.getWatch = function (authToken) {
        console.log('watc');
        return this.http.get(this.baseUrl + "/watch/view?authToken=" + authToken);
    };
    /**
     * get comment
     */
    IssueService.prototype.getComment = function (issueId, authToken) {
        return this.http.get(this.baseUrl + "/view/comment/" + issueId + "?authToken=" + authToken);
    };
    /**
     * get notification
     */
    IssueService.prototype.getNotifications = function (issueId, authToken) {
        return this.http.get(this.baseUrl + "/notifications/" + issueId + "?authToken=" + authToken);
    };
    /**
     * notify count
     */
    IssueService.prototype.countNotify = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.put(this.baseUrl + "/notify/count?authToken=" + authToken, params);
    };
    IssueService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/issue/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/issue/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-link\r\n{\r\n    background: blueviolet;\r\n    border-radius:10px;\r\n    padding: 0px 4px; \r\n}\r\n\r\n.card\r\n{\r\n    box-shadow: 3px 5px 10px grey;\r\n    width:21em!important;\r\n}\r\n\r\n.card:hover\r\n{\r\n    position: relative;\r\n    top:-5px;\r\n    \r\n    box-shadow: 0px 1px 5px black;\r\n}\r\n\r\n.btn-black\r\n{\r\n    background: slategray;\r\n    color:white;\r\n}\r\n\r\n.dropdown-menu{\r\n    max-height: 150px;\r\n    overflow-y: auto\r\n}\r\n\r\n@media only screen and (max-width:600px)\r\n{\r\n    .card\r\n    {\r\n        width:100%!important;\r\n    }\r\n    .custom-link\r\n    {\r\n        padding:0;\r\n        background: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTs7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTs7UUFFSSxTQUFTO1FBQ1QsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWxpbmtcclxue1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZXZpb2xldDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHBhZGRpbmc6IDBweCA0cHg7IFxyXG59XHJcblxyXG4uY2FyZFxyXG57XHJcbiAgICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZ3JleTtcclxuICAgIHdpZHRoOjIxZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTVweDtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tYmxhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZDogc2xhdGVncmF5O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweClcclxue1xyXG4gICAgLmNhcmRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jdXN0b20tbGlua1xyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/issue/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/issue/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);


//import user serivce 






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toastr, router, issueService, userService, cookieService) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.issueService = issueService;
        this.userService = userService;
        this.cookieService = cookieService;
        this.uri = 'http://api.meetinplanner.xyz/api/upload';
        this.attachments = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            url: this.uri
        });
        this.files = [];
        this.assignedIssue = [];
        this.watch = [];
        this.count = [];
        this.notifyData = [];
        this.allSearchData = [];
        this.notifyToggler = false;
        this.noModel = false;
        this.allStatus = ["Backlog", "In-Progress", "In-Test", "Done"];
        this.allUsers = [];
        this.allIssues = [];
        this.notification = [];
        //functions here
        this.getAllUsers = function () {
            var authToken = _this.cookieService.get('authToken');
            _this.userService.getAllUsers(authToken).subscribe(function (userData) {
                var e_1, _a;
                _this.allIssues = userData.data;
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](userData.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var user = _c.value;
                        _this.allUsers.push(user);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }; //get all users 
        this.createIssue = function () {
            var e_2, _a, e_3, _b;
            try {
                //find user name from user Id
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.allUsers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var x = _d.value;
                    if (x.userId === _this.assignedTo) {
                        var name = x.firstName + " " + x.lastName;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                //find attachments
                for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.attachments), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var y = _f.value;
                    _this.files.push(y.file.id);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var reporter = _this.cookieService.get('userName');
            var reporterId = _this.cookieService.get('userId');
            var issue = {
                status: _this.status,
                title: _this.title,
                description: _this.description,
                assignedToId: _this.assignedTo,
                assignedTo: name,
                reporter: reporter,
                reporterId: reporterId,
                images: _this.files
            };
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.createIssue(issue, authToken)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.toastr.success('Created Successfully');
                    setTimeout(function () {
                        _this.router.navigate(["/issue/view/" + success.data.issueId]);
                    }, 2000);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                _this.toastr.error('Some error occured');
                _this.router.navigate(['/error']);
            });
        }; //nend create issue
        this.getIssue = function () {
            var userId = _this.cookieService.get('userId');
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.getAllIssues(authToken).subscribe(function (response) {
                var e_4, _a;
                if (response.data != null) {
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response['data']), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var x = _c.value;
                            if (x.assignedToId === _this.cookieService.get('userId')) {
                                _this.assignedIssue.push(x);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            });
        }; //end get issue
        this.getWatchList = function () {
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.getWatch(authToken).subscribe(function (response) {
                var e_5, _a, e_6, _b;
                if (response.data != null) {
                    try {
                        for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response['data']), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var details = _d.value;
                            if (details.watcherId === _this.cookieService.get('userId')) {
                                if (_this.allIssues != null) {
                                    try {
                                        for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.assignedIssue), _f = _e.next(); !_f.done; _f = _e.next()) {
                                            var issue = _f.value;
                                            if (details.issueId === issue.issueId) {
                                                _this.watch.push(issue);
                                                console.log(_this.watch);
                                            }
                                        }
                                    }
                                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                    finally {
                                        try {
                                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                        }
                                        finally { if (e_6) throw e_6.error; }
                                    }
                                }
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            });
        }; //end getwatch
        /**
         *  notifyCount=
       =>  */
        this.notifyCount = function () {
            console.log('notify');
            var authToken = _this.cookieService.get('authToken');
            var userId = _this.cookieService.get('userId');
            _this.issueService.countNotify(userId, authToken).subscribe(function (response) {
                if (response['status'] === 200) {
                    return _this.notifyToggler = true;
                }
            });
        };
        this.searchIssue = function () {
            _this.issueService.searchIssue(_this.searchData).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.noModel = true;
                    _this.searchHeading = _this.searchData;
                    _this.searchData = "";
                    _this.allSearchData = response['data'];
                    console.log(_this.allSearchData);
                }
                else {
                    _this.searchData = "";
                    _this.noModel = true;
                    _this.toastr.info(response['message']);
                }
            }, function (error) {
                console.log(error);
                _this.toastr.error('Some error ocurred');
            });
        };
        this.getNotification = function () {
            var authToken = _this.cookieService.get('authToken');
            var userId = _this.cookieService.get('userId');
            _this.issueService.getNotifications(userId, authToken).subscribe(function (response) {
                var e_7, _a, e_8, _b, e_9, _c;
                console.log(response);
                _this.notification.push(response['data']);
                if (_this.notification != null) {
                    try {
                        for (var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.notification), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var x = _e.value;
                            if (x != null) {
                                try {
                                    for (var x_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](x), x_1_1 = x_1.next(); !x_1_1.done; x_1_1 = x_1.next()) {
                                        var y = x_1_1.value;
                                        if (y.notificationCount === 1) {
                                            _this.count.push(y.notificationCount);
                                            var id = y.issueId;
                                            try {
                                                for (var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](y.description), _g = _f.next(); !_g.done; _g = _f.next()) {
                                                    var a = _g.value;
                                                    var des = a;
                                                    var data = {
                                                        issueId: id,
                                                        description: des
                                                    };
                                                    _this.notifyData.push(data);
                                                }
                                            }
                                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                            finally {
                                                try {
                                                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                                                }
                                                finally { if (e_9) throw e_9.error; }
                                            }
                                        }
                                    }
                                }
                                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                                finally {
                                    try {
                                        if (x_1_1 && !x_1_1.done && (_b = x_1.return)) _b.call(x_1);
                                    }
                                    finally { if (e_8) throw e_8.error; }
                                }
                            }
                            if (_this.count.length === 0) {
                                return _this.notifyToggler = true;
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
            });
        };
    }
    DashboardComponent.prototype.onFileSelected = function (event) {
        var file = event[0];
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.get('authToken') != null &&
            this.cookieService.get('userId') != null &&
            this.cookieService.get('userName') != null &&
            this.cookieService.get('authToken') != undefined &&
            this.cookieService.get('userId') != undefined &&
            this.cookieService.get('userName') != undefined &&
            this.userService.getUserInformationFromLocalStorage() != null &&
            this.userService.getUserInformationFromLocalStorage() != undefined) {
            this.userName = this.cookieService.get('userName');
            this.getAllUsers();
            this.getIssue();
            this.getWatchList();
            this.getNotification();
            this.uploader.onBeforeUploadItem = function (item) {
                item.withCredentials = false;
            };
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                _this.attachments.push(JSON.parse(response));
            };
        }
        else {
            this.toastr.error('Authorization missin or logout already');
            this.router.navigate(['/login']);
        }
    };
    DashboardComponent.prototype.logoutFunction = function () {
        var _this = this;
        var userId = this.cookieService.get('userId');
        var authToken = this.cookieService.get('authToken');
        this.userService.logoutFunction(userId, authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                localStorage.clear();
                _this.cookieService.delete('authToken');
                _this.cookieService.delete('userId', '/');
                _this.cookieService.delete('userName', '/');
                _this.toastr.success(success.message);
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            else if (success.status == 404) {
                _this.toastr.error('Already logout or invalid authorization token ! login again');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error(success.message);
                _this.router.navigate(['/error']);
            }
        }, function (err) {
            if (err.status == 404) {
                _this.toastr.error("Logout Failed ", "Already Logged out or Invalid User");
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error("Some Error Occured", "Error!");
                _this.router.navigate(['/error']);
            }
        });
    }; //end logout
    DashboardComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/issue/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/issue/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue-view/issue-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/issue/issue-view/issue-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-link\r\n{\r\n    background: blueviolet;\r\n    border-radius:10px;\r\n    padding: 0px 4px; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvaXNzdWUtdmlldy9pc3N1ZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9pc3N1ZS12aWV3L2lzc3VlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tbGlua1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVldmlvbGV0O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDRweDsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/issue/issue-view/issue-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/issue/issue-view/issue-view.component.ts ***!
  \**********************************************************/
/*! exports provided: IssueViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueViewComponent", function() { return IssueViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var IssueViewComponent = /** @class */ (function () {
    function IssueViewComponent(toastr, issueService, userService, cookieService, _route, router, location) {
        var _this = this;
        this.toastr = toastr;
        this.issueService = issueService;
        this.userService = userService;
        this.cookieService = cookieService;
        this._route = _route;
        this.router = router;
        this.location = location;
        this.uri = 'http://api.meetinplanner.xyz/api/upload';
        this.attachments = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.uri
        });
        this.fileId = [];
        this.attachmentList = [];
        this.allUsers = [];
        this.allIssues = [];
        this.fileName = [];
        this.commnetData = [];
        this.allStatus = ["Backlog", "In-Progress", "In-Test", "Done"];
        //functions here
        this.getAllUsers = function () {
            var authToken = _this.cookieService.get('authToken');
            _this.userService.getAllUsers(authToken).subscribe(function (userData) {
                var e_1, _a;
                _this.allIssues = userData.data;
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](userData.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var user = _c.value;
                        _this.allUsers.push(user);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        }; //get all users 
        //get single issue details 
        this.getSingleIssue = function () {
            _this.issueId = _this._route.snapshot.paramMap.get('issueId');
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.getSingleIssue(_this.issueId, authToken).subscribe(function (response) {
                var e_2, _a;
                if (response.status === 200) {
                    _this.response = response.data[0];
                    _this.title = _this.response.title;
                    _this.status = _this.response.status;
                    _this.description = _this.response.description;
                    _this.reporter = _this.response.reporter;
                    _this.assignedTo = _this.response.assignedTo;
                    _this.assignedToId = _this.response.assignedToId;
                    _this.reporterId = _this.response.reporterId;
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.data[0].images), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var imgId = _c.value;
                            _this.fileId.push(imgId);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    _this.toastr.error(response.message);
                }
            }, function (error) {
                _this.toastr.error('Some error occured');
                _this.router.navigate(['/error']);
            });
        };
        this.getAttachemnts = function () {
            _this.issueService.getAllAttachments().subscribe(function (response) {
                var e_3, _a, e_4, _b, e_5, _c;
                _this.attachmentList.push(response['data']);
                try {
                    for (var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.attachmentList), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var x = _e.value;
                        try {
                            for (var x_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](x), x_1_1 = x_1.next(); !x_1_1.done; x_1_1 = x_1.next()) {
                                var y = x_1_1.value;
                                try {
                                    for (var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.fileId), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var a = _g.value;
                                        if (a === y._id) {
                                            _this.fileName.push(y.filename);
                                        }
                                    }
                                }
                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                                    }
                                    finally { if (e_5) throw e_5.error; }
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (x_1_1 && !x_1_1.done && (_b = x_1.return)) _b.call(x_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
        };
        this.download = function (index) {
            var fileId = _this.fileName[index];
            _this.issueService.downloadAttachemnts(fileId).subscribe(function (response) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(response, response['filename']);
            });
        };
        this.getCommnet = function () {
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.getComment(_this.issueId, authToken).subscribe(function (response) {
                _this.commnetData = response.data;
            });
        };
        this.deleteIssue = function () {
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.deleteIssue(_this.issueId, authToken).subscribe(function (response) {
                _this.toastr.success(response.message);
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 1000);
            });
        };
        this.goBack = function () {
            _this.location.back();
        };
        this.addComment = function () {
            var makeComment = {
                issueId: _this.issueId,
                description: _this.comment,
                reporter: _this.cookieService.get('userName'),
                reporterId: _this.cookieService.get('userId')
            };
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.addComment(makeComment, authToken).subscribe(function (reponse) {
                _this.toastr.success(reponse['message']);
                _this.getCommnet();
                _this.comment = '';
            });
        }; //end add comment
        this.addWatch = function () {
            var response = {
                watcherId: _this.cookieService.get('userId'),
                issueId: _this.issueId
            };
            var authToken = _this.cookieService.get('authtoken');
            _this.issueService.createWatch(response, authToken).subscribe(function (response) {
                _this.toastr.success(response['message']);
            });
        };
        this.editIssue = function () {
            var e_6, _a;
            console.log(_this.attachments);
            try {
                //find attachments
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.attachments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var y = _c.value;
                    _this.fileId.push(y.file.id);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
            var issue = {
                issueId: _this.issueId,
                status: _this.status,
                title: _this.title,
                reporter: _this.reporter,
                reporterId: _this.reporterId,
                description: _this.description,
                assignedTo: _this.assignedTo,
                assignedToId: _this.assignedToId,
                images: _this.fileId
            };
            var authToken = _this.cookieService.get('authToken');
            _this.issueService.editIssue(issue, authToken)
                .subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success('Issue Edited Successfully');
                    setTimeout(function () {
                        _this.router.navigate(["/issue/view/" + _this.issueId]);
                    }, 2000);
                }
                else {
                    _this.toastr.error(response.message);
                }
            }, function (error) {
                _this.toastr.error('Some error occured');
                _this.router.navigate(['/error']);
            });
        };
    }
    IssueViewComponent.prototype.onFileSelected = function (event) {
        var file = event[0];
    };
    IssueViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.get('authToken') != null &&
            this.cookieService.get('userId') != null &&
            this.cookieService.get('userName') != null &&
            this.cookieService.get('authToken') != undefined &&
            this.cookieService.get('userId') != undefined &&
            this.cookieService.get('userName') != undefined &&
            this.userService.getUserInformationFromLocalStorage() != null &&
            this.userService.getUserInformationFromLocalStorage() != undefined) {
            this.userName = this.cookieService.get('userName');
            this.getSingleIssue();
            this.getAllUsers();
            setTimeout(function () {
                _this.getAttachemnts();
            }, 1000);
            this.getCommnet();
            this.uploader.onBeforeUploadItem = function (item) {
                item.withCredentials = false;
            };
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                _this.attachments.push(JSON.parse(response));
            };
        }
        else {
            this.toastr.error('Authorization missing or logout');
            this.router.navigate(['/login']);
        }
    };
    IssueViewComponent.prototype.logoutFunction = function () {
        var _this = this;
        var userId = this.cookieService.get('userId');
        var authToken = this.cookieService.get('authToken');
        this.userService.logoutFunction(userId, authToken)
            .subscribe(function (success) {
            if (success.status === 200) {
                localStorage.clear();
                _this.cookieService.delete('authToken');
                _this.cookieService.delete('userId', '/');
                _this.cookieService.delete('userName', '/');
                _this.toastr.success(success.message);
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            else if (success.status == 404) {
                _this.toastr.error('Already logout or invalid authorization token ! login again');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error(success.message);
                _this.router.navigate(['/error']);
            }
        }, function (err) {
            if (err.status == 404) {
                _this.toastr.error("Logout Failed ", "Already Logged out or Invalid User");
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error("Some Error Occured", "Error!");
                _this.router.navigate(['/error']);
            }
        });
    }; //end logout
    IssueViewComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
    ]; };
    IssueViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-view',
            template: __webpack_require__(/*! raw-loader!./issue-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/issue/issue-view/issue-view.component.html"),
            styles: [__webpack_require__(/*! ./issue-view.component.css */ "./src/app/issue/issue-view/issue-view.component.css")]
        })
    ], IssueViewComponent);
    return IssueViewComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue.module.ts":
/*!***************************************!*\
  !*** ./src/app/issue/issue.module.ts ***!
  \***************************************/
/*! exports provided: IssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueModule", function() { return IssueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/issue/dashboard/dashboard.component.ts");
/* harmony import */ var _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./issue-view/issue-view.component */ "./src/app/issue/issue-view/issue-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);










var IssueModule = /** @class */ (function () {
    function IssueModule() {
    }
    IssueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_4__["IssueViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'dashboard',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
                    },
                    {
                        path: 'issue/view/:issueId',
                        component: _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_4__["IssueViewComponent"]
                    }
                ])
            ]
        })
    ], IssueModule);
    return IssueModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(route) {
        this.route = route;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goToLogin = function () {
        this.route.navigate(['/login']);
    };
    NotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://api.meetinplanner.xyz/api/v1.0.0/users';
        //end points
        /**
         * set user details to localStorage
         */
        this.setUserInformationToLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; //end set user details
        /**
         * get user details from local storage
         */
        this.getUserInformationFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end get user details
    }
    /**
     * signup function
     */
    UserService.prototype.signUpFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.baseUrl + "/signup", params);
    }; //end signup
    /**
     * login function
     */
    UserService.prototype.loginFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.baseUrl + "/login", params);
    }; //end login
    /**
     * logout function
     */
    UserService.prototype.logoutFunction = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.post(this.baseUrl + "/logout?authToken=" + authToken, params);
    }; //end logout
    UserService.prototype.getAllUsers = function (authToken) {
        return this.http.get(this.baseUrl + "/view/all?authToken=" + authToken);
    }; //end get all users
    UserService.prototype.getSingleUserDetail = function (userId, authToken) {
        return this.http.get(this.baseUrl + "/view/" + userId + "/?authToken=" + authToken);
    }; //end get all users
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-tomato\r\n{\r\n    background-color: tomato;\r\n    color:white;\r\n}\r\n.btn-black\r\n{\r\n    background-color:dodgerblue;\r\n    color:white; \r\n}\r\nlabel\r\n{\r\n    color:black;\r\n}\r\n@media  only screen and (max-width:600px)\r\n{\r\n    .card-body\r\n    {\r\n        width:100%!important;\r\n    }\r\n    .inputCard\r\n    {\r\n        display:block!important;\r\n    \r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmO0FBRUE7O0lBRUksV0FBVztBQUNmO0FBRUE7O0lBRUk7O1FBRUksb0JBQW9CO0lBQ3hCO0lBQ0E7O1FBRUksdUJBQXVCOztJQUUzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10b21hdG9cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmJ0bi1ibGFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbn1cclxuXHJcbmxhYmVsXHJcbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KVxyXG57XHJcbiAgICAuY2FyZC1ib2R5XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRDYXJkXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");


//import user serivce 




var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, router, userService, cookieService) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.userService = userService;
        this.cookieService = cookieService;
        this.googleLogin = function () {
            window.open('http://api.meetinplanner.xyz/auth/google', "mywindow", "location=1,status=1,scrollbars=1, width=800,height=800");
            var listener = window.addEventListener('message', function (message) {
                console.log(message);
                _this.userService.setUserInformationToLocalStorage(message.data.user);
                _this.cookieService.set('userId', message.data.user.userId);
                _this.cookieService.set('UserName', message.data.user.firstName + ' ' + message.data.user.lastName);
                _this.router.navigate(['/dashboard']);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //functions here
    LoginComponent.prototype.gotToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.loginFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning('Email is missing');
        }
        else if (!this.password) {
            this.toastr.warning('Password is missing');
        }
        else {
            var loginData = {
                email: this.email,
                password: this.password
            };
            this.userService.loginFunction(loginData)
                .subscribe(function (success) {
                if (success.status === 200) {
                    console.log(success);
                    var fullName = success.data.userDetails.firstName + " " + success.data.userDetails.lastName;
                    _this.cookieService.set('authToken', success.data.authToken);
                    _this.cookieService.set('userId', success.data.userDetails.userId);
                    _this.cookieService.set('userName', fullName);
                    _this.userService.setUserInformationToLocalStorage(success.data);
                    _this.gotToDashboard();
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                _this.toastr.error('Some error Occured');
                _this.router.navigate(['/error']);
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media  only screen and (max-width:600px)\r\n{\r\n   \r\n    .inputCard\r\n    {\r\n        display:block!important;\r\n    \r\n    }\r\n}\r\n\r\n.btn-tomato\r\n{\r\n    background-color:blueviolet;\r\n    color:white;\r\n}\r\n\r\n.btn-black\r\n{\r\n    background-color:dodgerblue;\r\n    color:white; \r\n}\r\n\r\ninput\r\n{\r\n    border-left:5px solid black;\r\n}\r\n\r\nlabel\r\n{\r\n    color:gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7SUFHSTs7UUFFSSx1QkFBdUI7O0lBRTNCO0FBQ0o7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KVxyXG57XHJcbiAgIFxyXG4gICAgLmlucHV0Q2FyZFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2shaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tdG9tYXRvXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZXZpb2xldDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5idG4tYmxhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6d2hpdGU7IFxyXG59XHJcblxyXG5pbnB1dFxyXG57XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmxhYmVsXHJcbntcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import user serivce 



var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, userService, router) {
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    //functions here
    SignupComponent.prototype.goToLoginPage = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent.prototype.signUpFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning('Firstname is missing');
        }
        else if (!this.lastName) {
            this.toastr.warning('Lastname is missing');
        }
        else if (!this.mobileNumber) {
            this.toastr.warning('Mobile number is missing');
        }
        else if (!this.email) {
            this.toastr.warning('email is missing');
        }
        else if (!this.password) {
            this.toastr.warning('Password is missing');
        }
        else {
            var signUpData = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: this.mobileNumber,
                email: this.email,
                password: this.password
            };
            this.userService.signUpFunction(signUpData)
                .subscribe(function (success) {
                if (success.status === 200) {
                    _this.toastr.success('User created Successfully');
                    setTimeout(function () {
                        _this.goToLoginPage();
                    }, 2000);
                }
                else {
                    _this.toastr.error(success.message);
                }
            }, function (error) {
                _this.toastr.error('Some error  occured . Signup Failed ');
                _this.router.navigate(['/error']);
            });
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");





//import components




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                    },
                    {
                        path: 'error',
                        component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]
                    },
                    {
                        path: 'notFound',
                        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
                    },
                    {
                        path: 'signup',
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
                    },
                    {
                        path: '',
                        redirectTo: '/login',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: '/login',
                        pathMatch: 'full'
                    }
                ])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sat_issue-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map