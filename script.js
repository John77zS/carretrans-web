const target = new Date(); target.setDate(target.getDate() + 30);
function update() {
    const now = new Date();
    const diff = target - now;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
}
setInterval(update, 1000); update();