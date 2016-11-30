
/* -------------------------------
 CONTROLLER - Alert
 ------------------------------- */
mainApp.controller('appMainController', ['$scope', '$rootScope', '$state', '$http',
    function ($scope, $rootScope, $state, $http) {
        $rootScope.style = 'style - dark';
        $rootScope.theme = 'theme - dark';

    }]);

/* -------------------------------
    CONTROLLER - App
------------------------------- */

mainApp.controller('appController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    $scope.$on('$includeContentLoaded', function () {
        App.initComponent();
    });
    $scope.$on('$viewContentLoaded', function () {
        App.initComponent();
    });
    $scope.UserName = $rootScope.userID;
    $scope.$on('$stateChangeStart', function () {
        // reset layout setting
        $rootScope.setting.layout.pageSidebarMinified = true;
        $rootScope.setting.layout.pageFixedFooter = false;
        $rootScope.setting.layout.pageRightSidebar = false;
        $rootScope.setting.layout.pageTwoSidebar = false;
        $rootScope.setting.layout.pageTopMenu = false;
        $rootScope.setting.layout.pageBoxedLayout = false;
        $rootScope.setting.layout.pageWithoutSidebar = false;
        $rootScope.setting.layout.pageContentFullHeight = false;
        $rootScope.setting.layout.pageContentWithoutPadding = false;
        //$rootScope.setting.layout.paceTop = false;
        App.scrollTop();
        $('.pace .pace-progress').addClass('hide');
        //$('.pace').removeClass('pace-inactive');
        //$('#myModal').modal('show')
    });
    $scope.Apps = [
              { "id": 1, "name": "All" },
              { "id": 2, "name": "PELICAN" },
              { "id": 3, "name": "HCSIS" },
              { "id": 4, "name": "CAPS" },
              { "id": 5, "name": "CIS" },
    ];
    $scope.selectedUserIds = [3, 5];
    $scope.$on('$stateChangeSuccess', function () {
        setTimeout(function () {
            $('#myModal').modal('hide');
        }, 500);
        // Pace.restart();
        App.initPageLoad();
        App.initSidebarSelection();
    });
    $scope.$on('$stateNotFound', function () {
        setTimeout(function () {
            $('#myModal').modal('hide');
        }, 500);
        // Pace.stop();
    });
    $scope.$on('$stateChangeError', function () {
        setTimeout(function () {
            $('#myModal').modal('hide');
        }, 500);
        // Pace.stop();
    });

    $scope.help = function () {
        $rootScope.style = 'style';
        $rootScope.theme = 'theme';

    }

    /* Notification and alert modal
     * */
    $scope.showNotification = function () {
        $rootScope.id = $rootScope.userID;
        ;
        $location.path('/app/dashboard/notification');
    }


    $scope.showAlert = function () {
        $rootScope.id = $rootScope.userID;
        $location.path('/app/dashboard/alert');
    }
}]);

/* -------------------------------
 CONTROLLER - Notification
 ------------------------------- */
mainApp.controller('NotificationController', ['$scope', '$rootScope', '$state', '$http',
    function ($scope, $rootScope, $state, $http) {

        $scope.notifications = [
            { name: 'This is a notification', Subject: 'This is a notification', details: 'Urgent', duedate: new Date('03/08/2016') }
        ]


        //calculate the due day for alert
        $scope.daysdiff = function (duedate) {
            var d1 = moment(new Date());
            var d2 = moment(duedate);
            var days = Math.ceil(moment.duration(d2.diff(d1)).asDays());
            var morethanone = days >= -1 && days <= 1 ? "day" : 'days';

            if (days == 0) {
                return 'Due today';
            } else if (days > 0) {
                return 'Due in ' + days + ' ' + morethanone;
            } else {
                return 'Past due ' + (-days) + ' ' + morethanone;
            }
        }

        //get alert details
        $scope.getDetails = function (not) {
            $scope.not = not;
        }
    }]);


/* -------------------------------
 CONTROLLER - Alert
 ------------------------------- */
mainApp.controller('AlertController', ['$scope', '$rootScope', '$state', '$http',
    function ($scope, $rootScope, $state, $http) {

        $scope.alerts = [
            { name: 'This is an lert', Subject: '10 dataFixes due for submission', details: 'Urgent', duedate: new Date('03/08/2016') },
            { name: 'This is an lert', Subject: 'Audit is due for pelican', details: 'Urgent', duedate: new Date('03/06/2016') },
            { name: 'This is an lert', Subject: 'CMMI3 audi is due for upcoming 2 weeks', details: 'Urgent', duedate: new Date('03/02/2016') },
            { name: 'This is an lert', Subject: '4 new server requests are pending', details: 'Urgent', duedate: new Date('02/18/2016') },
            { name: 'This is an lert', Subject: 'There are 4 server errors', details: 'Urgent', duedate: new Date('01/08/2016') },
        ]


        //calculate the due day for alert
        $scope.daysdiff = function (duedate) {
            var d1 = moment(new Date());
            var d2 = moment(duedate);
            var days = Math.ceil(moment.duration(d2.diff(d1)).asDays());
            var morethanone = days >= -1 && days <= 1 ? "day" : 'days';

            if (days == 0) {
                return 'Due today';
            } else if (days > 0) {
                return 'Due in ' + days + ' ' + morethanone;
            } else {
                return 'Past due ' + (-days) + ' ' + morethanone;
            }
        }

        //get alert details
        $scope.getDetails = function (alert) {
            $scope.alert = alert;
        }
    }]);

