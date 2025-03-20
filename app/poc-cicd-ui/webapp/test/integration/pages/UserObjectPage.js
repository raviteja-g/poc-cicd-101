sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.poc.cicd.poccicdui',
            componentId: 'UserObjectPage',
            contextPath: '/User'
        },
        CustomPageDefinitions
    );
});