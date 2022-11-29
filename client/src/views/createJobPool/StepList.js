import React from 'react';


const StepList = ({step}) =>{
    return(
        <div className='d-flex job-pool-step'>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=1?"active-step":'step'}>1</div>
                <div className='step-name'>Project Name</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=2?"active-step":'step'}>2</div>
                <div className='step-name'>Brand</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=3?"active-step":'step'}>3</div>
                <div className='step-name'>Research type</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=4?"active-step":'step'}>4</div>
                <div className='step-name'>Study object</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=5?"active-step":'step'}>5</div>
                <div className='step-name'>Location</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=6?"active-step":'step'}>6</div>
                <div className='step-name'>Briefing Document</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=7?"active-step":'step'}>7</div>
                <div className='step-name'>Sampling</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=8?"active-step":'step'}>8</div>
                <div className='step-name'>Demographic</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=9?"active-step":'step'}>9</div>
                <div className='step-name'>Sectioning</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=10?"active-step":'step'}>10</div>
                <div className='step-name'>Questionnaire</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=11?"active-step":'step'}>11</div>
                <div className='step-name'>Time frame</div>
            </div>
            <div className='step-border'></div>
            <div className='step-container'>
                <div className={step >=12?"active-step":'step'}>12</div>
                <div className='step-name'>Preview</div>
            </div>
            <div className='step-border'></div>
            
        </div>
    )
}

export default StepList;