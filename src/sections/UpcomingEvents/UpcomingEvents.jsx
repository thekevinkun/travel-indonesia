import "./upcomingEvents.css";

import { useState } from "react";

import { data } from "../../constants";

const UpcomingEvents = () => {
  const [activeEvent, setActiveEvent] = useState("uluwatu");

  const handleClickEvent = (e) => {
    setActiveEvent(e.target.id);
  }

  return (
    <section id="events" className="events section__padding">
        <h2>UPCOMING EVENTS</h2>

        <p className="events__description">Here are the events that attract our travelers</p>

        <div className="events__list">
          { data.events.map((item) => (
              <div 
                key={item.id} 
                id={item.id} 
                className={`event ${activeEvent === item.id ? "event-active" : ""}`}
                onClick={(e) => handleClickEvent(e)}
              >
                <div className="event-price">
                  <p>{item.price}</p>
                </div>
                
                <img src={item.image} alt={item.title} />

                <div className="event-description">
                  <h3>{item.title}</h3>
                  <p>{item.day}</p>
                </div>
              </div>
          ))}
        </div>

        <div className="event__information">
          <div className="information-description">
            <h4>{data.events.find(item => item.id === activeEvent).location}</h4>
            <p>{data.events.find(item => item.id === activeEvent).description}</p>
          </div>

          <div className="information-gallery">
            { data.events.find(item => item.id === activeEvent).moreImage.map((item, index) => (
              <div key={index} className="gallery-image">
                <img src={item} alt="More event"/>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default UpcomingEvents;