const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        },
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function get_median_of_first_week_expenses(expenses){
const firstWeekMonthExpenses = {};
const medianFirstWeekMonth = {};

for (const month in expenses){    
    if (Object.keys(expenses[month]).length === 0) {
        firstWeekMonthExpenses[`${month}`] = `Brak danych!`;
    }     
    for (const day in expenses[month]){
        const dayStat = day;
        const date = `${month}-${day}`;
        const dateConvert = new Date(`${month}-${day}`);
        const dayOfWeek = dateConvert.getDay();
        const monthOfYear = dateConvert.getMonth();

        if (dayOfWeek === 0 && day <= 7){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 1 && day == 1){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 2 && day <= 2){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 3 && day <= 3){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 4 && day <= 4){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 5 && day <= 5){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else if (dayOfWeek === 6 && day <= 6){
            firstWeekMonthExpenses[`${month}`] = `${Object.values(expenses[month][day])}`;
        } else {firstWeekMonthExpenses[`${date}`] = `Dzień poza zakresem analizy!`;
        }
    }    
}

for (const exp in firstWeekMonthExpenses){
    if (firstWeekMonthExpenses[exp] !== "Dzień poza zakresem analizy!" && firstWeekMonthExpenses[exp] !== "Brak danych!"){
        const split = firstWeekMonthExpenses[exp].split(",").filter(Boolean).slice().sort((a, b) => a - b);;
        const mid = Math.floor(split.length / 2);
        firstWeekMonthExpenses[exp] = split;


    if (split.length % 2 === 0) {
    medianFirstWeekMonth[`${exp}`] = ((Number(split[mid - 1]) + Number(split[mid])) / 2).toString();
    } else {
     medianFirstWeekMonth[`${exp}`] = split[mid];
    }
        } else if (firstWeekMonthExpenses[exp] === "Brak danych!"){
            medianFirstWeekMonth[`${exp}`] = "Brak danych!";
        }
    
}

console.log(firstWeekMonthExpenses);
console.log(medianFirstWeekMonth);

}

get_median_of_first_week_expenses(expenses);

