import React from 'react'
import FlexDiv from './components/styles/FlexDiv'

const AppStudent = ({ student, index, course, addStudent2Course }) => {
    const newValue = `${course}-${student}`
    return (
        <FlexDiv key={index}>
            
            <input
                type="checkbox"
                value={newValue}
                onChange={addStudent2Course}
            >
            </input>
            {student}
        </FlexDiv>
    )
}

export default AppStudent
