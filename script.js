// Function to open project details
function openProjectDetails(id) {
    // Hide all project details
    document.querySelectorAll('.project-details').forEach(detail => {
        detail.style.display = 'none'; // Hide all other project details
    });

    // Show the selected project details
    const selectedDetail = document.getElementById(id);
    if (selectedDetail) {
        selectedDetail.style.display = 'block'; // Display the selected project detail
        // Optional: Smooth scrolling to the details section
        selectedDetail.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
