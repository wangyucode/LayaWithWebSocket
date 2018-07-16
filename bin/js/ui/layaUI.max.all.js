var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var RoomUI = /** @class */ (function (_super) {
        __extends(RoomUI, _super);
        function RoomUI() {
            return _super.call(this) || this;
        }
        RoomUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoomUI.uiView);
        };
        RoomUI.uiView = { "type": "View", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "var": "bg", "bgColor": "#000000", "alpha": 0.5 } }, { "type": "List", "props": { "var": "list", "top": 100, "right": 100, "left": 100, "bottom": 300 } }] };
        return RoomUI;
    }(View));
    ui.RoomUI = RoomUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map