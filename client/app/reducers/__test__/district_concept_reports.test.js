import district_concept_reports from 'reducers/district_concept_reports';

describe('DistrictConceptReports reducer', () => {

  it('has initial state', () => {
    expect(district_concept_reports()).toEqual({
      loading: true,
      errors: false,
      selectedClassroom: 'All Classrooms',
      selectedSchool: 'All Schools',
      selectedTeacher: 'All Teachers',
      conceptReportsData: [],
      classroomsData: [],
    });
  });

  it('updates the store with SWITCH_SCHOOL', () => {
    const state = {
      selectedClassroom: 'Schoooool',
      selectedSchool: 'All Schools',
      selectedTeacher: 'Mr Guy',
    }

    const action = {
      type: 'SWITCH_SCHOOL',
      school: 'Rude School',
    }

    expect(district_concept_reports(state, action)).toEqual({
      selectedClassroom: 'All Classrooms',
      selectedSchool: 'Rude School',
      selectedTeacher: 'All Teachers',
    })
  });

  it('updates the store with SWITCH_TEACHER', () => {
    const state = {
      selectedClassroom: 'Schoooool',
      selectedSchool: 'Coolio U',
      selectedTeacher: 'Mr Guy',
    }

    const action = {
      type: 'SWITCH_TEACHER',
      teacher: 'Mr Buttz',
    }

    expect(district_concept_reports(state, action)).toEqual({
      selectedClassroom: 'All Classrooms',
      selectedSchool: 'Coolio U',
      selectedTeacher: 'Mr Buttz',
    })
  });

  it('updates the store with SWITCH_CLASSROOM', () => {
    const state = {
      selectedClassroom: 'Schoooool',
      selectedSchool: 'Coolio U',
      selectedTeacher: 'Mr Guy',
    }

    const action = {
      type: 'SWITCH_CLASSROOM',
      classroom: 'Roflcopter 2005',
    }

    expect(district_concept_reports(state, action)).toEqual({
      selectedClassroom: 'Roflcopter 2005',
      selectedSchool: 'Coolio U',
      selectedTeacher: 'Mr Guy',
    })
  });
});
