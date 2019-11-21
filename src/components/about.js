import React from "react"
import { Link } from "gatsby"
import Comments from "../components/comments"

const About = () => {
  return (
    <div>
      <Comments/>

      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-12">
            <h1>What Is ELC</h1>
            <hr/>
            <div className="image-what-is-elc">
            </div>
            <p>ELC is a comprehensive assessment system for English language learners around the world.</p>
<br/>
<p>It is added to / embedded in a language program curriculum and it begins with the <strong>ELC Entry Assessment</strong> that evaluates students’ proficiency at the beginning of a learning cycle and recommends an ELC assessment path.</p>
<br/>
  <p>A series of <strong>ELC leveled assessments</strong> are then administered throughout the learning process so students can document both short-term and long-term progress.</p>
<br/>
  <p>After completing and ELC assessment, schools, teachers, students and parents receive information on performance. This information includes:</p>
  <ul>
    <li>Overall scores</li>
    <li>Scores by skill areas</li>
    <li>Descriptive feedback for all four skills (Reading, Listening, Reading, and Writing)</li>
    <li>Predictive performance information on large-scale standardized tests such as TOEFL, IELTS</li>
    <li>CEFR and CSE associated levels</li>
    <li>Recommended new ELC path</li>
    <li>Recommended new set of learning objectives</li>
  </ul>


<p>All of this information is used to inform students, teachers, parents, and program administrators about the students’ strengths and areas that need improvement. It is also used to plan the next round of instruction cycles.</p>
<br/>
<h3>As A Teacher, What’s My Role?</h3>
<hr/>
<div className="image-test">
</div>

<p>Teachers are at the center of ELC and play key roles throughout the program. They also have a number of opportunities to grow professionally and to use ELC data for increased teaching effectiveness.</p>
<br/>
<p>Teachers receive <Link to="/app/teacher_training">training</Link> and <Link to="/app/support">support materials</Link> they can use in their classes to teach and monitor students' progress.</p>
<br/>
<p>Teachers may be asked to administer and proctor both the ELC Entry Assessment and the ELC Leveled Assessments.</p>
<br/>
<p>Teachers prepare students to take the different ELC assessments using an array of ELC practice and learning materials and they use ELC performance data for feedback and to inform lesson and course planning.</p>
                    
                    </div>
                </div>
            
            </div>
            </div>

  )
};

export default About