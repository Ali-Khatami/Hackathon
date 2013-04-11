(function()
{
    var $containerDiv = $("div.container:first");

    $("button.sayHelloButton:first").on("click", function(){
        F2.Events.emit("containerExampleEvent", [{foo: "bar"}]);
    });

    F2.Events.on("containerExampleAppEvent", function(){
        F2.log("App talked to container: ", arguments);
    });
    
    /**
     * Init F2
     */
    F2.init({
        containerID: 'com_markit_on_demand_building_container_workshop',
        beforeAppRender: function(app){
            
            var appRoot = '<section class="span' + app.minGridSize + '"></section>';
            
            var $lastAppRow = $containerDiv.find('div.row:last');
            
            var iColumnCount = 0;
                
            // determine how spans and offsets we have in our row
            $lastAppRow.find("section").each(function(){
                var $section = $(this);
                var arClassNames = $section.attr("class").split(" ");

                for(var i = 0, j = arClassNames.length; i < j; i++)
                {
                    var sClassName = arClassNames[i];
                    if(sClassName.indexOf("span") == 0)
                    {
                        iColumnCount += Number(sClassName.slice(4));
                        break;
                    }
                }
            });
            
            if(iColumnCount == 0 || (iColumnCount + app.minGridSize) > 12)
            {
                var $row = $('<div class="row"></div>');
                $containerDiv.append('<div class="row"></div>');
                $lastAppRow = $containerDiv.find('div.row:last')
            }
            
            return $(appRoot).appendTo($containerDiv.find('div.row:last'));
        },
        
        afterAppRender: function (app, html) {
            //app.root is `appShell` from beforeAppRender()
            return $(app.root).append(html);
        },
        UI:
        {
            Mask: 
            {
                loadingIcon: "//openf2.markitqa.com//Content/OpenF2/Images/ajax-loader.gif"
            }
        }
    });

    // tell F2 what apps you want to load and initialize
    F2.registerApps(
        [
            {
                appId: "com_openf2_examples_javascript_quote",
                description: "F2 app description",
                name: "Get Quote",
                minGridSize: 4,
                manifestUrl: "http://openf2.markitqa.com/Examples/Apps"
            },
            {
                appId: "com_openf2_examples_javascript_quote",
                description: "F2 app description",
                name: "Get Quote",
                minGridSize: 4,
                manifestUrl: "http://openf2.markitqa.com/Examples/Apps"
            },
            {
                appId: "com_openf2_examples_javascript_quote",
                description: "F2 app description",
                name: "Get Quote",
                minGridSize: 4,
                manifestUrl: "http://openf2.markitqa.com/Examples/Apps"
            },
            {
                appId: "com_openf2_examples_csharp_marketnews",
                description: "F2 app description",
                name: "Market News",
                minGridSize: 4,
                manifestUrl: "http://openf2.markitqa.com/Examples/Apps"
            },
            {
                appId: "com_openf2_examples_csharp_stocknews",
                description: "F2 app description",
                name: "Stock News",
                minGridSize: 4,
                manifestUrl: "http://openf2.markitqa.com/Examples/Apps"
            },
            {
                appId: "com_build_f2_container_example_app",
                description: "F2 app description",
                name: "Local app",
                minGridSize: 4,
                manifestUrl: "manifest.js"
            }
        ]
    );
})();