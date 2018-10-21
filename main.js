const EDITOR = document.getElementById('editor'),
      CODE = document.getElementById('code');
function update() {
    let codeAT = CODE.value;
    let codeT = '';
    for(let i in data.reg) {
        const e = data.reg[i];
        for (let j of e.words) {
            let reg = new RegExp(e.start+j+e.end,'g');
            
        }
    }
}

