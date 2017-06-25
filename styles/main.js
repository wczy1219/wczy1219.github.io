function id(id){
	return document.getElementById(id);
}

function Explorer()
{
	this.isIE = false;
	this.isIESix = false;
	this.isIESeven = false;
	this.isIEEight = false;
	this.isIENine = false;
	this.isIETen = false;
	this.isIENormal = false;
	this.isIETenLess = false;
	this.isFirefox = false;
	this.isChrome = false;
	this.isSafari = false;
	this.isOpera = false;
	this.isIE11 = false;
	this.isMsEdge = false;
	this.explorerInfo = navigator.userAgent;
	this.explorerTypeArr = ["IE", 0, "8.0"];

	this.getIEInfo = function ()
	{
		var bMSIE = /msie ((\d+\.)+\d+)/i.test(explorerInfo)?(document.mode || RegExp["$1"]):false;
		if (bMSIE != false)
		{
			if (bMSIE <= 6)
			{
				this.isIESix = true;
				this.explorerTypeArr = ["IE", 0, "6.0"];
			}
			else if (bMSIE == 7)
			{
				this.isIESeven = true;
				this.explorerTypeArr = ["IE", 0, "7.0"];
			}
			else if (bMSIE == 8)
			{
				this.isIEEight = true;
				this.explorerTypeArr = ["IE", 0, "8.0"];
			}
			else if (bMSIE >= 9)
			{
				if (bMSIE == 9)
				{
					this.isIENine = true;
					this.explorerTypeArr = ["IE", 0, "9.0"];
				}
				else if (bMSIE == 10)
				{
					this.isIETen = true;
					this.explorerTypeArr = ["IE", 0, "10.0"];
				}

				this.isIENormal = true;
			}

			if (bMSIE <= 10)
			{
				this.isIETenLess = true;
			}

			this.isIE = true;
		}

		/* IE11.0 */
		if (/Trident\/[\d\.]+[\w\W]*rv:11\.[\d\.]+/i.test(explorerInfo) == true)
		{
			this.isIE11 = true;
			this.isIE = true;
			this.isIENormal = true;
			this.explorerTypeArr = ["IE", 0, "11.0"];
		}
	};

	this.judgeExplore = function(){
		var ua = navigator.userAgent;
		this.getIEInfo();

		if (this.isIE == false)
		{
			if (s = ua.match(/edge\/([\d.]+)/i))
			{
				/* ms edge is note IE */
				this.isMsEdge = s[1];
				this.explorerTypeArr = ["edge", 4, s[1]];
			}
			else if (s = ua.match(/firefox\/([\d.]+)/i))
			{
				this.isFirefox = s[1];
				this.explorerTypeArr = ["firefox", 1, s[1]];
			}
			else if (s = ua.match(/chrome\/([\d.]+)/i))
			{
				this.isChrome = s[1];
				this.explorerTypeArr = ["chrome", 2, s[1]];
			}
			else if (s = ua.match(/opera.([\d.]+)/i))
			{
				this.isOpera = s[1];
				this.explorerTypeArr = ["opera", 5, s[1]];
			}
			else if (s = ua.match(/version\/([\d.]+).*safari/i))
			{
				this.isSafari = s[1];
				this.explorerTypeArr = ["safari", 3, s[1]];
			}
		}
	};

	this.judgeExplore();
}