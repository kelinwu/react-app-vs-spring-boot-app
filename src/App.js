import React from 'react';
import styled from 'styled-components'
import FlexDiv from './FlexDiv'
import AppAddForm from "./AppAddForm";
import AppCourse from './AppCourse';
import BarChart from './customD3BarChart'

const initalState = {
  courses: [],
  students: ['harvey1', 'harvey2', 'harvey3', 'harvey4', 'harvey5']
}

let filtered = []

function App() {

  const [courses, setCourses] = React.useState(initalState.courses)
  const [ toggle, setToggle] = React.useState('none')
  const [students] = React.useState(initalState.students)

  const addACourse = anewcourse => {
    const { course } = anewcourse
    const newCourse = {
      course,
      students: [],
      enrolled: 0
    }
    const _courses = [
      ...courses, newCourse
    ]
    setCourses(_courses)
  }

  const clickedCourse = () => {
    console.log(toggle)
    if(toggle==='none') {
      setToggle('block')
    } else {
      setToggle('none')
    }
  }

  const addStudent2Course = e => {
    e.preventDefault()
    const anewStudent = e.target.value
    const course = anewStudent.split('-')[0]
    const student = anewStudent.split('-')[1]

    const newCourses = [
      ...courses,
      courses.map(c => {
        if (c.course === course) {
          c.students.push(student)
          c.enrolled = c.students.length
        }
      })
    ]
    const _nw = []
    newCourses.map(nc => {
      if(nc.course !== undefined) {
        _nw.push(nc)
      }
    })
    console.log(newCourses)
    console.log(_nw)
    setCourses(_nw)
  }

  return (
    <div className="App" style={{ background: '#2a92e2', height: '100vh', padding: 20 }}>
      <FlexDiv container justify="center">
        {courses.length > 0 && (
          <BarChart data={courses} />
        )}
      </FlexDiv>
      <FlexDiv container style={{ background: '#267bbe', padding: 13, color: 'white' }}>
        <FlexDiv size={1}>
          Add Course
          </FlexDiv>
        <FlexDiv size={1}>
          Course List
          </FlexDiv>
      </FlexDiv>
      <FlexDiv container style={{ padding: '2rem', background: '#4dabf1' }}>
        <div style={{width: 300}}>
          <AppAddForm addACourse={addACourse} />
        </div>
        <FlexDiv>
          <FlexDiv vert>
            {courses.map((course, index) => (
              <AppCourse
                key={index}
                index={index}
                course={course}
                students={students}
                clickedCourse={clickedCourse}
                toggle={toggle}
                addStudent2Course={addStudent2Course}
              />
            ))}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>

    </div>
  );
}

export default App;
