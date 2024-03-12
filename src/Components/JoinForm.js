import '../Styles/JoinForm.css';

const JoinForm = () => {
  const submitted = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = document.getElementById('name');
    const regNo = document.getElementById('reg_no');
    const vitEmail = document.getElementById('vit_email');
    const phoneNo = document.getElementById('phone_no');
    const degree = document.getElementById('degree');
    const branch = document.getElementById('branch');
    const batch = document.getElementById('batch');
    const department = document.getElementById('department');

    regNo.value = regNo.value.toUpperCase();

    if (!/^[A-Za-z ]+$/.test(name.value)) {
      name.setCustomValidity('Invalid name');
    } else {
      name.setCustomValidity('');
    }
    if (!/^(1|2)[0-9](B)[A-Z]{2}[0-9]{4}$/.test(regNo.value)) {
      regNo.setCustomValidity('Invalid register number');
    } else {
      regNo.setCustomValidity('');
    }

    if (
      !/^[A-Za-z]+\.[A-Za-z]+(20)(1|2)[0-9](@vitstudent\.ac\.in)$/.test(
        vitEmail.value
      )
    ) {
      vitEmail.setCustomValidity('Invalid email');
    } else {
      vitEmail.setCustomValidity('');
    }

    if (!/^[0-9]{10}$/.test(phoneNo.value)) {
      phoneNo.setCustomValidity('Invalid mobile number');
    } else {
      phoneNo.setCustomValidity('');
    }

    if (!/^[A-Za-z. ]+$/.test(degree.value)) {
      degree.setCustomValidity('Invalid degree');
    } else {
      degree.setCustomValidity('');
    }

    if (!/^[A-Za-z]+/.test(branch.value)) {
      branch.setCustomValidity('Invalid branch');
    } else {
      branch.setCustomValidity('');
    }

    if (!/^(20)(1|2)[0-9]$/.test(batch.value)) {
      batch.setCustomValidity('Invalid batch');
    } else {
      batch.setCustomValidity('');
    }

    if (department.value === '') {
      department.setCustomValidity('Department not selected');
    } else {
      department.setCustomValidity('');
    }

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    }
  };
  return (
    <>
      <div className="box">
        <div className="blur">
          <h2 className="recruitment-heading">Recruitment Form</h2>
          <p className="recruitment-content">
            Fill this form to apply to our club! We will get back to you after
            looking through your application via email or call!
          </p>
          <form className="needs-validation" onSubmit={submitted} noValidate>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label" for="name">
                  Name:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <div className="invalid-feedback">
                  Name should only consist of letters (a-z) and spaces
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="reg_no">
                  Registration No:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="reg_no"
                  name="reg_no"
                  placeholder="Registration Number"
                  required
                />
                <div className="invalid-feedback">
                  Enter a valid registration number
                  <br />
                  (Ex: 22BCE1221)
                </div>
              </div>
              <div className="mb-3 col-md-12">
                <label className="form-label" for="vit_email">
                  VIT Email:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="email"
                  id="vit_email"
                  name="vit_email"
                  placeholder="Email ID"
                  required
                />
                <div className="invalid-feedback">Invalid email id</div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="phone_no">
                  Phone No:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="tel"
                  id="phone_no"
                  name="phone_no"
                  placeholder="Phone number"
                  required
                />
                <div className="invalid-feedback">Invalid phone number</div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="degree">
                  Degree:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="Degree"
                  required
                />
                <div className="invalid-feedback">
                  Degree should only consist of letters, spaces and dot (.)
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="branch">
                  Branch:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder="Branch"
                  required
                />
                <div className="invalid-feedback">
                  Branch name should only consist letters and spaces
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="batch">
                  Batch:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="batch"
                  name="batch"
                  placeholder="Batch"
                  required
                />
                <div className="invalid-feedback">
                  Batch should be a valid year after 2013
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label" for="cgpa">
                  CGPA:
                </label>
                <input
                  disabled
                  className="form-control"
                  type="number"
                  step="0.01"
                  id="cgpa"
                  name="cgpa"
                  min="0"
                  max="10"
                  required
                />
                <div className="invalid-feedback">
                  CGPA must be a valid number between 0-10
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label for="department" className="form-label">
                  Department:
                </label>
                <select
                  className="form-select"
                  id="department"
                  name="department"
                  required
                  disabled
                >
                  <option value="">Select A Department</option>
                  <option value="competitive_programming">
                    Competitive Programming
                  </option>
                  <option value="web_development">Web Development</option>
                  <option value="design_and_content">Design and Content</option>
                  <option value="marketing_and_outreach">
                    Marketing & Outreach
                  </option>
                  <option value="management">Management</option>
                  <option value="finance">Finance</option>
                </select>
                <div className="invalid-feedback">Select a department</div>
              </div>
              <div className="mb-3 col-sm-12">
                <label className="form-label" for="experience">
                  Relevant Experience:
                </label>
                <textarea
                  className="form-control"
                  id="experience"
                  name="experience"
                  rows="5"
                  disabled
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit" disabled>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="closed-thing alert alert-info">
        <h3>Sorry recruitments are currently closed :(</h3>
        <p>Follow our social media to get updates regarging recuritments</p>
      </div>
    </>
  );
};

export default JoinForm;
