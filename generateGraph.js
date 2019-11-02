go.Shape.defineFigureGenerator("RoundedTopRectangle", function(shape, w, h) {
    // this figure takes one parameter, the size of the corner
    var p1 = 5;  // default corner size
    if (shape !== null) {
        var param1 = shape.parameter1;
        if (!isNaN(param1) && param1 >= 0) p1 = param1;  // can't be negative or NaN
    }
    p1 = Math.min(p1, w / 2);
    p1 = Math.min(p1, h / 2);  // limit by whole height or by half height?
    var geo = new go.Geometry();
    // a single figure consisting of straight lines and quarter-circle arcs
    geo.add(new go.PathFigure(0, p1)
        .add(new go.PathSegment(go.PathSegment.Arc, 180, 90, p1, p1, p1, p1))
        .add(new go.PathSegment(go.PathSegment.Line, w - p1, 0))
        .add(new go.PathSegment(go.PathSegment.Arc, 270, 90, w - p1, p1, p1, p1))
        .add(new go.PathSegment(go.PathSegment.Line, w, h))
        .add(new go.PathSegment(go.PathSegment.Line, 0, h).close()));
    // don't intersect with two top corners when used in an "Auto" Panel
    geo.spot1 = new go.Spot(0, 0, 0.3 * p1, 0.3 * p1);
    geo.spot2 = new go.Spot(1, 1, -0.3 * p1, 0);
    return geo;
});

go.Shape.defineFigureGenerator("RoundedBottomRectangle", function(shape, w, h) {
    // this figure takes one parameter, the size of the corner
    var p1 = 5;  // default corner size
    if (shape !== null) {
        var param1 = shape.parameter1;
        if (!isNaN(param1) && param1 >= 0) p1 = param1;  // can't be negative or NaN
    }
    p1 = Math.min(p1, w / 2);
    p1 = Math.min(p1, h / 2);  // limit by whole height or by half height?
    var geo = new go.Geometry();
    // a single figure consisting of straight lines and quarter-circle arcs
    geo.add(new go.PathFigure(0, 0)
        .add(new go.PathSegment(go.PathSegment.Line, w, 0))
        .add(new go.PathSegment(go.PathSegment.Line, w, h - p1))
        .add(new go.PathSegment(go.PathSegment.Arc, 0, 90, w - p1, h - p1, p1, p1))
        .add(new go.PathSegment(go.PathSegment.Line, p1, h))
        .add(new go.PathSegment(go.PathSegment.Arc, 90, 90, p1, h - p1, p1, p1).close()));
    // don't intersect with two bottom corners when used in an "Auto" Panel
    geo.spot1 = new go.Spot(0, 0, 0.3 * p1, 0);
    geo.spot2 = new go.Spot(1, 1, -0.3 * p1, -0.3 * p1);
    return geo;
});


function init() {
    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    myDiagram =
        $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
            {
                initialAutoScale: go.Diagram.UniformToFill,
                layout: $(go.LayeredDigraphLayout)
                // other Layout properties are set by the layout function, defined below
            });

    // define the Node template
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            { locationSpot: go.Spot.Center, resizable: true },
            $(go.Shape, "RoundedRectangle", {
                fill: "#004D9F",
                stroke: "#004D9F"
            }),
            $(go.Panel, "Vertical",
                $(go.Panel, "Auto",
                    $(go.TextBlock, {margin: 10, stroke:"#fff"}, new go.Binding("text", "text")),
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedBottomRectangle", {fill: "#fff", stroke:"#004D9F", strokeWidth:1}),
                    $(go.TextBlock, {margin: 10}, new go.Binding("text", "description")),
                )
            )
        );


    // define the Link template to be minimal
    myDiagram.linkTemplate =$(go.Link,
        { routing: go.Link.Orthogonal, corner: 10 },
        $(go.Shape, { strokeWidth: 3, stroke: "#555" }));

    // generate a tree with the default values
    generateDigraph();
}


function generateDigraph() {
    myDiagram.startTransaction("generateDigraph");
    generateNodes();
    generateLinks();
    layout();
    myDiagram.commitTransaction("generateDigraph");
}

// Creates a random number of randomly colored nodes.
function generateNodes() {
    const data = courses
    data.forEach((v)=>{
        v["key"] = v["text"];
    });
    myDiagram.model.nodeDataArray = data
}

// Create some link data
function generateLinks() {
    const pair = valuePairs
    let result = [];
    pair.forEach((v)=>{
        result.push({"from": v[0], "to": v[1]});
    });
    myDiagram.model.linkDataArray = result;
}

function layout() {
    let lay = myDiagram.layout;
    lay.direction = 90;
    lay.packOption = 4;
    lay.setsPortSpots = true;
}
