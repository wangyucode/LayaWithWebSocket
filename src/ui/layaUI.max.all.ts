
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class RoomUI extends View {
		public bg:Laya.Label;
		public list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Label","props":{"y":0,"x":0,"var":"bg","bgColor":"#000000","alpha":0.5}},{"type":"List","props":{"var":"list","top":100,"right":100,"left":100,"bottom":300}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoomUI.uiView);

        }

    }
}
