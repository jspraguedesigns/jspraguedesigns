import React from 'react'
import Comments from '../components/comments'

const ScoreCalculation = () => {
    return (
        <div>
        <Comments/>
      
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Score Calculation</h1>
                    <hr />
           

            <p>The ELC Entry Test has six measures: Listening, Vocabulary, Grammar, Reading, Speaking, and Writing. The Speaking and Writing sections are not scored. Items in the remaining four measures (Listening, Vocabulary, Grammar, Reading) can all be scored as right or wrong. The following text describes the scores in these four test sections.</p>
            <br/>
            <p>Items in the Listening, Vocabulary, Grammar, and Reading measures are delivered as a two-stage adaptive test – selection of the Stage 2 panel form is determined by performance on the Stage 1 router. Scores for the total test and each of the four measures are based on performance on both stages of the test.</p>
            <br/>
            <p>For each test taker, number correct scores, referred to as raw scores, are calculated as the sum of the item scores from both stages. Raw scores are converted to scale scores for reporting purposes through a process known as equating. This process accounts for minor variations in difficulty among different test forms as well as differences in difficulty among individuals’ tests introduced by the stage-level adaption. Thus, a given scale score reflects the same level of performance across test takers and forms regardless of which Stage 2 panel was selected.</p>
            <br/>
            <p>Scale scores for the total test range from 110-170. Category scale scores (scores for each measure) range from 11-20. The score increment is 1. Table 1 summarizes the number of items and scale score ranges for the four category scores and the total score.</p>
                    <div className="table mt-4 mb-4">
                    <i>Table 1 Number of items and scale score range</i><br/><br/>
                    <table>
                       
                        <tr> 
                            <th>
                            Measure
                         </th>
                         <th>
                         Number of Items
                         </th>
                         <th>
                         Scale Score Range
                         </th>
                         </tr>
                       <tr>
                           <td>
                           <strong>Listening</strong>
                           </td>
                           <td>
                           15
                           </td>
                            <td>
                            11-20
                            </td>
                       </tr>
                       <tr>
                           <td>
                           <strong>Vocabulary</strong>
                           </td>
                           <td>
                           15
                           </td>
                           <td>
                           11-20
                           </td>
                       </tr>
                       <tr>
                           <td>
                           <strong>Grammar</strong>
                           </td>
                           <td>
                           15
                            </td>
                            <td>
                            11-20
                            </td>
                       </tr>
                       <tr>
                           <td><strong>Reading</strong></td>
                           <td>20</td>
                           <td>11-20</td>
                       </tr>
                       <tr>
                           <td><strong>Total</strong></td>
                           <td>65</td>
                           <td>110-170</td>
                       </tr>
                    </table>
                    </div>
                    <br/>
                    <h3>Score Interpretation</h3>
                    <hr/>
<p>The ELC Entry total scale score is reported to the individual test taker. Total scale score can be used to compare individual students. Due to the limited number of items, category scale scores are not appropriate for individual reporting, but rather provided for aggregation at the grade, class, course, or teacher level, as applicable. Only groups with sample size larger than 25 are reported. Comparisons may be made across groups for relative performance on the same measure.</p>
                    </div>
                </div>
                  
                </div>
            </div>
            

    )
};

export default ScoreCalculation