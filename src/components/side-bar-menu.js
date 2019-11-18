import React, {Component} from 'react';
import  $ from 'jquery'

  function displayfig1(){
    $('#all1').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-1').addClass('current-selection');
    $('.list-2').removeClass('current-selection');
    $('.list-3').removeClass('current-selection');
    $('.list-4').removeClass('current-selection');
    $('.list-5').removeClass('current-selection');
  }
  function displayfig2(){
    $('#grades1').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-2').addClass('current-selection');
    $('.list-1').removeClass('current-selection');
    $('.list-3').removeClass('current-selection');
    $('.list-4').removeClass('current-selection');
    $('.list-5').removeClass('current-selection');
  }
  function displayfig3(){
    $('#class1').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-3').addClass('current-selection');
    $('.list-1').removeClass('current-selection');
    $('.list-2').removeClass('current-selection');
    $('.list-4').removeClass('current-selection');
    $('.list-5').removeClass('current-selection');
  }
  function displayfig4(){
    $('#courses1').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-4').addClass('current-selection');
    $('.list-1').removeClass('current-selection');
    $('.list-2').removeClass('current-selection');
    $('.list-3').removeClass('current-selection');
    $('.list-5').removeClass('current-selection');
  }

  function displayfig5(){
    $('#teachers').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-5').addClass('current-selection');
    $('.list-1').removeClass('current-selection');
    $('.list-2').removeClass('current-selection');
    $('.list-3').removeClass('current-selection');
    $('.list-4').removeClass('current-selection');
  }

class SideMenu extends Component {


  render() {
    return (
    
    
        <>

         <p>Only group size >=25 are illustrated</p>
        <h2>Total Scores</h2>
        <ul className="mt-4">
<li className="list-1 sidebar-nav-link current-selection" onClick={displayfig1}><a href="#0">All test takers (n=144)</a></li>
<li className="list-2 sidebar-nav-link" onClick={displayfig2} ><a href="#0">Compare: between grades</a></li>
<li className="list-3 sidebar-nav-link" onClick={displayfig3}><a href="#0">Compare: between class (within-grade)</a></li>
<li className="list-4 sidebar-nav-link" onClick={displayfig4}><a href="#0">Compare: between courses</a></li>
<li className="list-5 sidebar-nav-link" onClick={displayfig5}><a href="#0">Compare: between teachers (within-grade)</a></li>
</ul>
        </>
     
    );
  }
}

export default SideMenu;