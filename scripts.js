var yearwiseBlock = document.getElementById('yearwiseBlock')
var all_wildlife = [
  '',
  'bear',
  'crocodile',
  'elephant',
  'fox',
  'gaur',
  'himalayan black bear',
  'hyena',
  'leopard',
  'monkey',
  'nilgai',
  'pig',
  'rhino',
  'sloth bear',
  'snake',
  'tiger',
  'wild animal',
  'wild bear',
  'wild boar',
  'wild buffalow',
  'wild elephant',
  'wild pig',
  'wolf',
  'other'
]

for (var year = 2000; year <= 2020; year++) {
  var yearwiseDiv = document.createElement('div')
  yearwiseDiv.classList.add('yearwise')
  yearwiseDiv.id = 'year' + (year + 1)
  yearwiseBlock.appendChild(yearwiseDiv)

  var yearLabel = document.createElement('h2')
  yearLabel.innerText = year + '-' + (year + 1).toString().substring(2)
  yearwiseDiv.appendChild(yearLabel)

  var deathCasesDiv = document.createElement('span')
  deathCasesDiv.id = 'deathCasesDiv' + year
  deathCasesDiv.classList.add('deathCasesDiv')
  deathCasesDiv.classList.add('casesDiv')
  yearwiseDiv.appendChild(deathCasesDiv)

  var deathCaseSpan = document.createElement('span')
  deathCaseSpan.innerText = ' Death cases' //year +
  deathCasesDiv.appendChild(deathCaseSpan)

  var addRowButton = document.createElement('button')
  addRowButton.innerText = '+'
  addRowButton.classList.add('addRowButton')
  addRowButton.addEventListener('click', function () {
    addRow(this.parentElement, 'dc')
  })
  deathCasesDiv.appendChild(addRowButton)

  var removeRowButton = document.createElement('button')
  removeRowButton.innerText = '-'
  removeRowButton.style.visibility = 'hidden'
  removeRowButton.classList.add('removeRowButton')
  removeRowButton.addEventListener('click', function () {
    removeRow(this.parentElement, year)
  })
  deathCasesDiv.appendChild(removeRowButton)

  addRow(deathCasesDiv, 'dc')

  var injuryCasesDiv = document.createElement('span')
  injuryCasesDiv.id = 'injuryCasesDiv' + year
  injuryCasesDiv.classList.add('injuryCasesDiv')
  injuryCasesDiv.classList.add('casesDiv')
  yearwiseDiv.appendChild(injuryCasesDiv)

  var injuryCasesSpan = document.createElement('span')
  injuryCasesSpan.innerText = ' Injury cases' //year +
  injuryCasesDiv.appendChild(injuryCasesSpan)

  var addRowButton = document.createElement('button')
  addRowButton.innerText = '+'
  addRowButton.classList.add('addRowButton')
  addRowButton.addEventListener('click', function () {
    addRow(this.parentElement, 'ic')
  })
  injuryCasesDiv.appendChild(addRowButton)

  var removeRowButton = document.createElement('button')
  removeRowButton.innerText = '-'
  removeRowButton.style.visibility = 'hidden'
  removeRowButton.classList.add('removeRowButton')
  removeRowButton.addEventListener('click', function () {
    removeRow(this.parentElement, year)
  })
  injuryCasesDiv.appendChild(removeRowButton)

  addRow(injuryCasesDiv, 'ic')

  var hr = document.createElement('hr')
  yearwiseBlock.appendChild(hr)
}

// document.querySelector('.yearwise#year2021').style.visibility = 'hidden'
const di = document.createElement('div')
const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.id = 'show21'
const lab = document.createElement('label')
lab.setAttribute('for', 'show21')
lab.textContent = 'Include 2020-21?'
di.append(document.createElement('br'))
di.append(checkbox)
di.append(lab)
di.append(document.createElement('br'))
di.append(document.createElement('br'))
// document.querySelector('.yearwise#year2021').insertBefore(di, document.querySelector('.yearwise#year2021').firstChild)
// document.querySelector('.yearwise#year2021').append(di)

