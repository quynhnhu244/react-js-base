import Topic from '../../models/Topic';
import { TOPIC_FETCH_BY_PARENT_ID, TOPIC_SET_DATA } from '../actions/types';

export interface TopicAction {
  type: string;
  parentId?: number;
  topic?: Array<Topic>;
}

export function fetchTopicByParentId(parentId: number): TopicAction {
  return {
    type: TOPIC_FETCH_BY_PARENT_ID,
    parentId
  };
}

export function set(topic: any): TopicAction {
  return {
    type: TOPIC_SET_DATA,
    topic
  };
}