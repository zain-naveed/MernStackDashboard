import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
// import 'react-nice-dates/build/style.css';
import {Card} from 'react-bootstrap';
function Calen() {
  const [date, setDate] = useState()
  return (
    <Card>
      {/* <p>
        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p> */}
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </Card>
  )
}
export default Calen;