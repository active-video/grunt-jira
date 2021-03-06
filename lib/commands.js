// jira.findIssue({
	// 	'project': grunt.config.get('jira.project_key'),
	// 	'name': version,
	// 	'description': "This is an automated grunt build.",
	// 	'released': true,
	// 	'archived': false
	// }, function(err, callback) {
	// 	if (err) {
	// 		grunt.log.fail(err);
	// 		return;
	// 	} else {
	// 		grunt.log.ok("JIRA version: " + version + " has been created.");
	// 	}
	// });
	//

module.exports = {
    findissue: require('./command_findissue'),
    createissue: require('./command_createissue'),
    updateissue: require('./command_updateissue'),
    listfields: require('./command_listfields'),
    getuserissues: require('./command_getuserissues'),
    search: require('./command_search'),
    searchusers: require('./command_searchusers'),
    issuelink: require('./command_issuelink')
};
