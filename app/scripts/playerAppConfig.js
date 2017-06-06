angular.module("playerApp.config", [])
.constant("config", {"URL":{"BASE":"http://localhost:5000/api/sb/v1/","USER_BASE":"http://10.0.1.75:9000/v1/","MOCK_API_BASE":"http://13.71.127.158:9000/v1/","COURSE":{"SEARCH":"course/search","CREATE":"course/create","UPDATE":"course/update","REVIEW":"course/review","PUBLISH":"course/publish","GET":"course/get","GET_MY_COURSE":"course/get/mycourse","HIERARCHY":"course/hierarchy","UPLOAD_MEDIA":"upload/media","USER_COURSE_SCHEDULE":"user/courses","USER_CONTENT_STATE":"user/content/state","GET_ENROLLED_COURSES":"user/courses"},"CONTENT":{"SEARCH":"content/search","CREATE":"content/create","UPDATE":"content/update","REVIEW":"content/review","PUBLISH":"content/publish","GET":"content/get","GET_MY_COURSE":"content/get/mycontent","UPLOAD":"content/upload","UPLOAD_MEDIA":"upload/media"},"AUTH":{"LOGIN":"user/login","LOGOUT":"user/logout"},"NOTES":{"SEARCH":"notes/search","CREATE":"notes/create","UPDATE":"notes/update","GET":"notes/get","DELETE":"notes/delete"}},"MESSAGES":{"AUTH":{"LOGIN":{"FAILED":"invalid username and password"},"LOGOUT":{"FAILED":"Logout failed"}},"NOTES":{"CREATE":{"START":"Creating note, please wait...","FAILED":"Creating note is failed, please try again later...","SUCCESS":"Note created successfully..."},"GET":{"START":"Fetching note detail, please wait...","FAILED":"Fetching note detail is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"REMOVE":{"START":"Deleting note, please wait...","FAILED":"Deleting note is failed, please try again later...","SUCCESS":"Note deleted successfully..."},"SEARCH":{"START":"Searching notes, please wait...","FAILED":"Searching note is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"UPDATE":{"START":"Updating note, please wait...","FAILED":"Updating note is failed, please try again later...","SUCCESS":"Note updated successfully..."}}},"ekstep_CE_config":{"context":{"content_id":"","sid":"rctrs9r0748iidtuhh79ust993","user":{"id":"390","name":"Harish kumar Gangula","email":"harishg@ilimi.com","avtar":"https://localhost:3000/images/sunbird_logo.png","logout":"https://localhost:3000/logout"},"baseURL":"https://localhost:3000/","editMetaLink":""},"config":{"baseURL":"http://localhost:5000","pluginRepo":"http://localhost:5000/content-plugins","plugins":[{"id":"org.ekstep.telemetry","ver":"1.0","type":"plugin"},{"id":"org.ekstep.config","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stage","ver":"1.0","type":"plugin"},{"id":"org.ekstep.text","ver":"1.0","type":"plugin"},{"id":"org.ekstep.shape","ver":"1.0","type":"plugin"},{"id":"org.ekstep.image","ver":"1.0","type":"plugin"},{"id":"org.ekstep.audio","ver":"1.0","type":"plugin"},{"id":"org.ekstep.hotspot","ver":"1.0","type":"plugin"},{"id":"org.ekstep.scribblepad","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assessmentbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.quiz","ver":"1.0","type":"plugin"},{"id":"org.ekstep.preview","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.colorpicker","ver":"1.0","type":"plugin"},{"id":"org.ekstep.todo","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stageconfig","ver":"1.0","type":"plugin"},{"id":"org.ekstep.unsupported","ver":"1.0","type":"plugin"},{"id":"org.ekstep.viewecml","ver":"1.0","type":"plugin"},{"id":"org.ekstep.activitybrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.download","ver":"1.0","type":"plugin"},{"id":"org.ekstep.collaborator","ver":"1.0","type":"plugin"},{"id":"org.ekstep.readalongbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.wordinfobrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.utils","ver":"1.0","type":"plugin"},{"id":"org.ekstep.help","ver":"1.0","type":"plugin"}],"enableCorePlugin":false}}});