function addRow (yearwiseDiv, caseType) {
  year = yearwiseDiv.id.slice(-4)
  var rowDiv = document.createElement('span')
  yearwiseDiv.appendChild(rowDiv)

  var br = document.createElement('br')
  rowDiv.appendChild(br)

  //   var wlInput = document.createElement('input')
  //   wlInput.type = 'text'
  //   wlInput.name = 'wl'
  //   wlInput.classList.add(caseType + '_' + year + '_wl')
  //   wlInput.id = caseType + '_' + year + '_wl'
  //   wlInput.placeholder = 'Wildlife Species'
  //   rowDiv.appendChild(wlInput)

  var wlSelect = document.createElement('select')
  wlSelect.name = 'wl'
  wlSelect.classList.add(caseType + '_' + year + '_wl')
  wlSelect.id = caseType + '_' + year + '_wl'
  // Add a placeholder-like default option
  var placeholderOption = document.createElement('option')
  placeholderOption.value = ''
  placeholderOption.textContent = ''
  placeholderOption.disabled = true
  placeholderOption.selected = true
  wlSelect.appendChild(placeholderOption)
  // Populate the dropdown with options from the all_wildlife array
  all_wildlife.forEach(function (species) {
    var option = document.createElement('option')
    option.value = species
    option.textContent = species
    wlSelect.appendChild(option)
  })
  rowDiv.appendChild(wlSelect)

  var casesInput = document.createElement('input')
  casesInput.type = 'number'
  casesInput.name = 'cases'
  casesInput.classList.add(caseType + '_' + year + '_cases')
  casesInput.classList.add('input_cases')
  casesInput.id = caseType + '_' + year + '_cases'
  casesInput.placeholder = '#'
  rowDiv.appendChild(casesInput)

  wlSelect.addEventListener('change', function () {
    casesInput.value = 1
  })

  var compensationInput = document.createElement('input')
  compensationInput.type = 'number'
  compensationInput.name = 'compensation'
  compensationInput.classList.add(caseType + '_' + year + '_compensation')
  compensationInput.classList.add('input_compensation')
  compensationInput.id = caseType + '_' + year + '_compensation'
  compensationInput.placeholder = '₹ (Lakh)'
  rowDiv.appendChild(compensationInput)

  var remarksInput = document.createElement('input')
  remarksInput.type = 'text'
  remarksInput.name = 'remarks'
  remarksInput.classList.add(caseType + '_' + year + '_remarks')
  remarksInput.id = caseType + '_' + year + '_remarks'
  remarksInput.placeholder = 'Remarks'
  rowDiv.appendChild(remarksInput)
  spanElements = yearwiseDiv.querySelectorAll('span')
  if (spanElements.length > 2) {
    yearwiseDiv.querySelector('.removeRowButton').style.visibility = ''
  } else {
    yearwiseDiv.querySelector('.removeRowButton').style.visibility = 'hidden'
  }
}

function removeRow (div, year) {
  spanElements = div.querySelectorAll('span')
  const lastSpan = div.lastElementChild
  lastSpan.remove()
  if (spanElements.length > 3) {
    div.querySelector('.removeRowButton').style.visibility = ''
  } else {
    div.querySelector('.removeRowButton').style.visibility = 'hidden'
  }
}

//   // Get all input tags in the page
//   inputElements = document.getElementsByTagName('input')

//   // Loop through each input tag and display its ID
//   for (let i = 0; i < inputElements.length; i++) {
//     inputElement = inputElements[i]
//     inputId = inputElement.id

//     // Create a new element to display the input ID
//     idElement = document.createElement('span')
//     idElement.classList.add('idEl')
//     idElement.innerText = inputId

