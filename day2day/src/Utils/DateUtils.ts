const dayOfTheWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday']

interface DayProps {
	dayNumber: number,
	dayName : string
}

export const getDayName = (dayNumber: number) => {
	switch (dayNumber){
		case 0:
			return 'Sunday'
		case 1:
			return 'Monday'
		case 2:
			return 'Tuesday'
		case 3:
			return 'Wednesday'
		case 4:
			return 'Thursday'
		case 5:
			return 'Friday'
		case 6:
			return 'Saturday'
	}
}
export const getMonthName = () => {
	const newDate = new Date();
	const month = newDate.getMonth();
	switch (month){
		case 0:
			return 'January'
		case 1:
			return 'February'
		case 2:
			return 'March'
		case 3:
			return 'April'
		case 4:
			return 'May'
		case 5:
			return 'June'
		case 6:
			return 'July'
		case 7:
			return 'August'
		case 8:
			return 'September'
		case 9:
			return 'October'
		case 10:
			return 'November'
		case 11:
			return 'December'
	}
}

export const howManyDaysInMonth = (month: number): number => {
	switch (month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31
		case 4:
		case 6:
		case 9:
		case 11:
			return 30
		case 2:
			const year = new Date().getFullYear();
			if(year % 400 === 0 || year % 100 !== 0 && year % 4 === 0){
				return 29
			} else {
				return 28
			}
		default:
			return 0

	}
}

export const getFirstOfMonth = () => {
	const todaysDate = new Date();
	const currentMonth = new Date().getMonth() + 1;
	const numberOfDays = howManyDaysInMonth(currentMonth);
	todaysDate.setDate(1);
	let firstDay = todaysDate.toLocaleString(undefined, { weekday: 'long' })
	console.log(firstDay)
	let dateNumbersToDisplay: number[] = [];
	if (numberOfDays === 31){
		dateNumbersToDisplay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
	} else if(numberOfDays === 30) {
		dateNumbersToDisplay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
	} else if(numberOfDays === 29){
		dateNumbersToDisplay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
	} else if(numberOfDays === 28){
		dateNumbersToDisplay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
	}

	const previousMonthDays = getDaysToDisplayFromLastMonth(firstDay)
	const nextMonthDays = getDaysToDisplayFromNextMonth();
	const allDaysToDisplay = [...previousMonthDays, ...dateNumbersToDisplay, ...nextMonthDays]
	return allDaysToDisplay;
}

const getDaysToDisplayFromLastMonth = (firstDay: string): number[]  => {

	const currentMonth = new Date().getMonth()
	let previousMonth = 0
	if(currentMonth !== 1){
		previousMonth = currentMonth - 1;
	} else {
		previousMonth = 12;
	}
	let numberOfDaysPreviousMonth: number = howManyDaysInMonth(previousMonth)

	switch (firstDay){
		case "Sunday":
			return [];
		case "Monday":
			if(numberOfDaysPreviousMonth === 31){
				return [31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [28];
			} else {
				return [0]
			}
		case "Tuesday":
			if(numberOfDaysPreviousMonth === 31){
				return [30, 31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [29, 30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [28, 29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [27, 28];
			} else {
				return [0]
			}
		case "Wednesday":
			if(numberOfDaysPreviousMonth === 31){
				return [29, 30, 31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [28, 29, 30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [27, 28, 29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [26, 27, 28];
			} else {
				return [0]
			}
		case "Thursday":
			if(numberOfDaysPreviousMonth === 31){
				return [28,29, 30, 31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [27,28, 29, 30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [26,27, 28, 29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [25, 26, 27, 28];
			} else {
				return [0]
			}
		case "Friday":
			if(numberOfDaysPreviousMonth === 31){
				return [27,28,29, 30, 31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [26, 27,28, 29, 30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [25,26,27, 28, 29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [24, 25, 26, 27, 28];
			} else {
				return [0]
			}
		case "Saturday":
			if(numberOfDaysPreviousMonth === 31){
				return [26, 27,28,29, 30, 31];
			} else if(numberOfDaysPreviousMonth === 30){
				return [25, 26, 27,28, 29, 30]
			} else if(numberOfDaysPreviousMonth === 29){
				return [24, 25,26,27, 28, 29]
			} else if (numberOfDaysPreviousMonth === 28){
				return [23, 24, 25, 26, 27, 28];
			} else {
				return [0]
			}
		default:
			return [1000]
	}
}

const getDaysToDisplayFromNextMonth = () => {
	const month = new Date().getMonth();
	const year: number  = new Date().getFullYear()
	const lastDateOfMonth = new Date(year,month + 1, 0);
	const lastDayOfMonthNumber = lastDateOfMonth.getDay();
	const lastDayOfMonthName = getDayName(lastDayOfMonthNumber);

	switch (lastDayOfMonthName){
		case "Sunday":
			return [1,2,3,4,5,6];
		case "Monday":
			return [1, 2, 3, 4, 5]
		case "Tuesday":
			return [1, 2, 3, 4]
		case "Wednesday":
			return [1, 2, 3]
		case "Thursday":
			return [1, 2]
		case "Friday":
			return [1]
		case "Saturday":
			return []
		default:
			return [1000]
	}
}

