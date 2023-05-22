import React from 'react'
import { Card } from 'react-bootstrap'
import './Cards.css'

const SimpleCard = ({head}) => {
  return (
    <div>
        <Card
          // bg={'secondary'}
          // text='light'
          key={'Secondary'}
          style={{ width: '16rem' }}
          className="mb-2 simpleCard"
        >
          <Card.Header className='simplecard-head'>{head}</Card.Header>
          <Card.Body className='simplecard-desc'>
            {/* <Card.Title>{head} </Card.Title> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      
    </div>
  )
}

export default SimpleCard
