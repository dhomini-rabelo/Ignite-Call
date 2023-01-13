export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((dayNumber) =>
      formatter.format(new Date(Date.UTC(2021, 5, dayNumber))),
    )
    .map((dayName) => dayName[0].toUpperCase() + dayName.slice(1))
}

export function convertTimeStringInMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}
