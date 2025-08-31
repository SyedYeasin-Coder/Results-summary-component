const sec = document.getElementById("section-con")
fetch('./data.json')
    .then(res => {
        if (!res.ok) {
            console.log("Problem");
            return;
        }
        return res.json();
    })
    .then(data => {
        data.forEach(post => {
            const markup = `
            <div class="section ${post.category}">
            <div class="icon"><img src="${post.icon}" alt=""></div>
            <div class="value-container">
              <p class="attribute">${post.category}</p> <span><b>${post.score}</b><span class="total-value"> / 100</span></span>
            </div>
          </div>
        ` ;
            sec.insertAdjacentHTML('beforeend', markup)
        });
    })
    .catch(error => console.log(error));