# Perform Create, Read, Update and Delete on Mock API

**Prerequisite**: GetAll places display with card view 

## Step 1: Create a new file and make a function component 

## Step 2: Declare a useState in function and intianlize with {} brackets, Declare a useParams.

```
const [data, setData] = useState({});
const params = useParams();
```
## Step 3: Declare a useEffect and write a fetch request in it.
```
useEffect(() => {
  fetch()
  .then()
  .then()
}) 
```
## Step 4: Add API URL and append params.FacultyID
```
useEffect(() => {
  fetch("API URL" + params.ID)
  .then((res) => {
    return res.json();
  }) 
  .then((res) => {
    setData(res);
  }) 
},[]) 
```
## Step 5: Return the data in function 
## Step 6: Go to GetAll function and declare useNavigate 
```
const navigate = useNavigate()
```
## Step 6: Then navigate to Faculty by ID page using navigate
```
<a href="#" onClick={() => { navigate("/" + ele.id) }}>Go somewhere</a> 
```







