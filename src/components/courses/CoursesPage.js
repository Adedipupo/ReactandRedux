import React from "react";

class CoursesPage extends React.Component {
    state = {
      course: {
        title: "",
      }
  }
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }
  handleSubmit= (e) => { 
    e.preventDefault();
    alert("ffff");
   }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
