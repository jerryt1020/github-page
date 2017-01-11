var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var FrontEnd;
        (function (FrontEnd) {
            var SDK;
            (function (SDK) {
                var DownloadAppBanner = (function () {
                    function DownloadAppBanner() {
                        this.Version = "1.0.0";
                        this.Domain = "http://shop.s3.com.tw/";
                        this.ShopIconUrl = "https://diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/156/0/211027";
                        this.ShopId = "156";
                        this.AppName = "美妝保養專賣";
                        this.IsMobile = false;
                        this.IsShow = true;
                        this.DownlaodAppUrl = "";
                    }
                    DownloadAppBanner.prototype.GetIsMobileBrowser = function () {
                        var check = false;
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            check = true;
                        }
                        return check;
                    };
                    DownloadAppBanner.prototype.LoadFontawesome = function () {
                        var headID = document.getElementsByTagName("head")[0];
                        var newCss = document.createElement('link');
                        newCss.type = 'text/css';
                        newCss.rel = "stylesheet";
                        newCss.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
                        headID.appendChild(newCss);
                    };
                    DownloadAppBanner.prototype.ModifyHeaderMobileStyle = function (fixed) {
                        var header_mobile_top = document.getElementById("header_mobile_top");
                        var header_mobile_bottom = document.getElementById("header_mobile_bottom");
                        if (fixed) {
                            if (header_mobile_top) {
                                header_mobile_top.style.position = "fixed";
                            }
                            if (header_mobile_bottom) {
                                header_mobile_bottom.style.marginTop = "130";
                            }
                        }
                        else {
                            if (header_mobile_top) {
                                header_mobile_top.style.position = "relative";
                            }
                            if (header_mobile_bottom) {
                                header_mobile_bottom.style.marginTop = "0";
                            }
                        }
                    };
                    DownloadAppBanner.prototype.CloseBanner = function () {
                        this.IsShow = false;
                        document.getElementById("smart-app-banner").style.display = "none";
                        window.sessionStorage.setItem("AdHide", 'ture');
                    };
                    DownloadAppBanner.prototype.Download = function () {
                        window.open(this.DownlaodAppUrl, "_blank");
                    };
                    return DownloadAppBanner;
                }());
                SDK.DownloadAppBanner = DownloadAppBanner;
            })(SDK = FrontEnd.SDK || (FrontEnd.SDK = {}));
        })(FrontEnd = Mall.FrontEnd || (Mall.FrontEnd = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var downloadApp = new NineYi.Mall.FrontEnd.SDK.DownloadAppBanner();
