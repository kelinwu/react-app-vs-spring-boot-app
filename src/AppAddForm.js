import React, { useState } from 'react'
import FlexDiv from './FlexDiv';

export const AppAddForm = ({ addACourse }) => {
    const [course, setCourse] = useState('')

    const handleAddCourse = (e) => {
        e.preventDefault();
        if (!course) return;

        const newCourse = {
            course
        }
        addACourse(newCourse)
        setCourse('')
    }

    return (
        <FlexDiv vert>
            <FlexDiv>
                <span style={{ color: 'white', fontSize: '1rem', textAlign: 'left' }}>
                    Use this form below to add a new course</span>
            </FlexDiv>
            <FlexDiv vert >
                <form onSubmit={handleAddCourse}>
                    <FlexDiv style={{ paddingBottom: '1rem', width:150 }}>
                        <input
                            style={{width:200}}
                            type="text"
                            name="course"
                            value={course}
                            placeholder="add new course"
                            onChange={(e) => setCourse(e.target.value)}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <button
                            style={{background: 'green', color: 'yellow', padding: '0.3rem', width:'6rem'}}
                            disabled={!course}
                        >
                            Submit</button>
                    </FlexDiv>
                </form>
            </FlexDiv>
        </FlexDiv>
    )
}

export default AppAddForm
