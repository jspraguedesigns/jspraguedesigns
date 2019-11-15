import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import scores from '../../data/scores.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Window } from '@progress/kendo-react-dialogs';
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
      <div className="kendo-react-getting-started">
        <h2>Shen Zhen High School: ELC Entry Individual Level Scores</h2>
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
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Scoring Details</h2>
        </div>
      </div>

      <div className="row mt-4 mb-4">
        <div className="col-md-6">
        <h3>Total Scores</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig1} alt="fig1"/>
        </div>
        <div className="col-md-6">
        <h3>Compare: between grades</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig2} alt="fig2"/>
        </div>
        </div>
        <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig3} alt="fig3"/>
        </div>
      </div>

          <div className="row mb-4">
        <div className="col-md-6">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig4} alt="fig4"/>
        </div>
      </div>

        <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig5} alt="fig5"/>
        </div>
      </div>


  <div className="row mb-4">
        <div className="col-md-12">
        <h3>Category Scores</h3>
        <h2 className="tag">All test takers (n=144)</h2>
        <img className="img-fluid" src={fig6} alt="fig6"/>
        </div>
      </div>


  <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between grades</h3>
        <img className="img-fluid" src={fig7} alt="fig7"/>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between class (within-grade)</h3>
        <img className="img-fluid" src={fig8} alt="fig8"/>
        </div>
      </div>  

          <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between courses</h3>
        <img className="img-fluid" src={fig9} alt="fig9"/>
        </div>
      </div>  

          <div className="row mb-4">
        <div className="col-md-12">
        <h3>Compare: between teachers (within-grade)</h3>
        <img className="img-fluid" src={fig10} alt="fig10"/>
        </div>
      </div>  
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