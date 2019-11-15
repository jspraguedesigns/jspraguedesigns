import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import scores from '../../data/scores.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Window } from '@progress/kendo-react-dialogs';

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
          <GridColumn field="FirsName" title="First Name" />
          <GridColumn field="Last Name" title="Last Name" />
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