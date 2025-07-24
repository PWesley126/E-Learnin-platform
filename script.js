function goToCourse(courseName) {
  const encoded = encodeURIComponent(courseName);
  window.location.href = `course.html?course=${encoded}`;
}
