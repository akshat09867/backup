import React,{useState} from 'react'
import '../css/Header.css'
 const Employee =()=>{
    const [data, setData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        address:'',
        jobtitle:'',
        salary:''
      });
      const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
    
          const bookingData = {
            ...data,
            };
        try {
          const response = await fetch('/employee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
          });
    
          if (!response.ok) {
            throw new Error('Booking failed. Please try again.');
          }
    
          await response.json();
          setData({
            firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            gender: '',
            phone: '',
            email: '',
            address:'',
            jobtitle:'',
            salary:''
          });
          alert('Added successfully!');
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
    return(
        <>
          <form onSubmit={handleSubmit} className="space">
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">First Name: </label>
            <input
              type="text"
              name="firstName"
              className="w-full p-2 border rounded"
              placeholder="First Name"
              onChange={handleChange}
              value={data.firstName}
              required
            />
          </div>
          <br />
          <div className="space-y-2">
            <label className="block text-sm font-medium">Middle Name: </label>
            <input
              type="text"
              name="middleName"
              className="w-full p-2 border rounded"
              placeholder="Middle Name"
              onChange={handleChange}
              value={data.middleName}
            />
          </div>
          <br />
          <div className="space-y-2">
            <label className="block text-sm font-medium">Last Name: </label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 border rounded"
              placeholder="Last Name"
              onChange={handleChange}
              value={data.lastName}
              required
            />
          </div>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Date of Birth: </label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={data.dob}
              required
            />
          </div>
          <br />
          <div className="space-y-2">
            <label className="block text-sm font-medium">Gender: </label>
            <select
              name="gender"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={data.gender}
              required
            >
              <option value="">Select Gender: </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="X">Other</option>
            </select>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded"
              placeholder="Phone Number"
              onChange={handleChange}
              value={data.phone}
              required
            />
          </div>
          <br />
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email: </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>
        </div>
        <br />
        <div className="space-y-2">
          <label className="block text-sm font-medium">Address: </label>
          <input
            type="text"
            name="identityProof"
            className="w-full p-2 border rounded"
            placeholder="Aadhar Number"
            onChange={handleChange}
            value={data.address}
            required
          />
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
          <label className="block text-sm font-medium">Jobs: </label>
          <select
              name="tier"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={data.jobtitle}
              required
            > <br />
              <option value="">Job Title: </option>
              <option value="Gold">Hotel Manager</option>
              <option value="Delux">Assistant Hotel Manager</option>
              <option value="Executive">Room Attendent</option>
              <option value="Standard">House Keeper</option>
              <option value="Standard"> Receptionist</option>
              <option value="Standard">Server</option>
              <option value="Standard">Chef</option>
            </select>
          </div>
          <br />
          <div className="space-y-2">
            <label className="block text-sm font-medium">Salary: </label>
            <input
              type="text"
              name="checkout"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={data.salary}
              required
            />
          </div>
        </div>
        <br />
 <br /> 
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit Booking'}
        </button>
      </form>
        </>
    )
}
export default Employee