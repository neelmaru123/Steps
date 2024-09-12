# Edit data into mockAPI

## Step 1: Create a new file and make a function component 

## Step 2: Declare a useState in function and intianlize with {} brackets, Declare a useNavigate and useParams.

```
const {id} = useParams();
const navigate = useNavigate();
const [data, setData] = useState({});
```

## Step 3: Add 3 input box.

```
      <label>Faculty Name</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyName: e.target.value });
      }} />
      <br />

      <label>Faculty Image</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyImage: e.target.value });
      }} />
      <br />

      <label>Faculty Experience</label> <br />
      <input type="text" onChange={(e) => {
        setData({ ...data, FacultyExp: e.target.value });
      }} />
      <br />
      <input type="button" value="Add Faculty" onClick={editData} />
```
## Step 3: Make a function edit  Data with API call.
```
    function editData(){
      fetch("API URL"+ id,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(()=>{
        navigate('/');
      })
    }
```
