let textarea = document.querySelector('.textarea');
let counter = document.querySelector('.counter');

 textarea.addEventListener("input", () => {
      const length = textarea.value.length;
      counter.textContent = `${length} / 250`;
      if(length >= 250){
       textarea.classList.add("after");
      }
      else if (length < 250){
        textarea.classList.remove("after");
      }
    });

   
