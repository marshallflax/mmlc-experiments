// Equation collection
// ---------------
define([
  'underscore',
  'backbone',
  'paginator',
  '/js/models/feedback.js'
], function(_, Backbone, paginator, Feedback){
  var FeedbackCollection = Backbone.PageableCollection.extend({
    model: Feedback,
    url: function() {
      return '/myFeedback?access_token=' + App.user.get("access_token");
    },

    state: {
      pageSize: 10
    },

    parseState: function (resp, queryParams, state, options) {
      return {totalRecords: resp.numFeedback};
    },

    // get the actual records
    parseRecords: function (resp, options) {
      return resp.feedback;
    }
  });
  return FeedbackCollection;
});
