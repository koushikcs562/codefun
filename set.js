let hashSet = new Set();

function addElement() {
    let element = Math.floor(Math.random() * 100); // Generate a random number as the element
    hashSet.add(element);
    visualizeHashSet('add', element);
}

function removeElement() {
    if (hashSet.size > 0) {
        let elements = Array.from(hashSet);
        let indexToRemove = Math.floor(Math.random() * elements.length); // Choose a random index to remove
        let elementToRemove = elements[indexToRemove];
        hashSet.delete(elementToRemove);
        visualizeHashSet('remove', elementToRemove);
        getHashSetSize(); // Update HashSet size after removing an element
    }
}

function getHashSetSize() {
    let sizeDisplay = document.getElementById('setSizeDisplay');
    if (hashSet.size === 0) {
        sizeDisplay.textContent = "HashSet is empty";
    } else {
        sizeDisplay.textContent = `HashSet size: ${hashSet.size}`;
    }
}

function visualizeHashSet(operation, element) {
    let container = document.getElementById('hashSetContainer');
    container.innerHTML = ''; // Clear previous visualization

    hashSet.forEach(val => {
        let div = document.createElement('div');
        div.classList.add('hashSetElement');
        div.textContent = val;
        container.appendChild(div);
    });

    if (operation === 'add') {
        
        addedElement.classList.add('added');
        document.getElementById('operationMessage').textContent = `Added element: ${element}`;
    } else if (operation === 'remove') {
        let removedElement = document.querySelector(`.hashSetElement:nth-child(${elements.indexOf(element) + 1})`);
        removedElement.classList.add('removed');
        document.getElementById('operationMessage').textContent = `Removed element: ${element}`;
    }
    
    setTimeout(() => {
        clearHighlight();
    }, 1500);

    // Update size display
    getHashSetSize();
}

function clearHighlight() {
    let elements = document.querySelectorAll('.hashSetElement');
    elements.forEach(element => {
        element.classList.remove('added', 'removed');
    });
    document.getElementById('operationMessage').textContent = '';
}