//     // Insert the ID element after the input element
//     inputElement.parentNode.insertBefore(
//       idElement,
//       inputElement.nextSibling
//     )
//   }
function submit (downloadExcel) {
  json = {}
  json.STATE = document.querySelector('#stateDropdown').value.toLowerCase()
  json.FD = document.querySelector('#fdName').value.toLowerCase()
  json.fdSrNo = document.querySelector('#fdSrNo').value

  json.deathNoOfCasesArray = [
    [[0]], // 2000-01 DEATH..
    [[0]], // 2001-02 DEATH..
    [[0]], // 2002-03 DEATH..
    [[0]], // 2003-04 DEATH..
    [[0]], // 2004-05 DEATH..
    [[0]], // 2005-06 DEATH..
    [[0]], // 2006-07 DEATH..
    [[0]], // 2007-08 DEATH..
    [[0]], // 2008-09 DEATH..
    [[0]], // 2009-10 DEATH..
    [[0]], // 2010-11 DEATH..
    [[0]], // 2011-12 DEATH..
    [[0]], // 2012-13 DEATH..
    [[0]], // 2013-14 DEATH..
    [[0]], // 2014-15 DEATH..
    [[0]], // 2015-16 DEATH..
    [[0]], // 2016-17 DEATH..
    [[0]], // 2017-18 DEATH..
    [[0]], // 2018-19 DEATH..
    [[0]], // 2019-20 DEATH..
    [[0]] // 2020-21 DEATH..
  ]

  json.injuryNoOfCasesArray = [
    [[0]], // 2000-01 INJURY..
    [[0]], // 2001-02 INJURY..
    [[0]], // 2002-03 INJURY..
    [[0]], // 2003-04 INJURY..
    [[0]], // 2004-05 INJURY..
    [[0]], // 2005-06 INJURY..
    [[0]], // 2006-07 INJURY..
    [[0]], // 2007-08 INJURY..
    [[0]], // 2008-09 INJURY..
    [[0]], // 2009-10 INJURY..
    [[0]], // 2010-11 INJURY..
    [[0]], // 2011-12 INJURY..
    [[0]], // 2012-13 INJURY..
    [[0]], // 2013-14 INJURY..
    [[0]], // 2014-15 INJURY..
    [[0]], // 2015-16 INJURY..
    [[0]], // 2016-17 INJURY..
    [[0]], // 2017-18 INJURY..
    [[0]], // 2018-19 INJURY..
    [[0]], // 2019-20 INJURY..
    [[0]] // 2020-21 INJURY..
  ]

  //// MAIN DATA CAPTURE
  inputElements = document.querySelectorAll('.yearwise input')
  // console.log(inputElements)
  inputs = Array.from(inputElements)
  //    dc = inputs.filter(input => input.id.slice(0, 2) === 'dc')

  //death cases
  for (yr = 2000; yr < 2021; yr++) {
    currentYearCases = inputs.filter(
      c => c.id.slice(3, 7) == yr && c.id.slice(8) == 'cases' && c.value !== ''
    )
    //   console.log(currentYearCases)
    currentYearCases.forEach(element => {
      // console.log(element)
      caseType = element.id.slice(0, 2)
      arr =
        caseType == 'dc' ? json.deathNoOfCasesArray : json.injuryNoOfCasesArray
      if (arr[yr - 2000][0][0] == 0) {
        wl = Array.from(
          document.querySelectorAll('.' + caseType + '_' + yr + '_wl')
        )
        cases = Array.from(
          document.querySelectorAll('.' + caseType + '_' + yr + '_cases')
        )
        compensation = Array.from(
          document.querySelectorAll('.' + caseType + '_' + yr + '_compensation')
        )
        remarks = Array.from(
          document.querySelectorAll('.' + caseType + '_' + yr + '_remarks')
        )
        newArray = []
        for (i = 0; i < wl.length; i++) {
          newArray.push([
            Number(cases[i].value),
            wl[i].value.toLowerCase(),
            Number(compensation[i].value),
            remarks[i].value.toLowerCase()
          ])
          console.log(Number(compensation[i].value))
        }
        arr[yr - 2000] = newArray
      } else {
        //do nothing
      }
    })
  }
  // console.log(json.deathNoOfCasesArray)
  // console.log(json.injuryNoOfCasesArray)
  console.log(json)
  processInputs(json, downloadExcel)
}

