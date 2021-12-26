setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation1 = 30 * htime + mtime / 2;
    mrotation1 = 6 * mtime;
    srotation1 = 6 * stime;
    hrotation = 30 * (htime + 10) + (mtime) / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour1.style.transform = `rotate(${hrotation1}deg)`;
    minute1.style.transform = `rotate(${mrotation1}deg)`;
    second1.style.transform = `rotate(${srotation1}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;



}, 1000);