/* -------------------------------
    CONTROLLER - Sidebar
------------------------------- */

mainApp.controller('sidebarController', function ($scope, $rootScope, $state) {
    App.initSidebar();

});
/* -------------------------------
   6.0 CONTROLLER - Theme Panel
------------------------------- */


mainApp.controller('themePanelController', function ($scope, $rootScope, $state) {
    setTimeout(function () {
        Demo.initThemePanel();
    }, 0);
});

/*mainApp.controller('sidebarController',['$location', function ($scope, $rootScope, $state, $location) {
    App.initSidebar();
    $scope.help = function ()
    {

        console.log("inside index.");
        // Instance the tour
        var tour = new Tour({
            steps: [
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#apps-Breadcrumb",
                    title: "Breadcrumb trail",
                    content: "Click on any breadcrumb link to bring you back to the higher-level dashboard. Especially useful when performing drill-downs to specific hosts on the Single Host view.",
                    placement: "right"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-OverviewTrends",
                    title: "Overview/Trends",
                    content: "Toggle between the overview dashboard and trend deep-dive dashboard on the current page. ",
                    placement: "bottom"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-Cards",
                    title: "Cards",
                    content: "Cards are logical groupings of KPI’s (Key Performance Indicators) that are displayed on screen. Users may choose which KPI’s display on a particular card by navigating to the User Preferences module",
                    placement: "bottom"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-BusinessUserCard",
                    title: "Business & User Card",
                    content: "Depicts the metrics relating to end user experience, such as response time, number of connections, and high-level business metrics.",
                    placement: "bottom"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-WebCard",
                    title: "Web Card",
                    content: "Depicts web server health, including app pool status, network I/O, response time, and server-level metrics such as CPU and memory consumption. Clicking on a KPI will bring the user to the Web Overview Dashboard for more information.",
                    placement: "top"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-ApplicationCard",
                    title: "Application Card",
                    content: "This card contains KPI’s for platforms or applications that support the overall application suite, such as middleware, forms processing, and core application health metrics.",
                    placement: "top"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-DatabaseCard",
                    title: "Database Card",
                    content: "Depicts the current database health (for each database platform, if applicable), as well as database host metrics and query response time. Clicking any KPI will bring the user to the Database Dashboard for more information.",
                    placement: "top"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-HealthScore",
                    title: "Health Score",
                    content: "Every tier of the application contains a health score. The health score is an aggregation of the KPI’s for the application and server elements of the tier, displayed in a single number from 0 – 100. As KPI’s within the tier began to pass ‘warning’ and ‘critical’ thresholds, the Health Score begins to decline. As these KPI’s return to normal ranges, the Health Score will increase to normal levels.",
                    placement: "top"
                },
                {
                    // path: "/icp#/app/dashboard/v2",
                    element: "#app-Host",
                    title: "Host",
                    content: "Click on any host to drill down to the single host view. The single host view provides more specific performance information on a single server.",
                    placement: "top"
                }

            ]
            //backdrop: true
        });

        // Initialize the tour
        tour.init();
        tour.setCurrentStep(0);
        // Start the tour
        tour.start(true);




    }

    $scope.logout = function ()
    {
        console.log("ret");
        $location.path('/app/login');
    }

}]);*/

mainApp.controller('TodoCtrl', function ($scope, $http, $interval) {
    $scope.news = [];
    $scope.conf = {
        news_length: false,
        news_pos: 200, // the starting position from the right in the news container
        news_margin: 20,
        news_move_flag: true
    };

    $scope.init = function () {
        $http.post('Data\\Outagenews.json', null).success(function (data) {
            if (data && data.length > 0) {
                $scope.news = data;
                $interval($scope.news_move, 50);
            }
        });
    };

    $scope.get_news_right = function (idx) {
        var $right = $scope.conf.news_pos;
        for (var ri = 0; ri < idx; ri++) {
            if (document.getElementById('news_' + ri)) {
                $right += $scope.conf.news_margin + angular.element(document.getElementById('news_' + ri))[0].offsetWidth;
            }
        }
        return $right + 'px';
    };

    $scope.news_move = function () {
        if ($scope.conf.news_move_flag) {
            $scope.conf.news_pos--;
            if (angular.element(document.getElementById('news_0'))[0].offsetLeft > angular.element(document.getElementById('news_strip'))[0].offsetWidth + $scope.conf.news_margin) {
                var first_new = $scope.news[0];
                $scope.news.push(first_new);
                $scope.news.shift();
                $scope.conf.news_pos += angular.element(document.getElementById('news_0'))[0].offsetWidth + $scope.conf.news_margin;
            }
        }
    };
})



