
import React from 'react'
import 'jquery/dist/jquery.js'
import '../js/global.js'
import $ from 'jquery';

 function thisFunction() {
  $(".control").click(function() {
      let $this = $(this);
      let val = $this.text();
      $this.prop("disabled",true);
      $(".display:empty:first").html(val);
    });
  };



function undo() {
  $("span.display").click(function() {
      let $this = $(this);
      var edgame = $(this).text();
      $(this).empty();
      $("button:contains('" + edgame +"') ").prop("disabled",false);

});
};

const Conversation = () => {
    return (
        <div className="Conversation">


<div class="row pt-4 pb-4">
  <div class="col-md-12 text-center">
   <p><strong>Directions:</strong> Read the first sentence.Tap the words to make an appropriate response to the first sentence.</p>
  </div>
</div>
            <div className="row d-flex">
        <div className="col-md-6">
          <div className="from-them wow fadeInUp" data-wow-delay=".25s">
            <p className="phone-sentence">What do I do for this question type?</p>
          </div>
          <div className="boy">
          
          </div>
        </div>
      </div>
<div className="clear"></div>
<div className="row d-flex">
  <div className="col-md-6 ml-auto">
      <div className="from-me" data-wow-delay="1s">
          <p className="phone-sentence">Click the buttons below to form <span id="target" onClick={undo} className="display form-control2"></span> <span onClick={undo} className="display form-control2"></span>.
          </p>
          </div>
          <div className="girl">
          
          </div>
		  <div className="word-selection">
			<button onClick={thisFunction} className="control" draggable="true">complete</button>
            <button onClick={thisFunction} draggable="true" className="control">sentences</button>
		   </div>

      
  </div>


</div>
</div>
    )
}

export default Conversation