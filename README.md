# splunk-multiselect-drilldown

enable the easy setting of multi-select fields from drilldown reports

when running a splunk drilldown, pass the `key` that you need selected in your multiselect field.  this is particularly useful when the `value` that your multiselect uses is part of a complex query!

## usage

```js
// how you actually bundle this source to get into your splunk app is up to you.
// clearly, this example doesn't load splunk-multiselect-drilldown into splunk's
// require path
var msdd = require('splunk-multiselect-drilldown')

// from splunk SDK
require([
  'splunkjs/mvc',
  'splunkjs/mvc/simplexml/ready!'
], function (mvc) {
  msdd.updateMultiSelectsFromQuery(mvc) // that's it!
})
```
