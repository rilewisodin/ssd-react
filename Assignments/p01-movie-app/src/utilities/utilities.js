import { MAX_OVERVIEW } from '../globals/globals.js';

// Utilities
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

function convertDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function convertRating(rating) {
  return (parseFloat(rating) * 10).toFixed(2) + "%";
}

function truncateOverview(overview) {
  return overview.length > MAX_OVERVIEW ? overview.substring(0, MAX_OVERVIEW) + '...' : overview;
}

export { getYear, convertDate, convertRating, truncateOverview }
