import React from 'react';
import moment from 'moment';
import './topic.css';

export default function Topic({ topic }) {
  return (
    <div className="topic">
      <div className="vote">
        <button>
          <i className="fas fa-arrow-up"></i>
        </button>
        <span>{topic.score}</span>
        <button>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="info">
        <h2>{topic.title}</h2>
        <p>{moment(topic.createdAt).format('do MMM')}</p>
      </div>
      <div className="delete">
        <button>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
