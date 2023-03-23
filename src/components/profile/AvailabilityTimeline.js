import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const AvailabilityTimeline = () => {
  return (
    <div
      style={{
        margin: '30px 0px 20px 0px ',
        boxShadow: '0px 0px 2px 1px #616161',
        borderRadius: 10,
        flexWrap: 'wrap',
        paddingBottom: '15px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          borderRadius: '20px',
          padding: '10px 0',
          margin: '8px 5px 5px 5px',
          background: 'white',
          marginTom: 50,
          boxShadow: '0px 0px 2px 1px #616161',
          flexWrap: 'wrap',
        }}
      >
        Availability
      </div>
      <div
        style={{
          background: '#0003',
          margin: '10px 10px 10px 10px',
          borderRadius: 10,
        }}
      >
        <div>
          <VerticalTimeline animate="false" lineColor="#454545">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
              }}
              visible={true}
              date="Friday 
              -  March 24"
              iconStyle={{
                background: '#454545',
                color: 'green',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Saturday 
              -  March 26"
              iconStyle={{
                background: '#454545',
                color: 'green',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
                // height: 70,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Sunday 
              -  March 27"
              iconStyle={{
                background: '#454545',
                color: 'green',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Monday 
              -  March 27"
              iconStyle={{
                background: '#454545',
                color: 'black',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
                // height: 70,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Tuesday 
              -  March 28"
              iconStyle={{
                background: '#454545',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
                // height: 70,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Wednesday 
              -  March 29"
              iconStyle={{
                background: '#454545',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'white',
                color: '#fff',
                borderRadius: 50,
                width: 210,
                // height: 70,
              }}
              visible={true}
              contentArrowStyle={
                {
                  // animation: 'none',
                }
              }
              date="Thursday 
              -  March 30"
              iconStyle={{
                background: '#454545',
                MarginLeft: '50px',
                width: 48,
                height: 20,
                marginTop: 22,
              }}
              position={'right'}
            >
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00AM - 04:00 PM
              </h6>
              <h6
                className="vertical-timeline-element-title"
                style={{ color: 'black' }}
              >
                09:00PM - 12:00 AM
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default AvailabilityTimeline
