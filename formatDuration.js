function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  const parts = [];

  for (let key in time) {
    const val = Math.floor(seconds / time[key]);
    parts.push(val > 0 ? `${val} ${key}` + (val > 1 ? 's' : '') : '');
    seconds = seconds % time[key];
  }

  const filteredParts = parts.filter(part => part !== '');
  const filteredPartsWithoutLast = filteredParts.slice(0, -1);
  const result = filteredPartsWithoutLast.length > 0 ? [filteredPartsWithoutLast.join(', '), filteredParts[filteredParts.length - 1]].join(' and ') : filteredParts[filteredParts.length - 1];

  return result;
}

console.log(formatDuration(61)); // 1 minute and 1 second
console.log(formatDuration(1)); // 1 second
console.log(formatDuration(3000601));  // 34 days, 17 hours, 30 minutes and 1 second