function processInputs (json, downloadExcel) {
  FD = json.FD
  STATE = json.STATE
  DIST = '-'
  RANGE = '-'
  FD_SR_NO = json.fdSrNo
  yearsTill = document.querySelector('#show21').checked ? 21 : 20
  //json.deathNoOfCasesArray.length
  noOfCasesArray = []
  for (i = 0; i < yearsTill; i++) {
    noOfCasesArray.push(json.deathNoOfCasesArray[i])
    noOfCasesArray.push(json.injuryNoOfCasesArray[i])
  }

  wl = '-'
  noOfCases = '0'
  comp = '0'
  remarks = '-'

  yearArray = [
    '2000-01',
    '2001-02',
    '2002-03',
    '2003-04',
    '2004-05',
    '2005-06',
    '2006-07',
    '2007-08',
    '2008-09',
    '2009-10',
    '2010-11',
    '2011-12',
    '2012-13',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
    '2020-21'
  ]
  caseTypeArray = ['human death', 'human injury']
  // caseTypeArray = ["human kill", "permanent injury", "temporary injury"];

  // columnValues = [
  //     FD_SR_NO,
  //     incSrNo,-//1-40
  //     STATE,
  //     DIST,
  //     FD,
  //     RANGE,
  //     yearArray,-// 2000-01 till 2019-20
  //     caseTypeArray,-// human death / human injury
  //     wl,
  //     noOfCases,-// --------
  //     comp,
  //     remarks];

  //str = "";
  strXls = ''
  sr = 0
  iCases = 0
  dCases = 0
  iComp = 0
  dComp = 0
  for (i = 0; i < yearsTill * 2; i++) {
    for (j = 0; j < noOfCasesArray[i].length; j++) {
      sr++
      noOfCases = noOfCasesArray[i][j][0]
      wl = !noOfCases
        ? '0'
        : noOfCasesArray[i][j][1]
        ? noOfCasesArray[i][j][1]
        : ''
      comp = Number(!noOfCases ? '0' : noOfCasesArray[i][j][2]) * 100000
      //comp = noOfCasesArray[i][j][2]
      // ? noOfCasesArray[i][j][2]
      // : ''
      remarks = !noOfCasesArray[i][j][3] ? '-' : noOfCasesArray[i][j][3] // ? noOfCasesArray[i][j][3] : "-";
      if (i % 2) {
        iCases += Number(noOfCases)
        iComp += Number(comp)
      } else {
        dCases += Number(noOfCases)
        dComp += Number(comp)
      }
      // totalComp += Number(comp)
      // totalCases += Number(noOfCases)
      //        str += `${FD_SR_NO}\t${i + 1}\t${STATE}\t${DIST}\t${FD}\t${RANGE}\t${yearArray[i % 2 ? (i - 1) / 2 : (i) / 2]}\t${caseTypeArray[i % 2]}\t${wl}\t${noOfCasesArray[i][j]}\t${comp}\t${remarks}\n`;
      // ${FD_SR_NO},
      strXls += `${FD_SR_NO ? FD_SR_NO + ',' : ''}${
        i + 1
      },${STATE},${DIST},${FD},${RANGE},${
        yearArray[i % 2 ? (i - 1) / 2 : i / 2]
      },${caseTypeArray[i % 2]},${wl},${noOfCases},${comp},${remarks}
`
    }
  }

  console.log(strXls)
  // console.log(sr)
  //             totals = `Total Death Cases: ${dCases}, Total Dealth Comp: ${dComp};
  // Total Injury Cases: ${iCases}, Total Injury Comp: ${iComp}
  // Total All Cases: ${iCases + dCases}, Total All Comp: ${iComp + dComp}`;
  totals = `Total Cases: ${iCases + dCases} (${dCases} + ${iCases})
Total Compensation: ${iComp + dComp} (${dComp} + ${iComp})`

  console.log(totals)
  // console.log(``)
  // console.log(``)
  document.querySelector('#showTotal').innerText = totals
  showCSV(strXls, downloadExcel)

  if (downloadExcel) {
    downloadCsvAsExcel(strXls, document.querySelector('#fdName').value)
  }
}

function showCSV (csv, downloadExcel) {
  document.querySelector('#csvDisplay').style.display = 'block'
  document.querySelector('#myTextarea').textContent = csv
  if (!downloadExcel) {
    copyToClipboard()
  }
}

function copyToClipboard () {
  /* Get the text area element */
  const textarea = document.getElementById('myTextarea')

  /* Select the text in the text area */
  textarea.select()

  /* Copy the selected text to the clipboard */
  document.execCommand('copy')

  /* Alert the user */
  alert('CSV content copied to clipboard!')
}

//   function convertToExcel(csv) {}
function downloadCsvAsExcel (csv, filename) {
  const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

  // Create a link element to download the Excel file
  const link = document.createElement('a')
  link.href = URL.createObjectURL(csvData)
  link.setAttribute('download', filename + '.xls')
  document.body.appendChild(link)

  // Click the link to download the Excel file
  link.click()

  // Remove the link from the DOM
  document.body.removeChild(link)
}

function show21Changed () {
  const ch = document.querySelector('#show21').checked
  document.querySelector('#year2021').style.opacity = ch ? 1 : 0.1
}

// document.querySelector('#fdSrNoBlock').style.display = 'none'
// ch = true
ch = false
document.querySelector('#show21').checked = ch
document.querySelector('#year2021').style.opacity = ch ? 1 : 0.1
