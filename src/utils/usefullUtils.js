import axios from "axios";

export const filteredHundredId = 'https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
  
export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl}${storyId}.json`);
  return result.data;
};

export const getStoryIds = async () => {
  const result = await axios.get(filteredHundredId);
  return result.data;
};

export const getComments = async (storyId) => {
  const result = await axios.get(`${storyUrl}${storyId}.json`);
  return result.data;
};

export const timeConverter=(UNIX_timestamp)=>{
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
