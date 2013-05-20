/*
	Iframe Size Giver

	Copyright (c) 2013 Jabin King (Mister King Design), http://mister-king.co.uk
	https://github.com/Mister-King

	Description: Add this script to the external page pulled into the iframe
	and use Iframe Size Receiver on the origin page.
	This script uses HTML5 'postMessage'.
*/

var MRK = MRK||{};

MRK.IframeSizeGiver = function ()
{
	'use strict';

/*
	Config
	------------------------ */

	var config =
	{
		isResponsive: true // Set to false if iframe contents are not responsive
	},

	body = document.getElementsByTagName('html')[0],
	anchors = document.getElementsByTagName('a'),
	actualHeight,
	resizeTimer;


/*
	Iframe Size Giver
	------------------------ */

	function giveHeight()
	{
		actualHeight = body.scrollHeight;
		parent.postMessage(actualHeight,'*');
		// Change * to a specific domain if there are security issues
		// otherwise it will post to any iframe regardless of domain
	}

	function resizeSpamProtect()
	{
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(giveHeight, 100);
	}

	// Give height on anchor clicks
	if (window.addEventListener)
	{
		for (var i = 0; i < anchors.length; i++)
		{
			anchors[i].addEventListener('click', giveHeight, false);
		}
	}
	else if (window.attachEvent)
	{
		for (var i = 0; i < anchors.length; i++)
		{
			anchors[i].attachEvent('onclick', giveHeight);
		}
	}

	// Give height at onload, 0.5 seconds and 2 seconds
	giveHeight();
	setTimeout(giveHeight, 500);
	setTimeout(giveHeight, 2000);

	// Give height on window resize if responsive
	if (config.isResponsive)
	{
		if (window.addEventListener){ window.addEventListener('resize', resizeSpamProtect, false); }
		else if (window.attachEvent){ window.attachEvent('onresize', resizeSpamProtect); }
	}
};

MRK.IframeSizeGiver();