mainApp.controller('formPluginsController', function ($scope, $rootScope, $state) {



    $('#datepicker-default').datepicker({
        todayHighlight: true
    });
    $('#datepicker-inline').datepicker({
        todayHighlight: true
    });
    $('.input-daterange').datepicker({
        todayHighlight: true
    });
    $('#datepicker-disabled-past').datepicker({
        todayHighlight: true
    });
    $('#datepicker-autoClose').datepicker({
        todayHighlight: true,
        autoclose: true
    });


    /* 15.2 Form Plugins - Ion Range Slider
    ------------------------------------------------ */

    $('#default_rangeSlider').ionRangeSlider({
        min: 0,
        max: 5000,
        type: 'double',
        prefix: "$",
        maxPostfix: "+",
        prettify: false,
        hasGrid: true
    });
    $('#customRange_rangeSlider').ionRangeSlider({
        min: 1000,
        max: 100000,
        from: 30000,
        to: 90000,
        type: 'double',
        step: 500,
        postfix: " �",
        hasGrid: true
    });
    $('#customValue_rangeSlider').ionRangeSlider({
        values: [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ],
        type: 'single',
        hasGrid: true
    });


    /* 15.3 Form Plugins - Masked Input
    ------------------------------------------------ */

    $("#masked-input-date").mask("99/99/9999");
    $("#masked-input-phone").mask("(999) 999-9999");
    $("#masked-input-tid").mask("99-9999999");
    $("#masked-input-ssn").mask("999-99-9999");
    $("#masked-input-pno").mask("aaa-9999-a");
    $("#masked-input-pkey").mask("a*-999-a999");


    /* 15.4 Form Plugins - Color Picker
    ------------------------------------------------ */

    $('#colorpicker').colorpicker({ format: 'hex' });
    $('#colorpicker-prepend').colorpicker({ format: 'hex' });
    $('#colorpicker-rgba').colorpicker();


    /* 15.5 Form Plugins - Timepicker
    ------------------------------------------------ */

    $('#timepicker').timepicker();


    /* 15.6 Form Plugins - Strength JS
    ------------------------------------------------ */

    $("#password-strength").strength({
        strengthClass: 'strength form-control m-b-5',
        strengthMeterClass: 'strength_meter',
        strengthButtonClass: 'button_strength',
        strengthButtonText: 'Show password',
        strengthButtonTextToggle: 'Hide Password'
    });


    /* 15.7 Form Plugins - Autocomplete
    ------------------------------------------------ */

    var availableTags = [
        'ActionScript', 'AppleScript', 'Asp', 'BASIC', 'C', 'C++', 'Clojure', 'COBOL',
        'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'Java', 'JavaScript',
        'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme'
    ];
    $('#jquery-autocomplete').autocomplete({
        source: availableTags
    });


    /* 15.8 Form Plugins - Bootstrap Combobox
    ------------------------------------------------ */

    $('.combobox').combobox();


    /* 15.9 Form Plugins - Tags Input
    ------------------------------------------------ */

    $('.bootstrap-tagsinput input').focus(function () {
        $(this).closest('.bootstrap-tagsinput').addClass('bootstrap-tagsinput-focus');
    });
    $('.bootstrap-tagsinput input').focusout(function () {
        $(this).closest('.bootstrap-tagsinput').removeClass('bootstrap-tagsinput-focus');
    });


    /* 15.10 Form Plugins - Selectpicker
    ------------------------------------------------ */

    $('.selectpicker').selectpicker('render');


    /* 15.11 Form Plugins - jQuery TagIt
    ------------------------------------------------ */

    $('#jquery-tagIt-default').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-inverse').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-white').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-primary').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-info').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-success').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-warning').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });
    $('#jquery-tagIt-danger').tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
    });


    /* 15.12 Form Plugins - Date Range Picker
    ------------------------------------------------ */

    $('#default-daterange').daterangepicker({
        opens: 'right',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        startDate: moment().subtract('days', 29),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2018',
    },
    function (start, end) {
        $('#default-daterange input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    $('#advance-daterange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    $('#advance-daterange').daterangepicker({
        format: 'MM/DD/YYYY',
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2015',
        dateLimit: { days: 60 },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'right',
        drops: 'down',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-primary',
        cancelClass: 'btn-default',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    }, function (start, end, label) {
        $('#advance-daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    $('#daterange-singledate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    },
    function (start, end, label) {
        var years = moment().diff(start, 'years');
        alert("You are " + years + " years old.");
    });


    /* 15.13 Form Plugins - Select2
    ------------------------------------------------ */

    $(".default-select2").select2();
    $(".multiple-select2").select2({ placeholder: "Select a state" });


    /* 15.14 Form Plugins - DateTimepicker
    ------------------------------------------------ */

    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker3').datetimepicker();
    $('#datetimepicker4').datetimepicker();
    $("#datetimepicker3").on("dp.change", function (e) {
        $('#datetimepicker4').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker4").on("dp.change", function (e) {
        $('#datetimepicker3').data("DateTimePicker").maxDate(e.date);
    });
});


