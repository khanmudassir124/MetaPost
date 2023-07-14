const baseUrl = 'https://hn.algolia.com/api/v1/';
const ApiEndPoints = {
  getPost: (page_number: string) =>
    `${baseUrl}search_by_date?tags=story&page=${page_number}`,
};
export default ApiEndPoints;
