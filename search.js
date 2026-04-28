    function filterByCategory() {
    console.log("Attempting to sort...")
    const selection = document.getElementById('categoryFilter').value;

    const boards = document.querySelectorAll('.filterable');

    boards.forEach(board => {
        if (selection === "all") {
            board.classList.remove('hidden');
        } else {
            if (board.id === selection) {
                board.classList.remove('hidden');
            } else {
                board.classList.add('hidden');
            }
        }
    });
}

function openGallery(el) {
    console.log("Opening gallery for", el);
}