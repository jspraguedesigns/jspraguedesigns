import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import scores from '../../data/scores.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
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
import SideMenu from "../components/side-bar-menu";
import SideMenu2 from "../components/side-bar-menu-2";

import ModalDiagram from "../components/modal";
import {Link} from "gatsby"


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
          { field: "Grade", dir: "asc" }
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

      <div className="bodyelc">


        <section className="banner-score">
        <div className="banner_container">
        <h4 className="banner_title">ELC Entry Results</h4>
       </div>
       <div className="section_menu" id="global_menu">
       <ul>
         <li className="selected tab1" onClick={display1}><a href="#0" >Individual Level Scores</a></li>
         <li className="tab2" ><a href="#0"onClick={display2}>Total Score Group Comparison</a></li>
         <li className="tab3" ><a href="#0"  onClick={display3}>Category Scores Group Comparison</a></li>
</ul>
</div>
</section>
<form>
  <fieldset id="id1">
      <div className="container mt-4 mb-4">

        <Grid
          data={process(scores, this.state.gridDataState)}
          pageable={false}
          sortable={true}
          {...this.state.gridDataState}
          onDataStateChange={this.handleGridDataStateChange}
          style={{ height: "454px" }}
          onRowClick={this.handleGridRowClick}>
        
          <GridColumn field="FirstName" title="First Name" />
          <GridColumn field="LastName" title="Last Name" />
          <GridColumn field="ELCEntryScore" title="ELC Entry Score" />
          <GridColumn field="Grade" title="Grade" />
          <GridColumn field="Teacher" title="Teacher" />
      
        </Grid>
      
        <p className="mt-2"><i>For a more detailed explanation of ELC Entry Scoring, please read our <Link to="/app/scoring"> Score Calculation </Link>section.</i></p>
        
      </div>
      </fieldset>
      <fieldset id="id2">
      <div className="container">
      <div className="row">
    
        <div className="mt-4 sidebar col-md-4">

         <SideMenu/>
        </div>
        <div className="info-charts mt-4 col-md-8">
    
          <form>

          <fieldset id="all1">
            <div  className="col-md-12">
           <h3>All test takers </h3>
           <img className="img-fluid mt-4 mb-4" src={fig1} alt="fig1"/>
        

            </div>
          </fieldset>
          <fieldset id="grades1" >
            <div className="col-md-12 mb-4">
            <h3>Compare: between grades</h3>

             <img className="img-fluid mt-4 mb-2" src={fig2} alt="fig2"/>
           
            </div>
          
          </fieldset>

          <fieldset id="class1">
          <div  className="col-md-12 mb-4">
        <h3>Compare: between class (within-grade)</h3>
 
        <img className="img-fluid mt-4 mb-2" src={fig3} alt="fig3"/>
      
        </div>
          </fieldset>
 
   
          <fieldset id="courses1">
          <div  className="col-md-12 mb-4">
        <h3>Compare: between courses</h3>
        <img className="img-fluid mt-4 mb-2" src={fig4} alt="fig4"/>
     
        </div>
          </fieldset>


  <div className="row  d-flex mb-4">
        <div className="col">
        <i>Total number of test takers = 144</i>
        </div>
        <div className="ml-auto">
        <ModalDiagram/>
        </div>
        </div>

          </form>
        
        </div>

    
        </div>
   
  
        </div>
 </fieldset>
 <fieldset id="id3">
 <div className="container mt-4">
      <div className="row">
      
                <div className="sidebar col-md-4">
<SideMenu2/>
</div>

  <div className="info-charts col-md-8 mt-4">
 
  <form>
  <fieldset id="all2" >
  <div  className="col-md-12 mb-4">
       
       <h3 className="tag">All test takers</h3>
       <img className="img-fluid mb-2" src={fig6} alt="fig6"/>
    
       </div>
  </fieldset>
<fieldset id="grades2">
<div  className="col-md-12 mb-4">
        <h3>Compare: between grades</h3>
        <img className="img-fluid mt-4 mb-2" src={fig7} alt="fig7"/>
     
        </div>
</fieldset>


<fieldset id="class2" >

        <div className="col-md-12 mb-4">
        <h3>Compare: between class (within-grade)</h3>
        <img className="img-fluid mt-4 mb-2" src={fig8} alt="fig8"/>
      
        </div>
</fieldset>

 <fieldset id="courses2">
 <div  className="col-md-12 mb-4">
        <h3>Compare: between courses</h3>
        <img className="img-fluid mt-4 mb-2" src={fig9} alt="fig9"/>
       
        </div>
  
   </fieldset>

  <div className="row  d-flex mb-4">
        <div className="col">
        <i>Total number of test takers = 144</i>
        </div>
        <div className="ml-auto">
        <ModalDiagram/>
        </div>
        </div>
    
        </form>

      </div>  

 

      </div>
      
      </div>
      </fieldset>
  </form>

 </div>
    );
  }
}



export default Schenzen;