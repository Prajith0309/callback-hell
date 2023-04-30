const text = document.querySelector('.text')
const ctdown = document.querySelector('.countdown')



function countdown(num, callback) {
    function iterate() {
    text.innerText = num;
      num--;
      if (num >= 0) {
        setTimeout(iterate, 1000);
      } else {
        text.style.display = "none"
        callback();
      }
    }
    iterate();
  }
  
  countdown(10, function() {
    ctdown.innerText = 'HAPPY INDEPENDENCE DAY !'
  });
  

