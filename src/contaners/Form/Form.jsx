import React, {useState, useRef} from 'react'
import {Input} from '../../components/Input/Input'
import {validation, validCheck} from '../../helpers/validation'
import {Check} from '../../components/Check/Check'

export const Form = () => {

  const [labName, setLabName] = useState('');
  const [validLabName, setValidLabName] = useState(true);

  const [shortlabName, setShortLabName] = useState('');
  const [validShortLabName, setValidShortLabName] = useState(true);

  const [labEmail, setLabEmail] = useState('');
  const [validLabEmail, setValidLabEmail] = useState(true);


  const [labPhone, setLabPhone] = useState('');
  const [validLabPhone, setValidLabPhone] = useState(true);


  const [labSite, setLabSite] = useState('');
  const [validLabSite, setValidLabSite] = useState(true);

  const [bossName, setBossName] = useState('');
  const [validBossName, setValidBossName] = useState(true);

  const [bossSecName, setBossSecName] = useState('');
  const [validBossSecName, setValidBossSecName] = useState(true);

  const [bossLastName, setBossLastName] = useState('');
  const [validBossLastName, setValidBossLastName] = useState(true);

  const [country, setCountry] = useState('');
  const [validCountry, setValidCountry] = useState(true);

  const [index, setIndex] = useState('');
  const [validIndex, setValidIndex] = useState(true);

  const [region, setRegion] = useState('');
  const [validRegion, setValidRegion] = useState(true);

  const [city, setCity] = useState('');
  const [validCity, setValidCity] = useState(true);

  const [town, setTown] = useState('');
  const [validTown, setValidTown] = useState(true);

  const [street, setStreet] = useState('');
  const [validStreet, setValidStreet] = useState(true);

  const [home, setHome] = useState('');
  const [validHome, setValidHome] = useState(true);

  const [ok, setOk] = useState(false)

  const [manageCheck, setManageCheck] = useState(false)

  const [manageNum, setManageNum] = useState('')
  const [validManageNum, setValidManageNum] = useState(true)

  const [manageDate, setManageDate] = useState('')
  const [validManageDate, setValidManageDate] = useState(true)

  const [manageTill, setManageTill] = useState('')
  const [validManageTill, setValidManageTill] = useState(true)

  const [manageActivity, setManageActivity] = useState('')
  const manageActivityRef = useRef(null);

  const [manageActivityesArr, setmanageActivityesArr] = useState([])




  const [secondCOSCheck, setSecondCOS] = useState(false)

  const [secondCOSNum, setSecondCOSNum] = useState('')
  const [validSecondCOSNum, setValidSecondCOSNum] = useState(true)

  const [secondCOSDate, setSecondCOSDate] = useState('')
  const [validSecondCOSDate, setValidSecondCOSDate] = useState(true)

  const [secondCOSTill, setSecondCOSTill] = useState('')
  const [validSecondCOSTill, setValidSecondCOSTill] = useState(true)

  const [secondCOSActivity, setSecondCOSActivity] = useState('')
  const SecondCOSActivityRef = useRef(null);

  const [SecondCOSActivityesArr, setSecondCOSActivityesArr] = useState([])




  const [thirtCOSCheck, setThirtCOSCheck] = useState(false)

  const [thirtCOSNum, setThirtCOSNum] = useState('')
  const [validThirtCOSCOSNum, setValidThirtCOSCOSNum] = useState(true)

  const [thirtCOSDate, setThirtCOSDate] = useState('')
  const [validThirtCOSDate, setValidThirtCOSDate] = useState(true)

  const [thirtCOSTill, setThirtCOSTill] = useState('')
  const [validThirtCOSTill, setValidThirtCOSTill] = useState(true)

  const [thirtCOSActivity, setThirtCOSActivity] = useState('')

  const thirtCOSActivityRef = useRef(null);

  const [thirtCOSActivityesArr, setThirtCOSActivityesArr] = useState([])


  const baseInputsconfigs = [
    {
      label: 'Полное наименование испытательной лаборатории (центра)',
      id: 'labName',
      value: labName,
      onChange: (e) => {
        setLabName(e.target.value)
        setValidLabName(true)
      },
      name: "name",
      isValid: validLabName,
      changeValid: setValidLabName,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
    {
      label: 'Сокращенное наименование испытательной лаборатории (центра)',
      id: 'shortlabName',
      value: shortlabName,
      onChange: (e) => {
        setShortLabName(e.target.value)
        setValidShortLabName(true)
      },
      name: "name",
      isValid: validShortLabName,
      changeValid: setValidShortLabName,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
    {
      label: 'Адрес электронной почты (общий)',
      id: 'labEmail',
      value: labEmail,
      onChange: (e) => {
        setLabEmail(e.target.value)
        setValidLabEmail(true)
      },
      name: "email",
      isValid: validLabEmail,
      changeValid: setValidLabEmail,
      errorMessage: 'Введите корректный формат email'
    },
    {
      label: 'Телефон',
      id: 'phone',
      value: labPhone,
      onChange: (e) => {
        setLabPhone(e.target.value)
        setValidLabPhone(true)
      },
      name: "number",
      isValid: validLabPhone,
      changeValid: setValidLabPhone,
      errorMessage: 'Номер телефона может состоять только из цифр и знака +'
    },
    {
      label: 'Сайт',
      id: 'site',
      value: labSite,
      onChange: (e) => {
        setLabSite(e.target.value)
        setValidLabSite(true)
      },
      name: "site",
      isValid: validLabSite,
      changeValid: setValidLabSite,
      errorMessage: 'формат сайта www.site999.ru'
    },
  ]


  const bossInputsConfigs = [
    {
      label: 'Фамилия',
      id: 'bossName',
      value: bossName,
      onChange: (e) => {
        setBossName(e.target.value)
        setValidBossName(true)
      },
      name: "name",
      isValid: validBossName,
      changeValid: setValidBossName,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
    {
      label: 'Имя',
      id: 'bossSurNameName',
      value: bossSecName,
      onChange: (e) => {
        setBossSecName(e.target.value)
        setValidBossSecName(true)
      },
      name: "name",
      isValid: validBossSecName,
      changeValid: setValidBossSecName,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
    {
      label: 'Отчество',
      id: 'bossLastName',
      value: bossLastName,
      onChange: (e) => {
        setBossLastName(e.target.value)
        setValidBossLastName(true)
      },
      name: "name",
      isValid: validBossLastName,
      changeValid: setValidBossLastName,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
  ]

  const addressInputconfigs = [
    {
      label: 'Страна',
      id: 'country',
      value: country,
      onChange: (e) => {
        setCountry(e.target.value)
        setValidCountry(true)
      },
      name: "name",
      isValid: validCountry,
      changeValid: setValidCountry,
      errorMessage: 'Допускаются русские буквы тире и пробелы'
    },
    {
      label: 'Почтовый индекс',
      id: 'postIndex',
      value: index,
      onChange: (e) => {
        setIndex(e.target.value)
        setValidIndex(true)
      },
      name: "number",
      isValid: validIndex,
      changeValid: setValidIndex,
      errorMessage: 'Индекс должен состоять из цифр'
    },
    {
      label: 'Регион / область',
      id: 'region',
      value: region,
      onChange: (e) => {
        setRegion(e.target.value)
        setValidRegion(true)
      },
      name: "notEmpty",
      isValid: validRegion,
      changeValid: setValidRegion,
      errorMessage: 'Поле не дожно быть пустым'
    },
    {
      label: 'Город / район',
      id: 'city',
      value: city,
      onChange: (e) => {
        setCity(e.target.value)
        setValidCity(true)
      },
      name: "notEmpty",
      isValid: validCity,
      changeValid: setValidCity,
      errorMessage: 'Поле "Город" не дожно быть пустым'
    },
    {
      label: 'Населенный пункт',
      id: 'town',
      value: town,
      onChange: (e) => {
        setTown(e.target.value)
        setValidTown(true)
      },
      name: "notEmpty",
      isValid: validTown,
      changeValid: setValidTown,
      errorMessage: 'Поле "Населенный пункт" не дожно быть пустым'
    },
    {
      label: 'Улица',
      id: 'street',
      value: street,
      onChange: (e) => {
        setStreet(e.target.value)
        setValidStreet(true)
      },
      name: "notEmpty",
      isValid: validStreet,
      changeValid: setValidStreet,
      errorMessage: 'Поле "Улица" не дожно быть пустым'
    },
    {
      label: 'Дом и офис',
      id: 'home',
      value: home,
      onChange: (e) => {
        setHome(e.target.value)
        setValidHome(true)
      },
      name: 'notEmpty',
      isValid: validHome,
      changeValid: setValidHome,
      errorMessage: 'Поле "Дом и офис" не дожно быть пустым'
    },
  ]


  const radiosInputconfigs = [
    {
      type: 'radio',
      label: 'Есть',
      id: 'yes',
      name: 'radiuGroup',
      onChange: () => {
        setOk(true)
      }
    },
    {
      type: 'radio',
      label: 'Нет',
      id: 'no',
      name: 'radiuGroup',
      onChange: () => {
        setOk(false)
        setManageCheck(false)
        setSecondCOS(false)
        setThirtCOSCheck(false)
      }
    }
  ]

  const MangeTextInputsConfigs = [
    {
      id: 'manageNum',
      label: 'Регистрационный номер свидетельства',
      value: manageNum,
      onChange: (e) => {
        setManageNum(e.target.value)
        setValidManageNum(true)
      },
      name: "number",
      isValid: validManageNum,
      changeValid: setValidManageNum,
      errorMessage: 'Рег. номер должен состоять из цифр'
    },
    {
      id: 'manageDate',
      label: 'Дата выдачи свидетельства',
      value: manageDate,
      onChange: (e) => {
        setManageDate(e.target.value)
        setValidManageDate(true)
      },
      name: 'date',
      isValid: validManageDate,
      changeValid: setValidManageDate,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
    {
      id: 'manageTill',
      label: 'Действителен до',
      value: manageTill,
      onChange: (e) => {
        setManageTill(e.target.value)
        setValidManageTill(true)
      },
      name: "date",
      isValid: validManageTill,
      changeValid: setValidManageTill,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
  ]


  const secondCOSTextInputsConfigs = [
    {
      id: 'secondCOSNum',
      label: 'Регистрационный номер свидетельства',
      value: secondCOSNum,
      onChange: (e) => {
        setSecondCOSNum(e.target.value)
        setValidSecondCOSNum(true)
      },
      name: "number",
      isValid: validSecondCOSNum,
      changeValid: setValidSecondCOSNum,
      errorMessage: 'Рег. номер должен состоять из цифр'
    },
    {
      id: 'secondCOSDate',
      label: 'Дата выдачи свидетельства',
      value: secondCOSDate,
      onChange: (e) => {
        setSecondCOSDate(e.target.value)
        setValidSecondCOSDate(true)
      },
      name: 'date',
      isValid: validSecondCOSDate,
      changeValid: setValidSecondCOSDate,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
    {
      id: 'secondCOSTill',
      label: 'Действителен до',
      value: secondCOSTill,
      onChange: (e) => {
        setSecondCOSTill(e.target.value)
        setValidSecondCOSTill(true)
      },
      name: "date",
      isValid: validSecondCOSTill,
      changeValid: setValidSecondCOSTill,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
  ]


  const thirtCOSTextInputsConfigs = [
    {
      id: 'thirthCOS',
      label: 'Регистрационный номер свидетельства',
      value: thirtCOSNum,
      onChange: (e) => {
        setThirtCOSNum(e.target.value)
        setValidThirtCOSCOSNum(true)
      },
      name: "number",
      isValid: validThirtCOSCOSNum,
      changeValid: setValidThirtCOSCOSNum,
      errorMessage: 'Рег. номер должен состоять из цифр'
    },
    {
      id: 'thirthDate',
      label: 'Дата выдачи свидетельства',
      value: thirtCOSDate,
      onChange: (e) => {
        setThirtCOSDate(e.target.value)
        setValidThirtCOSDate(true)
      },
      name: 'date',
      isValid: validThirtCOSDate,
      changeValid: setValidThirtCOSDate,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
    {
      id: 'thirthTill',
      label: 'Действителен до',
      value: thirtCOSTill,
      onChange: (e) => {
        setThirtCOSTill(e.target.value)
        setValidThirtCOSTill(true)
      },
      name: "date",
      isValid: validThirtCOSTill,
      changeValid: setValidThirtCOSTill,
      errorMessage: 'Введтие дату в формате: 12-12-2020'
    },
  ]



  const checboxInputsConfigs = [
    {
      label: 'ЦОС «Системы менеджмента»',
      id: 'managment',
      name: 'manageCheck',
      value: manageCheck,
      valueArr: manageActivityesArr,
      changeValuesArr: setmanageActivityesArr,
      ref: manageActivityRef,
      onChange: (e) => {
        const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        checkBoxes.forEach(check => {
          check.nextElementSibling.classList.remove('inValidCheckLabel')
        })
        setManageCheck(e.target.checked)
      },
      textInputs: MangeTextInputsConfigs,
      activityVal: manageActivity,
      onActivityChange: (e) => {
        setManageActivity(e.target.value)
        let flag = validation('number', e.target.value)
        if(!flag){
          e.target.classList.add('inValidNum')
          e.target.previousElementSibling.classList.add('inValidNumLabel')
        } else {
          e.target.classList.remove('inValidNum')
          e.target.previousElementSibling.classList.remove('inValidNumLabel')
          e.target.previousElementSibling.classList.remove('red')
        }
      },
      addActivityHandler: () => {
        let arr = [...manageActivityesArr]
        arr.push(manageActivity)
        setmanageActivityesArr(arr)
      }
    },
    {
      label: 'ЦОС «Инженерно-технические средства охраны, средства защиты и информации»',
      id: 'secondCOS',
      name: 'secondCOSCheck',
      value: secondCOSCheck,
      valueArr: SecondCOSActivityesArr,
      changeValuesArr: setSecondCOSActivityesArr,
      ref: SecondCOSActivityRef,
      onChange: (e) => {
        const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        checkBoxes.forEach(check => {
          check.nextElementSibling.classList.remove('inValidCheckLabel')
        })
        setSecondCOS(e.target.checked)
      },
      textInputs: secondCOSTextInputsConfigs,
      activityVal: secondCOSActivity,
      onActivityChange: (e) => {
        setSecondCOSActivity(e.target.value)
        let flag = validation('number', e.target.value)
        if(!flag){
          e.target.classList.add('inValidNum')
          e.target.previousElementSibling.classList.add('inValidNumLabel')
        } else {
          e.target.classList.remove('inValidNum')
          e.target.previousElementSibling.classList.remove('inValidNumLabel')
          e.target.previousElementSibling.classList.remove('red')
        }
      },
      addActivityHandler: () => {
        let arr = [...SecondCOSActivityesArr]
        arr.push(secondCOSActivity)
        setSecondCOSActivityesArr(arr)
      }
    },
    {
      label: 'ЦОС Трубная продукция',
      id: 'thirtCOS',
      name: 'thirtCOSCheck',
      value: thirtCOSCheck,
      valueArr: thirtCOSActivityesArr,
      changeValuesArr: setThirtCOSActivityesArr,
      ref: thirtCOSActivityRef,
      onChange: (e) => {
        const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        checkBoxes.forEach(check => {
          check.nextElementSibling.classList.remove('inValidCheckLabel')
        })
        setThirtCOSCheck(e.target.checked)
      },
      textInputs: thirtCOSTextInputsConfigs,
      activityVal: thirtCOSActivity,
      onActivityChange: (e) => {
        setThirtCOSActivity(e.target.value)
        let flag = validation('number', e.target.value)
        if(!flag){
          e.target.classList.add('inValidNum')
          e.target.previousElementSibling.classList.add('inValidNumLabel')
        } else {
          e.target.classList.remove('inValidNum')
          e.target.previousElementSibling.classList.remove('inValidNumLabel')
          e.target.previousElementSibling.classList.remove('red')
        }
      },
      addActivityHandler: () => {
        let arr = [...thirtCOSActivityesArr]
        arr.push(thirtCOSActivity)
        setThirtCOSActivityesArr(arr)
      }
    },
  ]




  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      let firstInValidEl = ""
      baseInputsconfigs.forEach(input => {
        let flag = validation(input.name, input.value, input.changeValid)
        if(!flag && !firstInValidEl){
          firstInValidEl = document.getElementById(input.id).parentElement
        }
      })
      bossInputsConfigs.forEach(input => {
        let flag = validation(input.name, input.value, input.changeValid)
        if(!flag && !firstInValidEl){
          firstInValidEl = document.getElementById(input.id).parentElement
        }
      })
      addressInputconfigs.forEach(input => {
        let flag = validation(input.name, input.value, input.changeValid)
        if(!flag && !firstInValidEl){
          firstInValidEl = document.getElementById(input.id).parentElement
        }
      })

      if(ok){
        firstInValidEl = validCheck()

        if(manageCheck){
          MangeTextInputsConfigs.forEach(input => {
            let flag = validation(input.name, input.value, input.changeValid)
            if(!flag && !firstInValidEl){
              firstInValidEl = document.getElementById(input.id).parentElement
            }
          })
        }

        if(secondCOSCheck){
          secondCOSTextInputsConfigs.forEach(input => {
            let flag = validation(input.name, input.value, input.changeValid)
            if(!flag && !firstInValidEl){
              firstInValidEl = document.getElementById(input.id).parentElement
            }
          })
        }

        if(thirtCOSCheck){
          thirtCOSTextInputsConfigs.forEach(input => {
            let flag = validation(input.name, input.value, input.changeValid)
            if(!flag && !firstInValidEl){
              firstInValidEl = document.getElementById(input.id).parentElement
            }
          })
        }

        checboxInputsConfigs.forEach(check => {
          if(!manageActivityesArr.length){
            if(check.ref.current){
              check.ref.current.classList.add('inValidNum')
              check.ref.current.previousElementSibling.classList.add('red')
            }
          } else {
            if(check.ref.current) {
              check.ref.current.classList.remove('inValidNum')
              check.ref.current.previousElementSibling.classList.remove('red')
            }
          }
        })
      }


      if(firstInValidEl){
        firstInValidEl.scrollIntoView(true)
      } else {
        const obj = {
          labName, shortlabName, labEmail, labPhone, labSite,
          bossName, bossSecName, bossLastName, country, index, region, city,
          town, street, home,
        }

        if(manageCheck){
          obj['COS1'] = {
            manageNum, manageDate, manageTill, manageActivityesArr
          }
        }

        if(secondCOSCheck){
          obj['COS2'] = {
            secondCOSNum, secondCOSDate, secondCOSTill, SecondCOSActivityesArr
          }
        }

        if(thirtCOSCheck){
          obj['COS3'] = {
            thirtCOSNum, thirtCOSDate, thirtCOSTill, thirtCOSActivityesArr
          }
        }

        console.log(obj)
      }

    }}>
      <div>
        <h2>Организация</h2>
        {baseInputsconfigs.map((config, index) => {
          return <Input config = {config} key={index}/>
        })}
      </div>

      <div>
        <h2>Руководитель</h2>
        {bossInputsConfigs.map((config, index) => {
          return <Input config = {config} key={index+10}/>
        })}
      </div>


      <div>
        <h2>Фактический адрес</h2>
        {addressInputconfigs.map((config, index) => {
          return <Input config = {config} key={index+20}/>
        })}
      </div>

      <div className="radio-wrap">
        <h2>Признание в системе</h2>
        {radiosInputconfigs.map((config, index) => {
          return (
          <>
            <Check config = {config} key={index+30}/>

          </>
          )
        })}
      </div>

      {
        ok ?
        <>
          <h2>Центральный орган системы, выдавший свидетельство испытательной лаборатории</h2>
          {checboxInputsConfigs.map((config, index) => {
            return(
            <div key={index+40}>
              <Check config = {config}/>
              {config.value ?
              <>
                {config.textInputs.map((conf, index) => {
                  return <Input config = {conf} key={index+50}/>
                })}
                <div>
                  <label className="activity__label">Область деятельности (ОК 034-2014)</label>
                  <input ref={config.ref} className="activity__input" type="text" onChange={config.onActivityChange} value={config.activityVal}/>
                  <button className="activity__btn" type="button" onClick={config.addActivityHandler}>Добавить</button>
                  <div style={{marginBottom: '40px', marginTop: '10px'}}>
                  {
                    config.valueArr.map((num) => {
                      return (
                        <div className="activity-wrap">
                            <span>{num}</span>
                            <button className="acivity-cross" onClick={(e) => {
                              let arr = config.valueArr.filter(num => {
                                if(num !== e.target.previousElementSibling.innerHTML){
                                  return true
                                }
                                return false
                              })
                              config.changeValuesArr(arr)
                            }}></button>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
              </>
              :
              null
              }
            </div>
            )
          })}
        </>
        :
        null
      }


      <button type="submit" className="submitBtn">Далее</button>
    </form>

)
}
