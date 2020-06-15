import React from 'react'
import FlexDiv from './FlexDiv'
import AppStudent from './AppStudent'
import { axisRight, bisectRight } from 'd3'

const AppCourse = ({ course, index, students, addStudent2Course,clickedCourse,toggle }) => {

    return (
        <>
            {course.course && (
                <FlexDiv vert style={{
                    background: '#2a92e2',
                    padding: '.4rem',
                    marginBottom: '1rem',
                    color: 'white'
                }}>
                    <FlexDiv container key={index}>
                        <FlexDiv size={1}>
                           {index} - {course.course}
                        </FlexDiv>
                        <FlexDiv size={1} style={{ marginLeft: '25rem' }}>
                            {'   '}
                            <button style={{height:16, width:38}} onClick={clickedCourse}><i class="fa fa-toggle-on"></i></button>
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv 
                        vert
                        style={{ paddingTop: '1rem', 
                                 background: '#4dabf1',
                                 display: `${toggle}` ,
                                 radium: '1rem' }}
                        >
                        <FlexDiv container>
                            <FlexDiv size={1}>
                                <h5>Add Student to Above Course: {'  '}</h5>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv container>
                            {students.map((student, index) => (
                                <AppStudent
                                    key={index}
                                    index={index}
                                    student={student}
                                    course={course.course}
                                    addStudent2Course={addStudent2Course}
                                />
                            ))}
                        </FlexDiv>
                    </FlexDiv>
                </FlexDiv>
            )
            }
        </>
    )
}

export default AppCourse