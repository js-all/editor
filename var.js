function v() {
document.body.style = `--window-width: ${window.innerWidth}px;`+
                      `--window-height: ${window.innerHeight}px;`+
                      colorV();
}
function colorV() {
    let res = '';
    for (let i in data.color) {
        for (let j in data.color[i]) {
            const e = data.color[i][j];
            res += `--color-${i}-${j}: ${e.get()};`;
        }
    }
    return res;
}
v();
window.addEventListener('resize', () => {
   v();
});