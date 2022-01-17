import React from 'react'
import './components.css'

function answerKey() {
    alert("ANSWER KEY:Number 1-Turnip! | Number 2-2625 Pounds! | Number 3-Ireland | Number 4-True! | Number 5-True!")
}

function Halloween() {
    return (
        <fieldset class="bg-warning container mt-3 p-3 border border-dark border-5 rounded">
            
                <h1 class="heading">Halloween Activity!</h1>
                <div class="quiz p-1">
                    <legend class="question">The first Jack O' Lanterns were made out of what?</legend>
                    {/* <!-- Correct Answer-Turnip -->  */}
                    <div>
                        <input type="radio" id="pumpkin" name="cheese" value="pumpkin"></input>
                        <label for="pumpkin">Pumpkin</label>
                        <input type="radio" name="cheese" id="cantoleuope" value="cantoleuope"></input>
                        <label for="cantoleuope">Cantoleuope</label>
                        <input type="radio" name="cheese" id="turnip" value="turnip"></input>
                        <label for="turnip">Turnip</label>
                        <input type="radio" name="cheese" id="watermelon" value="watermelon"></input>
                        <label for="watermelon">Watermelon</label>
                    </div>
                </div>
                <div class="quiz p-1">
                    <legend class="question">How heavy do you think the worlds largest pumpkin was?</legend>
                    {/* <!-- Correct Answer-2625 --> */}
                    <div>
                        <input type="radio" name="wieght" id="2145lbs" value="2145lbs"></input>
                        <label for="2145lbs">2145 Lbs</label>
                        <input type="radio" name="wieght" id="1455lbs" value="1455lbs"></input>
                        <label for="1455lbs">1455 Lbs</label>
                        <input type="radio" name="wieght" id="3456" value="3456"></input>
                        <label for="3456">3456 Lbs</label>
                        <input type="radio" name="wieght" id="2625" value="2625"></input>
                        <label for="2625">2625 Lbs</label>
                    </div>
                </div>
                <div class="quiz p-1">
                    <legend class="question">What country was Halloween supposedly started in?</legend>
                    {/* <!-- Correct Answer-Ireland --> */}
                    <div>
                        <input type="radio" name="country" id="ireland" value="ireland"></input>
                        <label for="ireland">Ireland</label>
                        <input type="radio" name="country" id="usa" value="usa"></input>
                        <label for="usa">United States of America</label>
                        <input type="radio" name="country" id="mexico" value="mexico"></input>
                        <label for="mexico">Mexico</label>
                        <input type="radio" name="country" id="germany" value="germany"></input>
                        <label for="germany">Germany</label>
                    </div>
                </div>
                <div class="quiz p-1">
                    <legend class="question">True or False: Halloween has been around since medival times.</legend>
                    <div>
                        <input type="radio" name="option" id="false" value="false"></input>
                        <label for="false">False</label>
                        <input type="radio" name="option" id="true" value="true"></input>
                        <label for="true">True</label>
                    </div>
                </div>
                <div class="quiz p-1">
                    <legend class="question">True or False: Halloween is the second most popular holiday in the US.</legend>
                    <div>
                        <input type="radio" name="halloween" id="holiday" value="holiday"></input>
                        <label for="holiday">True</label>
                        <input type="radio" name="halloween" id="popular" value="popular"></input>
                        <label for="popular">False</label>
                    </div>
                </div>
                <button className='m-1' onClick={answerKey}>Answer Key</button>
            
        </fieldset>
    )
}

export default Halloween
