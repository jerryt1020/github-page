var NineYi;!function(e){var o;!function(e){var o;!function(e){var o;!function(e){var o=function(){function e(){var e=this;this.Version="1.0.1",this.Domain="http://shop.s3.com.tw/",this.ShopIconUrl="https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027",this.ShopId="156",this.AppName="小三美日APP",this.AppDescription="日韓歐美流行美妝最快速",this.IsMobile=!1,this.IsShow=!0,this.DownlaodAppUrl="",this.InitGoogleAnalytics(),this.IsMobile=this.GetIsMobileBrowser(),this.DownlaodAppUrl=this.Domain+"ref/"+this.ShopId+"/ShopHome/"+this.ShopId+"?utm_source=mweb&utm_medium=download_banner&utm_campaign=ShopHome",this.IsMobile&&(this.LoadFontawesome(),this.AddpendBanner(),this.IsShow=this.GetIsShowBanner(),this.IsShow?(this.ModifyHeaderMobileStyle(!1),window.addEventListener("scroll",function(){var o=window.scrollY;o>130?e.ModifyHeaderMobileStyle(!0):e.ModifyHeaderMobileStyle(!1)})):document.getElementById("smart-app-banner").style.display="none")}return e.prototype.InitGoogleAnalytics=function(){window.ga("create","UA-60620201-6","auto",{allowLinker:!0}),window.ga("require","linker"),window.ga("linker:autoLink",["shop.s3.com.tw"]),window.ga("send","pageview")},e.prototype.GetIsMobileBrowser=function(){var e=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e=!0),e},e.prototype.GetIsShowBanner=function(){var e=!1,o=window.localStorage.getItem("AdExpire"),n=(new Date).getTime();return window.sessionStorage.getItem("AdHide")||(!o||n>o)&&(o=(new Date).getTime()+864e5,window.localStorage.setItem("AdExpire",o.toString()),e=!0),e},e.prototype.LoadFontawesome=function(){var e=document.getElementsByTagName("head")[0],o=document.createElement("link");o.type="text/css",o.rel="stylesheet",o.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",e.appendChild(o)},e.prototype.ModifyHeaderMobileStyle=function(e){var o=document.getElementById("header_mobile_top"),n=document.getElementById("header_mobile_bottom");e?(o&&(o.style.position="fixed"),n&&(n.style.marginTop="130")):(o&&(o.style.position="relative"),n&&(n.style.marginTop="0"))},e.prototype.AddpendBanner=function(){var e=document.createElement("div");e.id="smart-app-banner",e.style.position="relative";var o='<div class="smart-app-banner" style="background-color:#f8f8f8;color:#595959;position:static;border-bottom:1px solid #dfdfdf;height:150px;"><div class="banner-container" style="margin:0 auto;padding:35px;"><div class="banner-content" style="cursor:pointer;position:relative;font-family:PingFang-SC,sans-serif;"><a class="banner-close-btn" href="javascript: downloadApp.CloseBanner()" style="font-size:30px;color:#595959;margin-right:40px;"><i class="fa fa-times fa-2x" aria-hidden="true"></i></a><img class="banner-shop-icon" src="https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027" style="display:inline-block;vertical-align:middle;border-radius:15px;width:100px;height:100px;margin-top:-20px;"><span class="banner-body" style="display:inline-block;vertical-align:middle;padding:0 40px 25px;font-size:50px;width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"><a class="banner-name" target="_blank" href="javascript: downloadApp.Download()" style="display:block;font-family:PingFang-SC,sans-serif;font-size:35px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-decoration:none">'+this.AppName+'</a><a class="banner-desc" style="display:block;font-size:35px;color:#b7b7b7;text-decoration:none">'+this.AppDescription+'</a></span><div class="banner-download-btn" style="width:170px;height:85px;line-height:85px;border-radius:10px;border:solid 3px #595959;position:absolute;right:0;top:-5px;text-align:center;"><a class="banner-download-btn-text" href="javascript: downloadApp.Download()" style="color:#595959;font-family:PingFang-SC,sans-serif;font-size:40px;text-decoration:none">下載</a></div></div></div></div>';e.innerHTML=o,document.body&&document.body.insertBefore(e,document.body.childNodes[0])},e.prototype.CloseBanner=function(){this.IsShow=!1,document.getElementById("smart-app-banner").style.display="none",window.sessionStorage.setItem("AdHide","ture")},e.prototype.Download=function(){window.ga("send","event","官網導APP下載","click","小三美日Mobile官網"),window.open(this.DownlaodAppUrl,"_blank")},e}();e.DownloadAppBanner=o}(o=e.SDK||(e.SDK={}))}(o=e.FrontEnd||(e.FrontEnd={}))}(o=e.Mall||(e.Mall={}))}(NineYi||(NineYi={}));var downloadApp=new NineYi.Mall.FrontEnd.SDK.DownloadAppBanner;