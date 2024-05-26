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


window.onload = function() {
  const 문의 = document.querySelector('.문의-버튼')
  문의.addEventListener('click' , ()=> {
  const gistId = '387539fcb97a156bdcec678e53c9bfec';
  const token = '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'; // GitHub Personal Access Token
  const 문의자명 = document.querySelector('.작성자명')
  const 문의내용 = document.querySelector('.문의내용')
  const _o = document.querySelector('.선택자')
  const updatedContent = `{"${문의자명.value}":"${문의내용.value}"}`

  const emailCheck = (email_address) => {     
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test(email_address)){ 
      return false; 
    }else{
      return true;
    }
  }

	if(emailCheck(문의자명.value)){ 
    alert('처리중..')
  }else{
    alert('올바른 이메일 형식을 작성해주세요')
    문의자명.value = ''
    문의내용.value = ''
    return
  }

  const url = `https://api.github.com/gists/${gistId}`;
  const fileName = `${_o.value}-${문의자명.value}.json`; // 수정할 파일 이름

  const data = {
    files: {
      [fileName]: {
        content: updatedContent
      }
    }
  };

  fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => {
    alert('문의완료!')
    문의자명.value = ''
    문의내용.value = ''
  })
  .catch(error => {
    alert('gist 요청실패')
    console.error('Error updating Gist:', error);
})})};
