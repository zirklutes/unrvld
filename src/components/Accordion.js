import React, {useState} from 'react';
import '../styles/Accordion.scss';

const Accordion = (props) => {
    const {beer} = props;
    const [isActive, setIsActive] = useState('');

    const toggleAccordion = () => {
        setIsActive(isActive ? '' : 'active');
    }

    if (!beer) {return;}

    return (
        <div className="accordion">
            <button className={`accordion-header ${isActive}`} onClick={toggleAccordion}>
                <h4 className="accordion-title">{beer.name}</h4>
                <span className={`accordion-icon-open ${isActive}`}>+</span>
                <span className={`accordion-icon-closed ${isActive}`}>-</span>
            </button>
            <div className={`accordion-body ${isActive}`}>
                <div><span>{beer.tagline}</span></div>
                <div><span>{`First brew: ${beer.first_brewed}`}</span></div>
                <br/>
                <div><span>{beer.description}</span></div>
            </div>
        </div>
    );
  }
  
  export default React.memo(Accordion);