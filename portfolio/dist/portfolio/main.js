(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Page/cv/cv.component.css":
/*!******************************************!*\
  !*** ./src/app/Page/cv/cv.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.text-center\n{\n  margin-top:15px;\n}\n\n.link{\n  color: rgb(255, 0, 0);\n  }\n\ntable{\n  font-size:125%;\n}\n\n.main-timeline {\n  position: relative;\n  margin-bottom: 99px;\n  overflow: hidden;\n}\n\n.main-timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 3px;\n  height: 100%;\n  background: #d6d5d5;\n}\n\n.main-timeline .timeline {\n  position: relative;\n  padding-right: 30px;\n}\n\n.main-timeline .timeline:before,\n.main-timeline .timeline:after {\n  content: \"\";\n  display: block;\n  clear: both;\n  width: 100%;\n}\n\n.main-timeline .timeline-icon {\n  position: absolute;\n  top: 0;\n  right: -4px;\n  bottom: 0;\n  left: 0;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  margin: auto;\n  border: 2px solid #d6d5d5;\n  border-radius: 50%;\n  background: #fff;\n}\n\n.main-timeline .timeline-icon:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  margin: auto;\n  border-radius: 50%;\n  background: rgb(248, 102, 5);\n}\n\n.main-timeline .year {\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  right: 20%;\n  padding: 8px 20px;\n  text-align: center;\n  font-size: 14px;\n  color: rgb(255, 255, 255);\n  background: rgb(255, 102, 0);\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 25px;\n  border-radius: 7px;\n}\n\n.main-timeline .timeline-content {\n  position: relative;\n  width: 48.5%;\n  margin: 0 20px 0 0;\n  padding: 43px 50px;\n  background: #fff;\n  border-radius:7px;\n  font-size: 150%;\n}\n\n.main-timeline .title {\n  float: left;\n  margin: 0 20px 20px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #10092c;\n}\n\n.main-timeline .post {\n  display: inline-block;\n  margin-top: 3px;\n  font-size: 20px;\n  color: rgb(160, 29, 29);\n}\n\n.main-timeline .timeline:nth-child(2n) {\n  padding: 0 0 0 30px;\n}\n\n.main-timeline .timeline:nth-child(2n) .year {\n  right: auto;\n  left: 25%;\n}\n\n.main-timeline .timeline:nth-child(2n) .timeline-content {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.main-timeline .timeline:nth-child(2n) .timeline-content:after {\n  right: auto;\n  left: -20px;\n  border-right: 20px solid #f2f2f2;\n  border-left: none;\n}\n\n@media only screen and (max-width:1200px) {\n  .main-timeline .year {\n      right: 25%;\n  }\n\n  .main-timeline .timeline:nth-child(2n) .year {\n      left: 25%;\n  }\n}\n\n@media only screen and (max-width:990px) {\n  .main-timeline .year {\n      right: 25%;\n  }\n\n  .main-timeline .timeline:nth-child(2n) .year {\n      left: 25%;\n  }\n}\n\n@media only screen and (max-width:767px) {\n  .main-timeline:before {\n      left: 10px;\n  }\n\n  .main-timeline .timeline {\n      margin-bottom: 20px;\n      padding: 0 0 0 30px;\n  }\n\n  .main-timeline .timeline:last-child {\n      margin-bottom: 0;\n  }\n\n  .main-timeline .timeline:first-child:before,\n  .main-timeline .timeline:last-child:before {\n      display: none;\n  }\n\n  .main-timeline .timeline-icon {\n      position: absolute;\n      top: 7px;\n      left: 0;\n      margin: 0;\n  }\n\n  .main-timeline .year,\n  .main-timeline .timeline:nth-child(2n) .year {\n      display: block;\n      z-index: 1;\n      position: relative;\n      top: auto;\n      right: auto;\n      left: auto;\n      margin: 0 0 32px 30px;\n      font-weight: 700;\n      -webkit-transform: none;\n              transform: none;\n  }\n\n  .main-timeline .timeline:nth-child(2n) .year:before {\n      right: auto;\n      left: -18px;\n      border-right: 18px solid rgb(248, 102, 5);\n      border-left: none;\n  }\n\n\n\n  .main-timeline .timeline-content,\n  .main-timeline .timeline:nth-child(2n) .timeline-content {\n      float: none;\n      width: auto;\n      margin: 0 0 0 30px;\n  }\n\n}\n\n@media only screen and (max-width:480px) {\n  .main-timeline .title {\n      float: none;\n      margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZS9jdi9jdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxzQkFBc0I7R0FDckI7O0FBQ0g7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBR0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtDQUN6Qjs7QUFJRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixVQUFVO0NBQ1g7O0FBSUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0U7TUFDSSxXQUFXO0dBQ2Q7O0VBRUQ7TUFDSSxVQUFVO0dBQ2I7Q0FDRjs7QUFFRDtFQUNFO01BQ0ksV0FBVztHQUNkOztFQUVEO01BQ0ksVUFBVTtHQUNiO0NBQ0Y7O0FBRUQ7RUFDRTtNQUNJLFdBQVc7R0FDZDs7RUFFRDtNQUNJLG9CQUFvQjtNQUNwQixvQkFBb0I7R0FDdkI7O0VBRUQ7TUFDSSxpQkFBaUI7R0FDcEI7O0VBRUQ7O01BRUksY0FBYztHQUNqQjs7RUFFRDtNQUNJLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsUUFBUTtNQUNSLFVBQVU7R0FDYjs7RUFFRDs7TUFFSSxlQUFlO01BQ2YsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsWUFBWTtNQUNaLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLHdCQUFnQjtjQUFoQixnQkFBZ0I7R0FDbkI7O0VBRUQ7TUFDSSxZQUFZO01BQ1osWUFBWTtNQUNaLDBDQUEwQztNQUMxQyxrQkFBa0I7R0FDckI7Ozs7RUFJRDs7TUFFSSxZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtHQUN0Qjs7Q0FFRjs7QUFFRDtFQUNFO01BQ0ksWUFBWTtNQUNaLFVBQVU7R0FDYjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZS9jdi9jdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dC1jZW50ZXJcbntcbiAgbWFyZ2luLXRvcDoxNXB4O1xufVxuXG4ubGlua3tcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICB9XG50YWJsZXtcbiAgZm9udC1zaXplOjEyNSU7XG59XG4ubWFpbi10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogOTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1haW4tdGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDZkNWQ1O1xufVxuXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpiZWZvcmUsXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDZkNWQ1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAxMDIsIDUpO1xufVxuXG4ubWFpbi10aW1lbGluZSAueWVhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDIwJTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMDIsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG5cbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDguNSU7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgcGFkZGluZzogNDNweCA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOjdweDtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuXG4ubWFpbi10aW1lbGluZSAudGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTAwOTJjO1xufVxuXG4ubWFpbi10aW1lbGluZSAucG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMTYwLCAyOSwgMjkpO1xufVxuXG5cblxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOm50aC1jaGlsZCgybikge1xuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xufVxuXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAueWVhciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAyNSU7XG59XG5cblxuXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudDphZnRlciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KSB7XG4gIC5tYWluLXRpbWVsaW5lIC55ZWFyIHtcbiAgICAgIHJpZ2h0OiAyNSU7XG4gIH1cblxuICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAueWVhciB7XG4gICAgICBsZWZ0OiAyNSU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KSB7XG4gIC5tYWluLXRpbWVsaW5lIC55ZWFyIHtcbiAgICAgIHJpZ2h0OiAyNSU7XG4gIH1cblxuICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAueWVhciB7XG4gICAgICBsZWZ0OiAyNSU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC5tYWluLXRpbWVsaW5lOmJlZm9yZSB7XG4gICAgICBsZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICB9XG5cbiAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpmaXJzdC1jaGlsZDpiZWZvcmUsXG4gIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA3cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm1haW4tdGltZWxpbmUgLnllYXIsXG4gIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC55ZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbjogMCAwIDMycHggMzBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAueWVhcjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtMThweDtcbiAgICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCByZ2IoMjQ4LCAxMDIsIDUpO1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cblxuXG5cbiAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQsXG4gIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IDAgMCAwIDMwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcbiAgLm1haW4tdGltZWxpbmUgLnRpdGxlIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Page/cv/cv.component.html":
/*!*******************************************!*\
  !*** ./src/app/Page/cv/cv.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">Experiences</p>\n<div class=\"col-md-12\">\n  <div class=\"main-timeline\">\n    <div class=\"timeline\">\n      <span class=\"timeline-icon\"></span>\n      <span class=\"year\">January - March 2019</span>\n      <div class=\"timeline-content\">\n        <h3 class=\"title\">Application developer</h3>\n        <span class=\"post\">INTIA (BREST)</span>\n        <p class=\"description\"></p>\n        <ul>\n          <p>\n            development of a solution to simplify the users's registration by requesting apis, use of angularJS langage\n\n          </p>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"timeline\">\n      <span class=\"timeline-icon\"></span>\n      <span class=\"year\">June - July 2018</span>\n      <div class=\"timeline-content\">\n        <h3 class=\"title\">Application developer</h3>\n        <span class=\"post\">Koust (BREST)</span>\n        <p class=\"description\"></p>\n        <ul>\n          <li>Use of \"Oracle Application Express\" development tool</li>\n          <li>Development of a new web application </li>\n          <li>User experience optimization</li>\n          <li>User's bug fix</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"timeline\">\n      <span class=\"timeline-icon\"></span>\n      <span class=\"year\">November 2016</span>\n      <div class=\"timeline-content\">\n        <h3 class=\"title\">Observation internship</h3>\n        <span class=\"post\">CERV (European Virtual Reality Center) PLOUZANE</span>\n        <p class=\"description\"></p>\n        <ul>\n          <li>Initiation to Python</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"text-center\">Formation</p>\n<div class=\"col-md-12\">\n  <div class=\"main-timeline\">\n    <div class=\"timeline\">\n      <span class=\"timeline-icon\"></span>\n      <span class=\"year\">2017-2019</span>\n      <div class=\"timeline-content\">\n        <h3 class=\"title\">BTS SIO (Computing Services for Organization)</h3>\n        <span class=\"post\">\"Charles de Foucauld\" High School</span>\n        <p class=\"description\"></p>\n          <ul>\n            <li>Specialization in Application and web development</li>\n          </ul>\n      </div>\n    </div>\n    <div class=\"timeline\">\n      <span class=\"timeline-icon\"></span>\n      <span class=\"year\">2014-2017</span>\n      <div class=\"timeline-content\">\n        <h3 class=\"title\">Scientific baccalaureat</h3>\n        <span class=\"post\">\"Saint-François Notre-Dame\" High School</span>\n        <p class=\"description\"></p>\n          <ul>\n            <li>SVT speciality with ISN option (Computing and Digital Science)</li>\n          </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr>\n<div class=\"container\">\n\n  <h2>Computing skills</h2>\n  <table class=\"table\">\n    <tbody>\n\n      <tr>\n        <td class=\"title\">Programming</td>\n        <td> PHP, Javascript, Angular, HTML5, VB.NET, Oracle Apex, CSS3</td>\n      </tr>\n\n      <tr>\n        <td class=\"title\">Versionning</td>\n        <td> GitKraken</td>\n      </tr>\n\n      <tr>\n        <td class=\"title\">DataBase</td>\n        <td>MySQL, OracleSQL, PL/SQL</td>\n      </tr>\n\n      <tr>\n        <td class=\"title\">Virtualization</td>\n        <td>VirtualBox</td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<div class=\"container\">\n\n  <h2>Contact</h2>\n\n  <table class=\"table\">\n    <tbody>\n      \n      <tr>\n        <td class=\"title\">Age</td>\n        <td>21</td>\n      </tr>\n\n      <tr>\n        <td class=\"title\">Linkedin</td>\n        <td><a class=\"link\"href=\"https://www.linkedin.com/in/damien-noel-a79206128/?locale=en_US\" target=\"_blank\">https://www.linkedin.com/in/damien-noel-a79206128/?locale=en_US</a> </td>\n      </tr>\n\n      <tr>\n        <td class=\"title\">Mail</td>\n        <td>dNoelDev@gmail.com</td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/Page/cv/cv.component.ts":
/*!*****************************************!*\
  !*** ./src/app/Page/cv/cv.component.ts ***!
  \*****************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/Page/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.css */ "./src/app/Page/cv/cv.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/Page/e6/e6.component.css":
/*!******************************************!*\
  !*** ./src/app/Page/e6/e6.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2UvZTYvZTYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Page/e6/e6.component.html":
/*!*******************************************!*\
  !*** ./src/app/Page/e6/e6.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Page/e6/e6.component.ts":
/*!*****************************************!*\
  !*** ./src/app/Page/e6/e6.component.ts ***!
  \*****************************************/
/*! exports provided: E6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E6Component", function() { return E6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var E6Component = /** @class */ (function () {
    function E6Component() {
    }
    E6Component.prototype.ngOnInit = function () {
    };
    E6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e6',
            template: __webpack_require__(/*! ./e6.component.html */ "./src/app/Page/e6/e6.component.html"),
            styles: [__webpack_require__(/*! ./e6.component.css */ "./src/app/Page/e6/e6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], E6Component);
    return E6Component;
}());



/***/ }),

/***/ "./src/app/Page/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/Page/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.profilimage{\n  border-radius: 25px;\n  border: 2px solid rgb(219, 76, 9);\n height: 250px;\n margin-top: 12%;\n}\n\n.col-md-6.warning-message{\n  width: 700px;\n}\n\n.col-md-7{\n    font-size: 130%;\n}\n\n.col-sm-8{\n  font-size: 130%;\n}\n\n.first{\n  margin-top:5%;\n}\n\n.following{\n  flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n    font-size: 200%;\n}\n\n.featurette-heading{\n  color:rgb(219, 76, 9);\n}\n\n.text-muted{\n  color:#000 !important;\n}\n\n.lead{\n  margin-top: 15px;\n  font-weight: 400;\n  font-size: 115%;\n}\n\nhr{\n  margin: 35px auto;\n  width: 100%;\n  height: 2px;\n  background-color: rgb(0, 0, 0);\n  border: none;\n}\n\nh2{\n  font-size:125%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDO0NBQ25DLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7O0FBQ0Q7RUFDRSxxQkFBcUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNuQjs7QUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9QYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZmlsaW1hZ2V7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTksIDc2LCA5KTtcbiBoZWlnaHQ6IDI1MHB4O1xuIG1hcmdpbi10b3A6IDEyJTtcbn1cblxuLmNvbC1tZC02Lndhcm5pbmctbWVzc2FnZXtcbiAgd2lkdGg6IDcwMHB4O1xufVxuLmNvbC1tZC03e1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn1cbi5jb2wtc20tOHtcbiAgZm9udC1zaXplOiAxMzAlO1xufVxuLmZpcnN0e1xuICBtYXJnaW4tdG9wOjUlO1xufVxuLmZvbGxvd2luZ3tcbiAgZmxleDogMCAwIDU4LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMlO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbn1cbi5mZWF0dXJldHRlLWhlYWRpbmd7XG4gIGNvbG9yOnJnYigyMTksIDc2LCA5KTtcbn1cbi50ZXh0LW11dGVke1xuICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XG59XG4ubGVhZHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMTUlO1xufVxuaHJ7XG4gIG1hcmdpbjogMzVweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyOiBub25lO1xufVxuaDJ7XG4gIGZvbnQtc2l6ZToxMjUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/Page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row featurette\">\n  <div class=\"col-md-7 first\">\n    <h2 class=\"featurette-heading\">Damien NOEL\n    <span class=\"text-muted\"> BTS SIO student SIO.</span>\n    </h2>\n    <p class=\"lead\">\n      I'm a BTS SIO TEST student (computing services for organizations).\n      Interested in Application's development, I chose the SLAM\n      specification (computing development).\n    </p>\n\n    <p class=\"lead\">\n      I'm a computing student, I'm constantly looking to increase my technical baggage.\n      Endowed with great relationship skills and experienced in the domain of application development,\n      I easily integrate myself in a team project.\n    </p>\n    </div>\n    <div class=\"col-md-5\">\n    <img class=\"profilimage\" src=\"../../../assets/images/DamienNOEL.png\" alt=\"Damien NOEL\">\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/Page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/Page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Page/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Page/watch/juridical/juridical.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Page/watch/juridical/juridical.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2Uvd2F0Y2gvanVyaWRpY2FsL2p1cmlkaWNhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Page/watch/juridical/juridical.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Page/watch/juridical/juridical.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Page/watch/juridical/juridical.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Page/watch/juridical/juridical.component.ts ***!
  \*************************************************************/
/*! exports provided: JuridicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuridicalComponent", function() { return JuridicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuridicalComponent = /** @class */ (function () {
    function JuridicalComponent() {
    }
    JuridicalComponent.prototype.ngOnInit = function () {
    };
    JuridicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-juridical',
            template: __webpack_require__(/*! ./juridical.component.html */ "./src/app/Page/watch/juridical/juridical.component.html"),
            styles: [__webpack_require__(/*! ./juridical.component.css */ "./src/app/Page/watch/juridical/juridical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JuridicalComponent);
    return JuridicalComponent;
}());



/***/ }),

/***/ "./src/app/Page/watch/technologic/technologic.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Page/watch/technologic/technologic.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2Uvd2F0Y2gvdGVjaG5vbG9naWMvdGVjaG5vbG9naWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Page/watch/technologic/technologic.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Page/watch/technologic/technologic.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Page/watch/technologic/technologic.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Page/watch/technologic/technologic.component.ts ***!
  \*****************************************************************/
/*! exports provided: TechnologicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologicComponent", function() { return TechnologicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnologicComponent = /** @class */ (function () {
    function TechnologicComponent() {
    }
    TechnologicComponent.prototype.ngOnInit = function () {
    };
    TechnologicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technologic',
            template: __webpack_require__(/*! ./technologic.component.html */ "./src/app/Page/watch/technologic/technologic.component.html"),
            styles: [__webpack_require__(/*! ./technologic.component.css */ "./src/app/Page/watch/technologic/technologic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnologicComponent);
    return TechnologicComponent;
}());



/***/ }),

/***/ "./src/app/Page/work/work.component.css":
/*!**********************************************!*\
  !*** ./src/app/Page/work/work.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2Uvd29yay93b3JrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Page/work/work.component.html":
/*!***********************************************!*\
  !*** ./src/app/Page/work/work.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">Articles</p>\n<div class=\"row featurette\">\n  <app-articlelist></app-articlelist>\n  \n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Page/work/work.component.ts":
/*!*********************************************!*\
  !*** ./src/app/Page/work/work.component.ts ***!
  \*********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/Page/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/Page/work/work.component.css"), __webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\n  margin-top:6%;\n}\n\n#page {\n  border-radius: 7px;\n  margin-left: 3%;\n  margin-right:3%;\n  margin-top: 30px;\n  background-color: #ffffff !important;\n  }\n\n.text-center{\n    color: rgb(255, 0, 34);\n    font-size:2.5rem;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUNBQXFDO0dBQ3BDOztBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgbWFyZ2luLXRvcDo2JTtcbn1cblxuI3BhZ2Uge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXJpZ2h0OjMlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRleHQtY2VudGVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAzNCk7XG4gICAgZm9udC1zaXplOjIuNXJlbTtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<main role=\"main\">\n  <section id=\"page\" class=\"page\">\n    <!-- Container -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <router-outlet></router-outlet>\n      </div>\n      <!-- #End Container -->\n    </div>\n  </section>\n</main>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Page_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page/home/home.component */ "./src/app/Page/home/home.component.ts");
