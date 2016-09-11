/**
 * Created by Pavel on 28/11/2015.
 */
MDStyleHeader = {};

MDStyleHeader.tabWrapperSelector = ".md-style-tabs";
MDStyleHeader.tabSelector = ".mdl-layout__tab";
MDStyleHeader.headerSelector = ".md-style-header";

MDStyleHeader.tabOnClickHandler = function() {
    var that = this;
    $(this.tabSelector).on("click", function(){
        var HeaderClass = $(this).attr("data-md-style-header-link");
        $(that.headerSelector).attr('class', 'md-style-header').addClass(HeaderClass);
        $(that.tabWrapperSelector).attr('class', 'md-style-tabs mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark').addClass(HeaderClass);
    });
};

$(MDStyleHeader.headerSelector).addClass("overview");
MDStyleHeader.tabOnClickHandler();