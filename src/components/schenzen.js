import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import scores from '../../data/scores.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Window } from '@progress/kendo-react-dialogs';
import  $ from 'jquery'
import fig1 from "../images/unnamed-chunk-2-1.png";
import fig2 from "../images/unnamed-chunk-3-1.png";
import fig3 from "../images/unnamed-chunk-4-1.png";
import fig4 from "../images/unnamed-chunk-5-1.png";
import fig5 from "../images/unnamed-chunk-6-1.png";
import fig6 from "../images/unnamed-chunk-8-1.png";
import fig7 from "../images/unnamed-chunk-9-1.png";
import fig8 from "../images/unnamed-chunk-10-1.png";
import fig9 from "../images/unnamed-chunk-11-1.png";
import fig10 from "../images/unnamed-chunk-12-1.png";

function display1 (){
  $('#id1').fadeIn('fast').siblings().fadeOut('fast');
  $('.tab1').addClass('selected').siblings().removeClass('selected');
}

function display2 (){
    $('#id2').fadeIn('fast').siblings().fadeOut('fast');
    $('.tab2').addClass('selected').siblings().removeClass('selected');
 
  }

  function display3(){
    $('#id3').fadeIn('fast').siblings().fadeOut('fast');
    $('.tab3').addClass('selected').siblings().removeClass('selected');
 
  }

class Schenzen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dropdownlistCategory: null,
      gridDataState: {
        sort: [
          { field: "ProductName", dir: "asc" }
        ],
        page: { skip: 0, take: 10 }
      },
      windowVisible: false,
      gridClickedRow: {}
    }
  }
  
  handleDropDownChange = (e) => {
    this.setState({
      dropdownlistCategory: e.target.value.CategoryID
    });
  }
  
  handleGridDataStateChange = (e) => {
    this.setState({gridDataState: e.data});
  }
  
  handleGridRowClick = (e) => {
    this.setState({
        windowVisible: true,
        gridClickedRow: e.dataItem
    });
  }
  
  closeWindow = (e) => {
    this.setState({
        windowVisible: false
    });
  }
  
  render() {
    return (
      <div>

        <section className="banner-score">
        <div className="banner_container">
        <h1 className="banner_title">ELC Entry Results</h1>
       </div>
       <div className="section_menu" id="global_menu">
       <ul>
         <li className="selected tab1" onClick={display1}><a href="#0" >Individual Level Scores</a></li>
         <li className="tab2" ><a href="#0"onClick={display2}>Total Scores</a></li>
         <li className="tab3" ><a href="#0"  onClick={display3}>Individual Scores</a></li>
</ul>
</div>
</section>
<form>
  <fieldset id="id1">
      <div className="container mt-4">
        <h1>Shen Zhen High School:<br/> ELC Entry Individual Level Scores</h1>
        <hr/>
        
        <Grid
          data={process(scores, this.state.gridDataState)}
          pageable={true}
          sortable={true}
          {...this.state.gridDataState}
          onDataStateChange={this.handleGridDataStateChange}
          style={{ height: "400px" }}
          onRowClick={this.handleGridRowClick}>
          <GridColumn field="StudentID" title="Student ID" />
          <GridColumn field="FirstName" title="First Name" />
          <GridColumn field="LastName" title="Last Name" />
          <GridColumn field="Grade" title="Grade" />
          <GridColumn field="Teacher" title="Teacher" />
          <GridColumn field="ELCEntryScore" title="ELC Entry Score" />
        </Grid>
        
        {this.state.windowVisible &&
          <Window
            title="Student Details"
            onClose={this.closeWindow}
            height={250}>
            <dl>
              <dt>First Name</dt>
              <dd>{this.state.gridClickedRow.FirstName}</dd>
              <dt>Last Name</dt>
              <dd>{this.state.gridClickedRow.LastName}</dd>
              <dt>Gender</dt>
              <dd>{this.state.gridClickedRow.Gender}</dd>
              <dt>ELC Entry Score</dt>
              <dd>{this.state.gridClickedRow.ELCEntryScore}</dd>
            </dl>
          </Window>
        }
        
      </div>
      </fieldset>
      <fieldset id="id2">
      <div className="container mt-4">
      <div className="row">
    
        <div className="sidebar col-md-4">

         <p>Only group size >=25 are illustrated</p>
        <h1>Total Scores</h1>
        <ul>
<li><a href="#all1">All test takers (n=144)</a></li>
<li><a href="#grades1">Compare: between grades</a></li>
<li><a href="#class1">Compare: between class (within-grade)</a></li>
<li><a href="#course1">Compare: between courses</a></li>
<li><a href="#teachers">Compare: between teachers (within-grade)</a></li>
</ul>
        </div>
        <div className="info-charts col-md-8">

              <div id="all1" className="col-md-12 mt-4">
        <h3>All test takers (n=144)</h3>
        <img className="img-fluid" src={fig1} alt="fig1"/>
        </div>

        <div id="grades1" className="col-md-12">
        <h3>Compare: between grades</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig2} alt="fig2"/>
        </div>
   
 
        <div id="class1" className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig3} alt="fig3"/>
        </div>


        <div id="courses1" className="col-md-12">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig4} alt="fig4"/>
        </div>
 

        <div id="teachers" className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig5} alt="fig5"/>
        </div>
        </div>

    
        </div>
        </div>
 </fieldset>
 <fieldset id="id3">
 <div className="container mt-4">
      <div className="row">
      
                <div className="sidebar col-md-4">

<p>Only group size >=25 are illustrated</p>
<h2>Category Scores</h2>

<ul>

<li><a href="#all2">All test takers (n=144)</a></li>
<li><a href="#grades2">Compare: between grades</a></li>
<li><a href="#class2">Compare: between class (within-grade)</a></li>
<li><a href="#courses2">Compare: between courses</a></li>
<li><a href="#compare2">Compare: between teachers (within-grade)</a></li>

</ul>
</div>

  <div className="info-charts col-md-8">
        <div id="all2" className="col-md-12">
       
        <h3 className="tag">All test takers (n=144)</h3>
        <img className="img-fluid" src={fig6} alt="fig6"/>
        </div>
  


        <div id="grades2" className="col-md-12">
        <h3>Compare: between grades</h3>
        <img className="img-fluid" src={fig7} alt="fig7"/>
        </div>


        <div id="class2" className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <img className="img-fluid" src={fig8} alt="fig8"/>
        </div>
 

        <div id="courses2" className="col-md-12">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig9} alt="fig9"/>
        </div>
  

        <div id="compare2" className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig10} alt="fig10"/>
        </div>
      </div>  
      </div>
      </div>
      </fieldset>
  </form>
 </div>
    );
  }
}

class checkboxColumn extends Component {
  render() {
    return (
        <td>
          <input type="checkbox" checked={this.props.dataItem[this.props.field]} disabled="disabled" />
        </td>
    );
  }
}

export default Schenzen;