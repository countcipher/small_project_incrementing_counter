const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {
        const target = +counter.dataset.target;//Adding a plus sign makes this a number

        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target;
        }
    }

    updateCounter();
});