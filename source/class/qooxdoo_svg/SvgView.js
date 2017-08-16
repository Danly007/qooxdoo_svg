qx.Class.define("qooxdoo_svg.SvgView", {
	extend: qx.ui.container.Composite,
	construct: function() {
		this.base(arguments);
		var vbox = new qx.ui.layout.VBox();
		this.setLayout(vbox);
		this.add(this.__createView());
	},
	members: {
		__createView: function() {

			var winHeight = window.innerHeight;
            var winWidth = window.innerWidth;
            var gridLayout = new qx.ui.layout.Grid();
            var svgGrid = new qx.ui.container.Composite(gridLayout).set({
                width: winWidth,
                height: winHeight,
                minHeight: 560,
                minWidth: 800
            });
            gridLayout.setRowFlex(0, 1);
            gridLayout.setColumnFlex(0, 1);


            svgGrid.add(this.__createSvg(), {
                row: 0,
                column: 0
            });

            window.addEventListener('resize', function() {
                winWidth = window.innerWidth;
                winHeight = window.innerHeight;
                svgGrid.setWidth(Math.round(winWidth));
                svgGrid.setHeight(Math.round(winHeight));
            }, false);
            return svgGrid;
		},
		__createSvg:function(){
			var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
			var svgWidget = new svg.embed.Svg().set({
				alignY:"middle",
				alignX:"center"
			});
			var svgRoot = svgWidget.getSvg();

            var rect = new svg.shape.Rect().set({
                fill: "red",
                width: "100%",
                height: "30%"
            });

            var floorgroup = new svg.struct.Group();
            var rect1 = new svg.shape.Rect().set({
                width:100,
                height:100,
                fill:"blue"
            });

            floorgroup.add(rect1);
            
            svgRoot.add(floorgroup);

			container.add(svgWidget,{width:"100%",height:"100%"});
			return container;
		}
	}
});