# Add data into mockAPI

## Step 1: Create a new file and make a function component 

## Step 2: Declare a useState in function and intianlize with {} brackets, Declare a useNavigate.

```
const navigate = useNavigate();
const [data, setData] = useState({ FacultyName: "" });
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
      <input type="button" value="Add Faculty" onClick={sendData} />
```
## Step 3: Make a function senData with API call.
```
  function sendData(){
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      navigate('/');
    })
  }
```
## Step 3: Index.js file Routing.
```
      <BrowserRouter>
        <Link to={'/Add'}></Link>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path="/:id" element={<FacById />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </BrowserRouter>
```
