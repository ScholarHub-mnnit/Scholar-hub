function YYYYMMDD(dateString) {
    const [day, month, year] = dateString.split('/'); // Split into day, month, and year
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`; // Reformat to YYYY-MM-DD
  }

export default YYYYMMDD