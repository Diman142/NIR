export function validation(type, value, changeValid) {
  if (type === 'email') {
    console.log(value)
    const reg =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;
    let flag = reg.test(value)
    changeValid(flag)
    return flag
  } else if (type === 'site') {
    const reg = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi
    let flag = reg.test(value)
    changeValid(flag)
    return flag
  } else if (type === 'name') {
    const reg = /^[а-яА-ЯёЁ -]{1,30}$/
    let flag = reg.test(value)
    changeValid(flag)
    return flag
  } else if (type === 'number') {
    const reg = /^[0-9+]{1,20}$/gi
    let flag = reg.test(value)
    if (changeValid) {
      changeValid(flag)
    }
    return flag
  } else if (type === "date") {
    const reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    let flag = reg.test(value)
    changeValid(flag)
    return flag
  }
  else if (type === "notEmpty") {
    if (value.trim()) {
      changeValid(true)
      return true
    }
    changeValid(false)
    return false
  }

  return true
}


export function validCheck() {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  let res = false
  checkBoxes.forEach(check => {
    res = res || check.checked
  })

  if (!res) {
    checkBoxes.forEach(check => {
      check.nextElementSibling.classList.add('inValidCheckLabel')
    })

    return checkBoxes[0]
  }
}
