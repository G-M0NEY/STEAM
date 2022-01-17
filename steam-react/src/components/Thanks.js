import React from 'react'


function answerKey() {
    alert("ANSWER KEY:Number 1-Thomas Jefferson! | Number 2-1941! | Number 3-Snoopy! | Number 4-Calvin Coolidge! | Number 5-False!")
}

const Thanks = () => {
    return (
        <div>
            {/* // <!-- Quiz --> */}
      <fieldset class="bg-warning container mt-3 border border-secondary border-5 rounded">
        <h1 class="font-Lucida Console text-center">Fun Fact Guessing Game!</h1>
        <legend class="bg-danger border-light border-3 rounded p-1 text-light h4"><span class="text-warning">1)</span> Which President refused to recognize Thanksgiving as a National Holiday?</legend>
        <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
          <input class="form-check-input" type="radio" name="president" id="georgeBush1"></input>
          <label class="form-check-label" for="georgeBush1">
            George Bush
          </label>
        </div>
        <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
          <input class="form-check-input" type="radio" name="president" id="thomasJefferson2"></input>
          <label class="form-check-label" for="thomasJefferson2">
            Thomas Jefferson
          </label>
        </div>
        <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
          <input class="form-check-input" type="radio" name="president" id="barackObama2"></input>
          <label class="form-check-label" for="barackObama2">
            Barack Obama
          </label>
        </div>
        <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
          <input class="form-check-input" type="radio" name="president" id="abeLincoln2"></input>
          <label class="form-check-label" for="abeLincoln2">
            Abraham Lincoln
          </label>
        </div>
        <div>
          <legend class="bg-danger border-light border-3 rounded p-1 text-light h4"><span class="text-warning">2)</span> When was thanksgiving made into a NATIONAL Holiday?</legend>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="year" id="1776"></input>
            <label class="form-check-label" for="1776">
              1776
             </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="year" id="1942"></input>
            <label class="form-check-label" for="1942">
              1492
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="year" id="1941"></input>
            <label class="form-check-label" for="1941">
              1941
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="year" id="2017"></input>
            <label class="form-check-label" for="2017">
              2017
            </label>
          </div>
        </div>
        <div>
          <legend class="bg-danger border-light border-3 rounded p-1 text-light h4"><span class="text-warning">3)</span> Which TV Character has been in the MOST Macy's Thanksgiving Day Parades?</legend>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="character" id="charlieBrown"></input>
            <label class="form-check-label" for="charlieBrown">
              Charlie Brown
             </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="character" id="snoopy"></input>
            <label class="form-check-label" for="snoopy">
              Snoopy
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="character" id="garfield"></input>
            <label class="form-check-label" for="garfield">
              Garfield
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="character" id="mickeyMouse"></input>
            <label class="form-check-label" for="mickeyMouse">
              Mickey Mouse
            </label>
          </div>
        </div>
        <div>
          <legend class="bg-danger border-light border-3 rounded p-1 text-light h4"><span class="text-warning">4)</span> Which President was gifted a live racoon for Thanksgiving?</legend>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="president1" id="george"></input>
            <label class="form-check-label" for="george">
              George Washington
             </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="president1" id="carter"></input>
            <label class="form-check-label" for="carter">
              Jimmy Carter
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="president1" id="wilson"></input>
            <label class="form-check-label" for="wilson">
              Woodrow Wilson
            </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="president1" id="coolidge"></input>
            <label class="form-check-label" for="coolidge">
              Calvin Coolidge
            </label>
          </div>
        </div>
        <div>
          <legend class="bg-danger border-light border-3 rounded p-1 text-light h4"><span class="text-warning">2)</span> True or False: Turkey was eaten at the FIRST Thanksgiving</legend>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="either" id="true"></input>
            <label class="form-check-label" for="true">
              True
             </label>
          </div>
          <div class="form-check-inline p-2 bg-danger border border-3 border-secondary rounded text-light m-2 h6">
            <input class="form-check-input" type="radio" name="either" id="false"></input>
            <label class="form-check-label" for="false">
              False
            </label>
          </div>
        </div>
        <button className='m-1' onClick={answerKey}>Answer Key</button>
      </fieldset>
        </div>
    )
}

export default Thanks
