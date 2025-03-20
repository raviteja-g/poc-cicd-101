//@ui5-bundle com/poc/cicd/poccicdui/Component-preload.js
sap.ui.require.preload({
	"com/poc/cicd/poccicdui/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.poc.cicd.poccicdui.Component",{metadata:{manifest:"json"}})});
},
	"com/poc/cicd/poccicdui/i18n/i18n.properties":'# This is the resource bundle for com.poc.cicd.poccicdui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,25\npoccicdui-manage.flpTitle=Users\n',
	"com/poc/cicd/poccicdui/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"com.poc.cicd.poccicdui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.17.0","toolsId":"c3d21bec-1914-48e4-a86e-d46bd5134f89"},"dataSources":{"mainService":{"uri":"service/poccicd101Service/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"poccicdui-manage":{"semanticObject":"poccicdui","action":"manage","title":"{{poccicdui-manage.flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.134.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.poc.cicd.poccicdui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"UserList","target":"UserList"},{"pattern":"User({key}):?query:","name":"UserObjectPage","target":"UserObjectPage"}],"targets":{"UserList":{"type":"Component","id":"UserList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/User","variantManagement":"Page","navigation":{"User":{"detail":{"route":"UserObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"UserObjectPage":{"type":"Component","id":"UserObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/User"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"poccicd101"}}'
});
//# sourceMappingURL=Component-preload.js.map
