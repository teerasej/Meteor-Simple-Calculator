if (Meteor.isClient) {
  

  Template.calculator.helpers({
    result: function(){
      return Session.get('result');
    }
  });

  // Template.calculator.events({
  //   "submit #js-calculator":function(event){

  //     event.preventDefault();

  //     var first = event.target.first.value;
  //     var second = event.target.second.value;
  //     var method = event.target.method.value;

  //     if(method == '+'){
  //       Session.set('result', Number(first) + Number(second));
  //     }
  //   }
  // });

  Template.calculator.events({
    "click #js-getresult-btn":function(event, template){
      
      var first = template.find('.first').value;
      var second = template.find('.second').value;
      var method = template.find('.method').value;

      if(method == '+'){
        Session.set('result', Number(first) + Number(second));
      }

    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
