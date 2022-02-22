import React from 'react';
import PropTypes from 'prop-types';
 import './card.css';
 import {Col,Row} from 'react-bootstrap'
 import ChatIcon from '@material-ui/icons/Chat';
 
const Card = ({
  imagePosition,
  classNamePrefix,
  cardOption,
  renderImage,
  markAsRead,
  data
}) => {
  const {
    image, message, receivedTime, detailPage
  } = data;
  console.log(data)

  const classNameGenerator = () => {
    const prefix = classNamePrefix ? `${classNamePrefix}-` : '';
    const classes = {
      card: `${prefix}card`,
      content: `${prefix}content`,
      image: `${prefix}image`,
      options: `${prefix}options`,
      option: `${prefix}option`,
      message: `${prefix}message`,
      text: `${prefix}text`,
      time: `${prefix}time`
    };
    return classes;
  };

  const classes = classNameGenerator();

  return (
    <div className={classes.card}>
      <a href={detailPage} className="card-link">
        <div
          className={classes.content}
          style={
            imagePosition === 'right' ? { flexDirection: 'row-reverse' } : {}
          }
        >
          {renderImage && (
            <div className={classes.image}>
              {/* <img src={image} alt="Person " /> */}
              <img src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" alt="Person " /> 

            </div>
          )}
          <div className={classes.message}>
            <div className={classes.text}>{data.firstName} need HELP !<br/>to Contact <br/> <ChatIcon/></div>
            {receivedTime && <div className={classes.time}>{receivedTime}</div>}
          </div>
        </div>
      </a>
      <div className={classes.options}>
        {cardOption && (
          <div className={classes.option} onClick={() => cardOption(data)}>
            &hellip;
          </div>
        )}
        {markAsRead && (
          <div
            className={classes.option}
            title="Mark as Read"
            onClick={() => markAsRead(data)}
          >
            &bull;
          </div>
        )}
      </div>
    </div>
  );
};


Card.defaultProps = {
  renderImage: true,
  imagePosition: 'left',
  markAsRead: null,
  data: null,
  classNamePrefix: null,
  cardOption: null
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.any,
    receivedTime: PropTypes.string,
    detailPage: PropTypes.string
  }),
  renderImage: PropTypes.bool,
  markAsRead: PropTypes.func,
  cardOption: PropTypes.func,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  classNamePrefix: PropTypes.string
};


/*
 {/* <>
    <Row>
    <Col lg={4}>
    <img className="image" src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"/>
    
    </Col>
    <Col lg={8}>
    <p className="messageNotify">
      {data.firstName} nedd your help
    </p>
    </Col>
    </Row>
    
    </> 
 */
export default Card
