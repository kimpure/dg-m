window.onload = function() {
  var hash = window.location.hash;
  if (hash) {
	var element = document.querySelector(hash);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth'});
	}
  }
};

let observer = new IntersectionObserver((e)=>{
  e.forEach((box)=>{
    if (box.isIntersecting){
      box.target.style.opacity =1;
    }else{
      box.target.style.opacity =0;
    }
  })
})
var Anihts = document.querySelectorAll('.Sa')
Anihts.forEach((e , i)=>{
  console.log(i);
  observer.observe(Anihts[i])
})

const t = document.querySelector('.c')
t.addEventListener('click' , ()=>{
  try {
    navigator.clipboard.writeText('parkhteak@naver.com')
  } catch (error) {
    alert(`이메일 복사실패 사유 : ${error}`)
    return
  }
  alert(`이메일복사성공!`)
})