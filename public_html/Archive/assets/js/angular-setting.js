mainApp.factory('setting', ['$rootScope', function ($rootScope) {
    var setting = {
        layout: {
            pageSidebarMinified: true,
            pageFixedFooter: false,
            pageRightSidebar: false,
            pageTwoSidebar: false,
            pageTopMenu: true,
            pageBoxedLayout: false,
            pageWithoutSidebar: true,
            pageContentFullHeight: false,
            pageContentWithoutPadding: false,
            paceTop: false
        }
    };

    return setting;
}]);
