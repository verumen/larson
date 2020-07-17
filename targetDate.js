function targetDate(selector, separator) {
    separator = typeof separator === 'undefined' ? '.' : separator;
    selector = typeof selector === 'undefined' ? '[data-time], [data-year]': selector;
    let items = document.querySelectorAll(selector);
    items.forEach(function (item) {
        if (item.hasAttribute('data-time')) {
            let targetTime = parseInt(item.getAttribute('data-time')) || 0;
            let now = new Date();
            let targetDate = new Date(now.setDate(now.getDate() + targetTime));

            let d = targetDate.getDate();
            let m = targetDate.getMonth() + 1;
            let y = targetDate.getFullYear();

            d = d < 10 ? '0' + d : d;
            m = m < 10 ? '0' + m : m;

            item.innerHTML = d + separator + m + separator + y;
        }

        if (item.hasAttribute('data-year')) {
            let dataYear = item.getAttribute('data-year');
            let now = new Date();
            if (dataYear === '' || isNaN(dataYear)) {
                item.innerHTML = now.getFullYear();
            } else if (dataYear === 'fix') {
                item.innerHTML = now.getMonth() >= 11 ? now.getFullYear() + 1 : now.getFullYear();
            } else if (typeof parseInt(dataYear) === 'number') {
                console.log(typeof parseInt(dataYear))
                item.innerHTML = now.getFullYear() + parseInt(dataYear);
            }
        }
    });
}