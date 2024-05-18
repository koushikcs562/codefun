const pq = new MinPriorityQueue();

function insertElement() {
    const value = Math.floor(Math.random() * 100);
    pq.insert(value);
    updateQueueDisplay();
}

function extractMin() {
    const min = pq.extractMin();
    if (min !== null) {
        alert(`Extracted Min: ${min}`);
    } else {
        alert("Priority queue is empty!");
    }
    updateQueueDisplay();
}

function peekMin() {
    const min = pq.peekMin();
    if (min !== null) {
        alert(`Peek Min: ${min}`);
    } else {
        alert("Priority queue is empty!");
    }
}

function updateQueueDisplay() {
    const queueDiv = document.querySelector('.queue');
    queueDiv.innerHTML = '';

    pq.toArray().forEach(item => {
        const div = document.createElement('div');
        div.classList.add('queueItem');
        div.textContent = item;
        queueDiv.appendChild(div);
    });
}