/* harmony import */ var _Page_cv_cv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page/cv/cv.component */ "./src/app/Page/cv/cv.component.ts");
/* harmony import */ var _elements_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/navbar/navbar.component */ "./src/app/elements/navbar/navbar.component.ts");
/* harmony import */ var _articles_vagrant_vagrant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/vagrant/vagrant.component */ "./src/app/articles/vagrant/vagrant.component.ts");
/* harmony import */ var _articles_jenkins_jenkins_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./articles/jenkins/jenkins.component */ "./src/app/articles/jenkins/jenkins.component.ts");
/* harmony import */ var _Page_e6_e6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Page/e6/e6.component */ "./src/app/Page/e6/e6.component.ts");
/* harmony import */ var _Page_watch_technologic_technologic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Page/watch/technologic/technologic.component */ "./src/app/Page/watch/technologic/technologic.component.ts");
/* harmony import */ var _Page_watch_juridical_juridical_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page/watch/juridical/juridical.component */ "./src/app/Page/watch/juridical/juridical.component.ts");
/* harmony import */ var _elements_articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/articlelist/articlelist.component */ "./src/app/elements/articlelist/articlelist.component.ts");
/* harmony import */ var _Page_work_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Page/work/work.component */ "./src/app/Page/work/work.component.ts");
/* harmony import */ var _articles_angular_angular_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articles/angular/angular.component */ "./src/app/articles/angular/angular.component.ts");
/* harmony import */ var _articles_firebase_firebase_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./articles/firebase/firebase.component */ "./src/app/articles/firebase/firebase.component.ts");
/* harmony import */ var _articles_gitkraken_gitkraken_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./articles/gitkraken/gitkraken.component */ "./src/app/articles/gitkraken/gitkraken.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'app', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'home', component: _Page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'cv', component: _Page_cv_cv_component__WEBPACK_IMPORTED_MODULE_5__["CvComponent"] },
    { path: 'work', component: _Page_work_work_component__WEBPACK_IMPORTED_MODULE_13__["WorkComponent"],
        children: [
            { path: 'angular', component: _articles_angular_angular_component__WEBPACK_IMPORTED_MODULE_14__["AngularComponent"] },
            { path: 'firebase', component: _articles_firebase_firebase_component__WEBPACK_IMPORTED_MODULE_15__["FirebaseComponent"] },
            { path: 'gitkraken', component: _articles_gitkraken_gitkraken_component__WEBPACK_IMPORTED_MODULE_16__["GitkrakenComponent"] },
            { path: 'vagrant', component: _articles_vagrant_vagrant_component__WEBPACK_IMPORTED_MODULE_7__["VagrantComponent"] },
            { path: 'jenkins', component: _articles_jenkins_jenkins_component__WEBPACK_IMPORTED_MODULE_8__["JenkinsComponent"] },
        ] },
    { path: 'e6', component: _Page_e6_e6_component__WEBPACK_IMPORTED_MODULE_9__["E6Component"] },
    { path: 'Technological watch', component: _Page_watch_technologic_technologic_component__WEBPACK_IMPORTED_MODULE_10__["TechnologicComponent"] },
    { path: 'Juridical watch', component: _Page_watch_juridical_juridical_component__WEBPACK_IMPORTED_MODULE_11__["JuridicalComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _Page_cv_cv_component__WEBPACK_IMPORTED_MODULE_5__["CvComponent"],
                _elements_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _articles_vagrant_vagrant_component__WEBPACK_IMPORTED_MODULE_7__["VagrantComponent"],
                _articles_jenkins_jenkins_component__WEBPACK_IMPORTED_MODULE_8__["JenkinsComponent"],
                _Page_e6_e6_component__WEBPACK_IMPORTED_MODULE_9__["E6Component"],
                _Page_watch_technologic_technologic_component__WEBPACK_IMPORTED_MODULE_10__["TechnologicComponent"],
                _Page_watch_juridical_juridical_component__WEBPACK_IMPORTED_MODULE_11__["JuridicalComponent"],
                _elements_articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_12__["ArticlelistComponent"],
                _Page_work_work_component__WEBPACK_IMPORTED_MODULE_13__["WorkComponent"],
                _articles_angular_angular_component__WEBPACK_IMPORTED_MODULE_14__["AngularComponent"],
                _articles_firebase_firebase_component__WEBPACK_IMPORTED_MODULE_15__["FirebaseComponent"],
                _articles_gitkraken_gitkraken_component__WEBPACK_IMPORTED_MODULE_16__["GitkrakenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/angular/angular.component.css":
/*!********************************************************!*\
  !*** ./src/app/articles/angular/angular.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.profilimage{\nborder-radius: 25px;\nborder: 2px solid rgb(255, 0, 34);\nheight: 250px;\n}\n\n.otherimage{\n\n  max-width: 250px;\n  width: 300px;\n  height: 250px;\n  max-height: 250px;\n  min-width:10%;\n  border-radius: 25px;\n  border-radius: 25px;\n  border: 2px solid rgb(0, 0, 0);\n  margin-left:15px;\n  }\n\nh2{\ncolor: rgb(146, 7, 7);\n}\n\nhr{\ncolor: rgb(146, 7, 7);\n}\n\n.col-md-6.warning-message{\nwidth: 700px;\n}\n\n.featurette-heading{\ncolor:rgb(219, 76, 9)\n}\n\nh1.text-center{\ncolor: rgb(255, 0, 34);\nmargin-top:6%;\n}\n\n.title{\ncolor: rgb(255, 0, 34);\n}\n\n.lead{\nfont-weight: 400;\n}\n\n.img-fluid{\n  max-width: 100%;\n  height: auto;\n  min-width:10%;\n  border-radius: 25px;\n  border: 2px solid rgb(0, 0, 0);\n}\n\na{\n  color: rgb(255, 0, 34);\n}\n\n.italic{\n  font-style:italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvYW5ndWxhci9hbmd1bGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQyxjQUFjO0NBQ2I7O0FBRUQ7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixpQkFBaUI7R0FDaEI7O0FBRUg7QUFDQSxzQkFBc0I7Q0FDckI7O0FBRUQ7QUFDQSxzQkFBc0I7Q0FDckI7O0FBQ0Q7QUFDQSxhQUFhO0NBQ1o7O0FBQ0Q7QUFDQSxxQkFBcUI7Q0FDcEI7O0FBRUQ7QUFDQSx1QkFBdUI7QUFDdkIsY0FBYztDQUNiOztBQUVEO0FBQ0EsdUJBQXVCO0NBQ3RCOztBQUVEO0FBQ0EsaUJBQWlCO0NBQ2hCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtDQUNoQzs7QUFDRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FuZ3VsYXIvYW5ndWxhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZmlsaW1hZ2V7XG5ib3JkZXItcmFkaXVzOiAyNXB4O1xuYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMCwgMzQpO1xuaGVpZ2h0OiAyNTBweDtcbn1cblxuLm90aGVyaW1hZ2V7XG5cbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgbWluLXdpZHRoOjEwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tbGVmdDoxNXB4O1xuICB9XG5cbmgye1xuY29sb3I6IHJnYigxNDYsIDcsIDcpO1xufVxuXG5ocntcbmNvbG9yOiByZ2IoMTQ2LCA3LCA3KTtcbn1cbi5jb2wtbWQtNi53YXJuaW5nLW1lc3NhZ2V7XG53aWR0aDogNzAwcHg7XG59XG4uZmVhdHVyZXR0ZS1oZWFkaW5ne1xuY29sb3I6cmdiKDIxOSwgNzYsIDkpXG59XG5cbmgxLnRleHQtY2VudGVye1xuY29sb3I6IHJnYigyNTUsIDAsIDM0KTtcbm1hcmdpbi10b3A6NiU7XG59XG5cbi50aXRsZXtcbmNvbG9yOiByZ2IoMjU1LCAwLCAzNCk7XG59XG5cbi5sZWFke1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pbWctZmx1aWR7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6MTAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5he1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMzQpO1xufVxuLml0YWxpY3tcbiAgZm9udC1zdHlsZTppdGFsaWM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/articles/angular/angular.component.html":
/*!*********************************************************!*\
  !*** ./src/app/articles/angular/angular.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n      <!-- START THE FEATURETTES -->\n      <hr>\n          <div class=\"row featurette\">\n            <div class=\"col-md-7\">\n              <h1 class=\"title\">Angular presentation</h1>\n                <p class=\"lead\">\n                  Angular is a nodeJS framework that helps you developing SPA\n                  (Single Page Application). It&rsquo;s one of the three most used framework\n                  in 2018, with React and VueJS. <br/>  In this tutorial I will explain:\n                </p>\n                <ul>\n                  <li><p class=\"lead\">What is a SPA</p></li>\n                  <li><p class=\"lead\">Introduction to Angular Components</p></li>\n                  <li><p class=\"lead\">How to create your first Angular App</p></li>\n                </ul>\n            </div>\n              <div class=\"col-md-5\">\n                <img class=\"profilimage\" src=\"/assets/images/Articles/angular/images/angular.png\" alt=\"Angular logo\">\n              </div>\n          </div>\n      <h1 class=\"text-center\">Explanation of what a SPA is : </h1>\n      <br>\n      <p class=\"lead\">A Single Page Application is a web application using a single page to navigate throughout\n         the application. A SPA avoids the reloading of the browser page for each action of the user,\n          would it be wholly or partially. <br>\n          Angular uses the <a href=\"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\">Model-View-Controller</a> architectural pattern.\n        </p>\n          <br>\n        <div class=\"text-center\">\n          <img  class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/MVC.png\" alt=\"MVC\">\n          <br><br>\n          <h6>source: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller</h6>\n        </div>\n        <br>\n        <p class=\"lead\">\n        The <strong>View</strong> is the structure of the graphic interface that is shown\n        to the user. It’s updated when the <strong>Model</strong> is modified.\n        The <strong>Model</strong> is the module that contains the data and logic of your application.\n        A modification of the <strong>Model's</strong> data results in an update of the <strong>View</strong>.\n        The <strong>Controller</strong> is the module that treats what the user does and modifies the <strong>Model’s</strong>\n        data consequently.\n        </p>\n        <br><br>\n\n      <div class=\"col-xs-1 text-center\">\n          <strong>Examples of SPA that use Angular:</strong>\n          <br><br>\n      <img  class=\"otherimage\"src=\"/assets/images/Articles/angular/images/gmail.png\" alt=\"gmail\">\n      <img class=\"otherimage\" src=\"/assets/images/Articles/angular/images/YouTube-TV.png\" alt=\"youtubeTV\">\n      <img class=\"otherimage\" src=\"/assets/images/Articles/angular/images/office365.png\" alt=\"youtubeTV\">\n    </div>\n      <br>\n      <h1 class=\"text-center\">Angular Components:</h1>\n      <br>\n      <p class=\"lead\">A component in angular is an object that contains his own part of the application code.\n        It allows you to divide your application in several “blocks” that can be linked with each others.\n\n      <br>\n      <div class=\"text-center\">\n      <img class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/components_interaction.png\" alt=\"Interaction components\">\n      <br><br>\n      <h6>source: https://docs.angularjs.org/guide/component-router</h6>\n\n    </div>\n    <br>\n     <p class=\"lead\">Each component has its own data, distributed in 4 files:</p>\n     <div class=\"text-center\">\n     <img class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/component_structure.png\" alt=\"component_structure\">\n    </div>\n    <br><br>\n     <ul>\n        <li><p class=\"lead\">components.css file that contains the own css of the component</p></li>\n        <li><p class=\"lead\">component.html file that contains the own HTML of the component</p></li>\n        <li><p class=\"lead\">component.spec.ts file are for unit used for the test of components</p></li>\n        <li><p class=\"lead\">component.ts file that allows you to use variables and export some class specific to the component</p></li>\n    </ul>\n\n      <h1 class=\"text-center\">How to create your first Angular App :</h1>\n      <br><br>\n      <div class=\"lead\">\n          <ol>\n            <li>Install Node</li>\n            <li>Install Angular</li>\n            <li>Create your first application</li>\n          </ol>\n           <p class=\"lead\">Angular is a framework of NodeJs, so you need to Install NodeJs in order to use Angular.<br>\n              Go to this Link <a href=\"https://nodejs.org/en\">https://nodejs.org/en</a> and download NodeJs. <br>\n              Install It (you may have your own preferences, so I let you manage the installation process as you desire).\n              Now open the Node.js.Command prompt that has been installed. You can find it right in your search Bar.<br>\n            </p>\n            <div class=\"text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/nodejscommandprompt.png\" alt=\"NodeJs Command Prompt\">\n            </div>\n\n            <p class=\"lead\">\n              From now on you need to Install the latest version of Npm.\n              Npm is a package manager for javascript developers. It’s the world largest software registry. We will need it in order to install and update Angular’s features.\n              Use the command : </p>\n              <p class=\"italic\">- npm install npm@latest -g</p>\n               <br>\n               <p class=\"lead\">\n               You can go to Npm official website if you’re willing to discover more about it : <a>https://www.npmjs.com</a>\n               <br>\n               Install the angular Cli with </p>\n               <p class=\"italic\">- npm install -g @angular/cli</p>\n               <br>\n\n               <p class=\"lead\">\n               Now you have everything needed to create your first app.\n               <br>\n               Go to the folder you want to create your angular project in with the cd command: cd [the path to your folder]. and follow these 3 steps:\n              </p>\n              <ol>\n                  <li>-\tCreate the application with the command<p class=\"italic\"> ng new [your app name]</p> This command entirely creates an application</li>\n                    <p>It may take some time </p>\n                   <img class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/ng_new_working.png\" alt=\"NodeJs Command Prompt\">\n                  <br><br>\n                  <li>-\tGo to the folder of the application you just created with the command : <p class=\"italic\"> cd [your app name]</p></li>\n                  <li>-\tLaunch your app with ng serve --open (this command launch a local web server that shows your application in your default browser)</li>\n                </ol>\n                <p class=\"lead\">\n                  You can now go check your app on the default url <strong>http://localhost:4200</strong> :\n                  <br><br>\n                  <img class=\"img-fluid\" src=\"/assets/images/Articles/angular/images/localbrowser.PNG\" alt=\"localbrowser\">\n\n                </p>\n          </div>\n"

/***/ }),

/***/ "./src/app/articles/angular/angular.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/articles/angular/angular.component.ts ***!
  \*******************************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
        this.image = './images/MVC.jpg';
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/articles/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/articles/angular/angular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/articles/firebase/firebase.component.css":
/*!**********************************************************!*\
  !*** ./src/app/articles/firebase/firebase.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  margin-top: 25px;\n  margin-bottom: 2;\n  background-color: #fff;\n  margin-right: 2%;\n  margin-left: 2%;\n  border-radius: 7px;\n}\n.profilimage{\nborder-radius: 25px;\nborder: 2px solid rgb(219, 125, 2);\nheight: 250px;\n}\nh2{\ncolor: rgb(146, 93, 7);\n}\nhr{\ncolor: rgb(146, 7, 7);\n}\n.col-md-6.warning-message{\nwidth: 700px;\n}\n.featurette-heading{\ncolor:rgb(219, 76, 9)\n}\n.text-muted{\ncolor:#000 !important\n}\n.title{\nalign-content: center;\ncolor:rgb(248, 170, 0)\n}\n.lead{\nfont-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvZmlyZWJhc2UvZmlyZWJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7QUFDQSxvQkFBb0I7QUFDcEIsbUNBQW1DO0FBQ25DLGNBQWM7Q0FDYjtBQUVEO0FBQ0EsdUJBQXVCO0NBQ3RCO0FBRUQ7QUFDQSxzQkFBc0I7Q0FDckI7QUFDRDtBQUNBLGFBQWE7Q0FDWjtBQUNEO0FBQ0EscUJBQXFCO0NBQ3BCO0FBQ0Q7QUFDQSxxQkFBcUI7Q0FDcEI7QUFDRDtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7Q0FDckI7QUFFRDtBQUNBLGlCQUFpQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2ZpcmViYXNlL2ZpcmViYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnByb2ZpbGltYWdle1xuYm9yZGVyLXJhZGl1czogMjVweDtcbmJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTksIDEyNSwgMik7XG5oZWlnaHQ6IDI1MHB4O1xufVxuXG5oMntcbmNvbG9yOiByZ2IoMTQ2LCA5MywgNyk7XG59XG5cbmhye1xuY29sb3I6IHJnYigxNDYsIDcsIDcpO1xufVxuLmNvbC1tZC02Lndhcm5pbmctbWVzc2FnZXtcbndpZHRoOiA3MDBweDtcbn1cbi5mZWF0dXJldHRlLWhlYWRpbmd7XG5jb2xvcjpyZ2IoMjE5LCA3NiwgOSlcbn1cbi50ZXh0LW11dGVke1xuY29sb3I6IzAwMCAhaW1wb3J0YW50XG59XG4udGl0bGV7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG5jb2xvcjpyZ2IoMjQ4LCAxNzAsIDApXG59XG5cbi5sZWFke1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/articles/firebase/firebase.component.html":
/*!***********************************************************!*\
  !*** ./src/app/articles/firebase/firebase.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n    <div id=\"page\" class=\"page\">\n        <!-- Container -->\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <!-- START THE FEATURETTES -->\n\n                <hr class=\"featurette-divider\">\n\n                <div class=\"row featurette\">\n                    <div class=\"col-md-7\">\n                        <h1 class=\"title\">FireBase</h1>\n                        <p class=\"lead\">\n                          FireBase is a Hosting service provided by Google whis is meant to be used for Web and mobile application's hosting.\n                        </p>\n\n\n                    </div>\n                    <div class=\"col-md-5\">\n                        <img class=\"profilimage\" src=\"/assets/images/Articles/firebase/images/firebase.png\" alt=\"Damien NOEL\">\n                    </div>\n                </div>\n\n                <hr class=\"featurette-divider\">\n\n\n\n                <hr class=\"featurette-divider\">\n\n                <!-- /END THE FEATURETTES -->\n\n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/articles/firebase/firebase.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/articles/firebase/firebase.component.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseComponent", function() { return FirebaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirebaseComponent = /** @class */ (function () {
    function FirebaseComponent() {
    }
    FirebaseComponent.prototype.ngOnInit = function () {
    };
    FirebaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-firebase',
            template: __webpack_require__(/*! ./firebase.component.html */ "./src/app/articles/firebase/firebase.component.html"),
            styles: [__webpack_require__(/*! ./firebase.component.css */ "./src/app/articles/firebase/firebase.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseComponent);
    return FirebaseComponent;
}());



/***/ }),

/***/ "./src/app/articles/gitkraken/gitkraken.component.css":
/*!************************************************************!*\
  !*** ./src/app/articles/gitkraken/gitkraken.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n    margin-top: 25px;\r\n    margin-bottom: 2;\r\n    background-color: #fff;\r\n    margin-right: 2%;\r\n    margin-left: 2%;\r\n    border-radius: 7px;\r\n  }\r\n  .profilimage{\r\n  border-radius: 25px;\r\n  border: 2px solid rgb(64, 114, 106);\r\n  height: 250px;\r\n  }\r\n  h2{\r\n  color: rgb(146, 93, 7);\r\n  }\r\n  hr{\r\n  color: rgb(146, 7, 7);\r\n  }\r\n  .col-md-6.warning-message{\r\n  width: 700px;\r\n  }\r\n  .featurette-heading{\r\n  color:rgb(219, 76, 9)\r\n  }\r\n  .text-muted{\r\n  color:#000 !important\r\n  }\r\n  .title{\r\n  align-content: center;\r\n  color:rgb(35, 134, 118);\r\n  }\r\n  .lead{\r\n  font-weight: 400;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvZ2l0a3Jha2VuL2dpdGtyYWtlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7RUFDRDtFQUNBLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsY0FBYztHQUNiO0VBRUQ7RUFDQSx1QkFBdUI7R0FDdEI7RUFFRDtFQUNBLHNCQUFzQjtHQUNyQjtFQUNEO0VBQ0EsYUFBYTtHQUNaO0VBQ0Q7RUFDQSxxQkFBcUI7R0FDcEI7RUFDRDtFQUNBLHFCQUFxQjtHQUNwQjtFQUNEO0VBQ0Esc0JBQXNCO0VBQ3RCLHdCQUF3QjtHQUN2QjtFQUVEO0VBQ0EsaUJBQWlCO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvZ2l0a3Jha2VuL2dpdGtyYWtlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbiAgLnByb2ZpbGltYWdle1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY0LCAxMTQsIDEwNik7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgY29sb3I6IHJnYigxNDYsIDkzLCA3KTtcclxuICB9XHJcbiAgXHJcbiAgaHJ7XHJcbiAgY29sb3I6IHJnYigxNDYsIDcsIDcpO1xyXG4gIH1cclxuICAuY29sLW1kLTYud2FybmluZy1tZXNzYWdle1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICB9XHJcbiAgLmZlYXR1cmV0dGUtaGVhZGluZ3tcclxuICBjb2xvcjpyZ2IoMjE5LCA3NiwgOSlcclxuICB9XHJcbiAgLnRleHQtbXV0ZWR7XHJcbiAgY29sb3I6IzAwMCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6cmdiKDM1LCAxMzQsIDExOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWFke1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/articles/gitkraken/gitkraken.component.html":
/*!*************************************************************!*\
  !*** ./src/app/articles/gitkraken/gitkraken.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div id=\"page\" class=\"page\">\n      <!-- Container -->\n      <div class=\"container\">\n          <div class=\"row\">\n\n              <!-- START THE FEATURETTES -->\n\n              <hr class=\"featurette-divider\">\n\n              <div class=\"row featurette\">\n                  <div class=\"col-md-7\">\n                      <h1 class=\"title\">GitKraken</h1>\n                      <p class=\"lead\">\n                        GitKraken is a GUI (Graphical User Interface) manager that makes git projects's management a lot easier .\n                      </p>\n\n\n                  </div>\n                  <div class=\"col-md-5\">\n                      <img class=\"profilimage\" src=\"/assets/images/Articles/gitkraken/images/gitkraken.png\" alt=\"GitKraken\">\n                  </div>\n              </div>\n\n              <hr class=\"featurette-divider\">\n\n\n\n              <hr class=\"featurette-divider\">\n\n              <!-- /END THE FEATURETTES -->\n\n          </div>\n      </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/articles/gitkraken/gitkraken.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/articles/gitkraken/gitkraken.component.ts ***!
  \***********************************************************/
/*! exports provided: GitkrakenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitkrakenComponent", function() { return GitkrakenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GitkrakenComponent = /** @class */ (function () {
    function GitkrakenComponent() {
    }
    GitkrakenComponent.prototype.ngOnInit = function () {
    };
    GitkrakenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gitkraken',
            template: __webpack_require__(/*! ./gitkraken.component.html */ "./src/app/articles/gitkraken/gitkraken.component.html"),
            styles: [__webpack_require__(/*! ./gitkraken.component.css */ "./src/app/articles/gitkraken/gitkraken.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitkrakenComponent);
    return GitkrakenComponent;
}());



/***/ }),

/***/ "./src/app/articles/jenkins/jenkins.component.css":
/*!********************************************************!*\
  !*** ./src/app/articles/jenkins/jenkins.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  margin-top: 25px;\n  margin-bottom: 2;\n  background-color: #fff;\n  margin-right: 2%;\n  margin-left: 2%;\n  border-radius: 7px;\n}\n.profilimage{\nborder-radius: 25px;\nborder: 2px solid rgb(12, 74, 90);\nheight: 250px;\n}\nh2{\ncolor: rgb(146, 7, 7);\n}\nhr{\ncolor: rgb(146, 7, 7);\n}\n.col-md-6.warning-message{\nwidth: 700px;\n}\n.featurette-heading{\ncolor:rgb(219, 76, 9)\n}\n.text-muted{\ncolor:#000 !important\n}\n.title{\nalign-content: center;\ncolor: rgb(12, 74, 90);\n}\n.lead{\nfont-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvamVua2lucy9qZW5raW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0Esb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQyxjQUFjO0NBQ2I7QUFFRDtBQUNBLHNCQUFzQjtDQUNyQjtBQUVEO0FBQ0Esc0JBQXNCO0NBQ3JCO0FBQ0Q7QUFDQSxhQUFhO0NBQ1o7QUFDRDtBQUNBLHFCQUFxQjtDQUNwQjtBQUNEO0FBQ0EscUJBQXFCO0NBQ3BCO0FBQ0Q7QUFDQSxzQkFBc0I7QUFDdEIsdUJBQXVCO0NBQ3RCO0FBRUQ7QUFDQSxpQkFBaUI7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlcy9qZW5raW5zL2plbmtpbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4ucHJvZmlsaW1hZ2V7XG5ib3JkZXItcmFkaXVzOiAyNXB4O1xuYm9yZGVyOiAycHggc29saWQgcmdiKDEyLCA3NCwgOTApO1xuaGVpZ2h0OiAyNTBweDtcbn1cblxuaDJ7XG5jb2xvcjogcmdiKDE0NiwgNywgNyk7XG59XG5cbmhye1xuY29sb3I6IHJnYigxNDYsIDcsIDcpO1xufVxuLmNvbC1tZC02Lndhcm5pbmctbWVzc2FnZXtcbndpZHRoOiA3MDBweDtcbn1cbi5mZWF0dXJldHRlLWhlYWRpbmd7XG5jb2xvcjpyZ2IoMjE5LCA3NiwgOSlcbn1cbi50ZXh0LW11dGVke1xuY29sb3I6IzAwMCAhaW1wb3J0YW50XG59XG4udGl0bGV7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG5jb2xvcjogcmdiKDEyLCA3NCwgOTApO1xufVxuXG4ubGVhZHtcbmZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/articles/jenkins/jenkins.component.html":
/*!*********************************************************!*\
  !*** ./src/app/articles/jenkins/jenkins.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div id=\"page\" class=\"page\">\n    <!-- Container -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- START THE FEATURETTES -->\n        <hr class=\"featurette-divider\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7\">\n            <h1 class=\"title\">Jenkins presentation</h1>\n            <p class=\"lead\">\n              Jenkins is a self-contained, open source automation server which can be used to automate\n              all sorts of tasks related to building, testing, and delivering or deploying software.\n            </p>\n          </div>\n          <div class=\"col-md-5\">\n            <img class=\"profilimage\" src=\"/assets/images/Articles/jenkins/images/jenkins.png\" alt=\"jenkinsPicture\">\n          </div>\n        </div>\n        <hr class=\"featurette-divider\">\n        <hr class=\"featurette-divider\">\n        <!-- /END THE FEATURETTES -->\n      </div>\n    </div>\n  </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/articles/jenkins/jenkins.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/articles/jenkins/jenkins.component.ts ***!
  \*******************************************************/
/*! exports provided: JenkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JenkinsComponent", function() { return JenkinsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JenkinsComponent = /** @class */ (function () {
    function JenkinsComponent() {
    }
    JenkinsComponent.prototype.ngOnInit = function () {
    };
    JenkinsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jenkins',
            template: __webpack_require__(/*! ./jenkins.component.html */ "./src/app/articles/jenkins/jenkins.component.html"),
            styles: [__webpack_require__(/*! ./jenkins.component.css */ "./src/app/articles/jenkins/jenkins.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JenkinsComponent);
    return JenkinsComponent;
}());



/***/ }),

/***/ "./src/app/articles/vagrant/vagrant.component.css":
/*!********************************************************!*\
  !*** ./src/app/articles/vagrant/vagrant.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  margin-top: 25px;\n  margin-bottom: 2;\n  background-color: #fff;\n  margin-right: 2%;\n  margin-left: 2%;\n  border-radius: 7px;\n}\n.profilimage{\nborder-radius: 25px;\nborder: 2px solid rgb(0, 4, 255);\nheight: 250px;\n}\nh2{\ncolor: rgb(146, 7, 7);\n}\nhr{\ncolor: rgb(146, 7, 7);\n}\n.col-md-6.warning-message{\nwidth: 700px;\n}\n.featurette-heading{\ncolor:rgb(219, 76, 9)\n}\n.text-muted{\ncolor:#000 !important\n}\n.title{\nalign-content: center;\ncolor: rgb(4, 0, 255)\n}\n.lead{\nfont-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvdmFncmFudC92YWdyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0Esb0JBQW9CO0FBQ3BCLGlDQUFpQztBQUNqQyxjQUFjO0NBQ2I7QUFFRDtBQUNBLHNCQUFzQjtDQUNyQjtBQUVEO0FBQ0Esc0JBQXNCO0NBQ3JCO0FBQ0Q7QUFDQSxhQUFhO0NBQ1o7QUFDRDtBQUNBLHFCQUFxQjtDQUNwQjtBQUNEO0FBQ0EscUJBQXFCO0NBQ3BCO0FBQ0Q7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0NBQ3BCO0FBRUQ7QUFDQSxpQkFBaUI7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlcy92YWdyYW50L3ZhZ3JhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4ucHJvZmlsaW1hZ2V7XG5ib3JkZXItcmFkaXVzOiAyNXB4O1xuYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDQsIDI1NSk7XG5oZWlnaHQ6IDI1MHB4O1xufVxuXG5oMntcbmNvbG9yOiByZ2IoMTQ2LCA3LCA3KTtcbn1cblxuaHJ7XG5jb2xvcjogcmdiKDE0NiwgNywgNyk7XG59XG4uY29sLW1kLTYud2FybmluZy1tZXNzYWdle1xud2lkdGg6IDcwMHB4O1xufVxuLmZlYXR1cmV0dGUtaGVhZGluZ3tcbmNvbG9yOnJnYigyMTksIDc2LCA5KVxufVxuLnRleHQtbXV0ZWR7XG5jb2xvcjojMDAwICFpbXBvcnRhbnRcbn1cbi50aXRsZXtcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbmNvbG9yOiByZ2IoNCwgMCwgMjU1KVxufVxuXG4ubGVhZHtcbmZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/articles/vagrant/vagrant.component.html":
/*!*********************************************************!*\
  !*** ./src/app/articles/vagrant/vagrant.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div id=\"page\" class=\"page\">\n    <!-- Container -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- START THE FEATURETTES -->\n        <hr class=\"featurette-divider\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7\">\n            <h1 class=\"title\">Angular presentation.</h1>\n            <p class=\"lead\">\n              Vagrant is a tool for building and managing virtual machine environments in a single workflow.\n              With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time,\n              increases production parity, and makes the \"works on my machine\" excuse a relic of the past.\n            </p>\n          </div>\n          <div class=\"col-md-5\">\n            <img class=\"profilimage\" src=\"/assets/images/Articles/vagrant/images/vagrant.png\" alt=\"VagrantPicture\">\n          </div>\n        </div>\n        <hr class=\"featurette-divider\">\n        <hr class=\"featurette-divider\">\n        <!-- /END THE FEATURETTES -->\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/articles/vagrant/vagrant.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/articles/vagrant/vagrant.component.ts ***!
  \*******************************************************/
/*! exports provided: VagrantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VagrantComponent", function() { return VagrantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VagrantComponent = /** @class */ (function () {
    function VagrantComponent() {
    }
    VagrantComponent.prototype.ngOnInit = function () {
    };
    VagrantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vagrant',
            template: __webpack_require__(/*! ./vagrant.component.html */ "./src/app/articles/vagrant/vagrant.component.html"),
            styles: [__webpack_require__(/*! ./vagrant.component.css */ "./src/app/articles/vagrant/vagrant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VagrantComponent);
    return VagrantComponent;
}());



/***/ }),

/***/ "./src/app/elements/articlelist/articlelist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/elements/articlelist/articlelist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.img-fluid {\n  margin-right:25px;\n}\n\n.card{\n  height: 200px;\n  width: 150px;\n\n\n}\n\n.bg-primary {\n  background-color: rgba(14, 5, 1, 0) !important;\n}\n\n.panel.panel-default{\n  border: 7px solid rgb(179, 86, 44);\n  border-radius: 25px;\n}\n\n.container{\n  white-space:nowrap;\n}\n\n.list{\n  display:inline-flex;\n  flex-wrap: wrap;\n}\n\n.mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n    margin-left: 40px;\n    transition-delay:1s;\n}\n\n.frontside {\n    position: relative;\n    z-index: 2;\n    margin-bottom: 30px;\n}\n\n.frontside .card{\n    min-height: 312px;\n}\n\n.frontside .card .card-title{\n    color: #f13800 !important;\n}\n\n.frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvYXJ0aWNsZWxpc3QvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTs7O0NBR2Q7O0FBQ0Q7RUFDRSwrQ0FBK0M7Q0FDaEQ7O0FBQ0Q7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFHRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvYXJ0aWNsZWxpc3QvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltZy1mbHVpZCB7XG4gIG1hcmdpbi1yaWdodDoyNXB4O1xufVxuXG4uY2FyZHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuXG5cbn1cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgNSwgMSwgMCkgIWltcG9ydGFudDtcbn1cbi5wYW5lbC5wYW5lbC1kZWZhdWx0e1xuICBib3JkZXI6IDdweCBzb2xpZCByZ2IoMTc5LCA4NiwgNDQpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmNvbnRhaW5lcntcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xufVxuXG4ubGlzdHtcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubWFpbmZsaXAge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zaXRpb246IDFzO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OjFzO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDMxMnB4O1xufVxuXG5cbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICNmMTM4MDAgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/articlelist/articlelist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/articlelist/articlelist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <div *ngFor=\"let article of articles\" >\n    <div class=\"col\">\n      <div class=\"image-flip\">\n        <div class=\"mainflip\">\n          <div class=\"frontside\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <a routerLink=\"{{article.title}}\">\n                  <img src=\"/assets/images/Articles/{{article.title}}/images/{{article.title}}.png\" alt=\"{{article.title}}\" />\n                </a>\n                <h4 class=\"card-title\">{{article.title}}</h4>\n                <p>{{article.text}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/articlelist/articlelist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/articlelist/articlelist.component.ts ***!
  \***************************************************************/
/*! exports provided: ArticlelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlelistComponent", function() { return ArticlelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock-articles */ "./src/app/mock-articles.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlelistComponent = /** @class */ (function () {
    function ArticlelistComponent() {
        this.articles = _mock_articles__WEBPACK_IMPORTED_MODULE_1__["ARTICLES"];
    }
    ArticlelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articlelist',
            template: __webpack_require__(/*! ./articlelist.component.html */ "./src/app/elements/articlelist/articlelist.component.html"),
            styles: [__webpack_require__(/*! ./articlelist.component.css */ "./src/app/elements/articlelist/articlelist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticlelistComponent);
    return ArticlelistComponent;
}());



/***/ }),

