sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/poc/cicd/poccicdui/test/integration/FirstJourney',
		'com/poc/cicd/poccicdui/test/integration/pages/UserList',
		'com/poc/cicd/poccicdui/test/integration/pages/UserObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserList, UserObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/poc/cicd/poccicdui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserList: UserList,
					onTheUserObjectPage: UserObjectPage
                }
            },
            opaJourney.run
        );
    }
);