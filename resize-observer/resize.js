document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        const boxes = document.querySelectorAll('.box');

        const myObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const infoEl = entry.target.querySelector('.info');
                const width = Math.floor(entry.contentRect.width);
                const height = Math.floor(entry.contentRect.height);

                const angle = Math.floor(width / 360 * 100);
                const gradient = `linear-gradient(${ angle }deg, #E88EA5 50%, #900C3F 50%)`;

                entry.target.style.background = gradient;

                infoEl.innerText = `W: ${ width }px , H: ${ height }px`;
            }
        });

        boxes.forEach(box => {
            myObserver.observe(box);
        });
    }
});