/**Created by the LayaAirIDE*/
module view {
	import Box = Laya.Box;
	import Lable = Laya.Label;

	export class Room extends ui.RoomUI {
		constructor() {
			super();
			this.list.itemRender = RoomPlayerItem
			this.list.repeatY = 10

		}
	}

	class RoomPlayerItem extends Box {

		private lableId : Lable

		constructor() {
			super()
			//左右间距100，上下间距100+300 =400，剩下的分10份
			this.size(Laya.stage.width - 200, (Laya.stage.height - 400) / 10);
			this.lableId = new Lable("id")
			this.lableId.color = "#ffffff"

			this.addChild(this.lableId);

		}
	}
}