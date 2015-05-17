There a few ways in which you can automate a workflow that involves [Atlassian Jira](https://www.atlassian.com/software/jira), using its administration dashboard. Unfortunately the options offered by Jira's own interface are severly limited. Their API however isn't. 

If you're using Grunt, there is a good chance that you'd like to manipulate Jira using Grunt, as you would any other part of your workflow. If that is the case you've come to the right place. Building on top Jira's rich API via its Node [wrapper](https://www.npmjs.com/package/jira) (created by Steven Surowiec), this Grunt task allows you query and manipulate Jira the way in every way possible.