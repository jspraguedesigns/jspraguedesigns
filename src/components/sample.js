import React from 'react'
import {Form} from 'react-bootstrap'
import  $ from 'jquery'
import sentence from '../images/sentence.png'
import question from '../images/question.png'
import missing from '../images/missing.png'
import Comments from '../components/comments'


function displayQuestion1 (){
  $('#q1').fadeIn('fast').siblings().fadeOut('fast');
}

function displayQuestion2 (){
    $('#q2').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion3(){
    $('#q3').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion4(){
    $('#q4').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion5(){
    $('#q5').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion6(){
    $('#q6').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion7(){
    $('#q7').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion8(){
    $('#q8').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion9(){
    $('#q9').fadeIn('fast').siblings().fadeOut('fast');
  }

  function displayQuestion10(){
    $('#q10').fadeIn('fast').siblings().fadeOut('fast');
  }

const sample = () => {
    return (
 
<div>
  <Comments/>
    <div className="container bodyelc">
        <div className="row">
            <div className="col-md-12">
                <h1>ELC Entry Test</h1>
                <h2 className="tag">Description and Sample Questions</h2>
                <hr/>
                <p><strong>The test consists of two Parts.</strong></p>
            </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Part A </strong>includes six types of questions:</p>  
                    <ol>

                    <li>Listening-Paraphrase </li>

                    <li>Listening-Response </li>

                    <li>Vocabulary </li>

                    <li>Grammar- Build a Sentence </li>

                    <li>Grammar- Build a Question</li> 

                    <li>Missing Letters </li>

                    </ol>


                <p><strong>Time: 30 minutes</strong></p> 
                </div>
               
                <div className="col-md-6">
                        <p><strong>Part B</strong> includes four types of questions: </p>
                        <ol>
                       <li>Speaking: Read Aloud </li>
                        <li>Speaking: Opinion</li>
                        <li>Speaking: Opinion </li>
                        <li>Writing: E-mail</li>
                        <li>Writing: Opinion</li>  
                        </ol>
                    <p><strong>Time: 30 minutes</strong></p>  

                </div>
            </div>
        <div className="row">
            <div className="col-md-12 mb-4">
                <p><strong>The test is delivered via a web browser and accessible only on laptop and desktop computers.</strong>  </p>
                <p><strong>Important:</strong> The test will be administered under supervised conditions to ensure that students are completing the test as intended and without any test-taking aids. Test administrators must confirm that students are not using any other applications during the test.  </p>
                <p>Because the test involves listening to audio input, students should either utilize headphones or complete the test in a quiet location where they will not be disturbed or disturb others (including other students). Once the testing session begins, the student should complete the entire test without any pauses. All aspects of test delivery, including instructions, section and item timing, response recording, scoring, and score reporting happen automatically via the app and the internet </p>

 

                <h3>Part A</h3>
                <hr/>
                <p>The test begins with brief general instructions, and each new section presents instructions and demonstrations for each new item type. Students respond to questions by selecting or typing a response. All responses are scored as either correct or incorrect.  The total testing time is 30 minutes, and each question has a fixed response time that is shown with a timer. If the student does not respond to the question, the next question appears automatically at the end of the available time.  </p>

                <p>Part A of the test is adaptive. Students first complete an initial set of questions. Then, based on the accuracy of their responses, they are presented a second set of questions adapted to their likely proficiency range.   </p>

            </div>
        </div>    

        <div className="row">
            <div className="col-md-12">
            <p><strong>Students respond to multiple questions in each of the following six types. </strong> </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
          <ul id="progressbar">
    <li id="btn1" onClick={displayQuestion1}>1. Listening – Paraphrase</li>
    <li id="btn2" onClick={displayQuestion2}>2. Listening – Response</li>
    <li id="btn3" onClick={displayQuestion3}>3. Vocabulary</li>
    <li id="btn4" onClick={displayQuestion4}>4. Grammar – Build a Sentence</li>
    <li id="btn5" onClick={displayQuestion5}>5. Grammar - Build a Question</li>
    <li id="btn6" onClick={displayQuestion6}>6. Missing Letters</li>
  </ul>
        <form id="msform">
        <fieldset id="q1">
        <div className="row">
            <div className="col-md-12 card">
                <div className="card-body">
                <h4>1. Listening – Paraphrase  </h4>
        <br/>
        <p><i>Students listen to a sentence. They then have 15 seconds to read 3 sentences and select the one that has the same meaning as the sentence they heard. </i> </p>
        <br/>
        
        <p><strong>Here is an example: </strong></p>
      
        <p><strong>Students hear a man say: “Since the weather hasn’t cleared up, we’ll move the graduation ceremony to the gymnasium.”</strong>  </p>
        <p><strong>Students see 3 sentences and select the one with the same meaning. </strong></p>
     
      <Form.Check
        type='radio'
        label={`A. It was clear that the ceremony would take place outdoors. `}
        id='A'/>
        <Form.Check
        type='radio'
        label={`B. We will go to the gymnasium after the ceremony. `}
        id='B'/>
        <Form.Check
        type='radio'
        label={'C. Graduation will be in the gymnasium due to the weather. '}
        id='C'/>
      
        <br/>
      
        <p><i>The correct answer is C: Graduation will be in the gymnasium due to the weather.   </i></p>
  
                </div>
            </div>
        </div>
        </fieldset>
        <fieldset id="q2" className="inactive-field">
        <div className="row">
        <div className="col-md-12 card">
            <div className="card-body">
            <h4>2. Listening – Response</h4>
            <br/>
            <p><i>Students listen to a sentence.  They then read 3 choices and select the one with an appropriate response to what they just heard.    </i></p>
            <br/>
            <p><strong>Here is an example:  </strong></p>
            <p><strong>Students hear a man say: “Didn’t you just have a cup of coffee?” </strong></p>
            <p><strong>They see 3 choices and select the one with the same meaning.  </strong></p>
           
      <Form.Check
        type='radio'
        label={`A. That’d be nice, thank you.`}
        id='A'/>
        <Form.Check
        type='radio'
        label={`B. Maybe a couple of days.`}
        id='B'/>
        <Form.Check
        type='radio'
        label={'C. Yes, but I need another one.'}
        id='C'/>
      
        <br/>
            <p><i>The correct answer is C: Yes, but I need another one.  This is the only response that is an appropriate response to the man’s question. </i></p>
            </div>
         </div>
    </div>
    </fieldset>
    <fieldset id="q3" className="inactive-field">
        <div className="row">
            <div className="col-md-12 card">
                <div className="card-body">
                <h4>3. Vocabulary   </h4>
            <br/>
            <p><i>Students see a word at the top of the screen, and 4 words at the bottom.   They select the word at the bottom that is closest in meaning to the word at the top. </i></p>  
            <br/>
            <p><strong>Here is an example: </strong>  </p>
            <p><strong>Select the word that is closest in meaning to the first word.</strong></p>
            <p>characteristics</p>
          
            <Form.Check
            inline
        type='radio'
        label={'A. situations '}
        id='A'/>
        <Form.Check
        inline
        type='radio'
        label={`B. features`}
        id='B'/>
        <Form.Check
        inline
        type='radio'
        label={'C. references'}
        id='C'/>
        <Form.Check
        inline
        type='radio'
        label={'D. references'}
        id='D'/>
   
      

 <p><i>The correct answer is B: features. </i></p>
    </div>
 </div>
 </div>
</fieldset>
<fieldset id="q4"  className="inactive-field">
 <div className="row">
    <div className="col-md-12 card">
        <div className="card-body">
             <h4>4. Grammar – Build a Sentence</h4>  
            <br/>
            <p>Students read a sentence on the screen that represents spoken English.  They see some words in boxes.  They need to move the boxes to form an appropriate and grammatically correct response to the first sentence.  One box will go to each blank.    </p>

                <img className="img-fluid" src={sentence} alt="sentence"/>

           
        </div>
  
    </div>
</div>
</fieldset>
<fieldset id="q5" className="inactive-field">
<div className="row">
    <div className="col-md-12 card">
        <div className="card-body">
            <h4>5. Grammar - Build a Question</h4>   
            <br/>
            <p>Students read a sentence on the screen that represents spoken English.  They see some words in boxes.  They need to move or select the boxes to form an appropriate and grammatically correct question in response to the first sentence.  One box will go to each blank.  In some items, not all the boxes will be used.</p>
            <img className="img-fluid" src={question} alt="question"/>
        </div>
    </div>
 </div>
 </fieldset> 
 <fieldset id="q6" className="inactive-field">
 <div className="row">
    <div className="col-md-12 card">
        <div className="card-body">
            <h4>6. Missing Letters  </h4>
            <br/>
            <p>Students read the beginning of a paragraph and fill in missing letters in the rest of the paragraph.  Each missing letter is represented by one blank; the number of blanks equals the number of missing letters in each word.  Typically, the first and last sentences will not have missing letters, but letters will be missing from the second half of every other word in the middle sentences.     </p>

             <img className="img-fluid" src={missing} alt="missing"/>
             <p>In this type of item, each word with missing letters represents a test question. For example, as shown in the sample paragraph above, the word n_ _ represents a test question and is scored as correct if completed as n<strong><u>o</u><u>t</u></strong>.</p>

 


</div>
 </div>
 </div>
 </fieldset>
</form>

<p>As seen in the examples above, of the six item types, questions in item types 1-3 (listening, vocabulary) are scored correct if the student selects the correct answer. For item types 4-5 (grammar), a question is scored correct if the blanks have all been filled with word boxes in the correct order. For item type 6 (missing letters), each word with missing letters is scored as correct if all missing letters have been entered to make the correct word. </p>
</div>
</div>
 <div className="row">
  <div className="col-md-12">
  
   <h3>Part B </h3>
    <hr/>
    <p>In this part of the ELC Entry test, students complete four tasks.</p>

                                  <ul id="progressbar">
    <li onClick={displayQuestion7}>Speaking: Read Aloud</li>
    <li onClick={displayQuestion8}>Speaking: Opinion</li>
    <li onClick={displayQuestion9}>Writing: E-mail</li>
    <li onClick={displayQuestion10}>Writing: Opinion</li>
  </ul>

  </div>
  </div>

  <div className="row">
        <div className="col-md-12">
        <form id="msform2">
 <fieldset id="q7">
  <div className="row">
  <div className="col-md-12 card">
        <div className="card-body">
        <h4>1. Speaking- Read Aloud </h4>
        <br/>
        <p>Students read aloud a paragraph. Students have 90 seconds to prepare to read and 90 seconds to read aloud. </p> 
        </div>
</div>
</div>
</fieldset>

 <fieldset id="q8" className="inactive-field">
  <div className="row">
  <div className="col-md-12 card">
        <div className="card-body">

        <h4>2. Speaking- Opinion </h4>
        <br/>
        <p>Students provide an opinion on an topic. Students have 60 seconds to prepare and 90 seconds to speak.  </p>

 </div>
 </div>
 </div>
 </fieldset>

 <fieldset id="q9" className="inactive-field">
 <div className="row">
  <div className="col-md-12 card">
        <div className="card-body">
        <h4>3. Writing- E-mail</h4> 
        <br/>
        <p>First, students read an e-mail. Then they write a response answering all the questions in the e-mail. Students must write full sentences. Students have 8 minutes to prepare and write. </p> 

 </div>
 </div>
 </div>
 </fieldset>

  <fieldset id="q10" className="inactive-field">
 <div className="row"></div>
  <div className="col-md-12 card">
        <div className="card-body">
        <h4>4. Write- Opinion</h4>
        <br/>
        <p>Students write a paragraph providing an opinion on a topic.  They must include reasons and examples to support the opinion. The paragraph should be between 100 and 150 words. Students have 10 minutes to prepare and write.  </p>

 </div>
 </div>
 </fieldset>

 </form>
        </div>
  </div>

</div>
</div>
  )

}

export default sample