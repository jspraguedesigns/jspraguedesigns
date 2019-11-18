import React, {Component} from 'react';
import  $ from 'jquery'

  function displayfig6(){
    $('#all2').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-6').addClass('current-selection');
    $('.list-7').removeClass('current-selection');
    $('.list-8').removeClass('current-selection');
    $('.list-9').removeClass('current-selection');
    $('.list-10').removeClass('current-selection');
  }
  function displayfig7(){
    $('#grades2').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-7').addClass('current-selection');
    $('.list-6').removeClass('current-selection');
    $('.list-8').removeClass('current-selection');
    $('.list-9').removeClass('current-selection');
    $('.list-10').removeClass('current-selection');
  }
  function displayfig8(){
    $('#class2').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-8').addClass('current-selection');
    $('.list-6').removeClass('current-selection');
    $('.list-7').removeClass('current-selection');
    $('.list-9').removeClass('current-selection');
    $('.list-10').removeClass('current-selection');
  }
  function displayfig9(){
    $('#courses2').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-9').addClass('current-selection');
    $('.list-6').removeClass('current-selection');
    $('.list-7').removeClass('current-selection');
    $('.list-8').removeClass('current-selection');
    $('.list-19').removeClass('current-selection');
  }

  function displayfig10(){
    $('#compare2').fadeIn('fast').siblings().fadeOut('fast');
    $('.list-10').addClass('current-selection');
    $('.list-6').removeClass('current-selection');
    $('.list-7').removeClass('current-selection');
    $('.list-8').removeClass('current-selection');
    $('.list-9').removeClass('current-selection');
  }

class SideMenu2 extends Component {


  render() {
    return (
    
    
        <>

    

<p>Only group size >=25 are illustrated</p>
<h2>Category Scores</h2>

<ul className="mt-4">

<li className="list-6 sidebar-nav-link current-selection" onClick={displayfig6}><a href="#0">All test takers (n=144)</a></li>
<li className="list-7 sidebar-nav-link"  onClick={displayfig7}><a href="#0">Compare: between grades</a></li>
<li className="list-8 sidebar-nav-link"  onClick={displayfig8}><a href="#0">Compare: between class (within-grade)</a></li>
<li className="list-9 sidebar-nav-link"  onClick={displayfig9 }><a href="#0">Compare: between courses</a></li>
<li className="list-10 sidebar-nav-link" onClick={displayfig10}><a href="#compare2">Compare: between teachers (within-grade)</a></li>

</ul>
        </>
     
    );
  }
}

export default SideMenu2;