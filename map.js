let hashMap = new Map();

function addElement() {
    let key = Math.floor(Math.random() * 100); // Generate a random key
    let value = Math.random().toString(36).substring(7); // Generate a random value
    hashMap.set(key, value);
    visualizeHashMap('add', key, value);
}

function removeElement() {
    if (hashMap.size > 0) {
        let keys = Array.from(hashMap.keys());
        let indexToRemove = Math.floor(Math.random() * keys.length); // Choose a random index to remove
        let keyToRemove = keys[indexToRemove];
        let valueToRemove = hashMap.get(keyToRemove);
        hashMap.delete(keyToRemove);
        visualizeHashMap('remove', keyToRemove, valueToRemove);
        updateSizeDisplay();
    }
}



function resizeHashMap() {
    // For demonstration purposes, let's just log the resizing operation
    console.log("HashMap resized");
}

function visualizeHashMap(operation, key, value) {
    let container = document.getElementById('hashMapContainer');

    if (operation === 'remove') {
        let buckets = document.querySelectorAll('.bucket');
        let bucketToRemove = Array.from(buckets).find(bucket => bucket.textContent.includes(`${key}: ${value}`));

        // Remove the element from the container
        container.removeChild(bucketToRemove);

        document.getElementById('operationMessage').textContent = `Removed element: ${key}: ${value}`;
    } else {
        let bucket = document.createElement('div');
        bucket.classList.add('bucket');
        bucket.textContent = `${key}: ${value}`;

        container.appendChild(bucket);

        // Highlight the action
        if (operation === 'add') {
            bucket.classList.add('added');
            document.getElementById('operationMessage').textContent = `Added element: ${key}: ${value}`;
        } else if (operation === 'search') {
            bucket.classList.add('searched');
            document.getElementById('operationMessage').textContent = `Searched element: ${key}: ${value}`;
        }

        setTimeout(() => {
            clearHighlight(bucket);
        }, 1500);
    }
}


function clearHighlight(bucket) {
    bucket.classList.remove('added', 'removed', 'searched');
    document.getElementById('operationMessage').textContent = '';
}

function updateSizeDisplay() {
    let sizeDisplay = document.getElementById('sizeDisplay');
    sizeDisplay.textContent = `HashMap size: ${hashMap.size}`;
}




