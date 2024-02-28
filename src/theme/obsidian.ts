// Constants for this theme:
const interactiveAccent = "var(--interactive-accent)",
	interactiveAccentHover = "var(--interactive-accent-hover)",
	textNormal = "var(--text-normal)",
	textMuted = "var(--text-muted)";



// @ts-ignore
JXG.themes['obsidian'] = {

	board: {
		showInfobox: false,
		showCopyright: true,
	},

	navbar: {
		strokeColor: textMuted,
		fillColor: 'none'
	},

	elements: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
		fillColor: 'none',
		highlightFillColor: 'none',
		highlightStrokeOpacity: 1
	},

	ellipse: {
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
	},


	angle: {
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
		highlightFillColor: '#aaaaaa33',
		label: {
			strokeColor: textNormal 
		}
	},

	arc: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
	},

	axis: {
		strokeColor: textNormal,
		highlightStrokeColor: textMuted,
		ticks: {
			strokeColor: textNormal,
			highlightStrokeColor: textMuted,
		},
		label: {
			strokeColor: textNormal,
			highlightStrokeColor: textMuted,
		}
	},

	boxplot: {
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
		highlightFillColor: interactiveAccentHover,
	},

	circle: {
		strokeColor: interactiveAccent,
		highlightFillColor: 'none',
		highlightStrokeColor: interactiveAccentHover,
		center: {
			fillColor: interactiveAccent,
			strokeColor: interactiveAccent,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: interactiveAccentHover
		},
		point2: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted 
		}
	},

	circumcircle: {
		strokeColor: interactiveAccent,
		highlightFillColor: 'none',
		highlightStrokeColor: interactiveAccentHover,
		center: {
			fillColor: interactiveAccent,
			strokeColor: interactiveAccent,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: interactiveAccentHover
		}
	},

	circumcirclearc: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
	},

	circumcirclesector: {
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
	},

	comb: {
		strokeColor: interactiveAccent,
	},

	conic: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
		fillColor: 'none',
		highlightFillColor: 'none'
	},

	curve: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
	},

	grid: {
		strokeColor: textMuted,
		highlightStrokeColor: textMuted,
	},

	hatch: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
	},

	incircle: {
		highlightFillColor: 'none',
		highlightStrokeColor: interactiveAccentHover,
		center: {
			fillColor: interactiveAccent,
			strokeColor: interactiveAccent,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: interactiveAccentHover
		}
	},

	inequality: {
		fillColor: interactiveAccent,
	},

	label: {
		strokeColor: textNormal,
		highlightStrokeColor: textMuted,
	},

	line: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
		point1: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted 
		},
		point2: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted
		}
	},

	normal: {
		strokeColor: interactiveAccent
	},

	parallel: {
		strokeColor: interactiveAccent
	},

	perpendicular: {
		strokeColor: interactiveAccent
	},

	perpendicularsegment: {
		strokeColor: interactiveAccent
	},

	point: {
		fillColor: interactiveAccent,
		strokeColor: textNormal,
		highlightFillColor: interactiveAccentHover,
		highlightStrokeColor: textMuted 
	},

	polygon: {
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
		vertices: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted
		},
		borders: {
			strokeColor: interactiveAccent,
			highlightStrokeColor: interactiveAccentHover,
		}
	},

	regularpolygon: {
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
		vertices: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted
		},
		borders: {
			strokeColor: interactiveAccent,
			highlightStrokeColor: interactiveAccentHover,
		}
	},

	riemannsum: {
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
	},

	sector: {
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
	},

	semicircle: {
		center: {
			fillColor: interactiveAccent,
			strokeColor: interactiveAccent,
			highlightStrokeColor: interactiveAccentHover
		}
	},

	slider: {
		fillColor: interactiveAccent,
		strokeColor: textNormal,
		highlightFillColor: interactiveAccentHover,
		highlightStrokeColor: textMuted,
		baseline: {
			strokeColor: textNormal,
			highlightStrokeColor:textMuted 
		},
		label: {
			strokeColor: textNormal,
			fillColor: textNormal,
			highlightStrokeColor: textMuted
		},
		highline: {
			strokeColor: textNormal,
			fillColor: textNormal,
			highlightStrokeColor: interactiveAccentHover
		},
		ticks: {
			strokeColor: textNormal,
			fillColor: textNormal,
		}
	},

	slopefield: {
		highlightStrokeColor: interactiveAccentHover,
	},

	tapemeasure: {
		strokeColor: interactiveAccent,
		highlightStrokeColor: interactiveAccentHover,
		point1: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted 
		},
		point2: {
			fillColor: interactiveAccent,
			strokeColor: textNormal,
			highlightFillColor: interactiveAccentHover,
			highlightStrokeColor: textMuted 
		},
		ticks: {
		}
	},

	text: {
		strokeColor: textNormal,
		highlightStrokeColor: textMuted,
	},

	tracecurve: {
		strokeColor: interactiveAccent
	},

	turtle: {
		strokeColor: interactiveAccent,
		arrow: {
			strokeColor: interactiveAccent
		}
	},

	integral: {
		color: interactiveAccent,
		strokeColor: interactiveAccent,
		fillColor: interactiveAccent,
		highlightFillColor: interactiveAccentHover,
		highlightStrokeColor: interactiveAccentHover,
		curveLeft: {
			color: interactiveAccent,

		},
		curveRight: {
			color: interactiveAccent,
		},
	},

	vectorfield: {
		highlightStrokeColor: interactiveAccentHover,
		highlightStrokeOpacity: 0.8
	}
	// });
};

export default JXG;
