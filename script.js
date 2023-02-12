//your code here
const app = document.getElementById('app');
const issuesList = document.getElementById('issues_list');
const pageNumber = document.getElementById('page_number');
const loadPrev = document.getElementById('load_prev');
const loadNext = document.getElementById('load_next');

let currentPage = 1;

const fetchIssues = (page) => {
  return fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then(response => response.json())
    .then(data => {
      // Clear the current issues list
      while (issuesList.firstChild) {
        issuesList.removeChild(issuesList.firstChild);
      }

      // Display the new issues
      data.forEach(issue => {
        const listItem = document.createElement('li');
        listItem.innerText = issue.title;
        issuesList.appendChild(listItem);
      });
    });
};
	
loadNext.addEventListener('click', () => {
  currentPage += 1;
  fetchIssues(currentPage);
  pageNumber.innerText = `Page number ${currentPage}`;
});
	
loadPrev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    fetchIssues(currentPage);
    pageNumber.innerText = `Page number ${currentPage}`;
  }
});
	
// Load the first page of issues on page load
fetchIssues(currentPage);