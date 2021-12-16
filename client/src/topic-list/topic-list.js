import Topic from '../topic/topic';
import './topic-list.css';

export default function TopicList({ topics }) {
  return (
    <div className="topics">
      {topics.map((topic) => (
        <Topic key={topic._id} topic={topic}></Topic>
      ))}
    </div>
  );
}
