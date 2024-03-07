import { GeometryElement } from "jsxgraph";

export interface JSXElement {
	name: string,
	element: GeometryElement
}

export interface GraphInfo {
	bounds: number[],
	keepAspectRatio: boolean,
	showNavigation: boolean,
	axis: boolean,
	elements: ElementInfo[],
}

export interface ElementInfo {
	type: string,
	def: any[],
	att: Attributes,
}

export type  Attributes = {
	name: string,
	inverse: boolean,
	chartStyle: string,
	paramArray: string,
	fillColor: string,
	highlightFillColor: string,
	strokeColor: string,
	highlightStrokeColor: string,
	fillOpacity: number,
	anchor: string | GeometryElement,
	useMathJax: boolean,
}

export enum Types {
	Arrow = "arrow",
	Boxplot = "boxplot",
	Chart = "chart",
	Cicumcircle = "circumcircle",
	Circle = "circle",
	Circumcenter = "circumcenter",
	CircumcircleArc = "circumcirclearc",
	Curve = "curve",
	CurveDifference  = "curvedifference",
	CurveIntersection = "curveintersection",
	CurveUnion = "curveunion",
	Derivaative = "derivative",
	Ellipse = "ellipse",
	Function = "functiongraph",
	Glider = "glider",
	Incenter = "incenter",
	Inequality = "inequality",
	Integral = "integral",
	Intersection = "intersection",
	Label = "label",
	Line = "line",
	Parabola = "parabola",
	Parallel = "parallel",
	Perpendicular = "perpendicular",
	Point = "point",
	Polygon = "polygon",
	PolygonalChain = "polygonalchain",
	RegularPolygon = "regularpolygon",
	Riemannsum = "riemannsum",
	Sector = "sector",
	Segment = "segment",
	Semicircle = "Semicircle",
	Slider = "slider",
	SlopeField = "slopefield",
	SlopeTriangle = "slopetriangle",
	Stepfunction = "stepfunction",
	Tangent = "tangent",
	Tapemeasure = "tapemeasure",
	Text = "text",
	VectorField = "vectorfield",
}
