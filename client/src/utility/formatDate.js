function formatDate(timestamp) {
  const date = new Date(timestamp);
  
  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so we add 1
  const year = date.getFullYear();
  
  // Return in dd/mm/yyyy format
  return `${day}/${month}/${year}`;
  }

  export default formatDate