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
      <div>

        <section className="banner-score">
        <div className="banner_container">
        <h1 className="banner_title">Shen Zhen High School: ELC Entry Results</h1>
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
      <div className="container mt-4">
        <h2>Individual Level Scores</h2>
        <hr/>
        
        <Grid
          data={process(scores, this.state.gridDataState)}
          pageable={true}
          sortable={true}
          {...this.state.gridDataState}
          onDataStateChange={this.handleGridDataStateChange}
          style={{ height: "400px" }}
          onRowClick={this.handleGridRowClick}>
        
          <GridColumn field="FirstName" title="First Name" />
          <GridColumn field="LastName" title="Last Name" />
          <GridColumn field="ELCEntryScore" title="ELC Entry Score" />
          <GridColumn field="Grade" title="Grade" />
          <GridColumn field="Teacher" title="Teacher" />
      
        </Grid>

        
      </div>
      </fieldset>
      <fieldset id="id2">
      <div className="container">
      <div className="row">
    
        <div className="mt-4 sidebar col-md-4">

         <SideMenu/>
        </div>
        <div className="info-charts col-md-8">
          <form className="mt-4">

          <fieldset id="all1">
            <div  className="col-md-12">
           <h3>All test takers (n=144)</h3>
           <img className="img-fluid" src={fig1} alt="fig1"/>
            </div>
          </fieldset>
          <fieldset id="grades1" >
            <div className="col-md-12">
            <h3>Compare: between grades</h3>
             <h2 className="tag">All test takers (n=144)</h2>
             <img className="img-fluid" src={fig2} alt="fig2"/>
            </div>
          </fieldset>

          <fieldset id="class1">
          <div  className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig3} alt="fig3"/>
        </div>
          </fieldset>
 
   
          <fieldset id="courses1">
          <div  className="col-md-12">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig4} alt="fig4"/>
        </div>
          </fieldset>


        <fieldset id="teachers">
        <div  className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig5} alt="fig5"/>
        </div>
        </fieldset>

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

  <div className="info-charts col-md-8">
  <form className="mt-4">
  <fieldset id="all2" >
  <div  className="col-md-12 ">
       
       <h3 className="tag">All test takers (n=144)</h3>
       <img className="img-fluid" src={fig6} alt="fig6"/>
       </div>
  </fieldset>
<fieldset id="grades2">
<div  className="col-md-12">
        <h3>Compare: between grades</h3>
        <img className="img-fluid" src={fig7} alt="fig7"/>
        </div>
</fieldset>


<fieldset id="class2" >

        <div className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <img className="img-fluid" src={fig8} alt="fig8"/>
        </div>
</fieldset>

 <fieldset id="courses2">
 <div  className="col-md-12 ">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig9} alt="fig9"/>
        </div>
  
   </fieldset>

 <fieldset  id="compare2">
 <div className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig10} alt="fig10"/>
        </div>
 </fieldset>

    
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