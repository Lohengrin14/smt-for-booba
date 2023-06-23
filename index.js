const mainInput = document.querySelector('.main_input')
const namesOutput = document.querySelector('.names_output')
const timesOutput = document.querySelector('.times_output')

function tranformData(inputData) {
    const sigleDividedData = inputData.replaceAll('  ', '')
    // now lets make an Array ['name', 'surname', 'date1', date2', 'name'...]
    const dataArray = sigleDividedData.split(' ')
    const resultArray = [];
    const namesArray = [];
    const timesArray = [];

    function tranformTime(fristTime, secondTime) {
        const HOURS = 'h'
        const MINUTES = 'm'
        const SECONDS = 's'
        const result = ['00', '00', '00']


        if( fristTime.includes(HOURS) ) {
            const convertedTime = Number(fristTime.replace(HOURS, ''))
            if(convertedTime >= 10) {
                result[0] = convertedTime
            }
            if (convertedTime < 10) {
                result[0] = `0${convertedTime}`
            }    
        }

        if( fristTime.includes(MINUTES) ) {
            const convertedTime = Number(fristTime.replace(MINUTES, ''))
            if(convertedTime >= 10) {
                result[1] = convertedTime
            }
            if (convertedTime < 10) {
                result[1] = `0${convertedTime}`
            }    
        }

        if( secondTime.includes(MINUTES) ) {
            const convertedTime = Number(secondTime.replace(MINUTES, ''))
            if(convertedTime >= 10) {
                result[1] = convertedTime
            }
            if (convertedTime < 10) {
                result[1] = `0${convertedTime}`
            }    
        }

        if( secondTime.includes(SECONDS) ) {
            const convertedTime = Number(secondTime.replace(SECONDS, ''))
            if(convertedTime >= 10) {
                result[2] = convertedTime
            }
            if (convertedTime < 10) {
                result[2] = `0${convertedTime}`
            }    
        }

        return result.join(':')
    }
    let j = 0;
    for(let i = 0; i < dataArray.length; i = i + 4) {
        resultArray[j] = `${dataArray[i]} ${dataArray[i + 1]}`
        resultArray[j + 1] = `${tranformTime(dataArray[i + 2], dataArray[i + 3])}`
        namesArray[j] = `${dataArray[i]} ${dataArray[i + 1]}`
        timesArray[j] = `${tranformTime(dataArray[i + 2], dataArray[i + 3])}`
        j += 2;
    }
    console.log(resultArray)
    namesOutput.value = namesArray.join('\n')
    timesOutput.value = timesArray.join('\n')


}

mainInput.addEventListener('change', (event) => tranformData(event.target.value))

