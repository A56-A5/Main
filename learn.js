function idk(){
    let lns = qsa('.lns');
    lns.forEach(ln  => {
        ln.addEventListener("click",() =>{
            if(ln.id == 'html'){
                let llns = qsa('.shtml');
                if(llns[0].classList[3]=='hidden'){
                    show('.shtml')
                }else{
                    hide('.shtml')}
            }else if(ln.id == 'css'){
                let llns = qsa('.scss');
                if(llns[0].classList[3]=='hidden'){
                    show('.scss')
                }else{
                    hide('.scss')}
            }else if(ln.id == 'js'){
                let llns = qsa('.sjs');
                if(llns[0].classList[3]=='hidden'){
                    show('.sjs')
                }else{
                    hide('.sjs')}
            }else if(ln.id == 'python'){
                let llns = qsa('.spython');
                if(llns[0].classList[3]=='hidden'){
                    show('.spython')
                }else{
                    hide('.spython')}
            }else if(ln.id == 'java'){
                let llns = qsa('.sjava');
                if(llns[0].classList[3]=='hidden'){
                    show('.sjava')
                }else{
                    hide('.sjava')}
            }else if(ln.id == 'c'){
                let llns = qsa('.sc');
                if(llns[0].classList[3]=='hidden'){
                    show('.sc')
                }else{
                    hide('.sc')}
            }else if(ln.id == 'cpp'){
                let llns = qsa('.scpp');
                if(llns[0].classList[3]=='hidden'){
                    show('.scpp')
                }else{
                    hide('.scpp')}
            }else if(ln.id == 'csharp'){
                let llns = qsa('.scsharp');
                if(llns[0].classList[3]=='hidden'){
                    show('.scsharp')
                }else{
                    hide('.scsharp')}
            }else if(ln.id == 'php'){
                let llns = qsa('.sphp');
                if(llns[0].classList[3]=='hidden'){
                    show('.sphp')
                }else{
                    hide('.sphp')}
            }else if(ln.id == 'mysql'){
                let llns = qsa('.smysql');
                if(llns[0].classList[3]=='hidden'){
                    show('.smysql')
                }else{
                    hide('.smysql')}
            }else if(ln.id == 'dsa'){
                let llns = qsa('.sdsa');
                if(llns[0].classList[3]=='hidden'){
                    show('.sdsa')
                }else{
                    hide('.sdsa')}
            }
        })
    })
}function select(){
    let lns = qsa('.subname');
    lns.forEach(ln => {
        ln.classList.remove('selected')
    })
    lns.forEach(ln => {
        ln.addEventListener('click', () => {
            let llns = qsa('.subname'); 
            llns.forEach(lln => {
                lln.classList.remove('selected') ; 
            })
            ln.classList.add('selected')
        })
    })
}function display(src,src2 = "0",src3 = "0"){
    let img1 = qs('.img1');
    img1.src = `code/${src}.png`;
    let img2 = qs('.img2');
    img2.src = `code/${src2}.png`;
    let img3 = qs('.img3');
    img3.src = `code/${src3}.png`;

    let x = qs('.popup');
    x.classList.remove('hidden');

    let Img1 = qs('.Img1');
    Img1.src = `code/${src}.png`
    let Img2 = qs('.Img2');
    Img2.src = `code/${src2}.png`
    let Img3 = qs('.Img3');
    Img3.src = `code/${src3}.png`
    
    img2.classList.remove('hidden'); 
    img3.classList.remove('hidden');
    Img2.classList.remove('hidden');
    Img3.classList.remove('hidden');
    
    if(src2 == "0"){
        img2.classList.add('hidden'); 
        Img2.classList.add('hidden');
    }if(src3 == "0"){ 
        img3.classList.add('hidden');
        Img3.classList.add('hidden');
    } 
    

}function close(){
    let btn = qs('.close');
    btn.onclick = () => {
        let x = qs('.popup');
        x.classList.add('hidden');
    }
}
function show(selector){
    let lens = qsa(selector); 
    lens.forEach(len => {
        len.classList.remove('hidden') 
    })
    
}function hide(e){
    let lns = qsa(e);
    lns.forEach(ln => {
        ln.classList.add('hidden')
    })
}
window.onload = function (){
    idk();select();close();
}

//helping functions
//short
function id(id){
    return document.getElementById(id);
}function qs(selecter){
    return document.querySelector(selecter);
}function qsa(selecter){
    return document.querySelectorAll(selecter);
}