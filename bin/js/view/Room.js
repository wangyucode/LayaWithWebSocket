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
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Box = Laya.Box;
    var Lable = Laya.Label;
    var Room = /** @class */ (function (_super) {
        __extends(Room, _super);
        function Room() {
            var _this = _super.call(this) || this;
            _this.list.itemRender = RoomPlayerItem;
            _this.list.repeatY = 10;
            return _this;
        }
        return Room;
    }(ui.RoomUI));
    view.Room = Room;
    var RoomPlayerItem = /** @class */ (function (_super) {
        __extends(RoomPlayerItem, _super);
        function RoomPlayerItem() {
            var _this = _super.call(this) || this;
            //左右间距100，上下间距100+300 =400，剩下的分10份
            _this.size(Laya.stage.width - 200, (Laya.stage.height - 400) / 10);
            _this.lableId = new Lable("id");
            _this.lableId.color = "#ffffff";
            _this.addChild(_this.lableId);
            return _this;
        }
        return RoomPlayerItem;
    }(Box));
})(view || (view = {}));
//# sourceMappingURL=Room.js.map