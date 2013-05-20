/*
	Iframe Size Receiver

	Copyright (c) 2013 Jabin King (Mister King Design), http://mister-king.co.uk
	https://github.com/Mister-King

	Description: Add this script to the origin page containing an iframe
	and use	Iframe Size Giver on the external page.
	This script captures HTML5 'postMessage'.
*/

var MRK = MRK||{};

MRK.IframeSizeReceiver = function ()
{
	var iframe = document.getElementsByTagName('iframe');
	if (!iframe.length) { return false; }
	iframe = iframe[0];

	function resizeIframe(event)
	{
		iframe.height = event.data + 'px';
	}

	// Receive message from iframe page
	if (window.addEventListener){ window.addEventListener('message', resizeIframe, false); }
	else if (window.attachEvent){ window.attachEvent('onmessage', resizeIframe); }
};

MRK.IframeSizeReceiver();