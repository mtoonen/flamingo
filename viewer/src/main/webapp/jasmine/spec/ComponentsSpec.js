var contextPath = "..";
var MobileManager;
var actionBeans;
var appId = 1;
describe("Flamingo components tests", function() {
    
    actionBeans = {
        css: "mockurl"
    };
    var viewerController;
    beforeEach(function(){
        MobileManager = {
            isMobile : function(){
                return false;
            }
        };
        viewer.LayoutManager.prototype.getMapId= function(){
            return "test";
        };
        Ext.getBody = function(){
            return Ext.get("test");
        };
        viewerController = new viewer.viewercontroller.ViewerController("openlayers", "test", {
            layout:{
                autoRender: false,
                top_menu: {
                    layout: {
                        height: "100"
                    }
                },
                content_bottom: {
                    layout: {
                        height: "100"
                    }
                }
            },
            components:[{
                    openLayersMap1:{
                        className: "viewer.mapcomponents.OpenLayersMap",
                        config:{
                            div: "test",
                            hasSharedPopup: undefined,
                            isPopup:undefined,
                            regionName: "content",
                            showOnStartup : undefined
                        },
                        details:{},
                        name: "openLayersMap1"
                    }
            }]
        }, {},{});
    });
    describe("Spatial Filter tests", function() {
        var spatialFilter = null;
        beforeEach(function() {
            spatialFilter = Ext.create("viewer.components.SpatialFilter", {
                title: "SpatialFilterTitle",
                iconUrl: "",
                tooltip: "SpatialFilterTooltip",
                viewerController:viewerController,
                layers: [],
                applyDirect: false,
                div: 'test',
                multiGeometries: true,
                label: "",
                details:{
                    width: 100,
                    height: 100
                }
            });
            spyOn(viewerController, "setFilter");
            spatialFilter.setFilter("POINT(1 2)", {attributes: {}, geometryAttribute: "mockGeometryAttribute"});
        });
        describe(" inner functions",function(){
            
            it("setFilter calls viewerController.setFilter", function() {
                expect(viewerController.setFilter).toHaveBeenCalled();
            });
        });
    });
});