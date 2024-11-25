import { Globals } from './globals.js';

let IS_DEBUG = false;

function init() {
	if (IS_DEBUG) console.info('init tools.js');

	// Tools buttons
	document.getElementById('selectTool').onclick = function () { alert('Select Tool'); };
	document.getElementById('drawRectTool').onclick = function () { alert('Draw Rectangle'); };
	document.getElementById('drawCircleTool').onclick = function () { alert('Draw Circle'); };
	document.getElementById('drawLineTool').onclick = function () { alert('Draw Line'); };
	document.getElementById('drawTextTool').onclick = function () { alert('Draw Text'); };
	document.getElementById('zoomTool').onclick = function () { alert('Zoom Tool'); };
}

// Export an object to group the functions
export const Tools = {
	init,
};