/***/ "./src/app/elements/navbar/navbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/navbar/navbar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand  {\n  color: rgb(239, 239, 243);\n  font-size:200%;\n}\n.bg-primary {\n\n  background-color: #000000e5 !important;\n\n}\n.navbar-light .navbar-brand:focus,\n.navbar-light .navbar-brand:hover {\n\n  color: rgb(255, 0, 0);\n\n}\n.navbar-toggler {\n  background-color: #fff;\n}\n.article{\n  color: rgba(0, 0, 0, 0.959);\n}\n.navbar.navbar-expand-lg.navbar-light.bg-primary{\n  position: fixed; /* Set the navbar to fixed position */\n  top: 0; /* Position the navbar at the top of the page */\n  width:100%;\n  z-index: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7QUFDRDs7RUFFRSx1Q0FBdUM7O0NBRXhDO0FBQ0Q7OztFQUdFLHNCQUFzQjs7Q0FFdkI7QUFDRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCO0FBRUQ7RUFDRSxnQkFBZ0IsQ0FBQyxzQ0FBc0M7RUFDdkQsT0FBTyxDQUFDLGdEQUFnRDtFQUN4RCxXQUFXO0VBQ1gsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCAge1xuICBjb2xvcjogcmdiKDIzOSwgMjM5LCAyNDMpO1xuICBmb250LXNpemU6MjAwJTtcbn1cbi5iZy1wcmltYXJ5IHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZTUgIWltcG9ydGFudDtcblxufVxuLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmZvY3VzLFxuLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcblxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG5cbn1cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hcnRpY2xle1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk1OSk7XG59XG5cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctcHJpbWFyeXtcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTZXQgdGhlIG5hdmJhciB0byBmaXhlZCBwb3NpdGlvbiAqL1xuICB0b3A6IDA7IC8qIFBvc2l0aW9uIHRoZSBuYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/elements/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\" data-spy=\"affix\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n          <a class=\"navbar-brand\" routerLink=\"home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand\" routerLink=\"cv\">CV</a>\n      </li>\n\n      <li class=\"nav-item active\">\n        <a class=\"navbar-brand\" routerLink=\"work\">Work</a>\n    <!--\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"navbar-brand\" routerLink=\"e6\">E6</a>\n  </li>\n  <li class=\"nav-item dropdown\">\n    <a class=\"navbar-brand\" href=\"watch\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Watch\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <li *ngFor=\"let watch of watch\" value=\"  {{watch}}\">\n        <a class=\"navbar-brand article\" routerLink=\"{{watch}} watch\">{{watch}}</a>\n      </li>\n    </div>\n  </li>\n-->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/elements/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.appName = 'Portfolio';
        this.watch = ['Technological', 'Juridical'];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/elements/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/elements/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/mock-articles.ts":
/*!**********************************!*\
  !*** ./src/app/mock-articles.ts ***!
  \**********************************/
/*! exports provided: ARTICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES", function() { return ARTICLES; });
var ARTICLES = [
    { title: 'angular', text: 'How to create your first angular app' },
    { title: 'firebase', text: 'Planned' },
    { title: 'gitkraken', text: 'Planned' },
];


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

module.exports = __webpack_require__(/*! C:\website\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map