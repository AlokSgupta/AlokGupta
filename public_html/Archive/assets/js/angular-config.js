//mainApp.value('InfraHomeWEB_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/Dashboard/api/infrastructure/Web/:id');
mainApp.value('InfraHomeWEB_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/Dashboard/api/infrastructure/Web/:id');
//mainApp.value('InfraHomeApplication_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/Dashboard/api/infrastructure/Application');
mainApp.value('InfraHomeApplication_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/Dashboard/api/infrastructure/application');

mainApp.value('InfraHomeDatabase_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/Dashboard/api/infrastructure/Database');

// Batches 
mainApp.value('BatchProjects_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/batch/api/BatchProjects/:id');
mainApp.value('BatchPendingJobs_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/batch/api/BatchPendingJobs/:id');
mainApp.value('BatchFailedJobs_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/batch/api/BatchFailedJobs/:id');
mainApp.value('BatchRunningJobs_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/batch/api/BatchRunningJobs/:id');
mainApp.value('BatchCompletedJobs_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/batch/api/BatchCompletedJobs/:id');

// Single Host View 
mainApp.value('SingleHost_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/Dashboard/api/HostView/:id');
mainApp.value('Database_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/Dashboard/api/Database/Overview');
mainApp.value('Services_API', 'http://10.27.217.22:90/APIs/SystemModule/v1/dashboard/api/Services/Overview');
mainApp.value('AggregateApplication_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/dashboard/api/infrastructure/AggregateApplication');
mainApp.value('AggregateDatabase_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/dashboard/api/infrastructure/AggregateDatabase');
mainApp.value('AggregateWeb_API', 'http://10.27.217.22:91/APIs/Infrastructure/v1/dashboard/api/infrastructure/AggregateWeb');



// PMO
mainApp.value('PMOUSER_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/users/:id');
mainApp.value('PMOUSERAccessRequest_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/useraccessrequests/:id');
mainApp.value('PMOUSERPMOUSERAccessRequestDetail_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/useraccessrequests/request/:id');
mainApp.value('BackgroundChecksToExpireReport_API', "http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/bgchecksexpiringtwomonths/:id")
mainApp.value('DailyAppointmentReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/dailyaccessterminations/:id')
mainApp.value('DailyCWOPAIDTerminationsReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/dailycwopaidterminations/:id')
mainApp.value('PendingCWOPAIDRequestsReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/dailypendingcwopaid/:id')
mainApp.value('DailyTerminationReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/dailyaccessterminations/:id')
mainApp.value('MonthlyWOBAccessReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/monthlywobaccess/:id')
mainApp.value('WeeklyMissedBackgroundChecksReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/weeklymissingbgchecks/:id')
mainApp.value('WeeklySoftwareRequestsReport_API', 'http://10.27.217.22:90/APIs/PMO/v1/PMO/api/reports/weeklysoftwarerequests/:id')

// Release Management , Authentication and user preferences 
mainApp.value('Release_API', 'http://10.15.176.35:9820/v1/Release/api/requests/:id');
mainApp.value('LOGIN_API', 'http://10.27.217.22:90/APIs/Common/v1/Authentication/api/login/:id');
mainApp.value('USERPREF_API', 'http://10.27.217.22:90/APIs/Common/v1/UserPreference/api/UserPreferenceKpi/:id');




