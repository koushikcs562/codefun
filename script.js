let stack = [];

function push() {
    const stackDiv = document.getElementById('stack');
    const newItem = document.createElement('div');
    newItem.classList.add('stack-item');
    newItem.textContent = stack.length + 1;
    stackDiv.prepend(newItem);
    stack.push(newItem);
    animatePush(newItem);
}

function pop() {
    if (stack.length === 0) return;
    const stackDiv = document.getElementById('stack');
    const removedItem = stack.pop();
    stackDiv.removeChild(removedItem);
    animatePop(removedItem);
}

function animatePush(newItem) {
    const stackItems = document.querySelectorAll('.stack-item');
    stackItems.forEach((item, index) => {
        item.style.transition = 'transform 0.5s'; // Add transition for smooth movement
        item.style.transform = `translateY(${(index + 1) * 30}px)`; // Move existing items up
    });

    // Highlight the newly added item
    newItem.style.backgroundColor = 'lightgreen';

    // Remove highlight after a short delay
    setTimeout(() => {
        newItem.style.backgroundColor = '';
    }, 500);
   
}

function animatePop(removedItem) {
    const stackItems = document.querySelectorAll('.stack-item');
    stackItems.forEach((item, index) => {
        if (item === removedItem) {
            item.style.transition = 'transform 0.5s'; // Add transition for smooth movement
            item.style.transform = `translateX(-100px)`; // Move the removed item to the left
        } else {
            item.style.transition = 'transform 0.5s'; // Add transition for smooth movement
            item.style.transform = `translateY(${index * 30}px)`; // Move the remaining items up
        }
    });

    // Highlight the removed item
    removedItem.style.backgroundColor = 'tomato';

    // Remove highlight after a short delay
    setTimeout(() => {
        removedItem.style.backgroundColor = '';
    }, 500);
}
