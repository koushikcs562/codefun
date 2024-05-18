document.addEventListener("DOMContentLoaded", function() {
    const pushBtn = document.getElementById("pushBtn");
    const popBtn = document.getElementById("popBtn");
    const container = document.getElementById("container");
    const arrow=document.getElementById("bar")
    let currentIndex = 6; // Starting index for newly added elements
  
    pushBtn.addEventListener("click", function() {
      const newBox = document.createElement("div");
      newBox.textContent = currentIndex++;
      newBox.classList.add("box");
      container.appendChild(newBox);
      animatePush(newBox);
      moveArrowLeft();
    });

    function moveArrowLeft() {
        const boxes = document.querySelectorAll(".box");
        if (boxes.length > 0) {
          const lastBox = boxes[boxes.length - 1];
          const boxRect = lastBox.getBoundingClientRect();
          arrow.style.left = `${boxRect.right}px`; // Move arrow to the right of the last added element
        } else {
          arrow.style.left = "0"; // Move arrow back to initial position if queue is empty
        }
      }

      
      
  
    popBtn.addEventListener("click", function() {
      const firstBox = document.querySelector(".box");
      if (firstBox) {
        animatePop(firstBox);
      } else {
        console.log("Queue is empty!");
      }
    });
  
    function animatePush(element) {
      element.classList.add("slide-in");
      setTimeout(() => {
        element.classList.remove("slide-in");
      }, 1000);
      moveArrow();
    }
  
    function animatePop(element) {
      element.classList.add("slide-out");
      setTimeout(() => {
        element.remove();
      }, 1000);
    }
  });
  