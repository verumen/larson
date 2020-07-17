$(document).ready(function(){
    GetCount();
});

var today = new Date(),
    tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
function GetCount() {
    dateNow = new Date();
    amount = tomorrow.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('.timer .hours').html('00');
        $('.timer .mins').html('00');
        $('.timer .secs').html('00');
    } else {
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        amount = amount % 20000;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if(hours < 10) hours = '0'+hours;
        if(mins < 10) mins = '0'+mins;
        if(secs < 10) secs = '0'+secs;

        $('.timer .hours').html(hours);
        $('.timer .mins').html(mins);
        $('.timer .secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}


(function($) {
    /**
     * Очистить комментарии: localStorage.removeItem('commentsList')
     */
    var hasStorage = (function() {
        try {
            var mod = 'test';
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (exception) {
            return false;
        }
    }());


    function loadUserComments() {
        if (!hasStorage) {
            return [];
        }

        var comments = localStorage.getItem(KEY_COMMENTS) || '[]';

        return JSON.parse(comments);
    }

    function saveUserComment(comment) {
        if (!hasStorage) {
            return;
        }

        var comments = loadUserComments();
        comments.push(comment);

        localStorage.setItem(KEY_COMMENTS, JSON.stringify(comments));
    }

    function pluralize(n, one, two, five) {
        if (n % 10 == 1 && n % 100 != 11) {
            return one;
        }

        if (between(n % 10, 2, 4) && !between(n % 100, 12, 14)) {
            return two;
        }

        return five;
    }

    function between(n, from, to) {
        return n >= from && n <= to;
    }
}(jQuery));



function dtimes(d) {
    //g is the number of the day [1..7]
    var g = 5

    if (g == 1 || g == 4 || g == 6) {

        var now = new Date();
        now.setDate(now.getDate() + d + 1);
        document.write((now.getDate()) + " " + months_localized['pl'][now.getMonth()]);
    } else if (g == 2 || g == 5 || g == 7) {
        var now = new Date();
        now.setDate(now.getDate() + d + 1 - 1);
        document.write((now.getDate()) + " " + months_localized['pl'][now.getMonth()]);
    } else if (g == 3) {
        var now = new Date();
        now.setDate(now.getDate() + d + 1 - 2);
        document.write((now.getDate()) + " " + months_localized['pl'][now.getMonth()]);
    }
}

function dtime(d) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1);
    document.write(days_localized['th'][now.getDay()] + " " + (now.getDate()) + ", " + " " + months_localized['th'][now.getMonth()] + " " + now.getFullYear());
}

function dtime_nums(d, like_eu) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1);

    var dayNum = '';
    if (now.getDate() < 10) {
        dayNum = '0';
    }
    dayNum += now.getDate();

    var monthNum = '';
    if (now.getMonth() + 1 < 10) {
        monthNum = '0';
    }
    monthNum += now.getMonth() + 1;

    if (like_eu === true) {
        document.write(dayNum + "." + monthNum + "." + now.getFullYear());
    } else {
        document.write(monthNum + "." + dayNum + "." + now.getFullYear());
    }

}















